
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Lock,
  User,
  Package,
  BarChart3,
  Bell,
  Download,
  Eye,
  TrendingUp,
  Clock,
  MapPin,
  Truck,
  CheckCircle,
  AlertTriangle,
  Brain,
  Zap,
  Shield,
  Settings,
  Phone,
  Mail,
  FileText,
  Calendar,
  Search,
  ArrowRight,
  DollarSign,
  Users,
  Award,
  Building
} from 'lucide-react';

const CustomerPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  const dashboardMetrics = [
    { title: 'Shipments This Month', value: '47,392', change: '+12.5%', icon: Package, color: 'text-blue-600' },
    { title: 'On-Time Delivery', value: '99.2%', change: '+0.8%', icon: Clock, color: 'text-green-600' },
    { title: 'Cost Per Shipment', value: '$3.28', change: '-15.2%', icon: TrendingUp, color: 'text-purple-600' },
    { title: 'Cost Savings Generated', value: '$2.3M', change: '+25.1%', icon: DollarSign, color: 'text-emerald-600' }
  ];

  const recentOrders = [
    { id: 'FDL-2024-001234', status: 'Delivered', destination: 'Los Angeles, CA', date: '2024-01-15', items: 24, value: '$12,450' },
    { id: 'FDL-2024-001235', status: 'In Transit', destination: 'Chicago, IL', date: '2024-01-15', items: 18, value: '$8,920' },
    { id: 'FDL-2024-001236', status: 'Processing', destination: 'Miami, FL', date: '2024-01-15', items: 32, value: '$15,680' },
    { id: 'FDL-2024-001237', status: 'Delivered', destination: 'Seattle, WA', date: '2024-01-14', items: 15, value: '$6,750' }
  ];

  const aiInsights = [
    {
      type: 'Route Optimization',
      title: 'Potential Route Delay Detected',
      description: 'AI analysis identified a 15% slowdown on I-75 corridor affecting Chicago routes',
      impact: 'Potential delay prevention: 4.5 hours',
      action: 'Auto-Reroute Now',
      urgency: 'high'
    },
    {
      type: 'Inventory Optimization',
      title: 'Warehouse Rebalancing Opportunity',
      description: 'ML suggests moving 20% of electronics inventory from Dallas to Atlanta warehouse',
      impact: 'Potential savings: $18,500/month',
      action: 'Review Recommendation',
      urgency: 'medium'
    },
    {
      type: 'Demand Prediction',
      title: 'Shipping Volume Spike Forecast',
      description: 'ML models predict 35% increase in electronics shipping in next 2 weeks',
      impact: 'Recommended capacity increase: 40%',
      action: 'Auto-Scale Fleet',
      urgency: 'low'
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center mobile-padding">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center pb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">FDL Logistics Portal</CardTitle>
            <p className="text-muted-foreground">Secure access to your logistics dashboard</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  type="email" 
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  className="mt-1" 
                  placeholder="your.email@company.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password"
                  type="password" 
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="mt-1" 
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Remember me</span>
                </label>
                <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
              </div>
              <Button type="submit" className="w-full revops-button-primary">
                <Lock className="mr-2 h-4 w-4" />
                Access Portal
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Demo credentials: demo@company.com / demo123
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Support
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Help
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Portal Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">FDL Logistics Portal</h1>
                <p className="text-sm text-muted-foreground">TechFlow Dynamics</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All Shipments On-Time</span>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(false)}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto mobile-padding py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
            Welcome back, Sarah Chen
          </h2>
          <p className="text-muted-foreground">
            Your logistics operations saved $45,000 today and prevented 3 potential delays.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <Button className="revops-button-primary h-20 flex-col">
            <Package className="h-6 w-6 mb-2" />
            <span className="text-sm">New Shipment</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <Search className="h-6 w-6 mb-2" />
            <span className="text-sm">Track Package</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <Phone className="h-6 w-6 mb-2" />
            <span className="text-sm">Support</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <Download className="h-6 w-6 mb-2" />
            <span className="text-sm">Reports</span>
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardMetrics.map((metric, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                  <span className="text-sm font-medium text-green-600">{metric.change}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Package className="mr-2 h-5 w-5" />
                    Recent Shipments
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="font-medium text-sm">{order.id}</div>
                        <div className="text-xs text-muted-foreground">
                          {order.destination} • {order.items} items • {order.value}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {order.status}
                        </span>
                        <div className="text-xs text-muted-foreground mt-1">{order.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2 h-5 w-5" />
                AI Logistics Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        insight.urgency === 'high' ? 'bg-red-100 text-red-700' :
                        insight.urgency === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {insight.type}
                      </span>
                      <Button variant="outline" size="sm">{insight.action}</Button>
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{insight.description}</p>
                    <p className="text-xs font-medium text-green-600">{insight.impact}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Logistics Performance Analytics */}
        <Card className="border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5" />
                Logistics Performance Analytics
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">$2.3M</div>
                <div className="text-sm text-green-700">Cost Savings Generated (YTD)</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Truck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">127</div>
                <div className="text-sm text-blue-700">Issues Prevented</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">99.8%</div>
                <div className="text-sm text-purple-700">Success Rate</div>
              </div>
            </div>
            
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Logistics Analytics Chart</p>
                <p className="text-sm text-gray-500">Real-time shipping performance data</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support & Resources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Phone className="mr-2 h-5 w-5" />
                24/7 Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get immediate help from our logistics experts.
              </p>
              <div className="space-y-3">
                <Button className="w-full revops-button-primary">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (408) 759-5351
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Support
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <FileText className="mr-2 h-5 w-5" />
                Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Shipping Guides
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Eye className="mr-2 h-4 w-4" />
                  Tutorial Videos
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Training Sessions
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Award className="mr-2 h-5 w-5" />
                Account Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Plan:</span>
                  <span className="text-sm font-medium">Premium Logistics</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Status:</span>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Next Billing:</span>
                  <span className="text-sm font-medium">Feb 15, 2024</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Manage Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CustomerPortal;
