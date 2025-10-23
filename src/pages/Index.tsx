
import React from 'react';
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
  Wine,
  MapPin
} from 'lucide-react';
import ZipCodeChecker from '@/components/ZipCodeChecker';
import wineBoxesImage from '@/assets/wine-boxes.png';
import heroHandcartWine from '@/assets/hero-handcart-wine.jpg';

const Index = () => {

  const stats = [
    { label: 'Over 1 million cases delivered annually', value: '1M+', icon: Package },
    { label: '6 warehouse locations', value: '6', icon: Truck },
    { label: '200+ customers served', value: '200+', icon: Users },
    { label: '25+ years experience', value: '25+', icon: Award },
  ];

  const services = [
    {
      icon: Package,
      title: '3PL Services',
      description: 'Comprehensive 3PL services including inventory management and order processing.',
      features: ['Inventory Management', 'Order Fulfillment', 'Returns Processing', 'Pick & Pack', 'Refrigerated Storage', 'Cross-dock', 'Bonded Warehousing', 'Container Unloading', 'Labeling']
    },
    {
      icon: Truck,
      title: 'Last-Mile Delivery',
      description: 'Reliable temperature-controlled delivery services for wine, cheese, and chocolates across the Northeast.',
      features: ['Next-day delivery', 'Temperature-controlled', 'Northeast coverage']
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
                Complete 3PL Solutions That 
                <span className="text-blue-300 block">Power Your Growth</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                From 3PL services to last-mile delivery, FDL provides world-class temperature-controlled logistics solutions.
              </p>
              <p className="text-xl text-blue-100 leading-relaxed">
                We use the latest technology to provide efficient, transparent, and 99% accurate 3PL services.
              </p>
            </div>
            
            <div className="relative">
              <div className="pointer-events-none">
                <ZipCodeChecker />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm rounded-lg">
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg font-semibold text-lg">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
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
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We receive, warehouse, and deliver your wine, cheese, and chocolates with 99% accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Us to Learn More
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
              <h2 className="text-4xl font-bold text-primary mb-6">Why Choose FDL DNT 3PL Services?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We combine advanced logistics technology with 3PL expertise to deliver unmatched operational efficiency solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Operational Excellence</h3>
                    <p className="text-muted-foreground">Advanced warehouse management systems ensure optimal inventory accuracy and efficiency 24/7.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Supply Chain Excellence</h3>
                    <p className="text-muted-foreground">Integrated logistics protocols optimize product flow from receiving to delivery.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">99% Accuracy</h3>
                    <p className="text-muted-foreground">Inventory accuracy tracking with real-time monitoring and alerts.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={wineBoxesImage} 
                alt="Wine packaging and delivery boxes" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
