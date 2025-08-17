import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { adminApi } from '@/data/adminApi';
import { Shipment } from '@/types/admin';
import { Search, Filter, Download, Trash2, Eye, Calendar, ArrowUpDown } from 'lucide-react';
import { ConfirmDialog } from '@/components/admin/shared/ConfirmDialog';
import { DateRangePicker } from '@/components/admin/shared/DateRangePicker';
import { DateRange } from 'react-day-picker';

const statusColors = {
  'new': 'bg-gray-500 text-white',
  'quoted': 'bg-blue-500 text-white',
  'booked': 'bg-yellow-600 text-white',
  'in-transit': 'bg-orange-500 text-white',
  'out-for-delivery': 'bg-purple-500 text-white',
  'delivered': 'bg-green-500 text-white',
  'exception': 'bg-red-500 text-white'
};

export default function Shipments() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [carrierFilter, setCarrierFilter] = useState<string>('all');
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [selectedShipments, setSelectedShipments] = useState<Set<string>>(new Set());
  const [sortConfig, setSortConfig] = useState<{ key: keyof Shipment; direction: 'asc' | 'desc' } | null>(null);

  useEffect(() => {
    const loadShipments = async () => {
      try {
        const data = await adminApi.getShipments();
        setShipments(data);
      } catch (error) {
        console.error('Failed to load shipments:', error);
      } finally {
        setLoading(false);
      }
    };

    loadShipments();
  }, []);

  const filteredShipments = shipments
    .filter(shipment => {
      const matchesSearch = 
        shipment.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shipment.customerName.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || shipment.status === statusFilter;
      const matchesCarrier = carrierFilter === 'all' || shipment.carrier === carrierFilter;
      
      let matchesDateRange = true;
      if (dateRange?.from && dateRange?.to) {
        const shipmentDate = new Date(shipment.createdAt);
        matchesDateRange = shipmentDate >= dateRange.from && shipmentDate <= dateRange.to;
      }

      return matchesSearch && matchesStatus && matchesCarrier && matchesDateRange;
    })
    .sort((a, b) => {
      if (!sortConfig) return 0;
      
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

  const uniqueCarriers = Array.from(new Set(shipments.map(s => s.carrier).filter(Boolean)));

  const handleSort = (key: keyof Shipment) => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleSelectShipment = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedShipments);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedShipments(newSelected);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedShipments(new Set(filteredShipments.map(s => s.id)));
    } else {
      setSelectedShipments(new Set());
    }
  };

  const handleBulkDelete = async () => {
    for (const id of selectedShipments) {
      await adminApi.deleteShipment(id);
    }
    setShipments(prev => prev.filter(s => !selectedShipments.has(s.id)));
    setSelectedShipments(new Set());
  };

  const exportToCSV = () => {
    const csvData = filteredShipments.map(s => ({
      'Tracking Number': s.trackingNumber,
      'Customer': s.customerName,
      'Status': s.status,
      'Service': s.service,
      'Carrier': s.carrier || '',
      'Origin': `${s.origin.city}, ${s.origin.state}`,
      'Destination': `${s.destination.city}, ${s.destination.state}`,
      'Weight': s.weight,
      'Cost': s.cost,
      'Created': s.createdAt.toLocaleDateString()
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shipments-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="flex gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-32" />
          ))}
        </div>
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Shipments</h1>
          <p className="text-muted-foreground">
            Manage and track all shipments
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters & Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search shipments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64"
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="quoted">Quoted</SelectItem>
                <SelectItem value="booked">Booked</SelectItem>
                <SelectItem value="in-transit">In Transit</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="exception">Exception</SelectItem>
              </SelectContent>
            </Select>

            <Select value={carrierFilter} onValueChange={setCarrierFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Carrier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Carriers</SelectItem>
                {uniqueCarriers.map(carrier => (
                  <SelectItem key={carrier} value={carrier}>{carrier}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <DateRangePicker
              value={dateRange}
              onChange={setDateRange}
              placeholder="Date range"
              className="w-64"
            />

            <div className="flex gap-2 ml-auto">
              <Button variant="outline" onClick={exportToCSV}>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>

              {selectedShipments.size > 0 && (
                <ConfirmDialog
                  title="Delete Selected Shipments"
                  description={`Are you sure you want to delete ${selectedShipments.size} shipments? This action cannot be undone.`}
                  confirmText="Delete"
                  variant="destructive"
                  onConfirm={handleBulkDelete}
                >
                  <Button variant="destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete ({selectedShipments.size})
                  </Button>
                </ConfirmDialog>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedShipments.size === filteredShipments.length && filteredShipments.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => handleSort('trackingNumber')}
                >
                  <div className="flex items-center gap-1">
                    Tracking #
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort('customerName')} className="cursor-pointer hover:bg-muted/50">
                  <div className="flex items-center gap-1">
                    Customer
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Carrier</TableHead>
                <TableHead>Route</TableHead>
                <TableHead onClick={() => handleSort('weight')} className="cursor-pointer hover:bg-muted/50">
                  <div className="flex items-center gap-1">
                    Weight
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort('cost')} className="cursor-pointer hover:bg-muted/50">
                  <div className="flex items-center gap-1">
                    Cost
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort('createdAt')} className="cursor-pointer hover:bg-muted/50">
                  <div className="flex items-center gap-1">
                    Created
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredShipments.map((shipment) => (
                <TableRow key={shipment.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedShipments.has(shipment.id)}
                      onCheckedChange={(checked) => handleSelectShipment(shipment.id, checked as boolean)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{shipment.trackingNumber}</TableCell>
                  <TableCell>{shipment.customerName}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[shipment.status]}>
                      {shipment.status.replace('-', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{shipment.service}</Badge>
                  </TableCell>
                  <TableCell>{shipment.carrier || '-'}</TableCell>
                  <TableCell className="text-sm">
                    {shipment.origin.city}, {shipment.origin.state} →{' '}
                    {shipment.destination.city}, {shipment.destination.state}
                  </TableCell>
                  <TableCell>{shipment.weight} lbs</TableCell>
                  <TableCell>${shipment.cost.toLocaleString()}</TableCell>
                  <TableCell>{shipment.createdAt.toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredShipments.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No shipments found matching your criteria
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}