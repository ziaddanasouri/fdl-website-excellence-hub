import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Truck, 
  CheckCircle, 
  ArrowRight, 
  BarChart3, 
  Shield, 
  Thermometer,
  Clock,
  MapPin,
  Phone,
  Download,
  Calculator,
  Route,
  Zap,
  Eye,
  AlertTriangle,
  Target,
  Users
} from 'lucide-react';

const RefrigeratedDelivery = () => {
  const fleetCapabilities = [
    {
      icon: Truck,
      title: "Modern Fleet",
      description: "50+ refrigerated vehicles from sprinter vans to 53ft trailers"
    },
    {
      icon: Thermometer,
      title: "Multi-Temperature",
      description: "Simultaneous delivery of frozen, chilled, and ambient products"
    },
    {
      icon: Eye,
      title: "Real-Time Tracking",
      description: "GPS monitoring with live temperature data and delivery updates"
    },
    {
      icon: Route,
      title: "Route Optimization",
      description: "AI-powered routing reduces delivery time and maintains cold chain"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "HACCP certified drivers and FDA-compliant documentation"
    },
    {
      icon: Zap,
      title: "Emergency Response",
      description: "24/7 dispatch for urgent cold chain deliveries"
    }
  ];

  const serviceAreas = [
    { state: "New York", cities: "NYC, Albany, Buffalo, Rochester", coverage: "Statewide" },
    { state: "Massachusetts", cities: "Boston, Springfield, Worcester", coverage: "Statewide" },
    { state: "Connecticut", cities: "Hartford, New Haven, Bridgeport", coverage: "Statewide" },
    { state: "Vermont", cities: "Burlington, Montpelier", coverage: "Major Cities" },
    { state: "New Hampshire", cities: "Manchester, Nashua, Concord", coverage: "Major Cities" },
    { state: "Maine", cities: "Portland, Bangor", coverage: "Coastal Regions" }
  ];

  const deliveryTypes = [
    {
      title: "Last-Mile Delivery",
      description: "Direct to consumer cold chain delivery with signature confirmation",
      features: ["1-2 hour windows", "SMS notifications", "Photo confirmation", "Temperature logs"]
    },
    {
      title: "Route Delivery", 
      description: "Scheduled B2B deliveries to restaurants, retailers, and distributors",
      features: ["Multi-stop routes", "Bulk deliveries", "Invoice on delivery", "Recurring schedules"]
    },
    {
      title: "Emergency Delivery",
      description: "Urgent cold chain transport with expedited service guarantees", 
      features: ["2-hour response", "24/7 availability", "Priority routing", "Direct delivery"]
    }
  ];

  const performance = [
    { metric: "99.5%", description: "On-time delivery rate" },
    { metric: "100%", description: "Temperature compliance" },
    { metric: "2.5hrs", description: "Average delivery window" },
    { metric: "50+", description: "Vehicles in fleet" },
    { metric: "24/7", description: "Emergency availability" },
    { metric: "6", description: "States covered" }
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
                Refrigerated Delivery Solutions
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Cold Chain Delivery Across the Northeast
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Maintain temperature integrity from warehouse to destination with our modern 
                refrigerated fleet. Real-time tracking, compliance documentation, and 
                guaranteed on-time delivery across 6 Northeast states.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold">
                  Schedule Delivery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="hero" size="lg">
                  Get Delivery Quote
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Delivery Coverage</h3>
                <div className="grid grid-cols-2 gap-4 text-center mb-6">
                  <div>
                    <div className="text-3xl font-bold">6</div>
                    <div className="text-sm text-blue-100">States Covered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm text-blue-100">Fleet Vehicles</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99.5%</div>
                    <div className="text-sm text-blue-100">On-Time Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100">Emergency Service</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>NY • MA • CT • VT • NH • ME</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Advanced Fleet Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art refrigerated vehicles equipped with the latest cold chain technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetCapabilities.map((capability, index) => (
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

      {/* Service Coverage */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Northeast Coverage Area</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive refrigerated delivery service across major Northeast markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">{area.state}</h3>
                    <Badge variant="secondary">{area.coverage}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Major Cities:</p>
                  <p className="text-sm font-medium">{area.cities}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="inline-block border-0 shadow-lg">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Need Delivery Outside Our Coverage Area?</h3>
                <p className="text-muted-foreground mb-6">
                  We partner with certified carriers to extend our cold chain network nationwide
                </p>
                <Button>
                  Request Custom Coverage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Delivery Service Options</h2>
            <p className="text-xl text-muted-foreground">
              Flexible solutions for B2B and B2C cold chain delivery requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deliveryTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">{type.title}</h3>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <div className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Delivery Performance</h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading reliability and customer satisfaction metrics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {performance.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{metric.metric}</div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Common Cold Chain Delivery Challenges
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Temperature Breaks:</strong> Standard delivery damages temperature-sensitive products</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>No Visibility:</strong> Lack of real-time tracking leads to customer complaints</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Delivery Windows:</strong> Long, unreliable timeframes frustrate customers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Documentation:</strong> Manual processes create compliance gaps</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Cold Chain Delivery Solution
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>Guaranteed Temperature:</strong> Continuous cold chain with real-time monitoring</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>Live Tracking:</strong> GPS and temperature data shared with customers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>Precise Windows:</strong> 2-hour delivery windows with SMS updates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>Digital Documentation:</strong> Automated compliance reporting and POD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Calculator */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Calculate Your Delivery Costs</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get instant pricing for cold chain delivery routes across the Northeast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
              Launch Route Calculator
              <Calculator className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero" size="lg">
              Download Rate Card
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Deliver with Confidence?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 300+ businesses who trust our refrigerated delivery network. 
            Get guaranteed cold chain integrity from pickup to delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold">
              Schedule First Delivery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Call Dispatch: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefrigeratedDelivery;