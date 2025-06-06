
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShoppingCart, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Award,
  BarChart3,
  Phone,
  Download,
  Globe,
  Zap,
  Shield,
  Users,
  Package,
  Truck,
  ArrowRightLeft,
  Brain,
  Eye,
  Lock
} from 'lucide-react';

const EcommerceSolution = () => {
  const fortune100Clients = [
    { name: 'Amazon', logo: 'Global E-commerce Leader' },
    { name: 'Nike', logo: 'Athletic & Lifestyle Brand' },
    { name: 'Target', logo: 'Retail Corporation' },
    { name: 'Best Buy', logo: 'Electronics Retailer' },
    { name: 'Home Depot', logo: 'Home Improvement' },
    { name: 'Walmart', logo: 'Retail Giant' },
    { name: 'Apple', logo: 'Technology Company' },
    { name: 'Samsung', logo: 'Electronics Manufacturer' }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Predictive Analytics AI',
      description: 'Machine learning algorithms analyze 50+ data points to predict demand with 95% accuracy',
      features: ['Demand forecasting', 'Inventory optimization', 'Dynamic pricing', 'Customer behavior analysis']
    },
    {
      icon: Eye,
      title: 'Computer Vision Quality Control',
      description: 'AI-powered visual inspection ensuring 99.9% product quality before shipment',
      features: ['Automated defect detection', 'Package integrity verification', 'Label accuracy validation', 'Damage prevention']
    },
    {
      icon: Zap,
      title: 'Intelligent Route Optimization',
      description: 'Real-time AI routing considering traffic, weather, and delivery preferences',
      features: ['Dynamic route planning', 'Cost optimization', 'Delivery time prediction', 'Carbon footprint reduction']
    }
  ];

  const metrics = [
    { label: 'Order Accuracy', value: '99.8%', improvement: '+5.2% vs industry' },
    { label: 'Fulfillment Speed', value: '2.3 hours', improvement: '75% faster' },
    { label: 'Peak Scaling', value: '500%', improvement: 'No degradation' },
    { label: 'Cost Reduction', value: '42%', improvement: 'Per order savings' },
    { label: 'Customer Satisfaction', value: '96% NPS', improvement: '+28 points' },
    { label: 'Returns Processing', value: '24 hours', improvement: '85% recovery rate' }
  ];

  const caseStudies = [
    {
      company: 'Nike',
      industry: 'Athletic Apparel',
      challenge: 'Scaling from 50K to 2M monthly orders during digital transformation while maintaining brand experience',
      solution: 'Implemented AI-powered distributed fulfillment network with real-time inventory optimization across 15 fulfillment centers',
      results: [
        'Maintained 99.8% accuracy during 4000% growth',
        'Reduced fulfillment costs by 38% per order',
        'Achieved same-day delivery in 12 major markets',
        'Improved customer satisfaction by 45%',
        'Enabled seamless SNKRS app launch handling 10M+ users'
      ],
      roi: '$15.2M annual savings',
      testimonial: "FDL's AI-driven logistics platform was instrumental in our digital transformation. They helped us scale our operations seamlessly while maintaining the premium customer experience Nike is known for."
    },
    {
      company: 'Target',
      industry: 'Retail',
      challenge: 'Omnichannel fulfillment complexity with same-day delivery and BOPIS across 1,800+ stores',
      solution: 'Unified inventory platform with AI optimization for store-to-door and ship-from-store capabilities',
      results: [
        '96% improvement in inventory accuracy',
        '40% reduction in fulfillment costs',
        'Same-day delivery in 75% of US markets',
        '99.2% BOPIS order accuracy',
        'Reduced out-of-stock situations by 65%'
      ],
      roi: '$23.8M cost avoidance',
      testimonial: "The integration of AI across our supply chain has transformed how we serve customers. FDL's technology enables us to fulfill orders from the optimal location every time."
    }
  ];

  const serviceCapabilities = [
    {
      icon: Package,
      title: 'AI-Powered Fulfillment',
      description: 'Automated picking, packing, and shipping with 99.8% accuracy',
      features: [
        'Robotic picking systems with computer vision',
        'Dynamic slotting optimization',
        'Predictive inventory positioning',
        'Real-time quality control',
        'Automated packaging selection',
        'Smart routing and consolidation'
      ]
    },
    {
      icon: Truck,
      title: 'Intelligent Last-Mile Delivery',
      description: 'AI-optimized delivery routes with real-time tracking and customer communication',
      features: [
        'Dynamic route optimization',
        'Predictive delivery windows',
        'Real-time GPS tracking',
        'Automated customer notifications',
        'White-glove delivery options',
        'Carbon-neutral delivery programs'
      ]
    },
    {
      icon: ArrowRightLeft,
      title: 'Advanced Returns Management',
      description: 'Intelligent returns processing with instant refunds and restocking automation',
      features: [
        'AI-powered return reason analysis',
        'Automated refund processing',
        'Smart restocking decisions',
        'Damage assessment automation',
        'Warranty claim processing',
        'Customer satisfaction optimization'
      ]
    },
    {
      icon: Globe,
      title: 'Global Network Management',
      description: 'Worldwide fulfillment network with local expertise and compliance',
      features: [
        'Multi-country fulfillment centers',
        'Local compliance automation',
        'Currency and tax handling',
        'International shipping optimization',
        'Duty and customs management',
        'Regional customer support'
      ]
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
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 p-3 rounded-xl">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  E-commerce & Digital Commerce Solutions
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                AI-Powered E-commerce Fulfillment at Scale
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Complete omnichannel fulfillment ecosystem powered by advanced AI and machine learning. 
                Trusted by Fortune 100 companies to handle 500% growth while maintaining 99.8% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-4 px-8 text-lg">
                  Access Customer Portal
                  <Lock className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary py-4 px-8">
                  <Download className="mr-2 h-5 w-5" />
                  Download E-commerce Guide
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">99.8%</div>
                  <div className="text-blue-200 text-sm">AI-Verified Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">500%</div>
                  <div className="text-blue-200 text-sm">Peak Scaling</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">42%</div>
                  <div className="text-blue-200 text-sm">Cost Reduction</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="AI-powered e-commerce fulfillment center"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fortune 100 Clients */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Trusted by Fortune 100 Leaders</h2>
            <p className="text-muted-foreground">Leading brands rely on our AI-powered logistics platform</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {fortune100Clients.map((client, index) => (
              <div key={index} className="text-center p-4 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="font-bold text-lg text-primary mb-1">{client.name}</div>
                <div className="text-xs text-muted-foreground">{client.logo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">AI-First Logistics Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced artificial intelligence and machine learning technologies ensuring optimal performance across every touchpoint
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {aiCapabilities.map((capability, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="logistics-gradient p-4 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 text-center">{capability.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Proven Performance Results</h2>
            <p className="text-xl text-muted-foreground">AI-driven optimization delivering measurable business impact</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                  <div className="font-medium text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-green-600">{metric.improvement}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Service Portfolio</h2>
            <p className="text-xl text-muted-foreground">End-to-end e-commerce logistics capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCapabilities.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="logistics-gradient p-3 rounded-xl">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Fortune 100 Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real transformation results from industry leaders</p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-2xl">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="text-3xl font-bold text-primary">{study.company}</div>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {study.industry}
                        </span>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="font-semibold text-red-600 mb-3">Business Challenge</h4>
                        <p className="text-muted-foreground mb-6">{study.challenge}</p>
                        
                        <h4 className="font-semibold text-blue-600 mb-3">FDL Solution</h4>
                        <p className="text-muted-foreground mb-6">{study.solution}</p>
                        
                        <h4 className="font-semibold text-green-600 mb-3">Results Achieved</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <p className="text-sm text-primary italic">"{study.testimonial}"</p>
                        <p className="text-xs text-primary font-medium mt-2">- {study.company} Supply Chain Executive</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-50 p-8 rounded-xl mb-6">
                        <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-green-600 mb-2">{study.roi}</div>
                        <div className="text-sm text-green-700 font-medium">Verified Savings</div>
                      </div>
                      <Button className="w-full">
                        View Full Case Study
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

      {/* Customer Portal CTA */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your E-commerce Operations?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join Fortune 100 companies using our AI-powered logistics platform. 
                Access real-time analytics, predictive insights, and automated optimization tools.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>24/7 AI-powered customer portal access</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Real-time inventory and order tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Predictive analytics and recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Dedicated customer success manager</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-4 px-8">
                  Access Customer Portal
                  <Lock className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary py-4 px-8">
                  Schedule Demo
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Get Your Custom Assessment</h3>
              <form className="space-y-4">
                <div>
                  <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Company Name" />
                </div>
                <div>
                  <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Work Email" />
                </div>
                <div>
                  <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Phone Number" />
                </div>
                <div>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Monthly Order Volume</option>
                    <option>Under 10,000 orders</option>
                    <option>10,000 - 100,000 orders</option>
                    <option>100,000 - 1M orders</option>
                    <option>1M+ orders</option>
                  </select>
                </div>
                <div>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Current E-commerce Platform</option>
                    <option>Shopify Plus</option>
                    <option>Magento Commerce</option>
                    <option>Salesforce Commerce Cloud</option>
                    <option>Amazon</option>
                    <option>Custom Platform</option>
                  </select>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg">
                  Get Custom ROI Analysis
                  <Download className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Get your personalized assessment within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceSolution;
