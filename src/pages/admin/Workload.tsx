import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { adminApi } from '@/data/adminApi';
import { Shipment } from '@/types/admin';
import { Search, Package, User, Calendar, DollarSign, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const statusColumns = [
  { key: 'new', label: 'New', color: 'bg-gray-500' },
  { key: 'quoted', label: 'Quoted', color: 'bg-blue-500' },
  { key: 'booked', label: 'Booked', color: 'bg-yellow-500' },
  { key: 'in-transit', label: 'In Transit', color: 'bg-orange-500' },
  { key: 'out-for-delivery', label: 'Out for Delivery', color: 'bg-purple-500' },
  { key: 'delivered', label: 'Delivered', color: 'bg-green-500' },
  { key: 'exception', label: 'Exception', color: 'bg-red-500' }
];

export default function Workload() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredShipments = shipments.filter(shipment =>
    shipment.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shipment.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedShipments = statusColumns.reduce((acc, column) => {
    acc[column.key] = filteredShipments.filter(s => s.status === column.key);
    return acc;
  }, {} as Record<string, Shipment[]>);

  const handleStatusChange = async (shipmentId: string, newStatus: string) => {
    try {
      await adminApi.updateShipment(shipmentId, { status: newStatus as any });
      setShipments(prev => prev.map(s => 
        s.id === shipmentId ? { ...s, status: newStatus as any } : s
      ));
    } catch (error) {
      console.error('Failed to update shipment status:', error);
    }
  };

  const ShipmentCard = ({ shipment }: { shipment: Shipment }) => (
    <Card className="mb-3 cursor-pointer hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="font-semibold text-sm">{shipment.trackingNumber}</div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {statusColumns.map(status => (
                <DropdownMenuItem 
                  key={status.key}
                  onClick={() => handleStatusChange(shipment.id, status.key)}
                >
                  Move to {status.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <User className="h-3 w-3" />
            {shipment.customerName}
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground">
            <Package className="h-3 w-3" />
            {shipment.service} • {shipment.weight} lbs
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {shipment.pickupDate.toLocaleDateString()}
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <DollarSign className="h-3 w-3" />
            ${shipment.cost.toLocaleString()}
          </div>

          {shipment.carrier && (
            <Badge variant="secondary" className="text-xs">
              {shipment.carrier}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid grid-cols-7 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-8 w-full" />
              {Array.from({ length: 3 }).map((_, j) => (
                <Skeleton key={j} className="h-24 w-full" />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workload</h1>
          <p className="text-muted-foreground">
            Manage shipments through their lifecycle
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search shipments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-7 gap-4 min-h-[600px]">
        {statusColumns.map((column) => {
          const columnShipments = groupedShipments[column.key] || [];
          
          return (
            <div key={column.key} className="flex flex-col">
              <Card className="mb-4">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${column.color}`} />
                      {column.label}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {columnShipments.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
              </Card>

              <div className="flex-1 space-y-3 overflow-y-auto">
                {columnShipments.map((shipment) => (
                  <ShipmentCard key={shipment.id} shipment={shipment} />
                ))}
                
                {columnShipments.length === 0 && (
                  <div className="text-center text-muted-foreground text-sm py-8">
                    No shipments
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}