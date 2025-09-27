import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Warehouse, 
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
  Wine,
  ChefHat,
  Candy,
  Droplets,
  Eye,
  Lock
} from 'lucide-react';

const TemperatureControlledWarehousing = () => {
  const capabilities = [
    {
      icon: Wine,
      title: "Wine Storage Excellence",
      temp: "55-60°F",
      description: "Maintain perfect wine conditions with humidity control and vibration isolation",
      features: ["Humidity 50-80%", "Vibration-free environment", "UV protection", "Proper ventilation"]
    },
    {
      icon: ChefHat,
      title: "Cheese Aging Facilities", 
      temp: "35-40°F",
      description: "Specialized aging environments for artisan cheeses with precise humidity",
      features: ["Humidity 80-95%", "Air circulation control", "Separate aging rooms", "Quality monitoring"]
    },
    {
      icon: Candy,
      title: "Confectionery Control",
      temp: "60-70°F", 
      description: "Prevent blooming and melting with precise temperature and humidity management",
      features: ["Low humidity control", "Consistent temperature", "Clean environment", "Quick access"]
    }
  ];

  const technologies = [
    {
      icon: Thermometer,
      title: "Multi-Zone Climate Control",
      description: "Independent temperature and humidity control for each storage zone"
    },
    {
      icon: Eye,
      title: "24/7 Environmental Monitoring", 
      description: "Real-time tracking of temperature, humidity, and air quality"
    },
    {
      icon: Shield,
      title: "Backup Systems",
      description: "Redundant cooling and power systems ensure continuous operation"
    },
    {
      icon: Lock,
      title: "Secure Access Control",
      description: "Biometric and keycard access with detailed activity logging"
    },
    {
      icon: Droplets,
      title: "Humidity Management",
      description: "Precise humidity control from 30% to 95% based on product needs"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed reporting on storage conditions and compliance metrics"
    }
  ];

  const benefits = [
    { metric: "99.8%", description: "Temperature accuracy maintained" },
    { metric: "50%", description: "Reduction in product degradation" },
    { metric: "24/7", description: "Continuous monitoring coverage" },
    { metric: "15min", description: "Maximum response time to alerts" },
    { metric: "100%", description: "Regulatory compliance rate" },
    { metric: "30%", description: "Energy efficiency improvement" }
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
                Temperature-Controlled Warehousing
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Precision Climate Control for Premium Products
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                Specialized warehousing for wine, cheese, and confectionery products with 
                precise temperature and humidity management. Maintain product integrity 
                from storage to distribution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-blue-50 font-semibold min-h-[48px] text-base sm:text-lg"
                  onClick={() => window.location.href = '/consultation'}
                >
                  Request Warehouse Tour
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="hero" 
                  size="lg"
                  className="min-h-[48px] text-base sm:text-lg"
                  onClick={() => window.location.href = '/quote/cold-storage'}
                >
                  Get Storage Quote
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Climate Zones</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center"><Wine className="h-4 w-4 mr-2" /> Wine Storage</span>
                    <Badge variant="secondary">55-60°F</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center"><ChefHat className="h-4 w-4 mr-2" /> Cheese Aging</span>
                    <Badge variant="secondary">35-40°F</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center"><Candy className="h-4 w-4 mr-2" /> Confectionery</span>
                    <Badge variant="secondary">60-70°F</Badge>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold">250K+ sq ft</div>
                      <div className="text-sm text-blue-100">Total Climate-Controlled Space</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Specialized Storage Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each product category requires unique environmental conditions for optimal preservation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">{capability.title}</h3>
                    <Badge className="bg-green-100 text-green-800">{capability.temp}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-6">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
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

      {/* Technology Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Advanced Warehousing Technology</h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art systems ensure perfect environmental conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Proven Performance Results</h2>
            <p className="text-xl text-muted-foreground">
              Our clients see measurable improvements in product quality and compliance
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

      {/* Case Study Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Success Story</Badge>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Premium Wine Distributor Reduces Losses by 85%
              </h2>
              <p className="text-muted-foreground mb-6">
                A Northeast wine distributor was losing $200K annually due to temperature fluctuations 
                in their previous storage facility. After switching to our climate-controlled warehousing:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-3" />
                  <span><strong>85% reduction</strong> in wine spoilage and cork damage</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-600 mr-3" />
                  <span><strong>100% compliance</strong> with wine storage regulations</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-5 w-5 text-green-600 mr-3" />
                  <span><strong>$170K annual savings</strong> in reduced product loss</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <span><strong>ROI achieved</strong> within 8 months of switching</span>
                </div>
              </div>
              <Button>
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary">$170K</div>
                    <p className="text-muted-foreground">Annual Savings Achieved</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Previous spoilage cost:</span>
                      <span className="font-semibold">$200K/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current spoilage cost:</span>
                      <span className="font-semibold text-green-600">$30K/year</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Net Annual Savings:</span>
                        <span className="text-green-600">$170K</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Calculate Your Potential Savings</h2>
          <p className="text-xl text-green-100 mb-8">
            See how switching to our temperature-controlled warehousing can reduce your spoilage costs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-green-50">
              Start Savings Calculator
              <Calculator className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero" size="lg">
              Download ROI Guide
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Premium Products?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading wine, cheese, and confectionery brands who trust us with their 
            temperature-sensitive inventory. Schedule a facility tour today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold">
              Schedule Facility Tour
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Speak with Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TemperatureControlledWarehousing;