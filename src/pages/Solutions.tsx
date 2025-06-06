
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShoppingCart, 
  Store, 
  Factory, 
  Heart, 
  Car, 
  Laptop,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Target,
  Award,
  BarChart3,
  Phone,
  Download,
  Globe,
  Zap,
  Shield
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: ShoppingCart,
      title: 'E-commerce & Digital Commerce Solutions',
      description: 'Complete omnichannel fulfillment ecosystem designed for rapid scaling and peak season flexibility.',
      challenges: [
        'Unpredictable demand fluctuations (300% peak season spikes)',
        'Customer expectations for same-day/next-day delivery',
        'Complex returns and exchange processing',
        'Multi-channel inventory synchronization',
        'Global marketplace compliance requirements'
      ],
      ourSolution: [
        'AI-powered demand forecasting and capacity planning',
        'Distributed fulfillment network (2-day ground coverage)',
        'Automated returns processing with instant refund capability',
        'Real-time inventory sync across 50+ sales channels',
        'Marketplace-specific packaging and compliance automation'
      ],
      results: [
        '40% reduction in fulfillment costs per order',
        '99.2% order accuracy rate with 24-hour processing',
        '2-day ground delivery to 95% of US population',
        '95% customer satisfaction score (NPS +70)',
        '300% peak season scaling without service degradation'
      ],
      caseStudy: 'Scaled online fashion retailer from 10K to 500K monthly orders during 18-month growth period, maintaining 99%+ accuracy while reducing per-order costs by 42%. Enabled successful $200M acquisition.',
      image: 'photo-1556742049-0cfed4f6a45d',
      roiMetrics: [
        { metric: 'Cost per Order', improvement: '-42%', value: '$3.20' },
        { metric: 'Order Processing Time', improvement: '-65%', value: '4 hours' },
        { metric: 'Peak Capacity', improvement: '+300%', value: '500K orders/day' },
        { metric: 'Geographic Reach', improvement: '+150%', value: '48 states' }
      ],
      technologies: ['WMS Integration', 'AI Forecasting', 'Robotics', 'IoT Tracking'],
      industries: ['Fashion', 'Electronics', 'Home & Garden', 'Specialty Retail']
    },
    {
      icon: Store,
      title: 'Retail & Omnichannel Distribution',
      description: 'Unified retail logistics platform connecting stores, e-commerce, and customers across all touchpoints.',
      challenges: [
        'Store replenishment optimization across 500+ locations',
        'Unified inventory visibility across channels',
        'Last-mile delivery cost optimization',
        'Store-to-store transfer inefficiencies',
        'Click-and-collect fulfillment complexities'
      ],
      ourSolution: [
        'Machine learning-driven replenishment algorithms',
        'Unified inventory control tower with real-time visibility',
        'Zone-skipping and consolidated delivery networks',
        'Optimized inter-store transfer network',
        'BOPIS (Buy Online Pick In Store) automation platform'
      ],
      results: [
        '30% inventory reduction across store network',
        '98% stock availability with 25% fewer SKUs',
        '25% reduction in last-mile delivery costs',
        '50% faster inter-store transfers',
        '40% improvement in click-and-collect efficiency'
      ],
      caseStudy: 'Transformed 200-store specialty retailer\'s distribution network, reducing inventory investment by $15M while improving in-stock rates from 85% to 98%. ROI achieved in 14 months.',
      image: 'photo-1441986300917-64674bd600d8',
      roiMetrics: [
        { metric: 'Inventory Investment', improvement: '-30%', value: '$15M saved' },
        { metric: 'Stock Availability', improvement: '+13%', value: '98%' },
        { metric: 'Delivery Costs', improvement: '-25%', value: '$2.8M saved' },
        { metric: 'Transfer Speed', improvement: '+50%', value: '24 hours' }
      ],
      technologies: ['Demand Planning', 'Route Optimization', 'RFID', 'Mobile Apps'],
      industries: ['Apparel', 'Sporting Goods', 'Home Improvement', 'Grocery']
    },
    {
      icon: Factory,
      title: 'Manufacturing & Industrial Logistics',
      description: 'Lean manufacturing support with supplier coordination, just-in-time delivery, and finished goods distribution.',
      challenges: [
        'Just-in-time delivery precision (±15 minute windows)',
        'Complex supplier coordination (200+ vendors)',
        'Production line efficiency optimization',
        'Global supply chain risk management',
        'Finished goods distribution network design'
      ],
      ourSolution: [
        'Milk-run logistics with GPS-tracked precision delivery',
        'Supplier collaboration portal with real-time updates',
        'Line-side inventory management and sequencing',
        'Supply chain control tower with risk monitoring',
        'Optimized finished goods distribution network'
      ],
      results: [
        '15% production efficiency improvement',
        '99.8% on-time supplier delivery performance',
        '20% inventory carrying cost reduction',
        '24/7 global supply chain visibility',
        '35% reduction in finished goods logistics costs'
      ],
      caseStudy: 'Implemented lean logistics for automotive Tier 1 supplier, reducing inventory by $25M while improving production efficiency by 18%. Enabled $50M facility expansion without additional logistics investment.',
      image: 'photo-1581091226825-a6a2a5aee158',
      roiMetrics: [
        { metric: 'Production Efficiency', improvement: '+18%', value: '95% OEE' },
        { metric: 'Inventory Reduction', improvement: '-45%', value: '$25M freed' },
        { metric: 'Supplier Performance', improvement: '+15%', value: '99.8% OTD' },
        { metric: 'Logistics Costs', improvement: '-35%', value: '$8M annual' }
      ],
      technologies: ['EDI Integration', 'Kanban Systems', 'IoT Sensors', 'Blockchain'],
      industries: ['Automotive', 'Aerospace', 'Heavy Equipment', 'Electronics Manufacturing']
    },
    {
      icon: Heart,
      title: 'Healthcare & Life Sciences',
      description: 'Regulatory-compliant logistics for pharmaceutical, medical device, and healthcare supply chains.',
      challenges: [
        'Temperature-sensitive product integrity (2-8°C)',
        'FDA/DEA regulatory compliance requirements',
        'Serialization and track-and-trace mandates',
        'Emergency and critical delivery needs',
        'Product recalls and lot tracking'
      ],
      ourSolution: [
        'Validated cold chain with continuous monitoring',
        'GDP/GMP compliant facilities and processes',
        'Automated serialization and aggregation',
        '24/7 emergency logistics response team',
        'Blockchain-enabled lot tracking and recall management'
      ],
      results: [
        '100% temperature compliance (zero deviations)',
        'Zero regulatory compliance violations',
        'Complete product genealogy and traceability',
        '2-hour emergency response capability',
        '99.9% successful recall efficiency'
      ],
      caseStudy: 'Managed nationwide COVID-19 vaccine distribution for major pharmaceutical company, delivering 50M doses with 100% temperature compliance and zero product loss.',
      image: 'photo-1559757148-5c350d0d3c56',
      roiMetrics: [
        { metric: 'Compliance Rate', improvement: '100%', value: 'Zero violations' },
        { metric: 'Product Integrity', improvement: '99.9%', value: '<0.1% loss' },
        { metric: 'Emergency Response', improvement: '+200%', value: '2 hours' },
        { metric: 'Recall Efficiency', improvement: '+150%', value: '24 hours' }
      ],
      technologies: ['IoT Temperature Monitoring', 'Blockchain', 'Serialization', 'Mobile Verification'],
      industries: ['Pharmaceuticals', 'Medical Devices', 'Biotechnology', 'Clinical Trials']
    },
    {
      icon: Laptop,
      title: 'Technology & High-Tech Manufacturing',
      description: 'Secure, precision logistics for high-value technology products with global distribution requirements.',
      challenges: [
        'High-value product security ($10M+ inventory)',
        'Complex configuration and testing requirements',
        'Rapid product lifecycle management',
        'Global distribution with local compliance',
        'Reverse logistics for RMA processing'
      ],
      ourSolution: [
        'Multi-layer security protocols and monitoring',
        'Clean room configuration and testing facilities',
        'Product lifecycle management integration',
        'Global fulfillment network with local expertise',
        'Advanced RMA processing and refurbishment'
      ],
      results: [
        '99.99% security compliance (zero theft incidents)',
        '48-hour average configuration and test cycle',
        '30% faster product launch capabilities',
        'Global 2-day delivery to 95% of markets',
        '85% RMA products returned to sellable condition'
      ],
      caseStudy: 'Launched new laptop product line globally with 2.5M units distributed in first quarter, achieving 99.8% quality compliance and enabling $500M revenue target.',
      image: 'photo-1531297484001-80022131f5a1',
      roiMetrics: [
        { metric: 'Security Compliance', improvement: '100%', value: 'Zero incidents' },
        { metric: 'Launch Speed', improvement: '+30%', value: '45 days' },
        { metric: 'Global Reach', improvement: '+100%', value: '48 countries' },
        { metric: 'RMA Recovery', improvement: '+35%', value: '85% sellable' }
      ],
      technologies: ['RFID Security', 'Clean Room Standards', 'Global TMS', 'Quality Systems'],
      industries: ['Consumer Electronics', 'Semiconductors', 'Telecommunications', 'Computing Hardware']
    },
    {
      icon: Car,
      title: 'Automotive & Transportation',
      description: 'Comprehensive parts distribution and service logistics for automotive aftermarket and OEM support.',
      challenges: [
        'Massive SKU complexity (500K+ parts)',
        'Critical parts emergency delivery',
        'Dealer network distribution optimization',
        'Core exchange and returns management',
        'Cross-border trade facilitation'
      ],
      ourSolution: [
        'AI-powered demand planning for complex SKU matrix',
        'Same-day and 4-hour emergency parts delivery',
        'Optimized dealer hub network design',
        'Automated core exchange and processing',
        'Customs brokerage and trade compliance'
      ],
      results: [
        '99.5% parts availability at point of need',
        '4-hour emergency delivery capability',
        '95% dealer satisfaction scores',
        '80% core recovery and remanufacturing rate',
        '30% reduction in cross-border transit times'
      ],
      caseStudy: 'Optimized parts distribution for major automotive brand serving 2,500+ dealers, improving parts availability by 15% while reducing logistics costs by $12M annually.',
      image: 'photo-1486496572940-2bb2341fdbdf',
      roiMetrics: [
        { metric: 'Parts Availability', improvement: '+15%', value: '99.5%' },
        { metric: 'Emergency Delivery', improvement: '+200%', value: '4 hours' },
        { metric: 'Dealer Satisfaction', improvement: '+20%', value: '95% NPS' },
        { metric: 'Cost Reduction', improvement: '-25%', value: '$12M annual' }
      ],
      technologies: ['Demand Planning AI', 'Route Optimization', 'Core Tracking', 'Trade Systems'],
      industries: ['Automotive OEM', 'Heavy Duty', 'Aftermarket Parts', 'Fleet Services']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Scalability',
      description: 'Scale operations 10x without proportional cost increases',
      metric: '300% capacity scaling'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Achieve 25-40% logistics cost reduction through optimization',
      metric: '35% average savings'
    },
    {
      icon: Clock,
      title: 'Speed & Reliability',
      description: 'Faster delivery times with 99.5%+ reliability rates',
      metric: '50% faster delivery'
    },
    {
      icon: Users,
      title: 'Industry Expertise',
      description: 'Deep vertical knowledge and specialized best practices',
      metric: '25+ years experience'
    }
  ];

  const implementationProcess = [
    {
      phase: '01',
      title: 'Discovery & Assessment',
      duration: '2-4 weeks',
      description: 'Comprehensive analysis of current operations, identifying optimization opportunities and quantifying potential ROI.',
      deliverables: ['Current State Assessment', 'ROI Analysis', 'Implementation Roadmap']
    },
    {
      phase: '02',
      title: 'Solution Design',
      duration: '3-6 weeks',
      description: 'Custom solution architecture with detailed process design, technology selection, and change management planning.',
      deliverables: ['Solution Architecture', 'Process Documentation', 'Project Plan']
    },
    {
      phase: '03',
      title: 'Pilot Implementation',
      duration: '4-8 weeks',
      description: 'Controlled pilot deployment with limited scope to validate solution performance and optimize processes.',
      deliverables: ['Pilot Results', 'Process Refinements', 'Scalability Plan']
    },
    {
      phase: '04',
      title: 'Full Deployment',
      duration: '6-12 weeks',
      description: 'Complete solution rollout with training, monitoring, and continuous optimization for peak performance.',
      deliverables: ['Full Implementation', 'Training Materials', 'Performance Dashboard']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-6">Industry-Leading Solutions</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Specialized logistics solutions engineered for your industry's unique challenges. 
            Trusted by Fortune 500 companies to deliver transformational results and sustainable competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-4 px-8 text-lg">
              Explore Your Industry Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary py-4 px-8">
              <Download className="mr-2 h-5 w-5" />
              Download Solution Briefs
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">$2.5B+</div>
              <div className="text-blue-200 text-sm">Annual Volume Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">500M+</div>
              <div className="text-blue-200 text-sm">Orders Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-blue-200 text-sm">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">99.8%</div>
              <div className="text-blue-200 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Leading Companies Choose FDL</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-600">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Industry Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep vertical expertise delivering measurable results across complex supply chain challenges
            </p>
          </div>

          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content Section */}
                  <div className={`p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="logistics-gradient p-3 rounded-xl">
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary">{solution.title}</h3>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8">{solution.description}</p>
                    
                    {/* Challenge-Solution-Results Grid */}
                    <div className="grid grid-cols-1 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                          <Target className="h-5 w-5 mr-2" />
                          Industry Challenges
                        </h4>
                        <ul className="space-y-2">
                          {solution.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-red-500 mr-2 mt-1">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
                          <Zap className="h-5 w-5 mr-2" />
                          Our Solution
                        </h4>
                        <ul className="space-y-2">
                          {solution.ourSolution.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm flex items-start">
                              <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          Measurable Results
                        </h4>
                        <ul className="space-y-2">
                          {solution.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-sm text-green-600 font-medium flex items-start">
                              <span className="text-green-500 mr-2 mt-1">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* ROI Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {solution.roiMetrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-green-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600">{metric.improvement}</div>
                          <div className="text-sm text-green-700 font-medium">{metric.metric}</div>
                          <div className="text-xs text-green-600">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Case Study */}
                    <div className="bg-blue-50 p-6 rounded-xl mb-8">
                      <h4 className="font-semibold text-primary mb-2 flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Success Story
                      </h4>
                      <p className="text-sm text-primary italic">"{solution.caseStudy}"</p>
                    </div>

                    {/* Technologies & Industries */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h5 className="font-semibold text-muted-foreground mb-2">Key Technologies</h5>
                        <div className="flex flex-wrap gap-2">
                          {solution.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-muted-foreground mb-2">Target Industries</h5>
                        <div className="flex flex-wrap gap-2">
                          {solution.industries.map((industry, industryIndex) => (
                            <span key={industryIndex} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button className="cta-button">
                        Request Solution Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline">
                        <Phone className="mr-2 h-4 w-4" />
                        Speak with Expert
                      </Button>
                    </div>
                  </div>
                  
                  {/* Image Section */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <img 
                      src={`https://images.unsplash.com/${solution.image}?w=800&h=600&fit=crop`}
                      alt={solution.title}
                      className="w-full h-full object-cover min-h-[500px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Proven Implementation Process</h2>
            <p className="text-xl text-muted-foreground">
              Structured approach ensuring successful deployment and rapid time-to-value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {implementationProcess.map((phase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="logistics-gradient text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {phase.phase}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 text-center">{phase.title}</h3>
                  <div className="text-center mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 text-center">{phase.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="text-xs text-muted-foreground flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Transform Your Industry Operations</h2>
              <p className="text-xl text-blue-100 mb-8">
                Download our exclusive Industry Solution Playbooks featuring detailed case studies, 
                ROI calculators, and implementation guides from successful transformations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Industry-specific ROI calculators</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Detailed implementation roadmaps</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Best practice templates and checklists</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Executive summary for C-level approval</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Get Your Industry Playbook</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Select Your Industry</option>
                    <option>E-commerce & Retail</option>
                    <option>Manufacturing</option>
                    <option>Healthcare & Life Sciences</option>
                    <option>Technology & Electronics</option>
                    <option>Automotive</option>
                    <option>Food & Beverage</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                  <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="email@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                  <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Title" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Select Revenue Range</option>
                    <option>Under $10M</option>
                    <option>$10M - $50M</option>
                    <option>$50M - $200M</option>
                    <option>$200M - $1B</option>
                    <option>Over $1B</option>
                  </select>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                  Download Industry Playbook
                  <Download className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  By downloading, you agree to receive industry insights and updates from FDL Logistics.
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

export default Solutions;
