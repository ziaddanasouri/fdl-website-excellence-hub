import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  ChevronRight, 
  ChevronLeft,
  CheckCircle,
  Snowflake,
  Warehouse,
  Truck,
  Thermometer,
  ArrowRightLeft,
  BarChart3,
  MapPin,
  Calendar,
  DollarSign,
  Shield,
  FileText,
  Clock
} from 'lucide-react';

interface QuoteFormData {
  // Step 1: Service Selection
  services: string[];
  
  // Step 2: Business Details
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  
  // Step 3: Storage Requirements
  volume: string;
  temperatureZones: string[];
  specialRequirements: string;
  
  // Step 4: Additional Services
  additionalServices: string[];
  insurance: boolean;
  reporting: string;
  
  // Step 5: Notes
  additionalNotes: string;
}

const ColdStorageQuote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    services: [],
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    volume: '',
    temperatureZones: [],
    specialRequirements: '',
    additionalServices: [],
    insurance: false,
    reporting: '',
    additionalNotes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const services = [
    { id: 'cold-storage', name: 'Cold Storage & Warehousing', icon: Snowflake, description: 'Multi-temperature zone facilities with blast freezing' },
    { id: 'temp-warehousing', name: 'Temperature-Controlled Warehousing', icon: Warehouse, description: 'Specialized climate control for perishables' },
    { id: 'last-mile-delivery', name: 'Last Mile Delivery Solutions', icon: Truck, description: 'Optimized final-mile delivery service' },
    { id: 'cross-docking', name: 'Cold Chain Cross-Docking', icon: ArrowRightLeft, description: 'Temperature-controlled transfer facilities' }
  ];

  const industries = [
    'Wine & Spirits', 'Specialty Cheese', 'Confectionery', 
    'Pharmaceuticals', 'Retail', 'E-commerce', 'Other'
  ];

  const temperatureZones = [
    { id: 'cold', name: 'Chilled Storage', description: 'Dairy, beverages' },
    { id: 'cool', name: 'Cool Storage', description: 'Pharmaceuticals, wine, chocolate' },
    { id: 'controlled', name: 'Climate Controlled', description: 'Baked goods, canned items' }
  ];

  const additionalServices = [
    'Quality Control Inspections',
    'Packaging & Repackaging',
    'Labeling & Documentation',
    'Inventory Management',
    'Order Fulfillment',
    'Returns Processing',
    'Cross-Docking Services',
    'Rush Delivery Options'
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleTemperatureZoneToggle = (zoneId: string) => {
    setFormData(prev => ({
      ...prev,
      temperatureZones: prev.temperatureZones.includes(zoneId)
        ? prev.temperatureZones.filter(z => z !== zoneId)
        : [...prev.temperatureZones, zoneId]
    }));
  };

  const handleAdditionalServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const handleSubmit = () => {
    const quoteData = {
      ...formData,
      quoteId: `CQ-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // Save to localStorage for demo
    const quotes = JSON.parse(localStorage.getItem('coldStorageQuotes') || '[]');
    quotes.push(quoteData);
    localStorage.setItem('coldStorageQuotes', JSON.stringify(quotes));

    setIsSubmitted(true);
    toast({ title: "Quote Submitted!", description: "We'll contact you within 24-48 hours." });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.services.length > 0;
      case 2: return formData.companyName && formData.contactName && formData.email && formData.phone;
      case 3: return formData.volume && formData.temperatureZones.length > 0;
      case 4: return true; // Optional step
      case 5: return true; // Review step
      default: return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-8" />
            <h1 className="text-4xl font-bold text-primary mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Your cold storage quote request has been received.
            </p>
            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <p className="text-lg font-semibold text-primary mb-2">Quote Reference: CQ-{Date.now()}</p>
              <p className="text-muted-foreground mb-4">
                One of our cold chain specialists will contact you within 24-48 hours to discuss your requirements and provide a detailed quote.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Expected response time: 24-48 hours</span>
              </div>
            </div>
            <Button onClick={() => window.location.href = '/'}>
              Return to Homepage
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-primary">Cold Storage Quote</h1>
              <span className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-primary">Select Services</CardTitle>
                    <p className="text-muted-foreground">Choose the cold storage services you need</p>
                  </CardHeader>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.services.includes(service.id)
                            ? 'border-primary bg-blue-50'
                            : 'border-gray-200 hover:border-primary'
                        }`}
                        onClick={() => handleServiceToggle(service.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="logistics-gradient p-2 rounded-lg">
                            <service.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-primary">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Business Details */}
              {currentStep === 2 && (
                <div>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-primary">Business Details</CardTitle>
                    <p className="text-muted-foreground">Tell us about your company</p>
                  </CardHeader>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Your Company Inc."
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Storage Requirements */}
              {currentStep === 3 && (
                <div>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-primary">Storage Requirements</CardTitle>
                    <p className="text-muted-foreground">Specify your cold storage needs</p>
                  </CardHeader>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="volume">Storage Volume *</Label>
                      <Select value={formData.volume} onValueChange={(value) => setFormData({ ...formData, volume: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select storage volume" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (up to 5,000 sq ft)</SelectItem>
                          <SelectItem value="medium">Medium (5,000 - 20,000 sq ft)</SelectItem>
                          <SelectItem value="large">Large (20,000+ sq ft)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Temperature Zones Required *</Label>
                      <p className="text-sm text-muted-foreground mb-3">Select all temperature zones you need</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {temperatureZones.map((zone) => (
                          <div
                            key={zone.id}
                            className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.temperatureZones.includes(zone.id)
                                ? 'border-primary bg-blue-50'
                                : 'border-gray-200 hover:border-primary'
                            }`}
                            onClick={() => handleTemperatureZoneToggle(zone.id)}
                          >
                            <h4 className="font-semibold text-primary">{zone.name}</h4>
                            <p className="text-sm text-muted-foreground">{zone.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="specialRequirements">Special Requirements</Label>
                      <Textarea
                        id="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                        placeholder="Any special handling, quality standards, or equipment requirements..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Additional Services */}
              {currentStep === 4 && (
                <div>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-primary">Additional Services</CardTitle>
                    <p className="text-muted-foreground">Enhance your cold storage solution</p>
                  </CardHeader>
                  
                  <div className="space-y-6">
                    <div>
                      <Label>Value-Added Services</Label>
                      <p className="text-sm text-muted-foreground mb-3">Select any additional services you need</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {additionalServices.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.additionalServices.includes(service)}
                              onCheckedChange={() => handleAdditionalServiceToggle(service)}
                            />
                            <Label htmlFor={service} className="text-sm">{service}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="insurance"
                        checked={formData.insurance}
                        onCheckedChange={(checked) => setFormData({ ...formData, insurance: !!checked })}
                      />
                      <Label htmlFor="insurance">Cargo Insurance Coverage</Label>
                    </div>
                    
                    <div>
                      <Label htmlFor="reporting">Reporting Requirements</Label>
                      <Select value={formData.reporting} onValueChange={(value) => setFormData({ ...formData, reporting: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select reporting level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic temperature logs</SelectItem>
                          <SelectItem value="detailed">Detailed compliance reports</SelectItem>
                          <SelectItem value="realtime">Real-time dashboards</SelectItem>
                          <SelectItem value="custom">Custom reporting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Review & Submit */}
              {currentStep === 5 && (
                <div>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-primary">Review Your Quote</CardTitle>
                    <p className="text-muted-foreground">Please review your information before submitting</p>
                  </CardHeader>
                  
                  <div className="space-y-6">
                    {/* Quote Summary */}
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-primary mb-4">Quote Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold">Company:</p>
                          <p className="text-muted-foreground">{formData.companyName}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Contact:</p>
                          <p className="text-muted-foreground">{formData.contactName}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Services:</p>
                          <p className="text-muted-foreground">{formData.services.length} selected</p>
                        </div>
                        <div>
                          <p className="font-semibold">Volume:</p>
                          <p className="text-muted-foreground">{formData.volume}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Temperature Zones:</p>
                          <p className="text-muted-foreground">{formData.temperatureZones.length} zones selected</p>
                        </div>
                        <div>
                          <p className="font-semibold">Additional Services:</p>
                          <p className="text-muted-foreground">{formData.additionalServices.length} selected</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea
                        id="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                        placeholder="Any additional information or questions..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                
                <Button
                  onClick={nextStep}
                  disabled={!canProceed()}
                >
                  {currentStep === totalSteps ? 'Submit Quote' : 'Next'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ColdStorageQuote;