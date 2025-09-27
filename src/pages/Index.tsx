
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Truck, 
  Package, 
  Globe, 
  Clock, 
  Shield, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  Zap,
  Target,
  Mail,
  Phone,
  Thermometer,
  Snowflake,
  Wine
} from 'lucide-react';

const Index = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const stats = [
    { label: 'Cold Storage Capacity', value: '2M+ ft³', icon: Snowflake },
    { label: 'Northeast Locations', value: '25+', icon: Globe },
    { label: 'Temperature Zones', value: '50+', icon: Thermometer },
    { label: 'Years Cold Chain Experience', value: '25+', icon: Award },
  ];

  const services = [
    {
      icon: Snowflake,
      title: 'Cold Storage & Warehousing',
      description: 'Multi-temperature zone facilities with specialized cold storage capabilities.',
      features: ['Temperature Control (-20°F to +60°F)', 'Blast Freezing', 'Real-Time Monitoring']
    },
    {
      icon: Truck,
      title: 'Last Mile Delivery',
      description: 'Final mile delivery solutions with optimized routing across the Northeast region.',
      features: ['GPS Tracking', 'Route Optimization', 'Northeast Coverage']
    },
    {
      icon: Wine,
      title: 'Specialized Handling',
      description: 'Expert handling for wine, cheese, confectionery, and foodservice products.',
      features: ['Wine Storage (55-60°F)', 'Cheese Aging (35-40°F)', 'Climate Control']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorps Inc.',
      role: 'Supply Chain Director',
      content: 'FDL transformed our logistics operations. Their 3PL services reduced our costs by 30% while improving delivery times.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-Store Solutions',
      role: 'CEO',
      content: 'Outstanding last-mile delivery service. Our customer satisfaction scores increased dramatically since partnering with FDL.',
      rating: 5
    },
    {
      name: 'Jennifer Rodriguez',
      company: 'Global Retail Co.',
      role: 'Operations Manager',
      content: 'The best logistics partner we\'ve ever worked with. Professional, reliable, and always exceeding expectations.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Cold Storage Solutions That 
                <span className="text-blue-300 block">Preserve Your Quality</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                From wine storage to refrigerated delivery, FDL DNT provides specialized temperature-controlled 
                logistics solutions across the Northeast. Preserving quality for 25+ years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-primary hover:bg-blue-50 font-semibold py-4 px-8 text-lg"
                  onClick={() => window.location.href = '/quote/cold-storage'}
                >
                  Get Cold Storage Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Tracking Widget */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl animate-float">
              <h3 className="text-2xl font-bold text-primary mb-6">Track Your Shipment</h3>
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter tracking number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="text-lg py-6"
                />
                <Button className="w-full cta-button text-lg py-6">
                  Track Package
                  <Package className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <CheckCircle className="inline h-4 w-4 mr-1" />
                  Real-time tracking updates available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Cold Storage Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized temperature-controlled solutions designed to preserve quality and ensure compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card-hover border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      const serviceRoutes = {
                        "Cold Storage & Warehousing": "/services/cold-storage-warehousing",
                        "Last Mile Delivery": "/services/last-mile-delivery", 
                        "Specialized Handling": "/services/temperature-controlled-warehousing"
                      };
                      window.location.href = serviceRoutes[service.title as keyof typeof serviceRoutes];
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FDL Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Why Choose FDL DNT Cold Storage?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We combine advanced temperature control technology with cold chain expertise to deliver unmatched preservation solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Temperature Precision</h3>
                    <p className="text-muted-foreground">Advanced climate control systems ensure precise temperature maintenance 24/7.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Cold Chain Integrity</h3>
                    <p className="text-muted-foreground">Unbroken cold chain protocols preserve product quality from storage to delivery.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">99.9% Compliance</h3>
                    <p className="text-muted-foreground">Temperature compliance tracking with real-time monitoring and alerts.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55" 
                alt="Modern warehouse facility" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">99.9%</p>
                    <p className="text-sm text-muted-foreground">Temperature Compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA Section */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Cold Chain?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Download our free Cold Chain Optimization Guide and discover how to maintain 99.9% temperature compliance 
            while reducing spoilage and improving product quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your business email" 
              className="bg-white text-gray-900 border-0"
            />
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold px-8">
              Get Cold Chain Guide
            </Button>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.location.href = '/consultation'}
            >
              <Phone className="h-4 w-4 mr-2" />
              Schedule Cold Storage Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
