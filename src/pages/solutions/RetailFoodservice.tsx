import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Store, 
  MapPin,
  Clock,
  Users,
  Truck,
  CheckCircle,
  ArrowRight,
  Phone,
  Download,
  Star,
  Award,
  Building,
  Calendar,
  Target,
  Network
} from 'lucide-react';

const RetailFoodservice = () => {
  const services = [
    {
      icon: Network,
      title: 'Northeast Regional Distribution',
      description: 'Comprehensive distribution network covering NY, PA, CT, and all 5 NYC boroughs with specialized routing.',
      features: ['5 NYC boroughs coverage', 'NY, PA, CT territories', 'Westchester County', 'Hamptons delivery', 'Regional optimization']
    },
    {
      icon: Clock,
      title: 'Restaurant Delivery Windows',
      description: 'Time-sensitive delivery schedules designed for restaurant operations and food service requirements.',
      features: ['Early morning delivery', 'Scheduled time windows', 'Rush hour avoidance', 'Emergency delivery', 'Weekend service']
    },
    {
      icon: Building,
      title: 'Specialty Grocer Partnerships',
      description: 'Dedicated partnerships with specialty grocers providing customized distribution solutions.',
      features: ['50+ grocer partnerships', 'Custom delivery schedules', 'Specialty product handling', 'Merchandising support', 'Inventory management']
    },
    {
      icon: Truck,
      title: '24/7 Emergency Capability',
      description: 'Round-the-clock emergency delivery service for critical restaurant and retail needs.',
      features: ['24/7 availability', 'Emergency response', 'Critical item delivery', 'Holiday service', 'Urgent order fulfillment']
    }
  ];

  const capabilities = [
    { metric: '99.2%', description: 'On-Time Restaurant Delivery' },
    { metric: '50+', description: 'Specialty Grocer Partners' },
    { metric: '5', description: 'NYC Boroughs Covered' },
    { metric: '24/7', description: 'Emergency Delivery' },
    { metric: '3', description: 'States Covered' },
    { metric: '99%', description: 'Delivery Accuracy' }
  ];

  const serviceAreas = [
    { area: 'Manhattan', coverage: 'All Districts', specialties: ['Fine Dining', 'Hotels', 'Specialty Markets'] },
    { area: 'Brooklyn', coverage: 'All Neighborhoods', specialties: ['Artisan Bakeries', 'Local Grocers', 'Restaurants'] },
    { area: 'Queens', coverage: 'Complete Borough', specialties: ['Ethnic Markets', 'Food Distributors', 'Cafes'] },
    { area: 'Bronx', coverage: 'All Areas', specialties: ['Chain Restaurants', 'Markets', 'Catering'] },
    { area: 'Staten Island', coverage: 'Full Island', specialties: ['Family Restaurants', 'Local Markets', 'Delis'] },
    { area: 'Westchester', coverage: 'County-wide', specialties: ['Upscale Dining', 'Gourmet Shops', 'Country Clubs'] },
    { area: 'Long Island', coverage: 'Including Hamptons', specialties: ['Seasonal Dining', 'Resort Hotels', 'Beach Clubs'] },
    { area: 'New Jersey', coverage: 'Northern NJ', specialties: ['Corporate Dining', 'Suburbs', 'Shopping Centers'] },
    { area: 'Connecticut', coverage: 'Fairfield County', specialties: ['Fine Dining', 'Specialty Stores', 'Corporate'] }
  ];

  const restaurantTypes = [
    'Fine Dining Establishments',
    'Chain Restaurants',
    'Fast Casual Concepts',
    'Hotels & Resorts',
    'Corporate Dining',
    'Catering Companies',
    'Specialty Food Trucks',
    'Seasonal Operations'
  ];

  const certifications = [
    'FDA Registered Facility',
    'SQF Certified',
    'HACCP Compliant',
    'DOT Licensed',
    'NYC Commercial License',
    'Food Handler Certified'
  ];

  const faqs = [
    {
      question: 'What areas do you cover for restaurant delivery?',
      answer: 'We provide complete coverage of NYC (all 5 boroughs), Westchester County, Long Island including the Hamptons, Northern New Jersey, and Fairfield County Connecticut with specialized routing for each area.'
    },
    {
      question: 'Can you accommodate restaurant delivery time windows?',
      answer: 'Yes, we specialize in restaurant-specific delivery windows including early morning deliveries, scheduled time slots, and emergency delivery capability to meet your operational needs.'
    },
    {
      question: 'Do you work with specialty grocery stores?',
      answer: 'We have partnerships with over 50 specialty grocers providing customized distribution solutions, merchandising support, and flexible delivery schedules tailored to each store\'s requirements.'
    },
    {
      question: 'What is your on-time delivery rate for restaurants?',
      answer: 'We maintain a 99.2% on-time delivery rate for restaurant deliveries through optimized routing, dedicated delivery windows, and real-time tracking systems.'
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
                  <Store className="h-8 w-8 text-white" />
                </div>
                <span className="text-blue-100 font-medium">Regional Excellence</span>
              </div>
              <h1 className="text-5xl font-bold mb-6">Retail & Foodservice Supply Chain</h1>
              <p className="text-xl text-blue-100 mb-8">
                Restaurant supply chain expertise and specialty grocer distribution with complete 
                geographic coverage across the Northeast including all 5 NYC boroughs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Distribution Quote
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Download className="mr-2 h-5 w-5" />
                  Download Coverage Map
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                alt="Restaurant supply chain distribution"
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
              <h2 className="text-3xl font-bold text-primary mb-6">Foodservice Distribution Challenges</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Time-Sensitive Deliveries</h4>
                    <p className="text-muted-foreground">Restaurants require precise delivery windows to maintain operations, with early morning and scheduled deliveries critical for success.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Complex Geographic Coverage</h4>
                    <p className="text-muted-foreground">NYC's 5 boroughs, traffic patterns, and regional territories require specialized routing and local knowledge for efficient delivery.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg mt-1">
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Diverse Customer Needs</h4>
                    <p className="text-muted-foreground">Different requirements for fine dining, chain restaurants, specialty grocers, and seasonal operations across the region.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Distribution Solutions</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Network className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Regional Distribution Network</h4>
                    <p className="text-muted-foreground">Comprehensive coverage of NY, PA, CT plus all 5 NYC boroughs with optimized routing and local expertise.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Restaurant-Specific Windows</h4>
                    <p className="text-muted-foreground">Scheduled delivery windows designed for restaurant operations with 99.2% on-time performance and emergency capability.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Specialty Grocer Partnerships</h4>
                    <p className="text-muted-foreground">Over 50 specialty grocer partnerships with customized solutions, merchandising support, and flexible scheduling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Complete Northeast Coverage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive geographic coverage with specialized knowledge of each area's unique requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-bold text-primary">{area.area}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{area.coverage}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Specialties:</h4>
                    <ul className="space-y-1">
                      {area.specialties.map((specialty, specIndex) => (
                        <li key={specIndex} className="text-xs text-muted-foreground flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {specialty}
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

      {/* Restaurant Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Restaurant Types We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized distribution solutions for every type of foodservice operation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {restaurantTypes.map((type, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-lg text-center">
                <Store className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-primary">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Specialized Distribution Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive foodservice and retail distribution solutions across the Northeast
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
            <h2 className="text-4xl font-bold text-primary mb-4">Distribution Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 5-step process for efficient foodservice and retail distribution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Route Optimization', desc: 'Advanced routing considering traffic patterns and delivery windows' },
              { step: '2', title: 'Warehouse Picking', desc: 'Efficient order picking and quality verification processes' },
              { step: '3', title: 'Scheduled Departure', desc: 'Time-coordinated departures for optimal delivery timing' },
              { step: '4', title: 'Real-time Tracking', desc: 'GPS tracking with customer notifications and updates' },
              { step: '5', title: 'Delivery Confirmation', desc: 'Professional delivery with confirmation and documentation' }
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
            <h2 className="text-3xl font-bold text-primary mb-4">Licenses & Certifications</h2>
            <p className="text-lg text-muted-foreground">Fully licensed and certified distribution operation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                <Award className="h-5 w-5 text-green-500 flex-shrink-0" />
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
            <p className="text-xl text-muted-foreground">Common questions about our foodservice distribution services</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Distribution Network?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our distribution experts design a supply chain solution that delivers on time, 
            covers your territory, and supports your restaurant or retail operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call (732) 650-9200
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Download className="mr-2 h-5 w-5" />
              Download Distribution Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailFoodservice;