import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  Thermometer, 
  Shield, 
  CheckCircle, 
  Download,
  AlertTriangle,
  TrendingUp,
  Clock,
  FileText,
  Users,
  BarChart3
} from 'lucide-react';

const ColdChainGuide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage for demo
    const leads = JSON.parse(localStorage.getItem('coldChainLeads') || '[]');
    const newLead = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'Cold Chain Guide Download',
      id: Date.now()
    };
    leads.push(newLead);
    localStorage.setItem('coldChainLeads', JSON.stringify(leads));
    
    setIsSubmitted(true);
    toast({
      title: "Guide Downloaded!",
      description: "Your Cold Chain Guide has been sent to your email.",
    });
    
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '' });
    }, 2000);
  };

  const temperatureZones = [
    { zone: 'Cold', range: '32°F to 38°F', products: 'Fresh produce, dairy, beverages', color: 'bg-cyan-500' },
    { zone: 'Cool', range: '38°F to 50°F', products: 'Pharmaceuticals, wine, chocolate', color: 'bg-green-500' },
    { zone: 'Controlled', range: '50°F to 70°F', products: 'Baked goods, canned items', color: 'bg-yellow-500' }
  ];

  const qualityStandards = [
    { standard: 'Temperature Control', description: 'Precise temperature monitoring and management systems' },
    { standard: 'Quality Assurance', description: 'Comprehensive quality control and verification processes' },
    { standard: 'Best Practices', description: 'Industry-leading operational procedures and protocols' },
    { standard: 'Documentation', description: 'Complete traceability and operational record keeping' }
  ];

  const bestPractices = [
    'Maintain continuous temperature monitoring',
    'Use validated packaging and insulation',
    'Establish clear SOPs for handling',
    'Regular equipment calibration and maintenance',
    'Employee training and certification',
    'Emergency response procedures',
    'Documentation and record keeping',
    'Regular audits and quality checks'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Complete Cold Chain Management Guide</h1>
          <p className="text-xl text-blue-100 mb-8">
            Master temperature-controlled logistics with our comprehensive guide covering 
            best practices, quality standards, and optimization strategies.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-blue-50 font-semibold py-4 px-8"
            onClick={() => setIsModalOpen(true)}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Free Guide
          </Button>
        </div>
      </section>

      {/* Guide Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What's Inside This Guide</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to establish and maintain an effective cold chain operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Thermometer, title: 'Temperature Zones', description: '45+ pages covering optimal temperature ranges' },
              { icon: Shield, title: 'Quality Standards', description: 'Industry best practices and quality protocols' },
              { icon: BarChart3, title: 'Performance Metrics', description: 'KPIs and monitoring best practices' },
              { icon: Users, title: 'Training Materials', description: 'Staff education and certification guides' }
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Temperature Zones */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Critical Temperature Zones</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {temperatureZones.map((zone, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${zone.color}`}></div>
                    <CardTitle className="text-primary">{zone.zone} Zone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-primary mr-2" />
                      <span className="font-semibold">{zone.range}</span>
                    </div>
                    <p className="text-muted-foreground">{zone.products}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Quality Standards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="logistics-gradient p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{standard.standard}</h3>
                      <p className="text-muted-foreground">{standard.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Cold Chain Best Practices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bestPractices.map((practice, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Download Your Guide?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get instant access to our comprehensive 50+ page Cold Chain Management Guide
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-blue-50 font-semibold py-4 px-8"
            onClick={() => setIsModalOpen(true)}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Now - Free
          </Button>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary text-center">
              {isSubmitted ? 'Thank You!' : 'Download Cold Chain Guide'}
            </DialogTitle>
          </DialogHeader>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground mb-2">Your guide is being sent to your email!</p>
              <p className="text-sm text-muted-foreground">Check your inbox in a few minutes.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Business Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your Company Inc."
                />
              </div>
              
              <Button type="submit" className="w-full mt-6">
                <Download className="mr-2 h-4 w-4" />
                Download Guide
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. No spam, just valuable cold chain insights.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default ColdChainGuide;