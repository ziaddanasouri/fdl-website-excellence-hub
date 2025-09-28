import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRightLeft, 
  CheckCircle, 
  ArrowRight, 
  BarChart3, 
  Shield, 
  Thermometer,
  Clock,
  Zap,
  Phone,
  Download,
  Calculator,
  Package,
  Truck,
  Eye,
  AlertTriangle,
  Target,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const ColdChainCrossDocking = () => {
  const crossDockServices = [
    {
      icon: Zap,
      title: "Rapid Transfer",
      description: "Minimize dwell time with <2 hour temperature-controlled transfers",
      features: ["Direct dock-to-dock", "No storage delays", "Continuous cold chain", "Express processing"]
    },
    {
      icon: Package,
      title: "Consolidation Services",
      description: "Combine multiple shipments while maintaining temperature integrity",
      features: ["Multi-supplier pickup", "Single delivery", "Load optimization", "Cost reduction"]
    },
    {
      icon: Target,
      title: "Distribution Hub",
      description: "Break bulk shipments for multiple destinations efficiently",
      features: ["Order splitting", "Multi-drop routing", "Flexible scheduling", "Last-mile prep"]
    }
  ];

  const facilitiesSpecs = [
    {
      title: "Climate-Controlled Docks",
      description: "12 temperature-controlled loading bays with seamless truck-to-truck transfer",
      specs: ["Temperature range: Ultra-low to ambient", "Dock seals prevent air infiltration", "Automated temperature logging", "24/7 monitoring systems"]
    },
    {
      title: "Quick Transfer Protocols",
      description: "Streamlined processes ensure minimal cold chain interruption",
      specs: ["<15 minute dock assignments", "Pre-staged receiving areas", "Quality control checkpoints", "Real-time status updates"]
    },
    {
      title: "Technology Integration",
      description: "Advanced systems track every pallet through the cross-dock process",
      specs: ["RFID tracking", "Barcode scanning", "Temperature sensors", "Automated documentation"]
    }
  ];

  const benefits = [
    { metric: "<2hrs", description: "Maximum transfer time" },
    { metric: "99.9%", description: "Temperature compliance" },
    { metric: "12", description: "Climate-controlled docks" },
    { metric: "30%", description: "Cost reduction vs storage" },
    { metric: "24/7", description: "Operation hours" },
    { metric: "±0.5°", description: "Temperature precision" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Inbound Scheduling",
      description: "Advanced scheduling system coordinates arrivals to minimize wait times"
    },
    {
      step: "02", 
      title: "Temperature Validation",
      description: "Incoming products verified for temperature compliance before transfer"
    },
    {
      step: "03",
      title: "Cross-Dock Transfer", 
      description: "Direct transfer between vehicles in temperature-controlled environment"
    },
    {
      step: "04",
      title: "Outbound Dispatch",
      description: "Expedited loading and dispatch with continued temperature monitoring"
    }
  ];

  const useCases = [
    {
      title: "Multi-Temperature LTL",
      description: "Consolidate chilled and ambient products for efficient delivery",
      benefits: ["40% cost reduction", "Single delivery window", "Simplified logistics"]
    },
    {
      title: "Retail Distribution",
      description: "Break bulk shipments for multiple store locations while maintaining cold chain",
      benefits: ["Faster store delivery", "Reduced inventory", "Lower handling costs"]
    },
    {
      title: "Import Deconsolidation", 
      description: "Split imported container loads for domestic distribution networks",
      benefits: ["Port-to-door efficiency", "Customs clearance", "Regional distribution"]
    }
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
                Cold Chain Cross-Docking
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Temperature-Controlled Transfer Facilities
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Minimize cold chain breaks with rapid cross-docking services. Our climate-controlled 
                facilities enable seamless transfers, consolidation, and distribution while 
                maintaining product integrity throughout the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold">
                  Schedule Cross-Dock
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="hero" size="lg">
                  Tour Our Facility
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Cross-Dock Capabilities</h3>
                <div className="grid grid-cols-2 gap-4 text-center mb-6">
                  <div>
                    <div className="text-3xl font-bold">12</div>
                    <div className="text-sm text-blue-100">Temp-Controlled Docks</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">&lt;2hrs</div>
                    <div className="text-sm text-blue-100">Transfer Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100">Operations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-sm text-blue-100">Temp Compliance</div>
                  </div>
                </div>
                   <div className="space-y-2 text-sm">
                     <div className="flex justify-between">
                       <span>Temperature Range:</span>
                       <span className="font-semibold">Ultra-low to ambient</span>
                     </div>
                  <div className="flex justify-between">
                    <span>Max Throughput:</span>
                    <span className="font-semibold">500 pallets/hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Dock Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Cross-Docking Service Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible temperature-controlled transfer solutions for every logistics challenge
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {crossDockServices.map((service, index) => (
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

      {/* Facility Specifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Advanced Facility Design</h2>
            <p className="text-xl text-muted-foreground">
              Purpose-built for efficient temperature-controlled product transfers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {facilitiesSpecs.map((spec, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                    <ArrowRightLeft className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{spec.title}</h3>
                  <p className="text-muted-foreground mb-6">{spec.description}</p>
                  <div className="space-y-3">
                    {spec.specs.map((item, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm">
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

      {/* Process Flow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Streamlined Cross-Dock Process</h2>
            <p className="text-xl text-muted-foreground">
              Optimized workflow ensures minimal dwell time and maximum temperature control
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="logistics-gradient text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Cross-Dock Performance</h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading efficiency and temperature compliance metrics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{benefit.metric}</div>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Common Cross-Dock Applications</h2>
            <p className="text-xl text-muted-foreground">
              Versatile solutions for complex cold chain logistics challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Key Benefits:</h4>
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <TrendingUp className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Traditional Cross-Dock Challenges
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Temperature Loss:</strong> Extended dwell times compromise cold chain integrity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Coordination Issues:</strong> Poor scheduling creates bottlenecks and delays</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Limited Visibility:</strong> Lack of real-time tracking during transfers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Quality Control:</strong> Inadequate inspection and validation processes</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Climate-Controlled Solution
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>Continuous Cold Chain:</strong> Sealed dock systems maintain temperature integrity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>Advanced Scheduling:</strong> AI-optimized dock assignments minimize wait times</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>Real-Time Tracking:</strong> Complete visibility throughout the transfer process</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>Quality Assurance:</strong> Comprehensive validation at every checkpoint</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default ColdChainCrossDocking;