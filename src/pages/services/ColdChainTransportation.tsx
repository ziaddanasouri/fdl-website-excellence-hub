import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Thermometer, 
  CheckCircle, 
  ArrowRight, 
  BarChart3, 
  Shield, 
  Truck,
  Clock,
  MapPin,
  Phone,
  Download,
  Calculator,
  Route,
  Zap,
  Eye,
  AlertCircle,
  Users,
  Award,
  TrendingUp,
  FileText
} from 'lucide-react';

const ColdChainTransportation = () => {
  const transportServices = [
    {
      icon: Truck,
      title: "Full Truckload (FTL)",
      description: "Dedicated refrigerated trucks for large shipments with single pickup/delivery",
      features: ["53ft trailers", "Multi-temp zones", "Direct routes", "Priority handling"]
    },
    {
      icon: Route,
      title: "Less Than Truckload (LTL)",
      description: "Cost-effective consolidated shipping for smaller temperature-controlled loads",
      features: ["Shared capacity", "Regional networks", "Flexible scheduling", "Reduced costs"]
    },
    {
      icon: Zap,
      title: "Expedited Transport",
      description: "Emergency and time-critical cold chain transportation with guaranteed delivery",
      features: ["Same-day service", "24/7 dispatch", "Team drivers", "Real-time updates"]
    }
  ];

  const fleetSpecs = [
    { type: "Reefer Trailers", count: "30+", temp: "-20°F to +70°F", capacity: "53ft / 34 pallets" },
    { type: "Straight Trucks", count: "15+", temp: "0°F to +60°F", capacity: "26ft / 16 pallets" },
    { type: "Sprinter Vans", count: "8+", temp: "35°F to +55°F", capacity: "12ft / 4 pallets" }
  ];

  const monitoring = [
    {
      icon: Thermometer,
      title: "Temperature Monitoring",
      description: "Continuous tracking with ±1°F accuracy and instant alerts"
    },
    {
      icon: Eye,
      title: "GPS Tracking",
      description: "Real-time location and route monitoring with ETAs"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Automated compliance reporting and chain of custody"
    },
    {
      icon: AlertCircle,
      title: "Exception Management", 
      description: "Proactive alerts for temperature or route deviations"
    }
  ];

  const compliance = [
    "FDA Food Safety Modernization Act (FSMA)",
    "USDA Transportation Guidelines", 
    "HACCP Certified Drivers",
    "DOT Safety Compliance",
    "Temperature Excursion Protocols",
    "Chain of Custody Documentation"
  ];

  const routes = [
    { origin: "Boston, MA", destination: "New York, NY", time: "4 hours", distance: "215 miles" },
    { origin: "Albany, NY", destination: "Hartford, CT", time: "2.5 hours", distance: "140 miles" },
    { origin: "Burlington, VT", destination: "Portland, ME", time: "3 hours", distance: "180 miles" },
    { origin: "Manchester, NH", destination: "Providence, RI", time: "2 hours", distance: "120 miles" }
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
                Cold Chain Transportation
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Comprehensive Refrigerated Trucking Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                End-to-end temperature-controlled transportation with real-time monitoring, 
                compliance documentation, and cross-docking services. Maintain product 
                integrity across the entire Northeast cold chain network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold">
                  Get Transport Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="hero" size="lg">
                  View Fleet Specs
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Fleet Overview</h3>
                <div className="grid grid-cols-2 gap-4 text-center mb-6">
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm text-blue-100">Vehicles</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">6</div>
                    <div className="text-sm text-blue-100">States</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100">Dispatch</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99.8%</div>
                    <div className="text-sm text-blue-100">On-Time</div>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>Temperature Range:</span>
                    <span className="font-semibold">-20°F to +70°F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max Capacity:</span>
                    <span className="font-semibold">34 pallets per trailer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Transportation Service Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible cold chain transportation solutions for every shipment size and timeline
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transportServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
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

      {/* Fleet Specifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Modern Fleet Specifications</h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art refrigerated vehicles for every transportation need
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {fleetSpecs.map((spec, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{spec.type}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fleet Size:</span>
                      <span className="font-semibold">{spec.count}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Temperature:</span>
                      <span className="font-semibold">{spec.temp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-semibold">{spec.capacity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Advanced Monitoring Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {monitoring.map((item, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="logistics-gradient p-3 rounded-2xl w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Regulatory Compliance</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="h-8 w-8 text-primary mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-primary">100% Compliant Operations</h3>
                      <p className="text-muted-foreground">Certified to industry standards</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {compliance.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Popular Northeast Routes</h2>
            <p className="text-xl text-muted-foreground">
              Optimized cold chain corridors with guaranteed delivery windows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      <span className="font-semibold">{route.origin}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div className="flex items-center">
                      <span className="font-semibold">{route.destination}</span>
                      <MapPin className="h-5 w-5 text-primary ml-2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>{route.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Route className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>{route.distance}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="inline-block border-0 shadow-lg">
              <CardContent className="p-8">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Custom Route Planning</h3>
                <p className="text-muted-foreground mb-6">
                  Need transportation outside our standard routes? We create custom solutions.
                </p>
                <Button>
                  Calculate Custom Route
                  <Calculator className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default ColdChainTransportation;