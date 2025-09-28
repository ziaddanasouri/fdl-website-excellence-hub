import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChefHat, 
  Thermometer,
  Clock,
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Download,
  Star,
  Award,
  Snowflake,
  Package
} from 'lucide-react';

const SpecialtyCheese = () => {
  const services = [
    {
      icon: Snowflake,
      title: 'Dedicated Cheese Aging Facilities',
      description: 'Specialized aging environments with precise temperature and humidity control for artisan cheese development.',
      features: ['Multi-zone climate control', 'Humidity management (80-85%)', 'Controlled ventilation', 'Aging room monitoring']
    },
    {
      icon: Thermometer,
      title: 'Multi-Zone Temperature Control',
      description: 'Precise temperature maintenance across different storage zones for various dairy products.',
      features: ['Precision temperature control', 'Zone-specific settings', 'Real-time monitoring', 'Alarm systems']
    },
    {
      icon: Package,
      title: 'Specialized Dairy Handling',
      description: 'Expert handling protocols for delicate artisan cheeses and specialty dairy products.',
      features: ['Gentle handling procedures', 'Product-specific protocols', 'Quality preservation', 'Damage prevention']
    },
    {
      icon: ShieldCheck,
      title: 'Separate Cooler Locations',
      description: 'Dedicated storage areas preventing cross-contamination and maintaining product integrity.',
      features: ['Isolated storage zones', 'Cross-contamination prevention', 'Product segregation', 'Clean room protocols']
    }
  ];

  const capabilities = [
    { metric: 'Chilled', description: 'Temperature Range' },
    { metric: '95%', description: 'Spoilage Reduction' },
    { metric: '100%', description: 'Freshness Maintained' },
    { metric: '80-85%', description: 'Optimal Humidity' },
    { metric: '24/7', description: 'Climate Monitoring' },
    { metric: '99.8%', description: 'Quality Accuracy' }
  ];

  const cheeseTypes = [
    { name: 'Artisan Hard Cheeses', temp: 'Chilled', humidity: '80%', aging: '3-24 months' },
    { name: 'Soft Ripened Cheeses', temp: 'Chilled', humidity: '85%', aging: '2-8 weeks' },
    { name: 'Blue Cheeses', temp: 'Chilled', humidity: '85%', aging: '2-6 months' },
    { name: 'Fresh Dairy Products', temp: 'Chilled', humidity: '75%', aging: 'None' },
    { name: 'Specialty Butter', temp: 'Chilled', humidity: '75%', aging: 'None' },
    { name: 'Cultured Products', temp: 'Chilled', humidity: '80%', aging: 'Varies' }
  ];

  const qualityStandards = [
    'Industry Standards Facility',
    'Quality Certified',
    'Operational Excellence',
    'Organic Certified',
    'Kosher Certified',
    'Dairy Processing License'
  ];

  const faqs = [
    {
      question: 'What makes your cheese storage different from regular cold storage?',
      answer: 'Our facilities feature dedicated cheese aging rooms with precise humidity control (80-85%), controlled ventilation, and separate zones to prevent cross-contamination between different cheese types.'
    },
    {
      question: 'Can you handle both aged and fresh dairy products?',
      answer: 'Yes, we have separate cooler locations and zone-specific climate control to accommodate everything from fresh dairy products to aged artisan cheeses requiring different storage conditions.'
    },
    {
      question: 'How do you prevent spoilage during the aging process?',
      answer: 'We use continuous monitoring systems, precise climate control, and specialized handling protocols that have reduced spoilage by 95% compared to standard storage methods.'
    },
    {
      question: 'What types of artisan cheeses can you accommodate?',
      answer: 'We handle all types including hard cheeses, soft ripened cheeses, blue cheeses, fresh dairy, specialty butters, and cultured products with customized storage conditions for each.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white/20 p-3 rounded-xl">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <span className="text-blue-100 font-medium">Artisan Excellence</span>
              </div>
              <h1 className="text-5xl font-bold mb-6">Specialty Cheese & Dairy Storage</h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert artisan cheese storage with dedicated aging facilities, precise climate control, 
                and separate cooler locations for optimal domestic dairy product preservation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Cheese Storage Quote
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Download className="mr-2 h-5 w-5" />
                  Download Dairy Guide
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&h=500&fit=crop"
                alt="Artisan cheese aging facility"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{capability.metric}</div>
                <div className="text-sm text-muted-foreground">{capability.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Artisan Cheese Challenges</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <Thermometer className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Temperature Sensitivity</h4>
                    <p className="text-muted-foreground">Artisan cheeses require precise temperature control with different zones for aging, storage, and distribution phases.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Aging Process Management</h4>
                    <p className="text-muted-foreground">Complex aging requirements with specific humidity, ventilation, and time parameters for different cheese varieties.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <Package className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Cross-Contamination Risk</h4>
                    <p className="text-muted-foreground">Need for separate storage areas to prevent flavor transfer and maintain product integrity across different cheese types.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Dairy Solutions</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Snowflake className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Specialized Aging Facilities</h4>
                    <p className="text-muted-foreground">Dedicated cheese aging rooms with controlled humidity, ventilation, and temperature for optimal flavor development.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Multi-Zone Climate Control</h4>
                    <p className="text-muted-foreground">Multi-zone temperature control with zone-specific settings for different dairy product requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Separate Cooler Locations</h4>
                    <p className="text-muted-foreground">Isolated storage zones preventing cross-contamination and maintaining distinct flavor profiles for each product.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cheese Types Handling */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Cheese Types We Handle</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized storage conditions for every type of artisan cheese and dairy product
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cheeseTypes.map((cheese, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">{cheese.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Temperature:</span>
                      <span className="text-sm font-medium">{cheese.temp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Humidity:</span>
                      <span className="text-sm font-medium">{cheese.humidity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Aging:</span>
                      <span className="text-sm font-medium">{cheese.aging}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Specialized Dairy Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive artisan cheese and dairy storage solutions with dedicated facilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="logistics-gradient p-3 rounded-xl">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Cheese Storage & Aging Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 5-step process for optimal cheese preservation and aging
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Intake Assessment', desc: 'Quality inspection and cheese type classification upon receipt' },
              { step: '2', title: 'Zone Assignment', desc: 'Placement in appropriate climate-controlled aging or storage zone' },
              { step: '3', title: 'Aging Management', desc: 'Monitored aging process with regular quality checks' },
              { step: '4', title: 'Inventory Control', desc: 'Real-time tracking of aging progress and product status' },
              { step: '5', title: 'Climate Distribution', desc: 'Temperature-controlled packaging and delivery' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="logistics-gradient w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Quality Standards & Operations</h2>
            <p className="text-lg text-muted-foreground">Quality-assured dairy storage facility meeting all industry standards</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {qualityStandards.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg shadow">
                <ShieldCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="font-medium text-primary">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about our specialty cheese storage</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-lg font-semibold text-primary mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default SpecialtyCheese;