
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Package, 
  Clock, 
  DollarSign, 
  Truck, 
  Shield,
  ArrowRight,
  ArrowLeft,
  Check
} from 'lucide-react';
import PortalLayout from '@/components/portal/PortalLayout';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const NewQuote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteData, setQuoteData] = useState({
    // Step 1: Origin & Destination
    origin: {
      address: '',
      city: '',
      state: '',
      zip: '',
      country: 'US'
    },
    destination: {
      address: '',
      city: '',
      state: '',
      zip: '',
      country: 'US'
    },
    // Step 2: Package Details
    packages: [{
      length: '',
      width: '',
      height: '',
      weight: '',
      quantity: 1,
      description: ''
    }],
    // Step 3: Service Options
    serviceLevel: '',
    deliveryDate: '',
    pickupDate: '',
    specialServices: [],
    // Step 4: Additional Info
    declaredValue: '',
    specialInstructions: '',
    requireSignature: false
  });

  const [pricing, setPricing] = useState(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const steps = [
    { id: 1, name: 'Locations', description: 'Origin & Destination' },
    { id: 2, name: 'Package Details', description: 'Size & Weight' },
    { id: 3, name: 'Service Options', description: 'Speed & Features' },
    { id: 4, name: 'Review & Quote', description: 'Final Details' }
  ];

  const serviceOptions = [
    { 
      id: 'standard', 
      name: 'Standard Delivery', 
      description: '3-5 business days', 
      basePrice: 25.99,
      icon: Truck 
    },
    { 
      id: 'express', 
      name: 'Express Delivery', 
      description: '1-2 business days', 
      basePrice: 45.99,
      icon: Clock 
    },
    { 
      id: 'same-day', 
      name: 'Same Day Delivery', 
      description: 'Within 4-6 hours', 
      basePrice: 89.99,
      icon: Package 
    }
  ];

  const specialServices = [
    { id: 'insurance', name: 'Package Insurance', price: 5.99 },
    { id: 'signature', name: 'Signature Required', price: 3.99 },
    { id: 'tracking', name: 'Real-time Tracking', price: 2.99 },
    { id: 'fragile', name: 'Fragile Handling', price: 7.99 }
  ];

  const calculatePricing = () => {
    const baseService = serviceOptions.find(s => s.id === quoteData.serviceLevel);
    if (!baseService) return null;

    const packageCount = quoteData.packages.length;
    const totalWeight = quoteData.packages.reduce((sum, pkg) => sum + parseFloat(pkg.weight || '0'), 0);
    const specialServicesCost = quoteData.specialServices.reduce((sum, serviceId) => {
      const service = specialServices.find(s => s.id === serviceId);
      return sum + (service?.price || 0);
    }, 0);

    const basePrice = baseService.basePrice * packageCount;
    const weightSurcharge = totalWeight > 50 ? (totalWeight - 50) * 1.5 : 0;
    const subtotal = basePrice + weightSurcharge + specialServicesCost;
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    return {
      basePrice,
      weightSurcharge,
      specialServicesCost,
      subtotal,
      tax,
      total,
      estimatedDays: baseService.description
    };
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      if (currentStep === 3) {
        const calculatedPricing = calculatePricing();
        setPricing(calculatedPricing);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submitQuote = () => {
    const quoteId = `Q-${Date.now()}`;
    toast({
      title: "Quote Created Successfully!",
      description: `Your quote ${quoteId} has been created. We'll send you an email confirmation.`,
    });
    navigate('/portal/quotes');
  };

  const updateQuoteData = (section, field, value) => {
    setQuoteData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const updatePackage = (index, field, value) => {
    setQuoteData(prev => ({
      ...prev,
      packages: prev.packages.map((pkg, i) => 
        i === index ? { ...pkg, [field]: value } : pkg
      )
    }));
  };

  const addPackage = () => {
    setQuoteData(prev => ({
      ...prev,
      packages: [...prev.packages, {
        length: '',
        width: '',
        height: '',
        weight: '',
        quantity: 1,
        description: ''
      }]
    }));
  };

  return (
    <PortalLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Request New Quote</h1>
          <p className="text-muted-foreground">Get instant pricing for your shipment</p>
        </div>

        {/* Progress Steps */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep > step.id ? 'bg-green-500 text-white' :
                    currentStep === step.id ? 'bg-primary text-white' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.id ? <Check className="h-5 w-5" /> : step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-1 w-20 mx-2 ${
                      currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <Progress value={(currentStep / 4) * 100} className="w-full" />
          </CardContent>
        </Card>

        {/* Step Content */}
        <Card>
          <CardHeader>
            <CardTitle>{steps[currentStep - 1].name}</CardTitle>
            <CardDescription>{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Locations */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Origin */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <h3 className="text-lg font-semibold">Pickup Location</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="origin-address">Street Address</Label>
                        <Input
                          id="origin-address"
                          placeholder="123 Main Street"
                          value={quoteData.origin.address}
                          onChange={(e) => updateQuoteData('origin', 'address', e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="origin-city">City</Label>
                          <Input
                            id="origin-city"
                            placeholder="New York"
                            value={quoteData.origin.city}
                            onChange={(e) => updateQuoteData('origin', 'city', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="origin-state">State</Label>
                          <Select onValueChange={(value) => updateQuoteData('origin', 'state', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="NY">New York</SelectItem>
                              <SelectItem value="CA">California</SelectItem>
                              <SelectItem value="TX">Texas</SelectItem>
                              <SelectItem value="FL">Florida</SelectItem>
                              <SelectItem value="WI">Wisconsin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="origin-zip">ZIP Code</Label>
                        <Input
                          id="origin-zip"
                          placeholder="10001"
                          value={quoteData.origin.zip}
                          onChange={(e) => updateQuoteData('origin', 'zip', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-red-600" />
                      <h3 className="text-lg font-semibold">Delivery Location</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="dest-address">Street Address</Label>
                        <Input
                          id="dest-address"
                          placeholder="456 Oak Avenue"
                          value={quoteData.destination.address}
                          onChange={(e) => updateQuoteData('destination', 'address', e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="dest-city">City</Label>
                          <Input
                            id="dest-city"
                            placeholder="Los Angeles"
                            value={quoteData.destination.city}
                            onChange={(e) => updateQuoteData('destination', 'city', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="dest-state">State</Label>
                          <Select onValueChange={(value) => updateQuoteData('destination', 'state', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="NY">New York</SelectItem>
                              <SelectItem value="CA">California</SelectItem>
                              <SelectItem value="TX">Texas</SelectItem>
                              <SelectItem value="FL">Florida</SelectItem>
                              <SelectItem value="WI">Wisconsin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="dest-zip">ZIP Code</Label>
                        <Input
                          id="dest-zip"
                          placeholder="90210"
                          value={quoteData.destination.zip}
                          onChange={(e) => updateQuoteData('destination', 'zip', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Package Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {quoteData.packages.map((pkg, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">Package {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <Label>Length (inches)</Label>
                          <Input
                            placeholder="12"
                            value={pkg.length}
                            onChange={(e) => updatePackage(index, 'length', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Width (inches)</Label>
                          <Input
                            placeholder="8"
                            value={pkg.width}
                            onChange={(e) => updatePackage(index, 'width', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Height (inches)</Label>
                          <Input
                            placeholder="6"
                            value={pkg.height}
                            onChange={(e) => updatePackage(index, 'height', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Weight (lbs)</Label>
                          <Input
                            placeholder="5"
                            value={pkg.weight}
                            onChange={(e) => updatePackage(index, 'weight', e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <Label>Package Description</Label>
                        <Input
                          placeholder="Electronics, fragile items, etc."
                          value={pkg.description}
                          onChange={(e) => updatePackage(index, 'description', e.target.value)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="outline" onClick={addPackage} className="w-full">
                  + Add Another Package
                </Button>
              </div>
            )}

            {/* Step 3: Service Options */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select Delivery Speed</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {serviceOptions.map((service) => (
                      <Card 
                        key={service.id} 
                        className={`cursor-pointer transition-all ${
                          quoteData.serviceLevel === service.id 
                            ? 'ring-2 ring-primary bg-primary/5' 
                            : 'hover:shadow-md'
                        }`}
                        onClick={() => setQuoteData(prev => ({ ...prev, serviceLevel: service.id }))}
                      >
                        <CardContent className="p-4 text-center">
                          <service.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h4 className="font-semibold">{service.name}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                          <p className="text-lg font-bold text-primary mt-2">
                            ${service.basePrice}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-4">Additional Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {specialServices.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={quoteData.specialServices.includes(service.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setQuoteData(prev => ({
                                  ...prev,
                                  specialServices: [...prev.specialServices, service.id]
                                }));
                              } else {
                                setQuoteData(prev => ({
                                  ...prev,
                                  specialServices: prev.specialServices.filter(s => s !== service.id)
                                }));
                              }
                            }}
                            className="rounded"
                          />
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <span className="text-primary font-semibold">+${service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Quote */}
            {currentStep === 4 && pricing && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Quote Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quote Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Base Service</span>
                          <span>${pricing.basePrice.toFixed(2)}</span>
                        </div>
                        {pricing.weightSurcharge > 0 && (
                          <div className="flex justify-between">
                            <span>Weight Surcharge</span>
                            <span>${pricing.weightSurcharge.toFixed(2)}</span>
                          </div>
                        )}
                        {pricing.specialServicesCost > 0 && (
                          <div className="flex justify-between">
                            <span>Additional Services</span>
                            <span>${pricing.specialServicesCost.toFixed(2)}</span>
                          </div>
                        )}
                        <Separator />
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${pricing.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax</span>
                          <span>${pricing.tax.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span className="text-primary">${pricing.total.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm">Estimated delivery: {pricing.estimatedDays}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          <span className="text-sm">Full insurance coverage included</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Shipment Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Shipment Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-600">From:</h4>
                        <p className="text-sm">
                          {quoteData.origin.address}<br />
                          {quoteData.origin.city}, {quoteData.origin.state} {quoteData.origin.zip}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600">To:</h4>
                        <p className="text-sm">
                          {quoteData.destination.address}<br />
                          {quoteData.destination.city}, {quoteData.destination.state} {quoteData.destination.zip}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Packages:</h4>
                        {quoteData.packages.map((pkg, index) => (
                          <p key={index} className="text-sm">
                            Package {index + 1}: {pkg.length}"×{pkg.width}"×{pkg.height}", {pkg.weight} lbs
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Check className="h-6 w-6 text-green-600" />
                      <div>
                        <h3 className="font-semibold text-green-800">Quote Ready!</h3>
                        <p className="text-green-700">Your quote is valid for 30 days. Book now to secure this rate.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button onClick={nextStep}>
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={submitQuote} className="bg-green-600 hover:bg-green-700">
                  <Check className="h-4 w-4 mr-2" />
                  Create Quote
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default NewQuote;
