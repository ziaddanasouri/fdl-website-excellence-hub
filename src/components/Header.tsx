
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Truck, Package, Globe, Phone, User } from 'lucide-react';
import fdlLogo from '@/assets/fdl-dnt-logo-chilled.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Delivery Schedule', href: '/delivery-schedule' },
    { name: 'Tracking', href: '/tracking' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={fdlLogo} alt="FDL DNT Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              (732) 650-9200
            </Button>
            <a 
              href="http://fdl.zapto.org/wm/logon.cfm?action=LoginPanel&username=&passto=index%2Ecfm%3Faction%3DDisplayCompanies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Customer Portal
              </Button>
            </a>
            <Button className="cta-button">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  (732) 650-9200
                </Button>
                <a 
                  href="http://fdl.zapto.org/wm/logon.cfm?action=LoginPanel&username=&passto=index%2Ecfm%3Faction%3DDisplayCompanies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Customer Portal
                  </Button>
                </a>
                <Button className="cta-button">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
