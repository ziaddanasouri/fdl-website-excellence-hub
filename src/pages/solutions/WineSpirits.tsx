import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wine, 
  Thermometer,
  ShieldCheck,
  Clock,
  FileCheck,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Download,
  Star,
  Award,
  Snowflake,
  MapPin
} from 'lucide-react';

const WineSpirits = () => {
  const services = [
    {
      icon: Thermometer,
      title: 'Climate-Controlled Wine Storage',
      description: 'Precision temperature control (55-60°F) with humidity management for optimal wine preservation.',
      features: ['Multi-zone temperature control', 'Humidity regulation (60-70%)', '24/7 monitoring systems', 'Vibration-free storage']
    },
    {
      icon: ShieldCheck,
      title: 'State Compliance Management',
      description: 'Full compliance with state-specific wine and spirits distribution regulations across all territories.',
      features: ['TTB license compliance', 'State permit management', 'Tax compliance reporting', 'Documentation handling']
    },
    {
      icon: Clock,
      title: 'Time-Sensitive Distribution',
      description: 'Rapid deployment with same-day and next-day delivery options for premium beverages.',
      features: ['Same-day delivery', 'Temperature-controlled vehicles', 'White glove service', 'Emergency logistics']
    },
    {
      icon: FileCheck,
      title: 'Inventory Management',
      description: 'Advanced tracking systems for vintage management, lot control, and product authentication.',
      features: ['Vintage tracking', 'Lot control systems', 'Real-time inventory', 'Product authentication']
    }
  ];

  const capabilities = [
    { metric: '55-60°F', description: 'Precise Temperature Control' },
    { metric: '100%', description: 'Regulatory Compliance' },
    { metric: '99.8%', description: 'Inventory Accuracy' },
    { metric: '15+', description: 'States Covered' },
    { metric: '24/7', description: 'Temperature Monitoring' },
    { metric: '0', description: 'Quality Incidents' }
  ];

  const certifications = [
    'FDA Registered Facility',
    'SQF Certified',
    'HACCP Compliant',
    'TTB Licensed',
    'State Distribution Permits',
    'Temperature Validation Certified'
  ];

  const faqs = [
    {
      question: 'What temperature range do you maintain for wine storage?',
      answer: 'We maintain precise climate control between 55-60°F (13-15°C) with humidity levels of 60-70% to ensure optimal wine preservation and prevent cork deterioration.'
    },
    {
      question: 'How do you handle state compliance for wine distribution?',
      answer: 'We manage all aspects of state compliance including TTB licensing, state permits, tax reporting, and documentation to ensure legal distribution across all covered territories.'
    },
    {
      question: 'Can you handle both imported and domestic wines?',
      answer: 'Yes, we specialize in both imported and domestic wine storage and distribution, with experience handling everything from everyday wines to rare vintages and collectibles.'
    },
    {
      question: 'What monitoring systems do you use?',
      answer: 'We use 24/7 temperature and humidity monitoring with real-time alerts, data logging, and detailed reporting to ensure continuous climate control and compliance documentation.'
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
                  <Wine className="h-8 w-8 text-white" />
                </div>
                <span className="text-blue-100 font-medium">Premium Solutions</span>
              </div>
              <h1 className="text-5xl font-bold mb-6">Wine & Spirits Cold Storage Solutions</h1>
              <p className="text-xl text-blue-100 mb-8">
                Specialized temperature-controlled storage and distribution for imported and domestic wines, 
                spirits, and craft beverages with complete state compliance management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Wine Storage Quote
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Download className="mr-2 h-5 w-5" />
                  Download Wine Guide
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506377872008-6645e837072d?w=600&h=500&fit=crop"
                alt="Wine storage facility"
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
              <h2 className="text-3xl font-bold text-primary mb-6">Wine Storage Challenges</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <Thermometer className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Temperature Sensitivity</h4>
                    <p className="text-muted-foreground">Wine requires precise temperature control (55-60°F) to prevent premature aging, cork deterioration, and flavor degradation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <FileCheck className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Regulatory Complexity</h4>
                    <p className="text-muted-foreground">Complex state-by-state regulations for wine distribution, licensing, and tax compliance requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <Star className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Quality Preservation</h4>
                    <p className="text-muted-foreground">Maintaining product integrity from storage through final delivery while managing inventory across vintages.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Wine Solutions</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Snowflake className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Climate-Controlled Facilities</h4>
                    <p className="text-muted-foreground">State-of-the-art wine storage with precise temperature and humidity control, vibration-free environments.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Full Compliance Management</h4>
                    <p className="text-muted-foreground">Complete handling of TTB licensing, state permits, tax compliance, and regulatory documentation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Quality Assurance</h4>
                    <p className="text-muted-foreground">Advanced tracking systems, lot control, and specialized handling protocols for premium beverages.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Specialized Wine & Spirits Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cold storage and distribution solutions designed specifically for the wine and spirits industry
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
            <h2 className="text-4xl font-bold text-primary mb-4">Wine Storage & Distribution Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 5-step process ensures perfect wine preservation from receipt to delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Intake & Inspection', desc: 'Temperature verification and quality assessment upon receipt' },
              { step: '2', title: 'Climate Storage', desc: 'Precision-controlled storage in dedicated wine facilities' },
              { step: '3', title: 'Inventory Management', desc: 'Real-time tracking with vintage and lot control systems' },
              { step: '4', title: 'Order Processing', desc: 'Careful picking with temperature maintenance protocols' },
              { step: '5', title: 'Controlled Delivery', desc: 'Temperature-controlled transport with compliance documentation' }
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

      {/* Certifications */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Certifications & Compliance</h2>
            <p className="text-lg text-muted-foreground">Fully certified and compliant wine storage facility</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                <ShieldCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="font-medium text-primary">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Success Story: Premium Wine Importer</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Managed complete distribution network for a premium wine importer, maintaining perfect temperature 
                  control across 15 states while ensuring full regulatory compliance.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-primary">$2.5M</div>
                    <div className="text-sm text-muted-foreground">Protected Inventory Value</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-muted-foreground">States Covered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Temperature Compliance</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">0</div>
                    <div className="text-sm text-muted-foreground">Quality Issues</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=500&h=400&fit=crop"
                  alt="Wine warehouse"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about our wine storage solutions</p>
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

      {/* CTA Section */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Wine Storage?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our wine storage experts design a climate-controlled solution that preserves quality, 
            ensures compliance, and protects your valuable inventory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call (732) 650-9200
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Download className="mr-2 h-5 w-5" />
              Download Wine Storage Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WineSpirits;