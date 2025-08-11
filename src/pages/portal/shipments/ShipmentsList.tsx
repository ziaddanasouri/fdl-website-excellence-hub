
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { 
  Package, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  MapPin,
  Calendar,
  Plus,
  Truck,
  Clock,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  FileText,
  X
} from 'lucide-react';
import PortalLayout from '@/components/portal/PortalLayout';
import { Link } from 'react-router-dom';

const ShipmentsList = () => {
  // Enhanced shipment data with exception details
  const initialShipments = [
    {
      id: 'FDL-2024-001',
      status: 'delivered',
      origin: 'New York, NY',
      destination: 'Los Angeles, CA',
      createdDate: '2024-01-15',
      deliveredDate: '2024-01-18',
      packages: 2,
      weight: '15.5 lbs',
      cost: '$89.99',
      service: 'Express',
      trackingNumber: 'TRK123456789'
    },
    {
      id: 'FDL-2024-002',
      status: 'in-transit',
      origin: 'Chicago, IL',
      destination: 'Miami, FL',
      createdDate: '2024-01-16',
      estimatedDelivery: '2024-01-19',
      packages: 1,
      weight: '8.2 lbs',
      cost: '$45.99',
      service: 'Standard',
      trackingNumber: 'TRK123456790'
    },
    {
      id: 'FDL-2024-003',
      status: 'pending',
      origin: 'Seattle, WA',
      destination: 'Boston, MA',
      createdDate: '2024-01-17',
      estimatedDelivery: '2024-01-22',
      packages: 3,
      weight: '22.1 lbs',
      cost: '$125.99',
      service: 'Standard',
      trackingNumber: 'TRK123456791'
    },
    {
      id: 'FDL-2024-004',
      status: 'exception',
      origin: 'Denver, CO',
      destination: 'Phoenix, AZ',
      createdDate: '2024-01-16',
      packages: 1,
      weight: '5.5 lbs',
      cost: '$35.99',
      service: 'Standard',
      trackingNumber: 'TRK123456792',
      exceptionType: 'oversize',
      exceptionDetails: 'Package exceeds standard dimensions (36" x 24" x 12"). Additional handling charges apply.',
      additionalCharges: 45.00,
      resolutionOptions: [
        { id: 'accept_charges', label: 'Accept additional charges ($45.00)', description: 'Pay oversize handling fee and proceed with delivery' },
        { id: 'split_package', label: 'Split into multiple packages', description: 'Repack items into standard-sized packages (additional packaging fee: $15.00)' },
        { id: 'upgrade_freight', label: 'Upgrade to freight service', description: 'Transfer to freight network for large items (additional cost: $75.00)' }
      ]
    },
    {
      id: 'FDL-2024-005',
      status: 'exception',
      origin: 'Austin, TX',
      destination: 'Portland, OR',
      createdDate: '2024-01-17',
      packages: 2,
      weight: '12.3 lbs',
      cost: '$67.50',
      service: 'Express',
      trackingNumber: 'TRK123456793',
      exceptionType: 'address',
      exceptionDetails: 'Delivery address incomplete or incorrect. Unable to locate recipient.',
      additionalCharges: 0,
      resolutionOptions: [
        { id: 'correct_address', label: 'Provide corrected address', description: 'Update delivery address information' },
        { id: 'contact_recipient', label: 'Contact recipient for verification', description: 'Request recipient to confirm delivery details' },
        { id: 'return_sender', label: 'Return to sender', description: 'Return package to origin (return shipping fee: $25.00)' }
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [exceptionDialogOpen, setExceptionDialogOpen] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState<any>(null);
  const [shipmentData, setShipmentData] = useState(initialShipments);
  
  const { toast } = useToast();
  const form = useForm();

  const shipments = shipmentData;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in-transit':
        return <Truck className="h-4 w-4 text-blue-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'exception':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Delivered</Badge>;
      case 'in-transit':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Transit</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>;
      case 'exception':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Exception</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredShipments = shipments.filter(shipment => {
    const matchesSearch = shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shipment.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shipment.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || shipment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const exceptionShipments = shipments.filter(s => s.status === 'exception');

  const handleReviewExceptions = () => {
    if (exceptionShipments.length > 0) {
      setSelectedShipment(exceptionShipments[0]);
      setExceptionDialogOpen(true);
    }
  };

  const handleResolutionSubmit = (data: any) => {
    if (!selectedShipment) return;

    // Update shipment status to pending
    setShipmentData(prev => prev.map(shipment => 
      shipment.id === selectedShipment.id 
        ? { ...shipment, status: 'pending', resolutionSubmitted: new Date().toISOString() }
        : shipment
    ));

    // Close dialog and show success message
    setExceptionDialogOpen(false);
    setSelectedShipment(null);
    form.reset();

    toast({
      title: "Resolution Submitted",
      description: `Exception for shipment ${selectedShipment.id} has been submitted for review. Status updated to pending.`,
    });

    // Check if there are more exceptions to review
    const remainingExceptions = exceptionShipments.filter(s => s.id !== selectedShipment.id);
    if (remainingExceptions.length > 0) {
      setTimeout(() => {
        setSelectedShipment(remainingExceptions[0]);
        setExceptionDialogOpen(true);
      }, 1000);
    }
  };

  const getResolutionCost = (option: any, shipment: any) => {
    if (option.id === 'accept_charges') return shipment.additionalCharges || 0;
    if (option.id === 'split_package') return 15.00;
    if (option.id === 'upgrade_freight') return 75.00;
    if (option.id === 'return_sender') return 25.00;
    return 0;
  };

  const statusStats = {
    total: shipments.length,
    delivered: shipments.filter(s => s.status === 'delivered').length,
    inTransit: shipments.filter(s => s.status === 'in-transit').length,
    pending: shipments.filter(s => s.status === 'pending').length,
    exception: shipments.filter(s => s.status === 'exception').length
  };

  return (
    <PortalLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Shipments</h1>
            <p className="text-muted-foreground">Manage and track all your shipments</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Link to="/portal/shipments/create">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Shipment
              </Button>
            </Link>
          </div>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">{statusStats.total}</p>
                </div>
                <Package className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Delivered</p>
                  <p className="text-2xl font-bold text-green-600">{statusStats.delivered}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Transit</p>
                  <p className="text-2xl font-bold text-blue-600">{statusStats.inTransit}</p>
                </div>
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{statusStats.pending}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Exceptions</p>
                  <p className="text-2xl font-bold text-red-600">{statusStats.exception}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by shipment ID, origin, or destination..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="in-transit">In Transit</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="exception">Exception</SelectItem>
                </SelectContent>
              </Select>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Shipments Table */}
        <Card>
          <CardHeader>
            <CardTitle>Shipment History</CardTitle>
            <CardDescription>
              Showing {filteredShipments.length} of {shipments.length} shipments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Shipment ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Route</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Packages</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredShipments.map((shipment) => (
                  <TableRow key={shipment.id}>
                    <TableCell className="font-medium">{shipment.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(shipment.status)}
                        {getStatusBadge(shipment.status)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{shipment.origin}</div>
                        <div className="text-xs text-muted-foreground">to {shipment.destination}</div>
                      </div>
                    </TableCell>
                    <TableCell>{shipment.service}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{shipment.createdDate}</div>
                        {shipment.deliveredDate && (
                          <div className="text-xs text-green-600">Delivered: {shipment.deliveredDate}</div>
                        )}
                        {shipment.estimatedDelivery && !shipment.deliveredDate && (
                          <div className="text-xs text-muted-foreground">Est: {shipment.estimatedDelivery}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{shipment.packages} pkg(s)</div>
                        <div className="text-xs text-muted-foreground">{shipment.weight}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{shipment.cost}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Link to={`/portal/tracking?id=${shipment.trackingNumber}`}>
                          <Button variant="outline" size="sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            Track
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Exception Alert */}
        {statusStats.exception > 0 && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <div>
                  <h3 className="font-semibold text-red-800">Attention Required</h3>
                  <p className="text-red-700">
                    You have {statusStats.exception} shipment(s) requiring attention. 
                    Please review and take necessary action.
                  </p>
                </div>
                <Button variant="outline" className="ml-auto" onClick={handleReviewExceptions}>
                  Review Exceptions
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Exception Resolution Dialog */}
        <Dialog open={exceptionDialogOpen} onOpenChange={setExceptionDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Exception Resolution - {selectedShipment?.id}
              </DialogTitle>
              <DialogDescription>
                Review the exception details and select a resolution option for this shipment.
              </DialogDescription>
            </DialogHeader>

            {selectedShipment && (
              <div className="space-y-6">
                {/* Shipment Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Shipment Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Route</p>
                        <p className="text-sm">{selectedShipment.origin} → {selectedShipment.destination}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Service</p>
                        <p className="text-sm">{selectedShipment.service}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Packages</p>
                        <p className="text-sm">{selectedShipment.packages} package(s) - {selectedShipment.weight}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Original Cost</p>
                        <p className="text-sm">{selectedShipment.cost}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Exception Details */}
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800">Exception Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-800 capitalize">
                          {selectedShipment.exceptionType} Issue
                        </p>
                        <p className="text-red-700 text-sm mt-1">
                          {selectedShipment.exceptionDetails}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Resolution Options */}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleResolutionSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="resolution"
                      rules={{ required: "Please select a resolution option" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Resolution Options</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="space-y-3"
                            >
                              {selectedShipment.resolutionOptions?.map((option: any) => {
                                const additionalCost = getResolutionCost(option, selectedShipment);
                                return (
                                  <div key={option.id} className="flex items-start space-x-3 space-y-0">
                                    <RadioGroupItem value={option.id} className="mt-1" />
                                    <div className="flex-1 space-y-1">
                                      <div className="flex items-center justify-between">
                                        <p className="font-medium">{option.label}</p>
                                        {additionalCost > 0 && (
                                          <Badge variant="outline" className="text-orange-600 border-orange-200">
                                            <DollarSign className="h-3 w-3 mr-1" />
                                            +${additionalCost.toFixed(2)}
                                          </Badge>
                                        )}
                                      </div>
                                      <p className="text-sm text-muted-foreground">{option.description}</p>
                                    </div>
                                  </div>
                                );
                              })}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Additional Notes */}
                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Add any additional information or special instructions..."
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Action Buttons */}
                    <div className="flex justify-between pt-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setExceptionDialogOpen(false)}
                      >
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                      <Button type="submit">
                        <FileText className="h-4 w-4 mr-2" />
                        Submit Resolution
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PortalLayout>
  );
};

export default ShipmentsList;
