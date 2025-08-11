import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { 
  Package,
  Warehouse,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  BarChart3,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  MapPin,
  Package2
} from 'lucide-react';
import PortalLayout from '@/components/portal/PortalLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const inventoryOverview = {
    totalValue: 2450678.50,
    totalItems: 12547,
    lowStockItems: 23,
    warehouseCount: 5,
    turnoverRate: 8.2
  };

  const warehouseData = [
    {
      id: 'WH-001',
      name: 'Atlanta Distribution Center',
      location: 'Atlanta, GA',
      capacity: 100000,
      occupied: 78500,
      utilization: 78.5,
      value: 892450.25,
      items: 4521
    },
    {
      id: 'WH-002', 
      name: 'Chicago Fulfillment Hub',
      location: 'Chicago, IL',
      capacity: 85000,
      occupied: 72250,
      utilization: 85.0,
      value: 654320.75,
      items: 3247
    },
    {
      id: 'WH-003',
      name: 'Los Angeles Port Facility',
      location: 'Los Angeles, CA', 
      capacity: 120000,
      occupied: 89400,
      utilization: 74.5,
      value: 765890.50,
      items: 3985
    },
    {
      id: 'WH-004',
      name: 'Dallas Cross-Dock',
      location: 'Dallas, TX',
      capacity: 60000,
      occupied: 48000,
      utilization: 80.0,
      value: 89017.00,
      items: 794
    }
  ];

  const inventoryItems = [
    {
      sku: 'SKU-001234',
      description: 'Premium Widget Assembly',
      category: 'Electronics',
      quantity: 2450,
      location: 'WH-001-A12',
      unitValue: 125.50,
      totalValue: 307475.00,
      reorderPoint: 500,
      supplier: 'TechCorp Industries',
      lastMovement: '2024-01-18',
      status: 'in-stock'
    },
    {
      sku: 'SKU-002156',
      description: 'Industrial Bearing Set',
      category: 'Machinery',
      quantity: 89,
      location: 'WH-002-B05',
      unitValue: 89.99,
      totalValue: 8009.11,
      reorderPoint: 100,
      supplier: 'MachCorp Ltd',
      lastMovement: '2024-01-20',
      status: 'low-stock'
    },
    {
      sku: 'SKU-003789',
      description: 'Medical Device Component',
      category: 'Healthcare',
      quantity: 1250,
      location: 'WH-001-C08',
      unitValue: 67.25,
      totalValue: 84062.50,
      reorderPoint: 200,
      supplier: 'MedSupply Co',
      lastMovement: '2024-01-19',
      status: 'in-stock'
    },
    {
      sku: 'SKU-004567',
      description: 'Automotive Sensor Array',
      category: 'Automotive',
      quantity: 45,
      location: 'WH-003-D15',
      unitValue: 234.75,
      totalValue: 10563.75,
      reorderPoint: 75,
      supplier: 'AutoTech Systems',
      lastMovement: '2024-01-17',
      status: 'critical'
    }
  ];

  const turnoverData = [
    { period: 'Q1', electronics: 8.5, machinery: 6.2, healthcare: 9.1, automotive: 7.8 },
    { period: 'Q2', electronics: 9.2, machinery: 6.8, healthcare: 8.9, automotive: 8.2 },
    { period: 'Q3', electronics: 8.8, machinery: 7.1, healthcare: 9.5, automotive: 8.0 },
    { period: 'Q4', electronics: 9.1, machinery: 7.5, healthcare: 9.2, automotive: 8.3 }
  ];

  const categoryBreakdown = [
    { name: 'Electronics', value: 45, amount: 1102804.63, color: 'hsl(var(--primary))' },
    { name: 'Machinery', value: 25, amount: 612669.63, color: 'hsl(var(--accent))' },
    { name: 'Healthcare', value: 20, amount: 490135.70, color: 'hsl(var(--logistics-orange))' },
    { name: 'Automotive', value: 10, amount: 245067.85, color: 'hsl(var(--logistics-green))' }
  ];

  const movementData = [
    { day: 'Mon', inbound: 1250, outbound: 980 },
    { day: 'Tue', inbound: 890, outbound: 1120 },
    { day: 'Wed', inbound: 1450, outbound: 1350 },
    { day: 'Thu', inbound: 1200, outbound: 1180 },
    { day: 'Fri', inbound: 980, outbound: 1450 },
    { day: 'Sat', inbound: 650, outbound: 820 },
    { day: 'Sun', inbound: 420, outbound: 580 }
  ];

  const getStatusBadge = (status: string) => {
    const config = {
      'in-stock': { variant: 'default', label: 'In Stock' },
      'low-stock': { variant: 'secondary', label: 'Low Stock' },
      'critical': { variant: 'destructive', label: 'Critical' },
      'out-of-stock': { variant: 'destructive', label: 'Out of Stock' }
    };
    
    const statusConfig = config[status as keyof typeof config] || config['in-stock'];
    return <Badge variant={statusConfig.variant as any}>{statusConfig.label}</Badge>;
  };

  const getUtilizationColor = (utilization: number) => {
    if (utilization >= 90) return 'text-red-600';
    if (utilization >= 75) return 'text-yellow-600';
    return 'text-green-600';
  };

  const filteredItems = inventoryItems.filter(item =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PortalLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
            <p className="text-muted-foreground">Monitor and manage your inventory across all warehouses</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Value</p>
                  <p className="text-2xl font-bold text-foreground">${inventoryOverview.totalValue.toLocaleString()}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8% from last month
                  </p>
                </div>
                <div className="p-3 bg-primary/10 rounded-full">
                  <Package className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Items</p>
                  <p className="text-2xl font-bold text-foreground">{inventoryOverview.totalItems.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground mt-1">Across all locations</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <Package2 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Low Stock Alerts</p>
                  <p className="text-2xl font-bold text-yellow-600">{inventoryOverview.lowStockItems}</p>
                  <p className="text-xs text-yellow-600 mt-1">Requires attention</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Warehouses</p>
                  <p className="text-2xl font-bold text-foreground">{inventoryOverview.warehouseCount}</p>
                  <p className="text-xs text-muted-foreground mt-1">Active locations</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <Warehouse className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Turnover Rate</p>
                  <p className="text-2xl font-bold text-foreground">{inventoryOverview.turnoverRate}x</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Above target
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="warehouses">Warehouses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Inventory Movement */}
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Movement</CardTitle>
                  <CardDescription>Weekly inbound vs outbound movement</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={movementData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="inbound" fill="hsl(var(--primary))" name="Inbound" />
                      <Bar dataKey="outbound" fill="hsl(var(--accent))" name="Outbound" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Category Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Inventory by Category</CardTitle>
                  <CardDescription>Value distribution across product categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryBreakdown}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="hsl(var(--primary))"
                        dataKey="value"
                        label={({ name, value }) => `${name} ${value}%`}
                      >
                        {categoryBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    {categoryBreakdown.map((category) => (
                      <div key={category.name} className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: category.color }} />
                          {category.name}
                        </span>
                        <span className="font-medium">${category.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest inventory movements and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <Package className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Inbound shipment received</p>
                      <p className="text-xs text-muted-foreground">2,450 units of SKU-001234 added to WH-001</p>
                    </div>
                    <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-sm font-medium">Low stock alert</p>
                      <p className="text-xs text-muted-foreground">SKU-002156 below reorder point (89 units remaining)</p>
                    </div>
                    <span className="text-xs text-muted-foreground ml-auto">4 hours ago</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Cycle count completed</p>
                      <p className="text-xs text-muted-foreground">Atlanta DC - 99.8% accuracy across 1,247 items</p>
                    </div>
                    <span className="text-xs text-muted-foreground ml-auto">1 day ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Inventory</CardTitle>
                <CardDescription>Manage your product catalog and stock levels</CardDescription>
                <div className="flex gap-2 mt-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search products..." 
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="pb-3 text-sm font-medium text-muted-foreground">SKU</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Description</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Category</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Quantity</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Location</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Value</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredItems.map((item) => (
                        <tr key={item.sku} className="border-b last:border-b-0">
                          <td className="py-3 text-sm font-mono">{item.sku}</td>
                          <td className="py-3 text-sm font-medium">{item.description}</td>
                          <td className="py-3 text-sm">{item.category}</td>
                          <td className="py-3 text-sm">
                            <span className={item.quantity <= item.reorderPoint ? 'text-red-600 font-medium' : ''}>
                              {item.quantity.toLocaleString()}
                            </span>
                          </td>
                          <td className="py-3 text-sm">{item.location}</td>
                          <td className="py-3 text-sm font-medium">${item.totalValue.toLocaleString()}</td>
                          <td className="py-3">{getStatusBadge(item.status)}</td>
                          <td className="py-3">
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Warehouses Tab */}
          <TabsContent value="warehouses" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {warehouseData.map((warehouse) => (
                <Card key={warehouse.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{warehouse.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {warehouse.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{warehouse.id}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Capacity Utilization</span>
                        <span className={`font-medium ${getUtilizationColor(warehouse.utilization)}`}>
                          {warehouse.utilization}%
                        </span>
                      </div>
                      <Progress value={warehouse.utilization} />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{warehouse.occupied.toLocaleString()} sq ft occupied</span>
                        <span>{warehouse.capacity.toLocaleString()} sq ft total</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Inventory Value</p>
                        <p className="text-lg font-bold">${warehouse.value.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Items</p>
                        <p className="text-lg font-bold">{warehouse.items.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Reports
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Turnover Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Turnover by Category</CardTitle>
                  <CardDescription>Quarterly turnover rates across product categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={turnoverData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="period" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="electronics" stroke="hsl(var(--primary))" strokeWidth={2} />
                      <Line type="monotone" dataKey="machinery" stroke="hsl(var(--accent))" strokeWidth={2} />
                      <Line type="monotone" dataKey="healthcare" stroke="hsl(var(--logistics-orange))" strokeWidth={2} />
                      <Line type="monotone" dataKey="automotive" stroke="hsl(var(--logistics-green))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Key inventory management indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Inventory Accuracy</span>
                      <span className="font-medium">99.8%</span>
                    </div>
                    <Progress value={99.8} />
                    <p className="text-xs text-muted-foreground">Target: 99.5%</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Order Fulfillment Rate</span>
                      <span className="font-medium">97.2%</span>
                    </div>
                    <Progress value={97.2} />
                    <p className="text-xs text-muted-foreground">Target: 95.0%</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Stock-out Incidents</span>
                      <span className="font-medium text-green-600">2</span>
                    </div>
                    <Progress value={8} className="h-2" />
                    <p className="text-xs text-muted-foreground">Target: &lt;5 per month</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Carrying Cost Ratio</span>
                      <span className="font-medium">18.5%</span>
                    </div>
                    <Progress value={18.5} />
                    <p className="text-xs text-muted-foreground">Industry avg: 20-25%</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Strategic Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Strategic Insights & Recommendations</CardTitle>
                <CardDescription>AI-powered inventory optimization insights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800">Optimization Opportunity</h4>
                      <p className="text-sm text-green-700">
                        Electronics category showing 15% faster turnover. Consider increasing stock levels for Q2.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800">Demand Forecast</h4>
                      <p className="text-sm text-blue-700">
                        Healthcare products expected to increase 22% next quarter based on seasonal trends.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800">Reorder Recommendation</h4>
                      <p className="text-sm text-yellow-700">
                        23 items approaching reorder points. Suggest bulk purchasing for better supplier terms.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-start gap-3">
                    <Warehouse className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-purple-800">Space Optimization</h4>
                      <p className="text-sm text-purple-700">
                        Chicago facility at 85% capacity. Consider redistribution to Atlanta (78%) or Dallas (80%).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  );
};

export default Inventory;