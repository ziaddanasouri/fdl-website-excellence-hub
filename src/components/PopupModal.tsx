
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, Download, Calendar, Shield, AlertTriangle, CheckCircle, Phone, DollarSign, Users, Award } from 'lucide-react';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'demo' | 'download' | 'quote' | 'consultation' | 'deployment';
  title?: string;
  description?: string;
  resource?: string;
}

const PopupModal = ({ isOpen, onClose, type, title, description, resource }: PopupModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    title: '',
    revenue: '',
    challenge: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          title: '',
          revenue: '',
          challenge: ''
        });
      }, 3000);
    }, 1500);
  };

  const getModalConfig = () => {
    switch (type) {
      case 'demo':
        return {
          title: title || 'Schedule Your Personal Demo',
          description: description || 'See how RevOps Pro can save your business $2M+ annually',
          icon: Calendar,
          buttonText: 'Schedule Demo',
          urgency: 'Only 3 demo slots available this week',
          value: '$2,500 consultation - FREE'
        };
      case 'download':
        return {
          title: title || 'Download Exclusive Resource',
          description: description || `Get instant access to ${resource || 'our comprehensive guide'}`,
          icon: Download,
          buttonText: 'Download Now',
          urgency: 'Limited time: Free access until month end',
          value: 'Exclusive Fortune 100 insights'
        };
      case 'quote':
        return {
          title: title || 'Get Your Custom ROI Quote',
          description: description || 'Discover your potential savings in 24 hours',
          icon: DollarSign,
          buttonText: 'Get Quote',
          urgency: 'Fast-track approval: Response in 4 hours',
          value: 'Custom ROI analysis worth $5,000'
        };
      case 'consultation':
        return {
          title: title || 'Book Free Revenue Audit',
          description: description || 'Uncover hidden revenue leaks costing you millions',
          icon: Phone,
          buttonText: 'Book Consultation',
          urgency: 'Free consultation worth $2,500',
          value: '45-min strategy session'
        };
      case 'deployment':
        return {
          title: title || 'Deploy This Solution',
          description: description || 'Start saving money immediately with our proven system',
          icon: CheckCircle,
          buttonText: 'Deploy Solution',
          urgency: 'Implementation starts in 48 hours',
          value: 'Dedicated solution architect'
        };
      default:
        return {
          title: 'Get Started',
          description: 'Contact our team',
          icon: CheckCircle,
          buttonText: 'Submit',
          urgency: '',
          value: ''
        };
    }
  };

  const config = getModalConfig();
  const IconComponent = config.icon;

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md mx-auto">
          <div className="text-center py-8">
            <div className="revops-gradient p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Success!</h3>
            <p className="text-muted-foreground mb-6">
              {type === 'demo' && "Demo scheduled! You'll receive a calendar invite within 5 minutes."}
              {type === 'download' && "Download starting automatically. Check your email for the resource."}
              {type === 'quote' && "Quote request received! Our team will contact you within 4 hours."}
              {type === 'consultation' && "Consultation booked! Expect a call within 24 hours."}
              {type === 'deployment' && "Deployment initiated! Our team will contact you within 2 hours."}
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-green-700 font-medium">
                ⚡ Priority status activated - You're in our fast-track queue
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              Reference ID: RevOps-{Date.now().toString().slice(-6)}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-4 mb-4">
            <div className="revops-gradient p-3 rounded-xl">
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold">{config.title}</DialogTitle>
              <p className="text-muted-foreground">{config.description}</p>
            </div>
          </div>
          
          {config.urgency && (
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <div className="text-sm text-red-700 font-medium">{config.urgency}</div>
                {config.value && (
                  <div className="text-xs text-red-600">{config.value}</div>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <Award className="h-6 w-6 text-blue-600 mx-auto mb-1" />
              <div className="text-sm font-medium text-blue-900">Fortune 100</div>
              <div className="text-xs text-blue-600">Trusted</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <Shield className="h-6 w-6 text-green-600 mx-auto mb-1" />
              <div className="text-sm font-medium text-green-900">SOC 2</div>
              <div className="text-xs text-green-600">Certified</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <Users className="h-6 w-6 text-purple-600 mx-auto mb-1" />
              <div className="text-sm font-medium text-purple-900">50,000+</div>
              <div className="text-xs text-purple-600">Customers</div>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
                className="mt-1"
                placeholder="John"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
                className="mt-1"
                placeholder="Smith"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Business Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="mt-1"
              placeholder="john.smith@company.com"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              className="mt-1"
              placeholder="(408) 759-5351"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                required
                className="mt-1"
                placeholder="Your Company Inc."
              />
            </div>
            <div>
              <Label htmlFor="title">Job Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
                className="mt-1"
                placeholder="VP of Operations"
              />
            </div>
          </div>

          {(type === 'quote' || type === 'consultation' || type === 'deployment') && (
            <>
              <div>
                <Label htmlFor="revenue">Annual Revenue</Label>
                <select
                  id="revenue"
                  value={formData.revenue}
                  onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                  className="w-full mt-1 p-3 border border-input rounded-lg bg-background"
                >
                  <option value="">Select range</option>
                  <option value="<10M">Under $10M</option>
                  <option value="10M-50M">$10M - $50M</option>
                  <option value="50M-100M">$50M - $100M</option>
                  <option value="100M-500M">$100M - $500M</option>
                  <option value="500M+">$500M+</option>
                </select>
              </div>

              <div>
                <Label htmlFor="challenge">Biggest Logistics Challenge</Label>
                <textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                  className="w-full mt-1 p-3 border border-input rounded-lg h-20 resize-none bg-background"
                  placeholder="Describe your main operational challenge..."
                />
              </div>
            </>
          )}

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              {type === 'demo' && (
                <>
                  <li>• Instant calendar invite sent to your email</li>
                  <li>• 30-minute personalized demo with solution architect</li>
                  <li>• Custom ROI calculation for your specific business</li>
                  <li>• No sales pressure - just valuable insights</li>
                </>
              )}
              {type === 'download' && (
                <>
                  <li>• Instant download access to your email</li>
                  <li>• Bonus: Exclusive case studies included</li>
                  <li>• Follow-up with actionable insights</li>
                  <li>• Optional consultation with expert</li>
                </>
              )}
              {type === 'quote' && (
                <>
                  <li>• Detailed analysis within 24 hours</li>
                  <li>• Custom ROI projections based on your data</li>
                  <li>• Implementation roadmap and timeline</li>
                  <li>• Direct line to dedicated solution architect</li>
                </>
              )}
              {type === 'consultation' && (
                <>
                  <li>• Free 45-minute revenue audit session</li>
                  <li>• Identify hidden revenue leaks</li>
                  <li>• Prioritized improvement recommendations</li>
                  <li>• No obligation custom proposal</li>
                </>
              )}
              {type === 'deployment' && (
                <>
                  <li>• Immediate solution architect assignment</li>
                  <li>• 48-hour implementation kickoff call</li>
                  <li>• Dedicated project manager assignment</li>
                  <li>• 90-day success guarantee</li>
                </>
              )}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              type="submit" 
              disabled={loading}
              className="flex-1 revops-button-primary"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  {config.buttonText}
                  <IconComponent className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="px-6">
              Cancel
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our Terms of Service and Privacy Policy. 
            Your information is encrypted and never shared with third parties.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PopupModal;
