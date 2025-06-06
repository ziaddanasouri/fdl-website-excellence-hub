
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Factory, 
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
  Settings,
  Brain,
  Eye,
  Lock
} from 'lucide-react';

const ManufacturingSolution = () => {
  const fortune100Clients = [
    { name: 'Boeing', logo: 'Aerospace Leader' },
    { name: 'Ford', logo: 'Automotive Giant' },
    { name: 'GE', logo: 'Industrial Conglomerate' },
    { name: 'Caterpillar', logo: 'Heavy Equipment' },
    { name: 'Toyota', logo: 'Automotive Excellence' },
    { name: 'Siemens', logo: 'Industrial Technology' },
    { name: 'Honeywell', logo: 'Aerospace & Defense' },
    { name: '3M', logo: 'Industrial Innovation' }
  ];

  const metrics = [
    { label: 'Production Efficiency', value: '18%', improvement: 'Improvement' },
    { label: 'Inventory Reduction', value: '$25M', improvement: 'Capital freed' },
    { label: 'On-Time Delivery', value: '99.8%', improvement: 'Supplier performance' },
    { label: 'Cost Savings', value: '35%', improvement: 'Logistics reduction' },
    { label: 'Lead Time', value: '24 hours', improvement: 'Supplier to line' },
    { label: 'Quality Rate', value: '99.5%', improvement: 'Zero defects' }
  ];

  const caseStudies = [
    {
      company: 'Boeing',
      industry: 'Aerospace Manufacturing',
      challenge: 'Managing complex supply chain for 787 Dreamliner with 300+ global suppliers and just-in-time assembly requirements',
      solution: 'Implemented AI-powered supplier collaboration platform with predictive logistics and sequenced line-side delivery',
      results: [
        'Reduced inventory investment by $45M (40% reduction)',
        'Improved production efficiency by 22% (98% OEE achieved)',
        'Zero production line shutdowns due to parts shortage',
        'Achieved 99.9% on-time supplier delivery performance',
        'Reduced quality defects by 60% through better supplier coordination'
      ],
      roi: '$78M annual impact',
      testimonial: "FDL's AI-driven manufacturing logistics platform was instrumental in our 787 production ramp-up. Their predictive analytics and supplier coordination capabilities helped us achieve unprecedented efficiency levels."
    },
    {
      company: 'Ford',
      industry: 'Automotive Manufacturing',
      challenge: 'Optimizing parts supply for multiple vehicle platforms across 15 assembly plants with lean manufacturing requirements',
      solution: 'Deployed smart milk-run logistics with real-time sequencing and cross-docking optimization',
      results: [
        'Improved supplier delivery precision to ±5 minutes',
        'Reduced inventory carrying costs by $18M annually',
        'Increased line efficiency by 15% through better sequencing',
        'Eliminated emergency freight costs (saving $3.2M annually)',
        'Achieved 98.5% first-pass quality rate'
      ],
      roi: '$21.2M verified savings',
      testimonial: "The precision and reliability of FDL's manufacturing logistics has been a game-changer for our lean production system. Their AI optimization continues to deliver measurable results."
    }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Predictive Supply Chain Analytics',
      description: 'AI algorithms predict supply disruptions 48-72 hours in advance with 92% accuracy',
      features: ['Supplier risk assessment', 'Demand prediction', 'Capacity optimization', 'Quality forecasting']
    },
    {
      icon: Eye,
      title: 'Real-Time Production Visibility',
      description: 'IoT sensors and computer vision provide complete visibility into production flow',
      features: ['Line-side inventory tracking', 'Quality monitoring', 'Workflow optimization', 'Performance analytics']
    },
    {
      icon: Zap,
      title: 'Intelligent Sequencing Engine',
      description: 'AI-powered sequencing ensures perfect parts delivery timing to production lines',
      features: ['Dynamic scheduling', 'Route optimization', 'Capacity balancing', 'Exception handling']
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
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Manufacturing & Industrial Logistics
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                AI-Powered Lean Manufacturing Logistics
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Precision supply chain coordination supporting lean manufacturing with JIT delivery, 
                supplier collaboration, and production optimization. Trusted by aerospace and automotive leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-4 px-8 text-lg">
                  Access Manufacturing Portal
                  <Lock className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary py-4 px-8">
                  <Download className="mr-2 h-5 w-5" />
                  Download Manufacturing Guide
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">99.8%</div>
                  <div className="text-blue-200 text-sm">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">18%</div>
                  <div className="text-blue-200 text-sm">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">$25M</div>
                  <div className="text-blue-200 text-sm">Capital Freed</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Smart manufacturing facility"
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
            <h2 className="text-2xl font-bold text-primary mb-4">Trusted by Manufacturing Leaders</h2>
            <p className="text-muted-foreground">Powering lean operations for global manufacturing giants</p>
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
            <h2 className="text-4xl font-bold text-primary mb-4">AI-Driven Manufacturing Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced artificial intelligence optimizing every aspect of manufacturing supply chains
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
            <h2 className="text-4xl font-bold text-primary mb-4">Manufacturing Excellence Results</h2>
            <p className="text-xl text-muted-foreground">Proven performance improvements across key manufacturing KPIs</p>
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

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Manufacturing Success Stories</h2>
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
                        <h4 className="font-semibold text-red-600 mb-3">Manufacturing Challenge</h4>
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
                        <p className="text-xs text-primary font-medium mt-2">- {study.company} VP Operations</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-50 p-8 rounded-xl mb-6">
                        <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-green-600 mb-2">{study.roi}</div>
                        <div className="text-sm text-green-700 font-medium">Annual Impact</div>
                      </div>
                      <Button className="w-full">
                        View Detailed Case Study
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

      {/* CTA Section */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Transform Your Manufacturing Operations</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join manufacturing leaders using our AI-powered platform to achieve lean excellence. 
                Access predictive analytics, supplier collaboration tools, and real-time optimization.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Real-time production line visibility</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>AI-powered supplier collaboration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Predictive maintenance alerts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Quality control automation</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-4 px-8">
                  Access Manufacturing Portal
                  <Lock className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary py-4 px-8">
                  Schedule Plant Visit
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Get Your Manufacturing Assessment</h3>
              <form className="space-y-4">
                <div>
                  <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Company Name" />
                </div>
                <div>
                  <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Manufacturing Facilities" />
                </div>
                <div>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Industry Sector</option>
                    <option>Automotive</option>
                    <option>Aerospace</option>
                    <option>Electronics</option>
                    <option>Heavy Equipment</option>
                    <option>Industrial Equipment</option>
                  </select>
                </div>
                <div>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Annual Revenue</option>
                    <option>$100M - $500M</option>
                    <option>$500M - $1B</option>
                    <option>$1B - $5B</option>
                    <option>$5B+</option>
                  </select>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg">
                  Get Manufacturing Analysis
                  <Download className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Receive detailed ROI analysis within 48 hours
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

export default ManufacturingSolution;
