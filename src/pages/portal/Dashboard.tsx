
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Package, 
  Truck, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  MapPin,
  AlertTriangle,
  CheckCircle,
  Plus,
  ArrowRight
} from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import PortalLayout from '@/components/portal/PortalLayout';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: 'shipment', description: 'Shipment #FDL-2024-001 delivered successfully', time: '2 hours ago', status: 'success' },
    { id: 2, type: 'quote', description: 'New quote request #Q-2024-045 created', time: '4 hours ago', status: 'pending' },
    { id: 3, type: 'shipment', description: 'Shipment #FDL-2024-002 out for delivery', time: '6 hours ago', status: 'in-transit' },
    { id: 4, type: 'support', description: 'Support ticket #T-1234 resolved', time: '1 day ago', status: 'success' },
  ]);

  // Sample data for charts
  const monthlyData = [
    { month: 'Jan', shipments: 145, cost: 12500 },
    { month: 'Feb', shipments: 178, cost: 15200 },
    { month: 'Mar', shipments: 203, cost: 17800 },
    { month: 'Apr', shipments: 189, cost: 16900 },
    { month: 'May', shipments: 234, cost: 21200 },
    { month: 'Jun', shipments: 267, cost: 24800 },
  ];

  const statusData = [
    { name: 'Delivered', value: 85, color: '#22c55e' },
    { name: 'In Transit', value: 12, color: '#3b82f6' },
    { name: 'Pending', value: 3, color: '#f59e0b' },
  ];

  const quickStats = [
    {
      title: "Total Shipments",
      value: "1,234",
      change: "+12%",
      changeType: "positive",
      icon: Package,
      description: "This month"
    },
    {
      title: "Monthly Spend",
      value: "$24,800",
      change: "+8.2%",
      changeType: "positive",
      icon: DollarSign,
      description: "vs last month"
    },
    {
      title: "On-Time Delivery",
      value: "98.5%",
      change: "+0.3%",
      changeType: "positive",
      icon: Clock,
      description: "Performance rate"
    },
    {
      title: "Active Routes",
      value: "47",
      change: "+5",
      changeType: "positive",
      icon: Truck,
      description: "Currently active"
    }
  ];

  return (
    <PortalLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your logistics overview.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/portal/quotes/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Quote
              </Button>
            </Link>
            <Link to="/portal/shipments/create">
              <Button variant="outline">
                <Package className="h-4 w-4 mr-2" />
                Create Shipment
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center text-sm">
                      <span className={`font-medium ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-muted-foreground ml-1">{stat.description}</span>
                    </div>
                  </div>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Shipment Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Shipment Trends</CardTitle>
              <CardDescription>Monthly shipment volume and costs</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{
                shipments: { label: "Shipments", color: "#3b82f6" },
                cost: { label: "Cost ($)", color: "#10b981" }
              }} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="shipments" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Delivery Status */}
          <Card>
            <CardHeader>
              <CardTitle>Delivery Performance</CardTitle>
              <CardDescription>Current shipment status breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {statusData.map((status, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }}></div>
                      <span className="font-medium">{status.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{status.value}%</span>
                      <Progress value={status.value} className="w-20" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">Excellent Performance!</span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  Your delivery rate is above industry average of 94%.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates on your shipments and quotes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'pending' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge variant={
                      activity.status === 'success' ? 'default' :
                      activity.status === 'pending' ? 'secondary' :
                      'outline'
                    }>
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Activity
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                <Link to="/portal/quotes/new">
                  <Button variant="outline" className="w-full justify-start h-auto p-4">
                    <DollarSign className="h-5 w-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Request Quote</div>
                      <div className="text-sm text-muted-foreground">Get pricing for new shipments</div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/portal/tracking">
                  <Button variant="outline" className="w-full justify-start h-auto p-4">
                    <MapPin className="h-5 w-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Track Shipment</div>
                      <div className="text-sm text-muted-foreground">Monitor your packages</div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/portal/support">
                  <Button variant="outline" className="w-full justify-start h-auto p-4">
                    <AlertTriangle className="h-5 w-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Contact Support</div>
                      <div className="text-sm text-muted-foreground">Get help with your account</div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/portal/reports">
                  <Button variant="outline" className="w-full justify-start h-auto p-4">
                    <TrendingUp className="h-5 w-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">View Reports</div>
                      <div className="text-sm text-muted-foreground">Analyze your logistics data</div>
                    </div>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
};

export default Dashboard;
