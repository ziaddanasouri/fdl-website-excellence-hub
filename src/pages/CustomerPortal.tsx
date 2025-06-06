
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  Search
} from 'lucide-react';

const CustomerPortal = () => {
  const dashboardMetrics = [
    { title: 'Orders This Month', value: '47,392', change: '+12.5%', icon: Package, color: 'text-blue-600' },
    { title: 'On-Time Delivery', value: '99.2%', change: '+0.8%', icon: Clock, color: 'text-green-600' },
    { title: 'Cost Per Shipment', value: '$3.28', change: '-15.2%', icon: TrendingUp, color: 'text-purple-600' },
    { title: 'Customer Satisfaction', value: '96.4%', change: '+2.1%', icon: CheckCircle, color: 'text-emerald-600' }
  ];

  const recentOrders = [
    { id: 'FDL-2024-001234', status: 'Delivered', destination: 'Los Angeles, CA', date: '2024-01-15', items: 24 },
    { id: 'FDL-2024-001235', status: 'In Transit', destination: 'Chicago, IL', date: '2024-01-15', items: 18 },
    { id: 'FDL-2024-001236', status: 'Processing', destination: 'Miami, FL', date: '2024-01-15', items: 32 },
    { id: 'FDL-2024-001237', status: 'Delivered', destination: 'Seattle, WA', date: '2024-01-14', items: 15 }
  ];

  const aiInsights = [
    {
      type: 'Optimization',
      title: 'Inventory Rebalancing Recommendation',
      description: 'AI analysis suggests moving 15% of SKU-001 inventory from Dallas to Atlanta for 12% cost reduction',
      impact: 'Potential savings: $18,500/month',
      action: 'Review Recommendation'
    },
    {
      type: 'Prediction',
      title: 'Demand Spike Forecast',
      description: 'ML models predict 35% demand increase for electronics category in next 2 weeks',
      impact: 'Recommended stock increase: 40%',
      action: 'Auto-Implement'
    },
    {
      type: 'Alert',
      title: 'Carrier Performance Decline',
      description: 'Regional Carrier B showing 8% decline in on-time performance in Southeast region',
      impact: 'Alternative routing activated',
      action: 'View Details'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Real-time insights and predictive recommendations',
      capabilities: ['Demand forecasting', 'Route optimization', 'Inventory positioning', 'Cost analysis']
    },
    {
      icon: Eye,
      title: 'Complete Visibility',
      description: '360-degree view of your supply chain operations',
      capabilities: ['Real-time tracking', 'Performance metrics', 'Exception alerts', 'Custom reporting']
    },
    {
      icon: Zap,
      title: 'Automated Operations',
      description: 'Streamlined processes with intelligent automation',
      capabilities: ['Order processing', 'Inventory management', 'Quality control', 'Returns handling']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance standards',
      capabilities: ['SOC 2 Type II', 'Data encryption', 'Access controls', 'Audit trails']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Lock className="h-8 w-8" />
              <h1 className="text-4xl font-bold">FDL Customer Portal</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Advanced AI-powered logistics platform providing real-time visibility, 
              predictive analytics, and automated optimization for Fortune 100 companies
            </p>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Secure Portal Access</CardTitle>
              <p className="text-muted-foreground">Login with your enterprise credentials</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-6">Client Login</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full p-3 border border-gray-300 rounded-lg" 
                        placeholder="your.email@company.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Password</label>
                      <input 
                        type="password" 
                        className="w-full p-3 border border-gray-300 rounded-lg" 
                        placeholder="••••••••" 
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                    </div>
                    <Button className="w-full py-3">
                      <Lock className="mr-2 h-4 w-4" />
                      Access Portal
                    </Button>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-muted-foreground mb-4">New client? Contact your account manager for access</p>
                    <div className="flex space-x-4">
                      <Button variant="outline" className="flex-1">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Support
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Help
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-6">Portal Features</h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="logistics-gradient p-2 rounded-lg">
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Dashboard Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Portal Dashboard Preview</h2>
            <p className="text-xl text-muted-foreground">Experience the power of AI-driven logistics intelligence</p>
          </div>

          {/* Dashboard Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-medium text-sm">{order.id}</div>
                        <div className="text-xs text-muted-foreground">{order.destination} • {order.items} items</div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
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
                <Button variant="outline" className="w-full mt-4">
                  <Search className="mr-2 h-4 w-4" />
                  View All Orders
                </Button>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-5 w-5" />
                  AI Insights & Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          insight.type === 'Optimization' ? 'bg-purple-100 text-purple-700' :
                          insight.type === 'Prediction' ? 'bg-blue-100 text-blue-700' :
                          'bg-orange-100 text-orange-700'
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
        </div>
      </section>

      {/* Portal Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Advanced Portal Capabilities</h2>
            <p className="text-xl text-muted-foreground">Comprehensive tools for supply chain excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="logistics-gradient p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 text-center">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center text-sm">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {capability}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request Access CTA */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Access Your Portal?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join Fortune 100 companies leveraging AI-powered logistics intelligence. 
            Get instant access to real-time analytics, predictive insights, and automated optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-4 px-8 text-lg">
              Request Portal Access
              <User className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary py-4 px-8">
              Schedule Demo
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">24/7 Access</div>
              <div className="text-blue-200 text-sm">Always available</div>
            </div>
            <div>
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Enterprise Security</div>
              <div className="text-blue-200 text-sm">SOC 2 certified</div>
            </div>
            <div>
              <Brain className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">AI-Powered</div>
              <div className="text-blue-200 text-sm">Intelligent insights</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerPortal;
