
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Building,
  Users,
  Truck,
  MessageSquare,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Customer Support',
      details: ['(732) 650-9200'],
      description: 'Available during business hours for all your logistics needs'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: ['staff@FDLwarehouse.com'],
      description: 'Send us your inquiries and we\'ll respond promptly'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['41 Saw Mill Pond Rd', 'Edison, NJ 08817'],
      description: 'Visit our main campus and distribution center'
    }
  ];

  const offices = [
    {
      city: 'Chicago',
      address: '456 Industrial Blvd, Chicago, IL 60609',
      phone: '(312) 555-0123',
      manager: 'David Thompson'
    },
    {
      city: 'Milwaukee',
      address: '789 Commerce St, Milwaukee, WI 53202',
      phone: '(414) 555-0456',
      manager: 'Lisa Martinez'
    },
    {
      city: 'Minneapolis',
      address: '321 Trade Center Dr, Minneapolis, MN 55401',
      phone: '(612) 555-0789',
      manager: 'James Wilson'
    },
    {
      city: 'Detroit',
      address: '654 Distribution Way, Detroit, MI 48201',
      phone: '(313) 555-0321',
      manager: 'Maria Garcia'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="bg-green-100 p-4 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-primary mb-4">Thank You!</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Your message has been received. Our team will get back to you within 2 hours during business hours.
                </p>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Reference ID: <span className="font-mono">FDL-{Date.now().toString().slice(-6)}</span>
                  </p>
                  <Button onClick={() => {setIsSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', inquiryType: '', message: '' })}}>
                    Send Another Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to transform your logistics? Our experts are here to help you find the perfect 
            solution for your business needs. Contact us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="font-semibold text-gray-700">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <Input
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <Input
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your Company Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quote">Request Quote</SelectItem>
                          <SelectItem value="3pl">3PL Services</SelectItem>
                          <SelectItem value="warehousing">Warehousing</SelectItem>
                          
                          <SelectItem value="tracking">Tracking Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <Textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your logistics needs..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full cta-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Map */}
            <div className="space-y-8">

              {/* Location Map Placeholder */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Our Location</h3>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                        <p className="text-lg font-semibold text-primary">FDL Headquarters</p>
                        <p className="text-sm text-muted-foreground">41 Saw Mill Pond Rd</p>
                        <p className="text-sm text-muted-foreground">Edison, NJ 08817</p>
                        <Button variant="outline" size="sm" className="mt-4" asChild>
                          <a href="https://maps.app.goo.gl/mVHQO5QqCU8IibnNA" target="_blank" rel="noopener noreferrer">
                            View on Google Maps
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Teaser */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Check out our comprehensive FAQ section for quick answers to common questions 
            about our services, pricing, and processes.
          </p>
          <Button variant="outline" size="lg">
            View FAQ
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
