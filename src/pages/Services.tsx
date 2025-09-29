
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Snowflake, 
  Truck, 
  Warehouse, 
  Thermometer, 
  ArrowRightLeft, 
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Users,
  Wine,
  ChefHat,
  Candy,
  Store,
  Package
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Warehouse,
      title: 'Warehousing & Distribution',
      description: 'Complete warehousing solutions including general storage and specialized temperature-controlled facilities.',
      features: [
        'General Warehousing',
        'Temperature-Controlled Storage', 
        'Inventory Management Systems',
        'Distribution Services',
        'Cross-Docking Capabilities',
        'Quality-Assured Facilities'
      ],
      benefits: 'Maintain 99% inventory accuracy while reducing storage costs by up to 30%'
    },
    {
      icon: Package,
      title: 'Fulfillment Services',
      description: 'Complete order fulfillment from receiving to shipping with pick, pack, and returns processing.',
      features: [
        'Pick & Pack Operations',
        'Kitting & Assembly',
        'Returns Processing',
        'Order Management Systems',
        'Real-time Inventory Tracking',
        'Quality Control'
      ],
      benefits: 'Achieve 99% order accuracy while reducing fulfillment costs'
    },
    {
      icon: Truck,
      title: 'Transportation & Delivery',
      description: 'Comprehensive transportation management including LTL, FTL, and last mile delivery solutions.',
      features: [
        'GPS Tracking & Route Optimization',
        'LTL & FTL Services', 
        'Last Mile Delivery',
        'Northeast Regional Coverage',
        'Next-Day Delivery',
        'Real-Time Visibility'
      ],
      benefits: 'Achieve 95% on-time delivery while reducing transportation costs'
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Consulting',
      description: 'Expert supply chain analysis and optimization services to improve efficiency and reduce costs.',
      features: [
        'Supply Chain Analysis',
        'Process Optimization',
        'Cost Reduction Strategies',
        'Technology Integration',
        'Performance Metrics',
        'Continuous Improvement'
      ],
      benefits: 'Reduce operational costs by 20-40% while improving service levels'
    },
  ];

  const industries = [
    { name: 'Wine & Spirits', icon: Wine, description: 'Temperature-controlled wine and spirits storage and distribution' },
    { name: 'Fine Cheeses', icon: ChefHat, description: 'Specialized cold chain logistics for premium cheese products' },
    { name: 'Chocolate & Confections', icon: Candy, description: 'Climate-controlled storage for chocolate and confectionery items' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Complete 3PL Logistics Services</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From warehousing to fulfillment to transportation, we provide comprehensive 3PL solutions 
            that optimize operations and drive efficiency across the Northeast region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8" onClick={() => window.location.href = '/quote/3pl-services'}>
              Get 3PL Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero" onClick={() => window.location.href = '/3pl-guide'}>
              Download 3PL Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="logistics-gradient p-4 rounded-2xl flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <p className="text-sm text-primary font-medium">
                          <BarChart3 className="inline h-4 w-4 mr-1" />
                          {service.benefits}
                        </p>
                      </div>
                      
                      <Button 
                        className="w-full sm:w-auto"
                        onClick={() => window.location.href = '/contact'}
                      >
                        Contact Us to Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive 3PL solutions across diverse industries and markets throughout the Northeast
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our 3PL experts design a comprehensive logistics solution that optimizes operations, 
            reduces costs, and scales with your growing business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8" onClick={() => window.location.href = '/consultation'}>
              Schedule 3PL Consultation
            </Button>
            <Button variant="hero" onClick={() => window.location.href = '/quote/3pl-services'}>
              Get 3PL Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
