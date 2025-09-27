import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { 
  CalendarIcon,
  Clock,
  CheckCircle,
  Users,
  Phone,
  Video,
  MapPin
} from 'lucide-react';

const Consultation = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    consultationType: '',
    preferredDate: undefined as Date | undefined,
    preferredTime: '',
    meetingType: '',
    currentChallenges: '',
    goals: '',
    additionalNotes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const industries = [
    'Wine & Spirits', 'Specialty Cheese', 'Confectionery', 'Foodservice', 
    'Fresh Produce', 'Pharmaceuticals', 'Retail', 'E-commerce', 'Other'
  ];

  const consultationTypes = [
    'Cold Storage Assessment',
    'Supply Chain Optimization',
    'Compliance & Regulatory',
    'Cost Reduction Analysis',
    'Technology Integration',
    'Expansion Planning',
    'General Consultation'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage for demo
    const consultations = JSON.parse(localStorage.getItem('consultations') || '[]');
    const newConsultation = {
      ...formData,
      consultationId: `CS-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'scheduled'
    };
    consultations.push(newConsultation);
    localStorage.setItem('consultations', JSON.stringify(consultations));
    
    setIsSubmitted(true);
    toast({
      title: "Consultation Scheduled!",
      description: "We'll send you a calendar invitation shortly.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-8" />
            <h1 className="text-4xl font-bold text-primary mb-4">Consultation Scheduled!</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Thank you for scheduling a consultation with our cold chain experts.
            </p>
            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <p className="text-lg font-semibold text-primary mb-2">
                Confirmation ID: CS-{Date.now()}
              </p>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{formData.preferredDate ? format(formData.preferredDate, 'PPP') : 'Date TBD'}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{formData.preferredTime || 'Time TBD'}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  {formData.meetingType === 'video' ? <Video className="h-4 w-4" /> : 
                   formData.meetingType === 'phone' ? <Phone className="h-4 w-4" /> : 
                   <MapPin className="h-4 w-4" />}
                  <span className="capitalize">{formData.meetingType} meeting</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                You'll receive a calendar invitation and meeting details within the next hour.
              </p>
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

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Schedule Your Cold Storage Consultation</h1>
          <p className="text-xl text-blue-100 mb-8">
            Get expert advice on optimizing your temperature-controlled logistics operations
          </p>
        </div>
      </section>

      {/* Consultation Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Analysis',
                description: 'Our cold chain specialists will analyze your current operations and identify optimization opportunities.'
              },
              {
                icon: CheckCircle,
                title: 'Custom Solutions',
                description: 'Receive tailored recommendations based on your specific industry and business requirements.'
              },
              {
                icon: Clock,
                title: 'Implementation Roadmap',
                description: 'Get a clear action plan with timelines and next steps for your cold storage improvements.'
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Schedule Your Free Consultation</CardTitle>
              <p className="text-center text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Your Company Inc."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="John Smith"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
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
                  
                  <div>
                    <Label htmlFor="consultationType">Consultation Type</Label>
                    <Select value={formData.consultationType} onValueChange={(value) => setFormData({ ...formData, consultationType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="What do you need help with?" />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.preferredDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.preferredDate ? format(formData.preferredDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.preferredDate}
                          onSelect={(date) => setFormData({ ...formData, preferredDate: date })}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="meetingType">Meeting Type</Label>
                    <Select value={formData.meetingType} onValueChange={(value) => setFormData({ ...formData, meetingType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="How to meet?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video Call</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="onsite">On-site Visit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="currentChallenges">Current Challenges</Label>
                  <Textarea
                    id="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={(e) => setFormData({ ...formData, currentChallenges: e.target.value })}
                    placeholder="What cold storage challenges are you currently facing?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="goals">Goals & Objectives</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    placeholder="What are you hoping to achieve with our consultation?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    placeholder="Any additional information you'd like to share?"
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Schedule Consultation
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by our team regarding your consultation request.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;