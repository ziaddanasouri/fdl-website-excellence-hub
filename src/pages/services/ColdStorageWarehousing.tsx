import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Snowflake, 
  CheckCircle, 
  ArrowRight, 
  BarChart3, 
  Shield, 
  Thermometer,
  Clock,
  Award,
  TrendingUp,
  Phone,
  Download,
  Calculator,
  Building,
  Gauge,
  AlertTriangle
} from 'lucide-react';

const ColdStorageWarehousing = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Precision Temperature Control",
      description: "Advanced temperature management with precise controls"
    },
    {
      icon: Snowflake,
      title: "Blast Freezing Capabilities", 
      description: "Rapid temperature reduction for optimal product preservation"
    },
    {
      icon: BarChart3,
      title: "Real-Time Monitoring",
      description: "24/7 temperature tracking with instant alert systems"
    },
    {
      icon: Shield,
      title: "Quality-Grade Standards",
      description: "Industry-leading quality facilities for sensitive products"
    },
    {
      icon: Building,
      title: "Scalable Infrastructure",
      description: "Flexible space allocation from 1,000 to 100,000+ sq ft"
    },
    {
      icon: Gauge,
      title: "Energy Efficiency",
      description: "Advanced insulation and cooling systems reduce energy costs by 30%"
    }
  ];

  const industries = [
    { name: "Wine & Spirits", temp: "Cool Storage", benefit: "Preserve flavor profiles" },
    { name: "Specialty Cheese", temp: "Chilled Storage", benefit: "Control aging process" },
    { name: "Confectionery", temp: "Climate Controlled", benefit: "Prevent melting/blooming" },
    { name: "Pharmaceuticals", temp: "Refrigerated Storage", benefit: "Maintain potency" }
  ];

  const process = [
    {
      step: "01",
      title: "Temperature Assessment", 
      description: "We analyze your product requirements and design optimal storage conditions"
    },
    {
      step: "02", 
      title: "Facility Preparation",
      description: "Setup dedicated storage areas with precision monitoring equipment"
    },
    {
      step: "03",
      title: "Product Intake",
      description: "Careful receiving process with temperature validation and documentation"
    },
    {
      step: "04",
      title: "Continuous Monitoring",
      description: "24/7 supervision with real-time alerts and compliance reporting"
    }
  ];

  const pricingTiers = [
    {
      name: "Basic Cold Storage",
      price: "$2.50/sq ft/month",
      features: [
        "Standard temperature control",
        "Basic monitoring",
        "Monthly reporting",
        "Standard access hours"
      ]
    },
    {
      name: "Professional",
      price: "$3.75/sq ft/month", 
      features: [
        "Precision temperature control",
        "Real-time monitoring",
        "Weekly reporting",
        "Extended access",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      features: [
        "Advanced climate control",
        "Advanced analytics",
        "Daily reporting",
        "24/7 access",
        "Dedicated account manager",
        "Custom integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4 text-xs sm:text-sm">
                Cold Storage Solutions
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Cold Storage & Warehousing Solutions
              </h1>
               <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                Preserve product quality with precision temperature control. 
                Our certified facilities ensure 99% compliance for wine, cheese, confectionery, 
                and pharmaceutical storage.
               </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                 <Button 
                   size="lg" 
                   className="bg-white text-primary hover:bg-blue-50 font-semibold min-h-[48px] text-base sm:text-lg"
                   onClick={() => window.location.href = '/contact'}
                 >
                   Contact Us
                   <ArrowRight className="ml-2 h-5 w-5" />
                 </Button>
                <Button 
                  variant="hero" 
                  size="lg"
                  className="min-h-[48px] text-base sm:text-lg"
                  onClick={() => window.location.href = '/consultation'}
                >
                  Schedule Facility Tour
                </Button>
              </div>
            </div>
            <div className="lg:text-right mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Storage Capacity</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold">500K+</div>
                    <div className="text-xs sm:text-sm text-blue-100">Sq Ft Available</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold">99%</div>
                    <div className="text-xs sm:text-sm text-blue-100">Temp Compliance</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                    <div className="text-xs sm:text-sm text-blue-100">Monitoring</div>
                  </div>
                   <div>
                     <div className="text-2xl sm:text-3xl font-bold">Ultra-Low</div>
                     <div className="text-xs sm:text-sm text-blue-100">Temperature Storage</div>
                   </div>
                </div>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                  <Badge className="bg-green-500/20 text-green-100 border-green-300/30 text-xs sm:text-sm">
                    ✓ Available Space - Contact Now!
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                The Cost of Inadequate Cold Storage
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Product Spoilage:</strong> Temperature excursions cause up to 40% product loss</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Quality Violations:</strong> Industry penalties range from $10K to $500K</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Quality Degradation:</strong> Improper storage reduces shelf life by 70%</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p><strong>Customer Returns:</strong> Temperature damage increases returns by 300%</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Temperature-Controlled Solution
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>Precision Control:</strong> Precise accuracy with zone-specific settings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>Guaranteed Quality:</strong> Industry-leading quality facilities and processes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>Instant Alerts:</strong> Real-time notifications prevent temperature excursions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>ROI Guarantee:</strong> Reduce spoilage costs by 95% or money back</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Advanced Cold Storage Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art technology and processes ensure your products maintain optimal quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Tailored temperature ranges for optimal product preservation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-primary">{industry.name}</h3>
                    <Badge variant="secondary">{industry.temp}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{industry.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Storage Process</h2>
            <p className="text-xl text-muted-foreground">
              From intake to delivery, every step ensures optimal temperature control
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="logistics-gradient text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      <Footer />
    </div>
  );
};

export default ColdStorageWarehousing;