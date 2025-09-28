
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
  Store
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Snowflake,
      title: 'Cold Storage & Warehousing',
      description: 'Multi-temperature zone facilities with blast freezing capabilities and specialized cold storage.',
      features: [
        'Multi-Temperature Zone Control (-20°F to +60°F)',
        'Blast Freezing Capabilities', 
        'Temperature Monitoring Systems',
        'Cold Storage Inventory Management',
        'Pharmaceutical-Grade Environments',
        'Quality-Assured Facilities'
      ],
      benefits: 'Maintain 99.9% temperature accuracy while reducing spoilage by up to 95%'
    },
    {
      icon: Warehouse,
      title: 'Temperature-Controlled Warehousing',
      description: 'Specialized cold storage facilities with precise climate control for perishable goods.',
      features: [
        'Wine Storage (55-60°F Stable)',
        'Cheese Aging Facilities (35-40°F)',
        'Confectionery Climate Control',
        'Real-Time Temperature Monitoring',
        'Humidity Management Systems',
        'Separate Zone Capabilities'
      ],
      benefits: 'Extend product shelf life and maintain quality with specialized storage'
    },
    {
      icon: Truck,
      title: 'Last Mile Delivery',
      description: 'Final mile delivery solutions with optimized routing and flexible scheduling options.',
      features: [
        'GPS Tracking & Route Optimization',
        '2-Hour Delivery Windows', 
        'Real-Time Delivery Updates',
        'Northeast Regional Coverage',
        'Same-Day & Next-Day Options',
        'Flexible Scheduling Solutions'
      ],
      benefits: 'Achieve 95% first-attempt success rate while improving customer satisfaction'
    },
    {
      icon: ArrowRightLeft,
      title: 'Cold Chain Cross-Docking',
      description: 'Temperature-controlled transfer facilities minimizing cold chain breaks for perishable goods.',
      features: [
        'Climate-Controlled Transfer',
        'Minimal Cold Chain Breaks',
        'Temperature Validation',
        'Specialized Loading Docks',
        'Quick Transfer Protocols',
        'Quality Control Checks'
      ],
      benefits: 'Reduce handling time while maintaining temperature integrity'
    },
  ];

  const industries = [
    { name: 'Wine & Spirits', icon: Wine, description: 'Temperature-controlled wine and beverage logistics' },
    { name: 'Specialty Cheese', icon: ChefHat, description: 'Artisan cheese and dairy cold storage' },
    { name: 'Confectionery', icon: Candy, description: 'Chocolate and sweets climate control' },
    { name: 'Foodservice', icon: Store, description: 'Restaurant and retail supply chains' },
    { name: 'Fresh Produce', icon: Snowflake, description: 'Farm-to-table cold chain solutions' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Temperature-Controlled Logistics Services</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From cold storage to refrigerated delivery, we provide specialized temperature-controlled solutions 
            that preserve quality and maintain standards across the Northeast region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8" onClick={() => window.location.href = '/quote/cold-storage'}>
              Get Cold Storage Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero" onClick={() => window.location.href = '/cold-chain-guide'}>
              Download Cold Chain Guide
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
                        onClick={() => {
                          const serviceRoutes = [
                            '/services/cold-storage-warehousing',
                            '/services/temperature-controlled-warehousing', 
                            '/services/last-mile-delivery',
                            '/services/cold-chain-cross-docking'
                          ];
                          window.location.href = serviceRoutes[index];
                        }}
                      >
                        Learn More
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
            <h2 className="text-4xl font-bold text-primary mb-4">Cold Storage Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized temperature-controlled solutions for perishable goods across Northeast markets
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
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Cold Chain?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our cold storage experts design a temperature-controlled solution that preserves quality, 
            maintains quality standards, and scales with your perishable goods business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8" onClick={() => window.location.href = '/consultation'}>
              Schedule Cold Storage Consultation
            </Button>
            <Button variant="hero" onClick={() => window.location.href = '/quote/cold-storage'}>
              Get Cold Chain Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
