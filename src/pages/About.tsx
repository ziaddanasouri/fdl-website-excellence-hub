
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
import wineWarehouse from '@/assets/wine-warehouse.png';

const About = () => {
  const stats = [
    { label: 'Years in 3PL', value: '25+', icon: Award },
    { label: 'Total Warehouse Space', value: '2M+ ft³', icon: Globe },
    { label: 'Distribution Centers', value: '12', icon: Users },
    { label: 'Northeast Coverage', value: '100%', icon: TrendingUp },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Operational Excellence',
      description: 'Maintaining 99.9% order accuracy and operational efficiency across all 3PL services.'
    },
    {
      icon: Zap,
      title: 'Cost Optimization',
      description: 'Industry-leading processes that reduce logistics costs by 20-40% while improving service levels.'
    },
    {
      icon: Heart,
      title: '3PL Expertise',
      description: 'Deep knowledge in warehousing, fulfillment, transportation, and supply chain management.'
    },
    {
      icon: Target,
      title: 'Regional Focus',
      description: 'Dedicated Northeast coverage with local expertise and rapid response capabilities.'
    }
  ];

  const leadership = [
    {
      name: 'Marcus Benedetti',
      role: 'Chief Executive Officer',
      bio: '20+ years in cold chain logistics, former VP at Lineage Logistics, Wine Industry Expert',
      image: 'photo-1472099645785-5658abf4ff4e'
    },
    {
      name: 'Elena Rodriguez',
      role: 'VP of Cold Storage Operations',
      bio: 'Temperature-controlled warehousing specialist, 15 years at Americold, Food Science degree',
      image: 'photo-1494790108755-2616b332c3e4'
    },
    {
      name: 'David Kim',
      role: 'Director of Food Safety',
      bio: 'Quality assurance expert, food safety specialist, 18 years in cold chain operations and quality management',
      image: 'photo-1507003211169-0a1dd7228f2d'
    },
    {
      name: 'Sarah Murphy',
      role: 'Northeast Regional Manager',
      bio: 'Regional logistics expert, 12 years managing Northeast cold chain operations',
      image: 'photo-1560250097-0b93528c311a'
    }
  ];

  const timeline = [
    { year: '1999', event: 'Founded FDL DNT as specialty logistics provider in Fond Du Lac, Wisconsin' },
    { year: '2003', event: 'Opened first Northeast facility with warehousing and distribution capabilities' },
    { year: '2008', event: 'Expanded into full-service 3PL with fulfillment and transportation services' },
    { year: '2012', event: 'Enhanced warehouse management systems across all distribution facilities' },
    { year: '2016', event: 'Expanded to full Northeast coverage with 12 distribution centers' },
    { year: '2020', event: 'Upgraded technology infrastructure for advanced supply chain management' },
    { year: '2022', event: 'Achieved 100% renewable energy in all warehouse operations' },
    { year: '2024', event: 'Leading Northeast provider of comprehensive 3PL logistics solutions' }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">25 Years of 3PL Excellence</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
                From warehousing to fulfillment to transportation, FDL DNT has been the Northeast's 
                trusted partner for comprehensive 3PL logistics solutions since 1999.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-6 md:px-8 text-sm md:text-base">
                  Get 3PL Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={wineWarehouse}
                alt="Wine storage warehouse with wooden crates" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="logistics-gradient p-3 md:p-4 rounded-2xl w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">{stat.value}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To optimize operations and drive efficiency for businesses through world-class 3PL services 
                and comprehensive logistics solutions. We're committed to enhancing supply chain performance 
                across warehousing, fulfillment, and transportation services.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Deliver exceptional warehousing and fulfillment services with 99.9% accuracy</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Maintain operational excellence throughout the supply chain</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Provide comprehensive Northeast regional coverage and 3PL expertise</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To be the Northeast's premier 3PL provider, setting the standard for comprehensive 
                logistics solutions across warehousing, fulfillment, and transportation. We envision 
                optimizing supply chains from manufacturer to consumer.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">2030 Goals</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 5M+ cubic feet of total warehouse space</li>
                  <li>• 100% renewable energy warehouse operations</li>
                  <li>• Same-day fulfillment throughout Northeast</li>
                  <li>• Leading multi-industry 3PL network</li>
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



      {/* CTA Section */}
      <section className="py-16 md:py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with the Northeast's 3PL Experts</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you need warehousing, fulfillment, transportation, or complete supply chain management, 
            we're here to optimize your operations and drive efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-6 md:px-8 text-sm md:text-base">
              Get 3PL Quote
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary py-3 px-6 md:px-8 text-sm md:text-base bg-transparent">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
