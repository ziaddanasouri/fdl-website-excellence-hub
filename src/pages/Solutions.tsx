
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
  Snowflake
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Wine,
      title: 'Wine & Spirits Solutions',
      description: 'Temperature-controlled storage and distribution for imported and domestic wines, spirits, and craft beverages.',
      challenges: [
        'Precise temperature requirements for wine',
        'State compliance for distribution laws',
        'Quality preservation during transport',
        'Inventory management for various vintages'
      ],
      ourSolution: [
        'Climate-controlled wine storage facilities',
        'State compliance management',
        'Specialized handling protocols',
        'Temperature monitoring systems'
      ],
      results: [
        '100% temperature compliance maintained',
        'Zero quality deterioration incidents',
        'Full state regulatory compliance',
        '99.8% inventory accuracy'
      ],
      image: 'photo-1547595628-c61a29f496f0'
    },
    {
      icon: ChefHat,
      title: 'Specialty Cheese & Dairy',
      description: 'Artisan cheese expertise with separate cooler locations and precise temperature control for domestic dairy products.',
      challenges: [
        'Artisan cheese temperature sensitivity',
        'Separate storage requirements',
        'Aging process management',
        'Specialized handling needs'
      ],
      ourSolution: [
        'Dedicated cheese aging facilities',
        'Multi-zone temperature control',
        'Specialized dairy product handling',
        'Separate cooler locations'
      ],
      results: [
        'Precise temperature control for cheese',
        '100% product freshness maintained',
        '95% reduction in spoilage',
        'Extended shelf life achievement'
      ],
      image: 'photo-1452195100486-9cc805987862'
    },
    {
      icon: Candy,
      title: 'Confectionery & Sweets',
      description: 'Chocolate and confectionery climate control with heat and humidity sensitivity management to prevent bloom.',
      challenges: [
        'Heat and humidity sensitivity',
        'Chocolate bloom prevention',
        'Seasonal temperature variations',
        'Package integrity maintenance'
      ],
      ourSolution: [
        'Climate-controlled confectionery storage',
        'Humidity management systems',
        'Bloom prevention protocols',
        'Seasonal handling adjustments'
      ],
      results: [
        'Zero bloom incidents',
        '99% package integrity maintained',
        '30% extended product life',
        '100% quality preservation'
      ],
      image: 'photo-1481391319762-47dff72954d9'
    },
  ];

  const benefits = [
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: '99.9% compliance within specified temperature ranges'
    },
    {
      icon: Snowflake,
      title: 'Cold Chain Integrity',
      description: 'Unbroken cold chain from storage to delivery'
    },
    {
      icon: Clock,
      title: 'Chilled Delivery',
      description: 'Extended shelf life through optimal cold storage'
    },
    {
      icon: Users,
      title: 'Cold Storage Expertise',
      description: 'Specialized knowledge in temperature-controlled logistics'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Cold Storage & Temperature-Controlled Solutions</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Specialized cold storage and temperature-controlled logistics solutions for wine & spirits, 
            specialty cheese, and confectionery across the Northeast.
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
                        'Wine & Spirits Solutions': '/solutions/wine-spirits',
                        'Specialty Cheese & Dairy': '/solutions/specialty-cheese-dairy', 
                        'Confectionery & Sweets': '/solutions/confectionery-sweets'
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
            <h2 className="text-4xl font-bold text-primary mb-4">Cold Chain Integration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our temperature-controlled solutions integrate seamlessly with your cold chain requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Thermometer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Cold Storage Integration</h3>
                <p className="text-muted-foreground">
                  Seamless integration with temperature monitoring and cold chain management systems
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Cold Storage Expertise</h3>
                <p className="text-muted-foreground">
                  Temperature-controlled logistics specialists and dedicated cold chain support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Cold Chain Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our cold storage experts design a temperature-controlled solution that preserves quality, 
            ensures compliance, and drives measurable results for your perishable goods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
              Schedule Cold Storage Consultation
            </Button>
            <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold">
              Download Cold Chain Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
