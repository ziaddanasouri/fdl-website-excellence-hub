
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Award,
  Star,
  Lock,
  Users
} from 'lucide-react';
import { useState } from 'react';
import PopupModal from '@/components/PopupModal';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'download' | 'quote' | 'consultation' | 'deployment';
    title?: string;
    description?: string;
    resource?: string;
  }>({
    isOpen: false,
    type: 'download'
  });

  const openModal = (type: typeof modalState.type, title?: string, description?: string, resource?: string) => {
    setModalState({ isOpen: true, type, title, description, resource });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal('download', 'Get Weekly Revenue Insights', 'Join 50,000+ executives getting our weekly revenue protection tips', 'Weekly Revenue Protection Newsletter');
  };

  const solutions = [
    { name: 'E-commerce & Retail', href: '/solutions/ecommerce' },
    { name: 'Manufacturing', href: '/solutions/manufacturing' },
    { name: 'Healthcare & Pharma', href: '/solutions/healthcare' },
    { name: 'Technology', href: '/solutions/technology' },
    { name: 'Automotive', href: '/solutions/automotive' },
    { name: 'Food & Beverage', href: '/solutions/food-beverage' }
  ];

  const services = [
    { name: '3PL & Fulfillment', href: '/services#3pl' },
    { name: 'Last Mile Delivery', href: '/services#last-mile' },
    { name: 'Supply Chain Analytics', href: '/services#analytics' },
    { name: 'Revenue Protection', href: '/services#protection' },
    { name: 'Emergency Response', href: '/services#emergency' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Security Policy', href: '/security-policy' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Cookie Policy', href: '/cookie-policy' }
  ];

  const certifications = [
    'SOC 2 Type II Certified',
    'ISO 27001 Security',
    'GDPR Compliant',
    'HIPAA Compliant',
    'PCI DSS Level 1'
  ];

  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto mobile-padding py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Don't Let Revenue Slip Away
                </h3>
                <p className="text-gray-300 mb-6">
                  Join 50,000+ executives getting weekly insights on preventing revenue leaks 
                  and optimizing logistics operations.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>50,000+ subscribers</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-blue-400 mr-1" />
                    <span>Fortune 100 insights</span>
                  </div>
                </div>
              </div>
              <div>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your business email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                    <Button type="submit" className="revops-button-primary">
                      Get Insights
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400">
                    No spam. Unsubscribe anytime. Read by CEOs at Apple, Microsoft, and Amazon.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto mobile-padding py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="revops-gradient p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">RevOps Pro</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fortune 100-grade logistics intelligence that stops revenue leaks and turns 
                supply chain into competitive advantage. Trusted by 50,000+ businesses worldwide.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                  <span>30 N Gould St, Ste R, Sheridan, WY 82801</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-3 text-gray-400" />
                  <a href="tel:4087595351" className="hover:text-accent transition-colors">
                    (408) 759-5351
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-3 text-gray-400" />
                  <a href="mailto:info@revopspro.com" className="hover:text-accent transition-colors">
                    info@revopspro.com
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-3 text-gray-400" />
                  <span>24/7 Emergency Support Available</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {certifications.slice(0, 3).map((cert, index) => (
                  <span key={index} className="text-xs bg-gray-800 px-2 py-1 rounded border border-gray-700">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-bold text-lg mb-4">Solutions</h4>
              <ul className="space-y-2">
                {solutions.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/success-stories" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/portal" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Customer Portal
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('demo', 'Schedule Demo', 'See RevOps Pro in action')}
                    className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                  >
                    Schedule Demo
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => openModal('consultation', 'Emergency Support', 'Get immediate help')}
                    className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                  >
                    Emergency Support
                  </button>
                </li>
                <li>
                  <Link to="/tracking" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Track Shipment
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('download', 'Help Center', 'Access support resources', 'Support Documentation')}
                    className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('quote', 'Get Quote', 'Calculate your ROI')}
                    className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                  >
                    Get Quote
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto mobile-padding py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <p className="text-sm text-gray-400">
                  © 2024 RevOps Pro. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                  {legal.map((item, index) => (
                    <Link 
                      key={index}
                      to={item.href} 
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-xs text-gray-400">
                  <Lock className="h-3 w-3 mr-1" />
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <Users className="h-3 w-3 mr-1" />
                  <span>50,000+ customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PopupModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        title={modalState.title}
        description={modalState.description}
        resource={modalState.resource}
      />
    </>
  );
};

export default Footer;
