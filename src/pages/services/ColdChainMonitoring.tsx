import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Eye, 
  Shield, 
  Thermometer,
  Clock,
  AlertTriangle,
  Phone,
  Download,
  Calculator,
  Bell,
  FileText,
  Smartphone,
  Monitor,
  Wifi,
  Database,
  TrendingUp,
  Award,
  Users,
  Target
} from 'lucide-react';

const ColdChainMonitoring = () => {
  const monitoringFeatures = [
    {
      icon: Thermometer,
      title: "Real-Time Temperature Tracking",
      description: "Continuous monitoring with ±0.5°F precision across all storage and transport zones",
      features: ["Wireless sensor networks", "Cloud-based data logging", "Instant deviation alerts", "Historical trend analysis"]
    },
    {
      icon: Eye,
      title: "24/7 Dashboard Visibility",
      description: "Comprehensive real-time dashboards accessible from any device, anywhere",
      features: ["Live temperature maps", "Asset location tracking", "Performance metrics", "Custom reporting"]
    },
    {
      icon: Bell,
      title: "Predictive Alert System",
      description: "AI-powered alerts prevent temperature excursions before they happen",
      features: ["Predictive analytics", "Multi-channel notifications", "Escalation protocols", "Smart thresholds"]
    }
  ];

  const systemCapabilities = [
    {
      icon: Wifi,
      title: "IoT Sensor Network",
      description: "Advanced wireless sensors with 99.9% uptime reliability"
    },
    {
      icon: Database,
      title: "Cloud Data Storage", 
      description: "Secure, compliant data storage with unlimited retention"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "iOS and Android apps for on-the-go monitoring"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Compliance reports generated automatically"
    },
    {
      icon: Monitor,
      title: "Web Dashboards",
      description: "Intuitive web interface for detailed analytics"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "FDA, USDA, and HACCP validation ready"
    }
  ];

  const alertTypes = [
    { type: "Temperature Excursion", response: "Immediate", channels: "SMS, Email, App Push" },
    { type: "Equipment Malfunction", response: "2 minutes", channels: "Phone Call, SMS" },
    { type: "Door Open Alert", response: "30 seconds", channels: "App Push, SMS" },
    { type: "Power Outage", response: "Instant", channels: "All Channels" },
    { type: "Sensor Offline", response: "5 minutes", channels: "Email, App Push" },
    { type: "Trend Deviation", response: "15 minutes", channels: "Email, Dashboard" }
  ];

  const complianceFeatures = [
    "21 CFR Part 11 Compliant",
    "FDA FSMA Traceability", 
    "USDA Documentation",
    "HACCP Validation",
    "GDP Compliance",
    "ISO 9001 Standards"
  ];

  const analytics = [
    { metric: "±0.5°F", description: "Temperature accuracy" },
    { metric: "99.9%", description: "System uptime" },
    { metric: "<30sec", description: "Alert response time" },
    { metric: "24/7/365", description: "Monitoring coverage" },
    { metric: "Unlimited", description: "Data retention" },
    { metric: "100%", description: "Compliance rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Cold Chain Monitoring & Analytics
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Real-Time Temperature Monitoring & Compliance Analytics
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive cold chain visibility with predictive analytics, automated compliance 
                reporting, and instant alerts. Ensure 100% temperature compliance while reducing 
                spoilage and regulatory risks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-blue-50 font-semibold"
                  onClick={() => window.location.href = '/quote/cold-storage'}
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.location.href = '/consultation'}
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Monitoring Stats</h3>
                <div className="grid grid-cols-2 gap-4 text-center mb-6">
                  <div>
                    <div className="text-3xl font-bold">1M+</div>
                    <div className="text-sm text-blue-100">Data Points Daily</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">±0.5°F</div>
                    <div className="text-sm text-blue-100">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-sm text-blue-100">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100">Monitoring</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Alert Response:</span>
                    <span className="font-semibold">&lt;30 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance Rate:</span>
                    <span className="font-semibold">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Advanced Monitoring Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cold chain visibility with predictive insights and automated compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {monitoringFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.features.map((item, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Complete Technology Stack</h2>
            <p className="text-xl text-muted-foreground">
              End-to-end monitoring solution with enterprise-grade reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemCapabilities.map((capability, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alert System */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Intelligent Alert System</h2>
            <p className="text-xl text-muted-foreground">
              Proactive notifications prevent problems before they impact your products
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Alert Response Times</h3>
                <div className="space-y-4">
                  {alertTypes.map((alert, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold">{alert.type}</span>
                        <Badge variant="secondary">{alert.response}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.channels}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Smart Alert Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Bell className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Predictive Alerts</h4>
                      <p className="text-sm text-muted-foreground">AI predicts potential issues before they occur</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Smart Thresholds</h4>
                      <p className="text-sm text-muted-foreground">Dynamic limits based on product type and conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Escalation Protocols</h4>
                      <p className="text-sm text-muted-foreground">Automatic escalation to management if not acknowledged</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Smartphone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Multi-Channel Delivery</h4>
                      <p className="text-sm text-muted-foreground">SMS, email, push notifications, and phone calls</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance & Reporting */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Automated Compliance Reporting</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-primary mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-primary">Regulatory Standards</h3>
                      <p className="text-muted-foreground">Meet all industry compliance requirements</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {complianceFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3ml font-bold text-primary mb-8">Performance Analytics</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {analytics.map((analytic, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{analytic.metric}</div>
                    <p className="text-sm text-muted-foreground">{analytic.description}</p>
                  </div>
                ))}
              </div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-4">Report Generation</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Daily summaries:</span>
                      <span className="font-semibold">Automated</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Audit trails:</span>
                      <span className="font-semibold">Real-time</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Custom reports:</span>
                      <span className="font-semibold">On-demand</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Data export:</span>
                      <span className="font-semibold">CSV, PDF, Excel</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default ColdChainMonitoring;