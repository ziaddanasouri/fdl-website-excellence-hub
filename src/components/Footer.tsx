
import { Link } from 'react-router-dom';
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import fdlLogo from '@/assets/fdl-dnt-logo-footer.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with FDL DNT</h3>
            <p className="text-slate-300 mb-6">Get the latest insights on 3PL services, warehousing solutions, and logistics optimization.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={fdlLogo} alt="FDL DNT Logo" className="h-12 w-auto" />
            </div>
            <p className="text-slate-300">
              Leading 3PL provider with comprehensive warehousing, fulfillment, transportation, and logistics management services across the Northeast.
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
              <li><Link to="/services/warehousing-distribution" className="text-slate-300 hover:text-white transition-colors">Warehousing & Distribution</Link></li>
              <li><Link to="/services/fulfillment-services" className="text-slate-300 hover:text-white transition-colors">Fulfillment Services</Link></li>
              <li><Link to="/services/transportation-delivery" className="text-slate-300 hover:text-white transition-colors">Transportation & Delivery</Link></li>
              <li><Link to="/services/logistics-consulting" className="text-slate-300 hover:text-white transition-colors">Logistics Consulting</Link></li>
            </ul>
          </div>


          {/* Holiday Schedule */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Holiday Schedule</h3>
            <p className="text-slate-300 mb-3 text-sm font-medium">2025 Holiday Schedule</p>
            <p className="text-slate-400 text-xs mb-4">FDL will be closed on the following holidays</p>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>New Year's Day</span>
                <span>Jan 1st, 2025</span>
              </div>
              <div className="flex justify-between">
                <span>President's Day</span>
                <span>Feb 17th</span>
              </div>
              <div className="flex justify-between">
                <span>Memorial Day</span>
                <span>May 26th</span>
              </div>
              <div className="flex justify-between">
                <span>Independence Day</span>
                <span>Jul 4th</span>
              </div>
              <div className="flex justify-between">
                <span>Labor Day</span>
                <span>Sep 1st</span>
              </div>
              <div className="flex justify-between">
                <span>Thanksgiving</span>
                <span>Nov 27th</span>
              </div>
              <div className="flex justify-between">
                <span>Day after Thanksgiving</span>
                <span>Nov 28th</span>
              </div>
              <div className="flex justify-between">
                <span>Christmas</span>
                <span>Dec 25th</span>
              </div>
              <div className="flex justify-between">
                <span>New Year's</span>
                <span>Jan 1st, 2026</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs mt-3 italic">Enjoy the holidays and please be safe.</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">(732) 650-9200</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-slate-300">
                  41 Saw Mill Pond Rd<br />
                  Edison, NJ 08817<br />
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
              © 2025 Fond du Lac Logistics (FDL) - 3PL Logistics Services. All rights reserved.
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
