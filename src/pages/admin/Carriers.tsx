import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, Plus, Eye, Edit, Trash2, TrendingUp, TrendingDown } from 'lucide-react';
import { adminApi } from '@/data/adminApi';
import type { Carrier } from '@/types/admin';

export default function AdminCarriers() {
  const [carriers, setCarriers] = useState<Carrier[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    loadCarriers();
  }, []);

  const loadCarriers = async () => {
    try {
      setLoading(true);
      const data = await adminApi.getCarriers();
      setCarriers(data);
    } catch (error) {
      console.error('Failed to load carriers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCarriers = carriers.filter(carrier => {
    const matchesSearch = carrier.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || carrier.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || carrier.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusBadge = (status: Carrier['status']) => {
    const statusConfig = {
      active: { label: 'Active', variant: 'default' as const },
      inactive: { label: 'Inactive', variant: 'secondary' as const },
    };
    const config = statusConfig[status];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getTypeBadge = (type: Carrier['type']) => {
    const typeConfig = {
      LTL: { label: 'LTL', variant: 'outline' as const },
      FTL: { label: 'FTL', variant: 'outline' as const },
      Express: { label: 'Express', variant: 'outline' as const },
    };
    const config = typeConfig[type];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatDays = (days: number) => {
    return `${days} days`;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Carriers</h1>
        <p className="text-muted-foreground">Manage carrier partnerships and performance</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Carrier Management</CardTitle>
          <CardDescription>
            Monitor carrier performance, on-time rates, and service coverage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search carriers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-80"
                />
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="LTL">LTL</SelectItem>
                  <SelectItem value="FTL">FTL</SelectItem>
                  <SelectItem value="Express">Express</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Carrier</span>
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading carriers...</div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Carrier</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>On-Time Rate</TableHead>
                    <TableHead>Damage Rate</TableHead>
                    <TableHead>Avg Transit Time</TableHead>
                    <TableHead>Total Shipments</TableHead>
                    <TableHead>Last Used</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCarriers.map((carrier) => (
                    <TableRow key={carrier.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{carrier.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {carrier.lanesCovered.length} lanes covered
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getTypeBadge(carrier.type)}</TableCell>
                      <TableCell>{getStatusBadge(carrier.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress value={carrier.onTimeRate} className="w-16 h-2" />
                          <span className="text-sm font-medium">{carrier.onTimeRate}%</span>
                          {carrier.onTimeRate >= 95 ? (
                            <TrendingUp className="h-3 w-3 text-green-500" />
                          ) : carrier.onTimeRate < 85 ? (
                            <TrendingDown className="h-3 w-3 text-red-500" />
                          ) : null}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress 
                            value={100 - carrier.damageRate} 
                            className="w-16 h-2" 
                          />
                          <span className="text-sm">{carrier.damageRate}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{formatDays(carrier.avgTransitTime)}</TableCell>
                      <TableCell>{carrier.totalShipments.toLocaleString()}</TableCell>
                      <TableCell>{formatDate(carrier.lastUsed)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}