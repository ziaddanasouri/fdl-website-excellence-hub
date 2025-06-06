
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupModal from '@/components/PopupModal';
import { 
  AlertTriangle,
  TrendingDown,
  Shield,
  Zap,
  Brain,
  Globe,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  DollarSign,
  Clock,
  Target,
  Phone,
  Calendar,
  Download,
  Eye,
  Lock,
  Truck,
  Package,
  TrendingUp,
  Building,
  Factory,
  ShieldCheck,
  Cpu,
  Car,
  Coffee
} from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'download' | 'quote' | 'consultation' | 'deployment';
    title?: string;
    description?: string;
    resource?: string;
  }>({
    isOpen: false,
    type: 'demo'
  });

  const openModal = (type: typeof modalState.type, title?: string, description?: string, resource?: string) => {
    setModalState({ isOpen: true, type, title, description, resource });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal('download', 'Get Your Logistics Optimization Guide', 'Discover the 7 hidden logistics costs draining your profits', 'Logistics Optimization Playbook');
  };

  const threatMetrics = [
    { 
      threat: 'Shipping Delays', 
      impact: '$1.8M', 
      percentage: '18%',
      description: 'Annual loss from late deliveries',
      icon: Clock,
      color: 'text-red-600'
    },
    { 
      threat: 'Damaged Goods', 
      impact: '15%', 
      percentage: '15%',
      description: 'Of shipments arrive damaged',
      icon: AlertTriangle,
      color: 'text-orange-600'
    },
    { 
      threat: 'Inventory Issues', 
      impact: '$650K', 
      percentage: '12%',
      description: 'Lost sales from stockouts',
      icon: Package,
      color: 'text-yellow-600'
    },
    { 
      threat: 'Emergency Freight', 
      impact: '280%', 
      percentage: '280%',
      description: 'Higher costs for rush shipping',
      icon: Truck,
      color: 'text-red-600'
    }
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'AI-Powered Logistics Intelligence',
      description: 'Stop losing money with predictive analytics that optimize routes, inventory, and delivery timing.',
      threats: ['Prevents $1.8M+ annual shipping losses', 'Eliminates 85% of emergency freight costs', '99.8% accuracy in delivery predictions'],
      cta: 'Optimize Logistics Now',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Fulfillment',
      description: 'Customer expectations are ruthless. We deliver faster than your competitors ever could.',
      threats: ['2x faster than industry standard', 'Same-day delivery capability', '99.2% on-time delivery rate'],
      cta: 'Accelerate Shipping',
      gradient: 'from-green-600 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Secure Supply Chain',
      description: 'Your cargo is protected with military-grade tracking and security throughout the supply chain.',
      threats: ['Real-time cargo monitoring', 'Insurance coverage included', '99.99% secure delivery rate'],
      cta: 'Secure Your Shipments',
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  const fortune100Partners = [
    'Microsoft', 'Apple', 'Amazon', 'Google', 'Meta', 'Tesla', 
    'JPMorgan', 'Walmart', 'Berkshire', 'UnitedHealth',
    'Johnson & Johnson', 'Procter & Gamble', 'Nvidia', 'Visa',
    'Mastercard', 'Home Depot', 'Disney', 'Netflix'
  ];

  const successStories = [
    {
      company: 'TechFlow Dynamics',
      industry: 'Technology',
      icon: Cpu,
      challenge: 'Losing $3.2M annually to shipping delays and damage',
      solution: 'AI-powered route optimization and secure packaging',
      results: {
        savings: '$3.2M',
        improvement: '99.2%',
        timeframe: '6 weeks'
      },
      quote: 'FDL Logistics transformed our shipping from our biggest headache to our competitive advantage.',
      executive: 'Sarah Chen, CRO'
    },
    {
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      icon: Factory,
      challenge: 'Emergency shipping costs spiraling out of control',
      solution: 'Predictive logistics and strategic warehouse placement',
      results: {
        savings: '$1.8M',
        improvement: '85%',
        timeframe: '1 month'
      },
      quote: 'We were bleeding money on freight costs and didn\'t even realize it.',
      executive: 'Marcus Rodriguez, VP Operations'
    },
    {
      company: 'E-Commerce Innovations',
      industry: 'Retail',
      icon: Building,
      challenge: 'Customer satisfaction plummeting due to shipping delays',
      solution: 'End-to-end fulfillment and same-day delivery network',
      results: {
        savings: '$2.1M',
        improvement: '50%',
        timeframe: '8 weeks'
      },
      quote: 'They didn\'t just fix our logistics - they saved our company\'s reputation.',
      executive: 'Jennifer Park, CEO'
    }
  ];

  const industryLogos = [
    { name: 'E-commerce', icon: Building, companies: ['Amazon', 'Shopify', 'eBay'] },
    { name: 'Manufacturing', icon: Factory, companies: ['Tesla', 'Boeing', 'GE'] },
    { name: 'Healthcare', icon: ShieldCheck, companies: ['J&J', 'Pfizer', 'Moderna'] },
    { name: 'Technology', icon: Cpu, companies: ['Apple', 'Microsoft', 'Google'] },
    { name: 'Automotive', icon: Car, companies: ['Ford', 'GM', 'Toyota'] },
    { name: 'Food & Beverage', icon: Coffee, companies: ['Coca-Cola', 'PepsiCo', 'Unilever'] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Crisis Alert Banner */}
      <div className="revops-danger-gradient text-white py-2 sm:py-3">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-sm font-medium">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
              <span className="text-center sm:text-left">
                <span className="hidden sm:inline">URGENT: 73% of businesses lose $1.8M+ annually due to preventable shipping failures</span>
                <span className="sm:hidden">URGENT: 73% lose $1.8M+ from shipping failures</span>
              </span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white text-white hover:bg-white hover:text-red-600"
              onClick={() => openModal('consultation', 'Emergency Logistics Audit', 'Discover if you\'re losing money on shipping right now')}
            >
              Check My Shipping Risk
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="revops-hero-gradient text-white py-8 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <div className="revops-security-badge text-xs sm:text-sm">
                  <Truck className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Fortune 100 Logistics</span>
                </div>
                <div className="revops-security-badge bg-blue-100 text-blue-800 text-xs sm:text-sm">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>99.2% On-Time Delivery</span>
                </div>
                <div className="revops-security-badge bg-purple-100 text-purple-800 text-xs sm:text-sm">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>50,000+ Shipments Monthly</span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Stop Losing <span className="text-gradient">$1.8M+ Annually</span> to 
                <span className="block mt-2">Preventable Shipping Failures</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                <strong>Your competitors are stealing your customers</strong> while you lose millions to 
                shipping delays, damaged goods, and inventory issues. FDL Logistics' Fortune 100-grade 
                AI turns logistics into your competitive weapon.
              </p>

              <div className="bg-red-900/30 border border-red-500/50 p-4 sm:p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <h3 className="font-bold text-red-300">Logistics Risk Assessment</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {threatMetrics.slice(0, 4).map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-red-400">{metric.impact}</div>
                      <div className="text-xs sm:text-sm text-red-200">{metric.threat}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="revops-button-primary text-base sm:text-lg"
                  onClick={() => openModal('consultation', 'Free Shipping Cost Assessment', 'Discover hidden losses in your logistics')}
                >
                  Stop Losing Money Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg"
                  onClick={() => openModal('demo', 'See AI Logistics in Action', 'Watch AI optimize real shipments in real-time')}
                >
                  Watch AI Logistics Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">99.2%</div>
                  <div className="text-gray-300 text-xs sm:text-sm">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">$1.8M</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Avg. Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">24hr</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Setup Time</div>
                </div>
              </div>
            </div>
            
            {/* Logistics Dashboard Preview */}
            <div className="relative">
              <div className="revops-glass p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl animate-float">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white">FDL Logistics Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Live Tracking</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-900/30 border border-green-500/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-green-300">Issue Prevented</div>
                        <div className="text-base sm:text-lg font-bold text-green-400">$45,000 Delay Avoided</div>
                        <div className="text-xs text-green-200">Auto-rerouted in 0.3 seconds</div>
                      </div>
                      <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/30 border border-blue-500/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-blue-300">Cost Savings</div>
                        <div className="text-base sm:text-lg font-bold text-blue-400">$128,500 Today</div>
                        <div className="text-xs text-blue-200">+$1.8M this month</div>
                      </div>
                      <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="bg-purple-900/30 border border-purple-500/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-purple-300">Active Shipments</div>
                        <div className="text-base sm:text-lg font-bold text-purple-400">2,847</div>
                        <div className="text-xs text-purple-200">All on-time</div>
                      </div>
                      <Package className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border-white/30"
                  onClick={() => openModal('demo', 'Live Logistics Demo', 'See real-time shipment optimization')}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Fortune 100 Partners */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="text-center mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-600 mb-4">
              Trusted by Fortune 100 Companies
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-4 sm:gap-6">
              {fortune100Partners.slice(0, 18).map((partner, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-2 sm:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-xs sm:text-sm font-medium text-gray-600 text-center">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Threat Assessment Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <AlertTriangle className="h-4 w-4" />
              <span>Logistics Risk Analysis</span>
            </div>
            <h2 className="mobile-heading font-bold text-primary mb-4">
              Your Shipments are at Risk
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Every day you wait, competitors deliver faster while hidden inefficiencies drain your profits. 
              Here's what you're losing right now:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {threatMetrics.map((threat, index) => (
              <Card key={index} className="border-red-200 bg-red-50/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <threat.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${threat.color}`} />
                    <div className="text-right">
                      <div className={`text-xl sm:text-2xl font-bold ${threat.color}`}>
                        {threat.impact}
                      </div>
                      <div className="text-xs sm:text-sm text-red-600">
                        Average Loss
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-red-900 mb-2">{threat.threat}</h3>
                  <p className="text-sm text-red-700">{threat.description}</p>
                  <div className="mt-4 pt-4 border-t border-red-200">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-red-300 text-red-700 hover:bg-red-100"
                      onClick={() => openModal('consultation', `Fix ${threat.threat}`, `Stop losing ${threat.impact} annually`)}
                    >
                      Stop This Loss
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-red-900 text-white p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Total Potential Annual Loss: $4.2M+
              </h3>
              <p className="text-red-100 mb-6">
                This is what companies like yours lose every year to poor logistics. But it's 100% preventable.
              </p>
              <Button 
                className="bg-white text-red-900 hover:bg-red-50 font-bold py-3 px-8"
                onClick={() => openModal('consultation', 'Emergency Logistics Recovery', 'Stop all shipping losses immediately')}
              >
                Stop All Logistics Losses Now
                <Truck className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mobile-heading font-bold text-primary mb-4">
              Fortune 100-Grade Logistics
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              The same technology shipping for Apple, Amazon, and Microsoft now available for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="revops-card-hover border-0 shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <div className={`bg-gradient-to-r ${solution.gradient} p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-8">
                    {solution.threats.map((threat, threatIndex) => (
                      <li key={threatIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {threat}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full revops-button-primary"
                    onClick={() => openModal('deployment', `Deploy ${solution.title}`, 'Start optimizing logistics immediately')}
                  >
                    {solution.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mobile-heading font-bold text-primary mb-4">
              Real Companies, Real Savings
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              See how we've saved Fortune 100 companies millions in logistics costs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <story.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">{story.company}</h3>
                      <p className="text-sm text-muted-foreground">{story.industry}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-red-600 text-sm">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-600 text-sm">Solution:</h4>
                      <p className="text-sm text-muted-foreground">{story.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-green-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{story.results.savings}</div>
                      <div className="text-xs text-green-700">Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{story.results.improvement}</div>
                      <div className="text-xs text-green-700">Better</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{story.results.timeframe}</div>
                      <div className="text-xs text-green-700">Timeline</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-sm italic text-muted-foreground mb-4">
                    "{story.quote}"
                  </blockquote>
                  
                  <p className="text-xs font-medium text-primary">
                    - {story.executive}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="revops-button-primary text-lg"
              onClick={() => openModal('download', 'Download Success Stories', 'Get detailed case studies with cost savings', 'Complete Success Stories Collection')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download All Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mobile-heading font-bold text-primary mb-4">
              Industry-Specific Logistics
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Specialized logistics solutions for your industry's unique challenges
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {industryLogos.map((industry, index) => (
              <Card key={index} className="revops-card-hover cursor-pointer">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <industry.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">{industry.name}</h3>
                  <div className="space-y-1">
                    {industry.companies.map((company, companyIndex) => (
                      <div key={companyIndex} className="text-xs text-muted-foreground">
                        {company}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/solutions">
              <Button className="revops-button-primary">
                Explore Logistics Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet Newsletter Section */}
      <section className="py-12 sm:py-20 revops-hero-gradient text-white">
        <div className="max-w-4xl mx-auto mobile-padding text-center">
          <h2 className="mobile-heading font-bold mb-6">
            Don't Let Another Day of Profits Slip Away
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Get our exclusive "Logistics Optimization Playbook" - the same strategies Fortune 100 
            companies use to prevent $1.8M+ in annual shipping losses.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your business email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-gray-900 border-0 flex-1"
              />
              <Button 
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
              >
                Get Free Playbook
              </Button>
            </div>
          </form>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Instant Download</div>
              <div className="text-gray-300 text-sm">Available immediately</div>
            </div>
            <div className="text-center">
              <Truck className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">No Spam Ever</div>
              <div className="text-gray-300 text-sm">Unsubscribe anytime</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">$2,500 Value</div>
              <div className="text-gray-300 text-sm">Free for limited time</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <PopupModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        title={modalState.title}
        description={modalState.description}
        resource={modalState.resource}
      />
    </div>
  );
};

export default Index;
