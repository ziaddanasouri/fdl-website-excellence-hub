import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Candy, 
  Thermometer,
  Droplets,
  ShieldCheck,
  Calendar,
  CheckCircle,
  ArrowRight,
  Phone,
  Download,
  Star,
  Award,
  Snowflake,
  Package,
  Sun,
  CloudRain
} from 'lucide-react';

const ConfectionerySweets = () => {
  const services = [
    {
      icon: Snowflake,
      title: 'Climate-Controlled Storage',
      description: 'Specialized confectionery storage with precise temperature and humidity control to prevent bloom and maintain quality.',
      features: ['Temperature control (60-68°F)', 'Humidity management (50-60%)', 'Air circulation systems', 'Bloom prevention protocols']
    },
    {
      icon: Droplets,
      title: 'Humidity Management Systems',
      description: 'Advanced humidity control systems preventing moisture damage and chocolate bloom formation.',
      features: ['Dehumidification systems', 'Moisture monitoring', 'Condensation prevention', 'Package integrity protection']
    },
    {
      icon: Sun,
      title: 'Seasonal Handling Adjustments',
      description: 'Adaptive storage protocols that adjust for seasonal temperature variations and weather conditions.',
      features: ['Summer heat protocols', 'Winter adjustments', 'Seasonal planning', 'Weather-responsive controls']
    },
    {
      icon: Package,
      title: 'Package Integrity Maintenance',
      description: 'Specialized handling and storage protocols to maintain packaging integrity and product presentation.',
      features: ['Gentle handling procedures', 'Stack management', 'Packaging protection', 'Damage prevention systems']
    }
  ];

  const capabilities = [
    { metric: '60-68°F', description: 'Optimal Temperature Range' },
    { metric: '0', description: 'Bloom Incidents' },
    { metric: '99%', description: 'Package Integrity' },
    { metric: '30%', description: 'Extended Product Life' },
    { metric: '50-60%', description: 'Humidity Control' },
    { metric: '100%', description: 'Quality Preservation' }
  ];

  const productTypes = [
    { name: 'Premium Chocolate', temp: '60-65°F', humidity: '50-55%', concern: 'Bloom Prevention' },
    { name: 'Chocolate Confections', temp: '62-68°F', humidity: '50-60%', concern: 'Shape Retention' },
    { name: 'Hard Candies', temp: '60-70°F', humidity: '45-55%', concern: 'Moisture Absorption' },
    { name: 'Gummy Products', temp: '60-68°F', humidity: '45-50%', concern: 'Texture Maintenance' },
    { name: 'Chocolate Bars', temp: '60-65°F', humidity: '50-55%', concern: 'Bloom & Texture' },
    { name: 'Seasonal Items', temp: '58-65°F', humidity: '50-55%', concern: 'Holiday Quality' }
  ];

  const bloomPrevention = [
    {
      title: 'Fat Bloom Prevention',
      description: 'Temperature stability prevents cocoa butter migration',
      solution: 'Consistent 60-65°F temperature control'
    },
    {
      title: 'Sugar Bloom Prevention',
      description: 'Humidity control prevents moisture condensation',
      solution: '50-60% relative humidity maintenance'
    },
    {
      title: 'Surface Protection',
      description: 'Air circulation prevents hot spots and condensation',
      solution: 'Controlled ventilation systems'
    }
  ];

  const qualityStandards = [
    'Industry Standards Facility',
    'Quality Certified',
    'Operational Excellence',
    'Organic Certified',
    'Kosher Certified',
    'Food Safety Standards'
  ];

  const faqs = [
    {
      question: 'How do you prevent chocolate bloom in storage?',
      answer: 'We maintain consistent temperatures (60-65°F) and humidity levels (50-60%) with controlled air circulation to prevent both fat bloom and sugar bloom formation, ensuring chocolate maintains its appearance and quality.'
    },
    {
      question: 'Can you handle seasonal confectionery items?',
      answer: 'Yes, we specialize in seasonal confectionery storage with adaptive protocols for holiday items, summer heat protection, and special handling for temperature-sensitive seasonal products.'
    },
    {
      question: 'What makes your confectionery storage different?',
      answer: 'Our facilities feature specialized climate control designed specifically for confectionery products, with precise temperature and humidity management that has prevented 100% of bloom incidents.'
    },
    {
      question: 'How do you maintain package integrity?',
      answer: 'We use gentle handling procedures, proper stacking techniques, and climate control to maintain 99% package integrity, protecting both product quality and presentation value.'
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
                  <Candy className="h-8 w-8 text-white" />
                </div>
                <span className="text-blue-100 font-medium">Sweet Solutions</span>
              </div>
              <h1 className="text-5xl font-bold mb-6">Confectionery & Sweets Storage</h1>
              <p className="text-xl text-blue-100 mb-8">
                Specialized chocolate and confectionery climate control with heat and humidity sensitivity 
                management to prevent bloom and extend product life by 30%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Confectionery Quote
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Download className="mr-2 h-5 w-5" />
                  Download Sweet Storage Guide
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&h=500&fit=crop"
                alt="Premium chocolate confectionery"
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
              <h2 className="text-3xl font-bold text-primary mb-6">Confectionery Storage Challenges</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <Sun className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Heat & Humidity Sensitivity</h4>
                    <p className="text-muted-foreground">Chocolate and confectionery products are extremely sensitive to temperature fluctuations and humidity changes that cause bloom and texture issues.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <Star className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Bloom Formation</h4>
                    <p className="text-muted-foreground">Fat bloom and sugar bloom can destroy product appearance and quality, leading to significant financial losses and customer dissatisfaction.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <Calendar className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Seasonal Variations</h4>
                    <p className="text-muted-foreground">Summer heat and winter temperature swings require adaptive storage protocols to maintain consistent product quality year-round.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Confectionery Solutions</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Snowflake className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Precision Climate Control</h4>
                    <p className="text-muted-foreground">Specialized storage environments maintaining optimal 60-68°F temperature and 50-60% humidity for perfect confectionery preservation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Bloom Prevention Protocols</h4>
                    <p className="text-muted-foreground">Advanced systems preventing both fat and sugar bloom formation with zero bloom incidents in our facilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Seasonal Adaptability</h4>
                    <p className="text-muted-foreground">Weather-responsive storage protocols that automatically adjust for seasonal temperature variations and extreme weather conditions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloom Prevention Science */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Bloom Prevention Science</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding and preventing the science behind chocolate bloom formation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bloomPrevention.map((prevention, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <ShieldCheck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{prevention.title}</h3>
                  <p className="text-muted-foreground mb-4">{prevention.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-700">{prevention.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Confectionery Products We Handle</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized storage conditions for every type of confectionery and sweet product
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productTypes.map((product, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">{product.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Temperature:</span>
                      <span className="text-sm font-medium">{product.temp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Humidity:</span>
                      <span className="text-sm font-medium">{product.humidity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Key Concern:</span>
                      <span className="text-sm font-medium text-orange-600">{product.concern}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Specialized Confectionery Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive climate-controlled storage solutions designed for confectionery excellence
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Confectionery Storage Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 5-step process for optimal confectionery preservation and quality maintenance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Product Assessment', desc: 'Quality inspection and confectionery type classification' },
              { step: '2', title: 'Climate Placement', desc: 'Assignment to optimal temperature and humidity zone' },
              { step: '3', title: 'Bloom Prevention', desc: 'Continuous monitoring and bloom prevention protocols' },
              { step: '4', title: 'Quality Maintenance', desc: 'Regular quality checks and environmental adjustments' },
              { step: '5', title: 'Protected Distribution', desc: 'Climate-controlled packaging and delivery' }
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Quality Standards & Operations</h2>
            <p className="text-lg text-muted-foreground">Quality-assured confectionery storage facility meeting all standards</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {qualityStandards.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                <ShieldCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="font-medium text-primary">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about our confectionery storage solutions</p>
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

export default ConfectionerySweets;