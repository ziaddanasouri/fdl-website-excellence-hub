
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wine, 
  ChefHat, 
  Candy, 
  Store,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Thermometer,
  Snowflake,
  Package
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Store,
      title: 'E-commerce & Retail Solutions',
      description: 'Complete fulfillment and distribution services for online retailers and e-commerce businesses.',
      challenges: [
        'Fast fulfillment expectations',
        'Peak season volume spikes',
        'Multi-channel inventory management',
        'Returns processing complexity'
      ],
      ourSolution: [
        'Advanced order management systems',
        'Scalable fulfillment operations',
        'Multi-channel integration',
        'Efficient returns processing'
      ],
      results: [
        '99.5% order accuracy achieved',
        '50% faster fulfillment times',
        '30% reduction in shipping costs',
        '95% customer satisfaction rate'
      ],
      image: 'photo-1556742049-0cfed4f6a45d'
    },
    {
      icon: Users,
      title: 'Manufacturing & Industrial',
      description: 'Specialized warehousing and distribution for manufacturing components, parts, and finished goods.',
      challenges: [
        'Complex inventory requirements',
        'Just-in-time delivery needs',
        'Quality control standards',
        'Supply chain visibility'
      ],
      ourSolution: [
        'Advanced warehouse management',
        'Real-time inventory tracking',
        'Quality assurance protocols',
        'Supply chain optimization'
      ],
      results: [
        '99.9% inventory accuracy',
        '40% reduction in carrying costs',
        '100% on-time delivery',
        'Zero quality incidents'
      ],
      image: 'photo-1565967511849-76a60a516170'
    },
    {
      icon: Wine,
      title: 'Food & Beverage Solutions',
      description: 'Temperature-controlled storage and distribution for food products, beverages, and perishable goods.',
      challenges: [
        'Temperature sensitivity',
        'Shelf life management',
        'Food safety compliance',
        'Traceability requirements'
      ],
      ourSolution: [
        'Climate-controlled facilities',
        'Cold chain management',
        'Food safety protocols',
        'Complete traceability systems'
      ],
      results: [
        '100% temperature compliance',
        '95% reduction in spoilage',
        'Full regulatory compliance',
        '99.8% order accuracy'
      ],
      image: 'photo-1547595628-c61a29f496f0'
    },
  ];

  const benefits = [
    {
      icon: Package,
      title: 'Operational Excellence',
      description: '99.9% order accuracy with optimized fulfillment'
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Reduce logistics costs by 20-40% through efficiency'
    },
    {
      icon: Clock,
      title: 'Faster Fulfillment',
      description: 'Same-day processing with next-day delivery options'
    },
    {
      icon: Users,
      title: '3PL Expertise',
      description: 'Specialized knowledge across multiple industries'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Comprehensive 3PL Solutions by Industry</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Specialized 3PL logistics solutions for e-commerce, food & beverage, manufacturing, 
            healthcare, and other industries across the Northeast.
          </p>
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
                  
                  <Button 
                    className="cta-button"
                    onClick={() => {
                      const routes = {
                        'E-commerce & Retail Solutions': '/solutions/ecommerce-retail',
                        'Manufacturing & Industrial': '/solutions/manufacturing-industrial', 
                        'Food & Beverage Solutions': '/solutions/food-beverage'
                      };
                      window.location.href = routes[solution.title as keyof typeof routes];
                    }}
                  >
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
            <h2 className="text-4xl font-bold text-primary mb-4">Supply Chain Integration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive 3PL solutions integrate seamlessly with your existing operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Thermometer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Technology Integration</h3>
                <p className="text-muted-foreground">
                  Seamless integration with WMS, ERP systems, and e-commerce platforms
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">3PL Expertise</h3>
                <p className="text-muted-foreground">
                  Comprehensive logistics specialists and dedicated account management
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Supply Chain Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our 3PL experts design a comprehensive logistics solution that optimizes operations, 
            reduces costs, and drives measurable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
              Schedule 3PL Consultation
            </Button>
            <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold">
              Download 3PL Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
