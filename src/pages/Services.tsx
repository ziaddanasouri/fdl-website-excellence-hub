
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Package, 
  Truck, 
  Warehouse, 
  Globe, 
  ArrowRightLeft, 
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: '3PL Services',
      description: 'Complete third-party logistics solutions from inventory management to order fulfillment.',
      features: [
        'Inventory Management & Control',
        'Order Processing & Fulfillment', 
        'Pick, Pack & Ship Operations',
        'Returns Management',
        'Quality Control & Inspection',
        'Kitting & Assembly Services'
      ],
      benefits: 'Reduce operational costs by 25-40% while improving accuracy and speed'
    },
    {
      icon: Warehouse,
      title: 'Warehousing Solutions',
      description: 'State-of-the-art warehousing facilities with advanced automation and technology.',
      features: [
        'Climate-Controlled Storage',
        'Automated Storage Systems',
        'Real-Time Inventory Tracking',
        'Security & Surveillance',
        'Flexible Storage Options',
        'Hazmat Handling Certified'
      ],
      benefits: 'Scale storage capacity on-demand without capital investment'
    },
    {
      icon: Truck,
      title: 'Last Mile Delivery',
      description: 'Fast, reliable last-mile delivery solutions for e-commerce and retail customers.',
      features: [
        'Same-Day & Next-Day Delivery',
        'White Glove Delivery Service',
        'Real-Time GPS Tracking',
        'Proof of Delivery',
        'Flexible Delivery Windows',
        'Special Handling Services'
      ],
      benefits: 'Improve customer satisfaction with 98.5% on-time delivery rate'
    },
    {
      icon: Globe,
      title: 'Global Transportation',
      description: 'Comprehensive freight and transportation services across all modes worldwide.',
      features: [
        'Air Freight Services',
        'Ocean Freight & LCL',
        'Ground Transportation',
        'Expedited Shipping',
        'Customs Clearance',
        'Trade Documentation'
      ],
      benefits: 'Access global markets with our extensive transportation network'
    },
    {
      icon: ArrowRightLeft,
      title: 'Cross-Docking',
      description: 'Efficient cross-docking operations to minimize storage time and costs.',
      features: [
        'Direct Product Transfer',
        'Consolidation Services',
        'Sorting & Redistribution',
        'Reduced Storage Costs',
        'Faster Transit Times',
        'Quality Control Checks'
      ],
      benefits: 'Reduce inventory holding costs and improve cash flow'
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Analytics',
      description: 'Advanced analytics and reporting to optimize your supply chain performance.',
      features: [
        'Real-Time Dashboards',
        'Performance Metrics',
        'Predictive Analytics',
        'Cost Analysis Reports',
        'Demand Forecasting',
        'KPI Tracking'
      ],
      benefits: 'Make data-driven decisions to optimize operations and reduce costs'
    }
  ];

  const industries = [
    { name: 'E-commerce', icon: Package, description: 'Tailored solutions for online retailers' },
    { name: 'Retail', icon: Users, description: 'Traditional and omnichannel retail support' },
    { name: 'Manufacturing', icon: Warehouse, description: 'Industrial logistics and distribution' },
    { name: 'Healthcare', icon: Shield, description: 'Compliant medical supply chain solutions' },
    { name: 'Technology', icon: Zap, description: 'High-tech product logistics and fulfillment' },
    { name: 'Automotive', icon: Truck, description: 'Just-in-time automotive supply chain' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Comprehensive Logistics Services</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From 3PL operations to global transportation, we provide end-to-end logistics solutions 
            that scale with your business and exceed your customers' expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Download Services Brochure
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
                      
                      <Button className="w-full sm:w-auto">
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
            <h2 className="text-4xl font-bold text-primary mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized logistics solutions tailored to the unique requirements of your industry
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

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">Simple, streamlined, and scalable</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analysis', description: 'We analyze your current logistics operations and identify optimization opportunities.' },
              { step: '02', title: 'Design', description: 'Our experts design a customized logistics solution tailored to your specific needs.' },
              { step: '03', title: 'Implementation', description: 'We implement the solution with minimal disruption to your existing operations.' },
              { step: '04', title: 'Optimization', description: 'Continuous monitoring and optimization to ensure peak performance and ROI.' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="logistics-gradient text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Logistics?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our logistics experts design a custom solution that reduces costs, improves efficiency, 
            and scales with your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Get Quote Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
