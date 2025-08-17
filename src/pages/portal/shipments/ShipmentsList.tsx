import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
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
  X,
  Image as ImageIcon,
  Upload,
  Loader2,
  ShoppingCart,
  Building2
} from 'lucide-react';
import PortalLayout from '@/components/portal/PortalLayout';
import { Link } from 'react-router-dom';
import podImage from '@/assets/pod-wine-delivery.jpg';

const ShipmentsList = () => {
  // Enhanced shipment data with exception details and POD information
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
      trackingNumber: 'TRK123456789',
      podImageUrl: podImage,
      deliveryAgent: 'Mike Johnson',
      recipient: 'Wine Store Manager',
      deliveryTime: '2:30 PM',
      deliveryNotes: 'Wine bottles delivered and properly stored in retail wine section'
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

  // Mock data for consignees and inventory (expanded list with full addresses)
  const consignees = [
    { id: 'c1', name: 'LA Retail Store', address: '1234 Sunset Blvd', city: 'Los Angeles', state: 'CA', zip: '90001' },
    { id: 'c2', name: 'NYC Distributor', address: '456 Broadway Ave', city: 'New York', state: 'NY', zip: '10001' },
    { id: 'c3', name: 'Miami Outlet', address: '789 Ocean Drive', city: 'Miami', state: 'FL', zip: '33101' },
    { id: 'c4', name: 'Chicago Branch', address: '321 Michigan Ave', city: 'Chicago', state: 'IL', zip: '60601' },
    { id: 'c5', name: 'Seattle Office', address: '654 Pike Street', city: 'Seattle', state: 'WA', zip: '98101' },
    { id: 'c6', name: 'Dallas Distribution Center', address: '987 Commerce St', city: 'Dallas', state: 'TX', zip: '75201' },
    { id: 'c7', name: 'Phoenix Warehouse', address: '147 Desert Rd', city: 'Phoenix', state: 'AZ', zip: '85001' },
    { id: 'c8', name: 'Denver Hub', address: '258 Mountain View Dr', city: 'Denver', state: 'CO', zip: '80201' },
    { id: 'c9', name: 'Atlanta Regional', address: '369 Peachtree St', city: 'Atlanta', state: 'GA', zip: '30301' },
    { id: 'c10', name: 'Boston Store', address: '741 Beacon Hill Rd', city: 'Boston', state: 'MA', zip: '02101' },
    { id: 'c11', name: 'Portland Branch', address: '852 Forest Ave', city: 'Portland', state: 'OR', zip: '97201' },
    { id: 'c12', name: 'Las Vegas Depot', address: '963 Strip Blvd', city: 'Las Vegas', state: 'NV', zip: '89101' },
    { id: 'c13', name: 'Minneapolis Center', address: '159 Lake St', city: 'Minneapolis', state: 'MN', zip: '55401' },
    { id: 'c14', name: 'Nashville Facility', address: '357 Music Row', city: 'Nashville', state: 'TN', zip: '37201' },
    { id: 'c15', name: 'San Diego Location', address: '486 Harbor Dr', city: 'San Diego', state: 'CA', zip: '92101' }
  ];

  const inventoryItems = [
    { sku: 'SKU-1001', name: 'Cabernet Sauvignon 750ml', availableQty: 320 },
    { sku: 'SKU-1002', name: 'Chardonnay 750ml', availableQty: 280 },
    { sku: 'SKU-1003', name: 'Pinot Noir 750ml', availableQty: 150 },
    { sku: 'SKU-1004', name: 'Sauvignon Blanc 750ml', availableQty: 200 },
    { sku: 'SKU-1005', name: 'Merlot 750ml', availableQty: 175 },
    { sku: 'SKU-2001', name: 'Wine Gift Box Set', availableQty: 45 },
    { sku: 'SKU-2002', name: 'Premium Decanter', availableQty: 25 },
    { sku: 'SKU-3001', name: 'Cork Screw Professional', availableQty: 120 }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [exceptionDialogOpen, setExceptionDialogOpen] = useState(false);
  const [podDialogOpen, setPodDialogOpen] = useState(false);
  const [newOrderDialogOpen, setNewOrderDialogOpen] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState<any>(null);
  const [shipmentData, setShipmentData] = useState(() => {
    const saved = localStorage.getItem('fdl_portal_shipments');
    return saved ? JSON.parse(saved) : initialShipments;
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // New structure: array of consignee orders, each with consigneeId and items
  const [consigneeOrders, setConsigneeOrders] = useState([
    { consigneeId: '', items: [{ sku: '', quantity: 1 }] }
  ]);
  const [emailUpdates, setEmailUpdates] = useState(() => {
    const saved = localStorage.getItem('fdl_portal_email_updates');
    return saved ? JSON.parse(saved) : false;
  });
  
  const { toast } = useToast();
  const form = useForm();

  // Save shipments to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('fdl_portal_shipments', JSON.stringify(shipmentData));
  }, [shipmentData]);

  // Save email preference whenever it changes
  useEffect(() => {
    localStorage.setItem('fdl_portal_email_updates', JSON.stringify(emailUpdates));
  }, [emailUpdates]);

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

  const handleViewPOD = (shipment: any) => {
    if (shipment.status === 'delivered') {
      setSelectedShipment(shipment);
      setPodDialogOpen(true);
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

  const handleUploadFilesSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newOrder = {
      id: `ORD-${Date.now()}`,
      status: 'pending',
      origin: 'FDL Warehouse, NJ',
      destination: 'Consignee (From uploaded files)',
      createdDate: new Date().toISOString().split('T')[0],
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      packages: 1,
      weight: '12.0 lbs',
      cost: '$75.99',
      service: 'Standard',
      trackingNumber: `TRK${Date.now()}`
    };

    setShipmentData(prev => [newOrder, ...prev]);
    setIsSubmitting(false);
    setNewOrderDialogOpen(false);

    toast({
      title: "Order accepted",
      description: "Your order was sent to the warehouse. Updates shall follow soon.",
    });
  };

  const handleInventoryOrderSubmit = async () => {
    // Validate that we have at least one consignee with items
    const validOrders = consigneeOrders.filter(order => 
      order.consigneeId && order.items.some(item => item.sku && item.quantity > 0)
    );
    
    if (validOrders.length === 0) return;
    
    setIsSubmitting(true);
    
    // Simulate validation time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Calculate totals across all consignees
    const totalItems = validOrders.reduce((sum, order) => 
      sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0), 0
    );
    
    // Create destination string (first consignee's location for simplicity)
    const firstConsignee = consignees.find(c => c.id === validOrders[0].consigneeId);
    const destinationSummary = validOrders.length > 1 
      ? `${firstConsignee?.city}, ${firstConsignee?.state} + ${validOrders.length - 1} more`
      : `${firstConsignee?.city}, ${firstConsignee?.state}`;
    
    const newOrder = {
      id: `ORD-${Date.now()}`,
      status: 'pending',
      origin: 'FDL Warehouse, NJ',
      destination: destinationSummary,
      createdDate: new Date().toISOString().split('T')[0],
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      packages: totalItems,
      weight: `${totalItems * 2.5} lbs`,
      cost: `$${(totalItems * 25.99).toFixed(2)}`,
      service: 'Standard',
      trackingNumber: `TRK${Date.now()}`
    };

    setShipmentData(prev => [newOrder, ...prev]);
    setIsSubmitting(false);
    setNewOrderDialogOpen(false);
    // Reset to initial state
    setConsigneeOrders([{ consigneeId: '', items: [{ sku: '', quantity: 1 }] }]);

    toast({
      title: "Order submitted",
      description: "Your order has been submitted and sent to our warehouse.",
    });
  };

  const addConsigneeOrder = () => {
    setConsigneeOrders([...consigneeOrders, { consigneeId: '', items: [{ sku: '', quantity: 1 }] }]);
  };

  const removeConsigneeOrder = (orderIndex: number) => {
    if (consigneeOrders.length > 1) {
      setConsigneeOrders(consigneeOrders.filter((_, i) => i !== orderIndex));
    }
  };

  const updateConsigneeOrder = (orderIndex: number, field: string, value: any) => {
    setConsigneeOrders(consigneeOrders.map((order, i) => 
      i === orderIndex ? { ...order, [field]: value } : order
    ));
  };

  const addOrderItem = (orderIndex: number) => {
    setConsigneeOrders(consigneeOrders.map((order, i) => 
      i === orderIndex ? { ...order, items: [...order.items, { sku: '', quantity: 1 }] } : order
    ));
  };

  const removeOrderItem = (orderIndex: number, itemIndex: number) => {
    setConsigneeOrders(consigneeOrders.map((order, i) => 
      i === orderIndex && order.items.length > 1 
        ? { ...order, items: order.items.filter((_, j) => j !== itemIndex) }
        : order
    ));
  };

  const updateOrderItem = (orderIndex: number, itemIndex: number, field: string, value: any) => {
    setConsigneeOrders(consigneeOrders.map((order, i) => 
      i === orderIndex 
        ? { 
            ...order, 
            items: order.items.map((item, j) => 
              j === itemIndex ? { ...item, [field]: value } : item
            )
          }
        : order
    ));
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
            <h1 className="text-3xl font-bold">Orders / Shipments</h1>
            <p className="text-muted-foreground">Manage and track all your orders and shipments</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Dialog open={newOrderDialogOpen} onOpenChange={setNewOrderDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Order
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>New Order</DialogTitle>
                  <DialogDescription>
                    Choose how you want to place your order
                  </DialogDescription>
                </DialogHeader>
                
                <Tabs defaultValue="upload" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="upload">Upload Order Files</TabsTrigger>
                    <TabsTrigger value="inventory">Build from Inventory</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upload" className="space-y-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="summary-file">Summary File (CSV/XLSX)</Label>
                          <div className="flex items-center justify-center w-full">
                            <label htmlFor="summary-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground">Click to upload summary file</p>
                              </div>
                              <input id="summary-file" type="file" className="hidden" accept=".csv,.xlsx" />
                            </label>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="order-file">Order File (CSV/XLSX)</Label>
                          <div className="flex items-center justify-center w-full">
                            <label htmlFor="order-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground">Click to upload order file</p>
                              </div>
                              <input id="order-file" type="file" className="hidden" accept=".csv,.xlsx" />
                            </label>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="invoice-file">PDF Invoice</Label>
                          <div className="flex items-center justify-center w-full">
                            <label htmlFor="invoice-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground">Click to upload PDF invoice</p>
                              </div>
                              <input id="invoice-file" type="file" className="hidden" accept=".pdf" />
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="email-updates-upload" 
                          checked={emailUpdates}
                          onCheckedChange={setEmailUpdates}
                        />
                        <Label htmlFor="email-updates-upload">Email me updates for this order</Label>
                      </div>
                      
                      <Button 
                        onClick={handleUploadFilesSubmit}
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Processing files...
                          </>
                        ) : (
                          'Submit Files'
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="inventory" className="space-y-4">
                    <div className="space-y-6">
                      {/* Multiple Consignee Orders */}
                      {consigneeOrders.map((order, orderIndex) => (
                        <div key={orderIndex} className="border rounded-lg p-4 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Consignee {orderIndex + 1}</h4>
                            {consigneeOrders.length > 1 && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removeConsigneeOrder(orderIndex)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          
                          {/* Consignee Selection */}
                          <div className="space-y-2">
                            <Label>Select Consignee</Label>
                            <Select 
                              value={order.consigneeId} 
                              onValueChange={(value) => updateConsigneeOrder(orderIndex, 'consigneeId', value)}
                            >
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Choose a consignee" />
                              </SelectTrigger>
                              <SelectContent className="bg-background border shadow-lg z-50">
                                {consignees.map((consignee) => (
                                  <SelectItem key={consignee.id} value={consignee.id} className="bg-background hover:bg-muted">
                                    <div className="flex flex-col items-start">
                                      <span className="font-medium">{consignee.name}</span>
                                      <span className="text-sm text-muted-foreground">
                                        {consignee.address}, {consignee.city}, {consignee.state} {consignee.zip}
                                      </span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          {/* Items for this consignee */}
                          <div className="space-y-3">
                            <Label>Items for this Consignee</Label>
                            {order.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex gap-3 items-end">
                                <div className="flex-1">
                                  <Label className="text-xs">SKU</Label>
                                  <Select 
                                    value={item.sku} 
                                    onValueChange={(value) => updateOrderItem(orderIndex, itemIndex, 'sku', value)}
                                  >
                                    <SelectTrigger className="bg-background">
                                      <SelectValue placeholder="Select SKU" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-background border shadow-lg z-50">
                                      {inventoryItems.map((invItem) => (
                                        <SelectItem key={invItem.sku} value={invItem.sku} className="bg-background hover:bg-muted">
                                          {invItem.sku} - {invItem.name} (Available: {invItem.availableQty})
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="w-24">
                                  <Label className="text-xs">Quantity</Label>
                                  <Input
                                    type="number"
                                    min="1"
                                    max={inventoryItems.find(i => i.sku === item.sku)?.availableQty || 999}
                                    value={item.quantity}
                                    onChange={(e) => updateOrderItem(orderIndex, itemIndex, 'quantity', parseInt(e.target.value) || 1)}
                                  />
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => removeOrderItem(orderIndex, itemIndex)}
                                  disabled={order.items.length === 1}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                            
                            <Button 
                              variant="outline" 
                              onClick={() => addOrderItem(orderIndex)} 
                              className="w-full"
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add Item to this Consignee
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      {/* Add New Consignee Button */}
                      <Button 
                        variant="outline" 
                        onClick={addConsigneeOrder} 
                        className="w-full"
                      >
                        <Building2 className="h-4 w-4 mr-2" />
                        Add Another Consignee
                      </Button>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="email-updates-inventory" 
                          checked={emailUpdates}
                          onCheckedChange={setEmailUpdates}
                        />
                        <Label htmlFor="email-updates-inventory">Email me updates for this order</Label>
                      </div>
                      
                      <Button 
                        onClick={handleInventoryOrderSubmit}
                        disabled={isSubmitting || consigneeOrders.every(order => 
                          !order.consigneeId || order.items.every(item => !item.sku)
                        )}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Validating order...
                          </>
                        ) : (
                          'Submit Order'
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
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
                    placeholder="Search by order ID, origin, or destination..."
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
                  <TableHead>Order/Shipment ID</TableHead>
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
                          <Button 
                            variant="outline" 
                            size="sm"
                            disabled={shipment.status === 'pending'}
                          >
                            <MapPin className="h-4 w-4 mr-1" />
                            Track
                          </Button>
                        </Link>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewPOD(shipment)}
                          disabled={shipment.status !== 'delivered'}
                        >
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

        {/* Exception Resolution Dialog */}
        <Dialog open={exceptionDialogOpen} onOpenChange={setExceptionDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Exception Resolution - {selectedShipment?.id}</DialogTitle>
              <DialogDescription>
                Review the exception details and select a resolution option
              </DialogDescription>
            </DialogHeader>
            
            {selectedShipment && (
              <div className="space-y-6">
                {/* Exception Details */}
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-800">
                        {selectedShipment.exceptionType === 'oversize' ? 'Oversize Package' : 'Address Issue'}
                      </h4>
                      <p className="text-sm text-red-700">{selectedShipment.exceptionDetails}</p>
                      {selectedShipment.additionalCharges > 0 && (
                        <p className="text-sm font-medium text-red-800 mt-1">
                          Additional charges may apply: ${selectedShipment.additionalCharges.toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Resolution Options */}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleResolutionSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="resolution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Choose Resolution</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="space-y-3"
                            >
                              {selectedShipment.resolutionOptions?.map((option: any) => (
                                <div key={option.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                                  <RadioGroupItem value={option.id} id={option.id} className="mt-0.5" />
                                  <div className="flex-1">
                                    <label 
                                      htmlFor={option.id} 
                                      className="text-sm font-medium cursor-pointer flex items-center justify-between"
                                    >
                                      <span>{option.label}</span>
                                      {getResolutionCost(option, selectedShipment) > 0 && (
                                        <span className="text-sm text-muted-foreground">
                                          +${getResolutionCost(option, selectedShipment).toFixed(2)}
                                        </span>
                                      )}
                                    </label>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {option.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Provide any additional information or special instructions..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex gap-3 pt-4">
                      <Button type="submit" className="flex-1">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Submit Resolution
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setExceptionDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* POD Dialog */}
        <Dialog open={podDialogOpen} onOpenChange={setPodDialogOpen}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Proof of Delivery - {selectedShipment?.id}</DialogTitle>
              <DialogDescription>
                Delivery confirmation and details
              </DialogDescription>
            </DialogHeader>
            
            {selectedShipment && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* POD Image */}
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    {selectedShipment.podImageUrl ? (
                      <img 
                        src={selectedShipment.podImageUrl} 
                        alt="Proof of Delivery" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">No image available</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Full Size
                    </Button>
                  </div>
                </div>

                {/* Delivery Details */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Delivery Agent</h4>
                      <p className="text-sm">{selectedShipment.deliveryAgent || 'N/A'}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Recipient</h4>
                      <p className="text-sm">{selectedShipment.recipient || 'N/A'}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Delivery Time</h4>
                      <p className="text-sm">{selectedShipment.deliveryTime || 'N/A'}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Date</h4>
                      <p className="text-sm">{selectedShipment.deliveredDate}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Delivery Notes</h4>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm">
                        {selectedShipment.deliveryNotes || 'No additional notes provided.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Delivery Report
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PortalLayout>
  );
};

export default ShipmentsList;