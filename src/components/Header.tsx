
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Shield, 
  ChevronDown,
  Lock,
  Phone,
  Calendar,
  Download
} from 'lucide-react';
import PopupModal from '@/components/PopupModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'download' | 'quote' | 'consultation' | 'deployment';
    title?: string;
    description?: string;
    resource?: string;
  }>({
    isOpen: false,
    type: 'demo'
  });

  const openModal = (type: typeof modalState.type, title?: string, description?: string, resource?: string) => {
    setModalState({ isOpen: true, type, title, description, resource });
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  const navigation = [
    { 
      name: 'Solutions', 
      href: '/solutions',
      submenu: [
        { name: 'E-commerce & Retail', href: '/solutions/ecommerce' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Healthcare & Pharma', href: '/solutions/healthcare' },
        { name: 'Technology', href: '/solutions/technology' },
        { name: 'Automotive', href: '/solutions/automotive' },
        { name: 'Food & Beverage', href: '/solutions/food-beverage' }
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Success Stories', href: '/success-stories' }
  ];

  return (
    <>
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto mobile-padding">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="revops-gradient p-2 rounded-lg">
                <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold text-primary">
                RevOps Pro
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <div className="flex items-center space-x-1 cursor-pointer">
                      <Link 
                        to={item.href}
                        className="text-gray-700 hover:text-primary font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                      <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-primary transition-colors" />
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.href}
                      className="text-gray-700 hover:text-primary font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                to="/portal" 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
              >
                <Lock className="h-4 w-4" />
                <span className="font-medium">Customer Portal</span>
              </Link>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => openModal('demo', 'Schedule Demo', 'See RevOps Pro in action')}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Demo
              </Button>
              
              <Button 
                size="sm"
                className="revops-button-primary"
                onClick={() => openModal('quote', 'Get Custom Quote', 'Calculate your ROI in 24 hours')}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white">
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block text-gray-700 hover:text-primary font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block text-sm text-gray-600 hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <Link 
                    to="/portal" 
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Lock className="h-4 w-4" />
                    <span>Customer Portal</span>
                  </Link>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-center"
                    onClick={() => openModal('demo', 'Schedule Demo', 'See RevOps Pro in action')}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Demo
                  </Button>
                  
                  <Button 
                    className="w-full revops-button-primary justify-center"
                    onClick={() => openModal('quote', 'Get Custom Quote', 'Calculate your ROI in 24 hours')}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Emergency Contact Bar */}
        <div className="bg-red-600 text-white py-2">
          <div className="max-w-7xl mx-auto mobile-padding">
            <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
              <span className="font-medium mb-2 sm:mb-0">
                🚨 Revenue Emergency? Get immediate help:
              </span>
              <div className="flex items-center space-x-4">
                <a 
                  href="tel:4087595351" 
                  className="flex items-center space-x-1 hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  <span>(408) 759-5351</span>
                </a>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-red-600"
                  onClick={() => openModal('consultation', 'Emergency Revenue Audit', 'Stop losing money now')}
                >
                  Emergency Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

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

export default Header;
