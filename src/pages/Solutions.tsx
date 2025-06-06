
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
  DollarSign
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Comprehensive fulfillment and delivery solutions designed specifically for online retailers.',
      challenges: [
        'Seasonal demand fluctuations',
        'Fast shipping expectations', 
        'Returns management complexity',
        'Inventory optimization'
      ],
      ourSolution: [
        'Scalable fulfillment centers',
        'Same-day & next-day delivery',
        'Automated returns processing',
        'Real-time inventory sync'
      ],
      results: [
        '40% reduction in fulfillment costs',
        '99.2% order accuracy rate',
        '2-day average delivery time',
        '95% customer satisfaction'
      ],
      caseStudy: 'Helped an online fashion retailer scale from 1K to 100K orders/month during peak season.',
      image: 'photo-1556742049-0cfed4f6a45d'
    },
    {
      icon: Store,
      title: 'Retail Distribution',
      description: 'Omnichannel retail logistics solutions connecting stores, warehouses, and customers seamlessly.',
      challenges: [
        'Store replenishment complexity',
        'Omnichannel inventory visibility',
        'Last-mile delivery costs',
        'Store-to-store transfers'
      ],
      ourSolution: [
        'Automated replenishment systems',
        'Unified inventory management',
        'Optimized delivery routes',
        'Inter-store logistics network'
      ],
      results: [
        '30% inventory reduction',
        '98% stock availability',
        '25% delivery cost savings',
        '50% faster store transfers'
      ],
      caseStudy: 'Transformed a 200-store retail chain\'s distribution network, improving efficiency by 35%.',
      image: 'photo-1441986300917-64674bd600d8'
    },
    {
      icon: Factory,
      title: 'Manufacturing Logistics',
      description: 'Just-in-time manufacturing support with supplier coordination and finished goods distribution.',
      challenges: [
        'Just-in-time delivery requirements',
        'Supplier coordination complexity',
        'Production line efficiency',
        'Global supply chain visibility'
      ],
      ourSolution: [
        'Milk-run logistics programs',
        'Supplier portal integration',
        'Line-side delivery services',
        'End-to-end visibility platform'
      ],
      results: [
        '15% production efficiency gain',
        '99.8% on-time supplier delivery',
        '20% inventory carrying cost reduction',
        '24/7 supply chain visibility'
      ],
      caseStudy: 'Implemented lean logistics for automotive manufacturer, reducing inventory by $2M.',
      image: 'photo-1581091226825-a6a2a5aee158'
    },
    {
      icon: Heart,
      title: 'Healthcare & Pharma',
      description: 'Temperature-controlled, compliant logistics solutions for healthcare and pharmaceutical products.',
      challenges: [
        'Temperature-sensitive products',
        'Regulatory compliance requirements',
        'Traceability & serialization',
        'Emergency delivery needs'
      ],
      ourSolution: [
        'Cold chain management',
        'GDP/GMP compliant facilities',
        'Track & trace capabilities',
        '24/7 emergency services'
      ],
      results: [
        '100% temperature compliance',
        'Zero regulatory violations',
        'Complete product traceability',
        '2-hour emergency response'
      ],
      caseStudy: 'Managed cold chain distribution for COVID vaccine rollout across 5 states.',
      image: 'photo-1559757148-5c350d0d3c56'
    },
    {
      icon: Laptop,
      title: 'Technology & Electronics',
      description: 'Specialized handling for high-value technology products with security and precision requirements.',
      challenges: [
        'High-value product security',
        'Complex configuration requirements',
        'Rapid product lifecycle',
        'Global distribution needs'
      ],
      ourSolution: [
        'Secure handling protocols',
        'Kitting & configuration services',
        'Lifecycle management support',
        'Global fulfillment network'
      ],
      results: [
        '99.99% security compliance',
        '48-hour configuration time',
        '30% faster time-to-market',
        'Global 2-day delivery'
      ],
      caseStudy: 'Launched new smartphone globally with 1M units distributed in first week.',
      image: 'photo-1531297484001-80022131f5a1'
    },
    {
      icon: Car,
      title: 'Automotive Aftermarket',
      description: 'Parts distribution and service logistics for automotive aftermarket and service providers.',
      challenges: [
        'Massive SKU complexity',
        'Emergency part delivery',
        'Dealer network support',
        'Returns & core management'
      ],
      ourSolution: [
        'Advanced SKU management',
        'Same-day parts delivery',
        'Dealer portal integration',
        'Core exchange programs'
      ],
      results: [
        '99.5% parts availability',
        '4-hour emergency delivery',
        '95% dealer satisfaction',
        '80% core recovery rate'
      ],
      caseStudy: 'Optimized parts distribution for major auto brand, serving 2,000+ dealers.',
      image: 'photo-1486496572940-2bb2341fdbdf'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Grow your business without logistics constraints'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce logistics costs by 25-40% on average'
    },
    {
      icon: Clock,
      title: 'Speed',
      description: 'Faster delivery times and improved customer satisfaction'
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Industry-specific knowledge and best practices'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Industry-Specific Solutions</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Tailored logistics solutions designed for the unique challenges and requirements 
            of your industry, backed by proven results and deep expertise.
          </p>
          <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
            Find Your Solution
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="logistics-gradient p-3 rounded-xl">
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">{solution.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8">{solution.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Challenges</h4>
                      <ul className="space-y-2">
                        {solution.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="text-sm text-muted-foreground">
                            • {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Our Solution</h4>
                      <ul className="space-y-2">
                        {solution.ourSolution.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Results</h4>
                      <ul className="space-y-2">
                        {solution.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-sm text-green-600 font-medium">
                            ✓ {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-primary mb-2">Case Study</h4>
                    <p className="text-sm text-muted-foreground italic">{solution.caseStudy}</p>
                  </div>
                  
                  <Button className="cta-button">
                    Learn More About {solution.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={`https://images.unsplash.com/${solution.image}?w=600&h=400&fit=crop`}
                    alt={solution.title}
                    className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Seamless Integration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our solutions integrate with your existing systems and workflows for a smooth transition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Laptop className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Platform Integration</h3>
                <p className="text-muted-foreground">
                  Connect with leading e-commerce platforms, ERPs, and WMS systems
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Real-Time Analytics</h3>
                <p className="text-muted-foreground">
                  Live dashboards and reporting for complete supply chain visibility
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  Industry experts and account managers for ongoing optimization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our industry experts design a customized solution that addresses your specific 
            challenges and drives measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
              Schedule Industry Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Download Industry Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
