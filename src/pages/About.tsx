
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Award, 
  Globe, 
  TrendingUp, 
  Heart, 
  Shield, 
  Zap,
  Target,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years in Business', value: '25+', icon: Award },
    { label: 'Countries Served', value: '150+', icon: Globe },
    { label: 'Team Members', value: '5,000+', icon: Users },
    { label: 'Annual Revenue', value: '$2.5B', icon: TrendingUp },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We deliver on our promises with 99.8% on-time performance and unwavering commitment to excellence.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and continuous improvement to stay ahead of industry demands.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is guided by what\'s best for our customers and their success.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Accuracy and attention to detail in every shipment, every delivery, every interaction.'
    }
  ];

  const leadership = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: '15+ years in logistics leadership, former VP at FedEx, MBA from Wharton',
      image: 'photo-1494790108755-2616b332c3e4'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Operating Officer',
      bio: 'Supply chain optimization expert, 20 years at UPS, Six Sigma Black Belt',
      image: 'photo-1472099645785-5658abf4ff4e'
    },
    {
      name: 'Jennifer Kim',
      role: 'Chief Technology Officer',
      bio: 'Former Amazon logistics tech lead, MIT Computer Science, AI/ML specialist',
      image: 'photo-1507003211169-0a1dd7228f2d'
    },
    {
      name: 'Robert Johnson',
      role: 'Chief Financial Officer',
      bio: 'Corporate finance veteran, former Goldman Sachs, CPA and CFA certified',
      image: 'photo-1560250097-0b93528c311a'
    }
  ];

  const timeline = [
    { year: '1999', event: 'Founded FDL Logistics in Fond Du Lac, Wisconsin' },
    { year: '2003', event: 'Expanded to 5 Midwest distribution centers' },
    { year: '2008', event: 'Acquired regional 3PL competitor, doubled capacity' },
    { year: '2012', event: 'Launched technology platform and real-time tracking' },
    { year: '2016', event: 'International expansion to Canada and Mexico' },
    { year: '2020', event: 'Deployed AI-powered route optimization system' },
    { year: '2022', event: 'Achieved carbon-neutral shipping operations' },
    { year: '2024', event: 'Celebrating 25 years of logistics excellence' }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'C-TPAT (Customs-Trade Partnership)',
    'TSA Certified Cargo Screening Facility',
    'FDA Registered Facility',
    'IATA Dangerous Goods Certified'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">25 Years of Logistics Excellence</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                From a small Wisconsin startup to a global logistics leader, FDL has been 
                revolutionizing supply chains and connecting businesses worldwide since 1999.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
                  Our Story
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Leadership Team
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                alt="FDL headquarters" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To empower businesses of all sizes with world-class logistics solutions that drive growth, 
                reduce costs, and exceed customer expectations. We're committed to being the most trusted 
                logistics partner, delivering reliability, innovation, and excellence in every shipment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-muted-foreground">Deliver exceptional customer experiences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-muted-foreground">Drive sustainable growth for our partners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-muted-foreground">Pioneer logistics innovation and technology</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To be the global leader in intelligent logistics, connecting every business to unlimited 
                possibilities through seamless, sustainable, and smart supply chain solutions. We envision 
                a world where distance is no barrier to commerce and growth.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">2030 Goals</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 100% carbon-neutral operations</li>
                  <li>• AI-powered autonomous supply chains</li>
                  <li>• Same-day delivery in 500+ cities</li>
                  <li>• $10B+ in annual revenue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide every decision and drive our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our 25-year history of growth and innovation
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="logistics-gradient text-white text-lg font-bold w-20 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.year}
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border">
                  <p className="text-muted-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced leaders driving innovation and excellence in logistics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <img 
                    src={`https://images.unsplash.com/${leader.image}?w=200&h=200&fit=crop&crop=face`}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-primary mb-1">{leader.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{leader.role}</p>
                  <p className="text-xs text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Certifications & Compliance</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We maintain the highest standards of quality, security, and compliance 
                across all our operations and facilities.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Quality certifications" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">100%</p>
                    <p className="text-sm text-muted-foreground">Compliance Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the FDL Family</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're looking for a logistics partner or want to build your career with us, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8">
              Partner With Us
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Careers
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
