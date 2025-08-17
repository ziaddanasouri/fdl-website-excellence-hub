
import { Link } from 'react-router-dom';
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with FDL Logistics</h3>
            <p className="text-slate-300 mb-6">Get the latest insights on logistics, supply chain trends, and industry updates.</p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border-slate-600 text-white"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="logistics-gradient p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">FDL</h2>
                <p className="text-sm text-slate-400">Fond De Lac Logistics</p>
              </div>
            </div>
            <p className="text-slate-300">
              Leading the future of logistics with innovative 3PL solutions, last-mile delivery, and global transportation services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">3PL Services</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Warehousing</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Last Mile Delivery</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Transportation</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Supply Chain</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Cross Docking</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions" className="text-slate-300 hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link to="/solutions" className="text-slate-300 hover:text-white transition-colors">Retail</Link></li>
              <li><Link to="/solutions" className="text-slate-300 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link to="/solutions" className="text-slate-300 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/solutions" className="text-slate-300 hover:text-white transition-colors">Automotive</Link></li>
              <li><Link to="/solutions" className="text-slate-300 hover:text-white transition-colors">Technology</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">1-800-FDL-SHIP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">info@fdllogistics.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-slate-300">
                  123 Logistics Drive<br />
                  Fond Du Lac, WI 54935<br />
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 FDL Logistics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/careers" className="text-slate-400 hover:text-white text-sm transition-colors">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
