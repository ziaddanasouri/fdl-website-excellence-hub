
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Package, 
  Truck, 
  Warehouse, 
  Globe, 
  ArrowRightLeft, 
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Users,
  DollarSign,
  Target,
  TrendingUp,
  Award,
  FileText,
  Phone,
  Mail,
  Download
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: '3PL & Fulfillment Services',
      description: 'End-to-end third-party logistics solutions designed to scale with your business growth.',
      features: [
        'Automated Inventory Management & Control',
        'Multi-Channel Order Processing & Fulfillment', 
        'Pick, Pack & Ship Operations (99.8% accuracy)',
        'Reverse Logistics & Returns Management',
        'Quality Control & Product Inspection',
        'Kitting, Assembly & Value-Added Services',
        'Real-Time Inventory Visibility & Reporting',
        'Seasonal Capacity Scaling'
      ],
      benefits: 'Reduce fulfillment costs by 25-40% while improving order accuracy to 99.8%',
      roiMetrics: [
        { metric: 'Cost Reduction', value: '25-40%' },
        { metric: 'Order Accuracy', value: '99.8%' },
        { metric: 'Processing Speed', value: '2x faster' },
        { metric: 'Inventory Turns', value: '15% increase' }
      ],
      caseStudy: 'Helped Fortune 500 retailer reduce fulfillment costs by $2.3M annually while improving delivery times by 35%.'
    },
    {
      icon: Warehouse,
      title: 'Advanced Warehousing Solutions',
      description: 'State-of-the-art warehousing facilities with automation, robotics, and AI-driven optimization.',
      features: [
        'Climate-Controlled & Hazmat Storage',
        'Automated Storage & Retrieval Systems (AS/RS)',
        'WMS Integration & Real-Time Tracking',
        '24/7 Security & Surveillance',
        'Flexible Storage Solutions (Rack, Floor, Bulk)',
        'Cross-Docking & Transload Services',
        'FDA, ISO, & Industry Certifications',
        'Scalable Capacity (1M+ sq ft network)'
      ],
      benefits: 'Scale storage capacity on-demand without $10M+ capital investment',
      roiMetrics: [
        { metric: 'CapEx Savings', value: '$10M+' },
        { metric: 'Space Utilization', value: '95%' },
        { metric: 'Order Cycle Time', value: '50% reduction' },
        { metric: 'Labor Efficiency', value: '30% improvement' }
      ],
      caseStudy: 'Enabled manufacturing client to expand into 5 new markets without warehouse investment, saving $15M in capital.'
    },
    {
      icon: Truck,
      title: 'Last Mile & Final Delivery',
      description: 'Premium last-mile delivery solutions optimizing customer experience and delivery economics.',
      features: [
        'Same-Day & Next-Day Delivery Options',
        'White Glove & Installation Services',
        'Real-Time GPS Tracking & ETA Updates',
        'Digital Proof of Delivery with Photos',
        'Flexible Delivery Windows & Scheduling',
        'Special Handling (Fragile, Oversized, Hazmat)',
        'B2B Route Optimization & Planning',
        'Returns & Exchange Management'
      ],
      benefits: 'Achieve 98.5% on-time delivery rate while reducing last-mile costs by 20%',
      roiMetrics: [
        { metric: 'On-Time Delivery', value: '98.5%' },
        { metric: 'Cost Reduction', value: '20%' },
        { metric: 'Customer Satisfaction', value: '96%' },
        { metric: 'Failed Deliveries', value: '<2%' }
      ],
      caseStudy: 'Improved B2B furniture retailer\'s delivery satisfaction from 78% to 96% while reducing delivery costs by $1.8M.'
    },
    {
      icon: Globe,
      title: 'Global Transportation & Freight',
      description: 'Comprehensive multimodal transportation services connecting global supply chains.',
      features: [
        'Air Freight (Express, Standard, Charter)',
        'Ocean Freight (FCL, LCL, Project Cargo)',
        'Ground Transportation (FTL, LTL, Intermodal)',
        'Expedited & Critical Shipments',
        'Customs Clearance & Trade Compliance',
        'Documentation & Insurance Services',
        'Supply Chain Visibility Platform',
        'Freight Audit & Cost Optimization'
      ],
      benefits: 'Access global markets with 40% faster transit times and 15% cost savings',
      roiMetrics: [
        { metric: 'Transit Time Reduction', value: '40%' },
        { metric: 'Freight Cost Savings', value: '15%' },
        { metric: 'Shipment Visibility', value: '100%' },
        { metric: 'Compliance Rate', value: '99.9%' }
      ],
      caseStudy: 'Streamlined global supply chain for tech manufacturer, reducing logistics costs by $5.2M and improving delivery predictability by 60%.'
    },
    {
      icon: ArrowRightLeft,
      title: 'Cross-Docking & Consolidation',
      description: 'Efficient cross-docking operations minimizing inventory holding costs and accelerating distribution.',
      features: [
        'High-Volume Cross-Dock Operations',
        'LTL Consolidation & Deconsolidation',
        'Sorting & Redistribution Services',
        'Pool Distribution & Milk Runs',
        'Temperature-Controlled Cross-Docking',
        'Quality Control & Inspection',
        'Real-Time Shipment Tracking',
        'Vendor Managed Inventory (VMI)'
      ],
      benefits: 'Reduce inventory carrying costs by 30% and improve cash flow velocity',
      roiMetrics: [
        { metric: 'Inventory Reduction', value: '30%' },
        { metric: 'Cash Flow Improvement', value: '25%' },
        { metric: 'Transit Time Reduction', value: '2-3 days' },
        { metric: 'Handling Cost Savings', value: '20%' }
      ],
      caseStudy: 'Implemented cross-dock network for automotive client, reducing inventory by $8M and improving parts availability by 15%.'
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Analytics & Intelligence',
      description: 'Advanced analytics platform providing actionable insights for supply chain optimization.',
      features: [
        'Real-Time Executive Dashboards',
        'Predictive Analytics & AI Insights',
        'Cost Analysis & Optimization Reports',
        'Demand Forecasting & Planning',
        'KPI Tracking & Benchmarking',
        'Exception Management & Alerts',
        'Carbon Footprint & Sustainability Metrics',
        'API Integration & Data Exchange'
      ],
      benefits: 'Make data-driven decisions reducing costs by 15% and improving efficiency by 25%',
      roiMetrics: [
        { metric: 'Cost Reduction', value: '15%' },
        { metric: 'Efficiency Improvement', value: '25%' },
        { metric: 'Decision Speed', value: '3x faster' },
        { metric: 'Forecast Accuracy', value: '95%' }
      ],
      caseStudy: 'Analytics platform helped CPG company identify $3.2M in cost savings opportunities and improve forecast accuracy by 22%.'
    }
  ];

  const industries = [
    { 
      name: 'E-commerce & Retail', 
      icon: Package, 
      description: 'Omnichannel fulfillment solutions',
      details: 'Specialized in high-volume, fast-turnaround e-commerce operations with 99.8% accuracy rates.'
    },
    { 
      name: 'Manufacturing', 
      icon: Warehouse, 
      description: 'Just-in-time manufacturing support',
      details: 'Supply chain integration for lean manufacturing with milk-run logistics and line-side delivery.'
    },
    { 
      name: 'Healthcare & Pharma', 
      icon: Shield, 
      description: 'Compliant medical supply chain',
      details: 'GDP/GMP compliant facilities with temperature monitoring and full chain of custody.'
    },
    { 
      name: 'Technology & Electronics', 
      icon: Zap, 
      description: 'High-tech product logistics',
      details: 'Secure handling of high-value products with configuration, testing, and global distribution.'
    },
    { 
      name: 'Automotive', 
      icon: Truck, 
      description: 'Automotive aftermarket logistics',
      details: 'Complex parts distribution with same-day delivery and core exchange programs.'
    },
    { 
      name: 'Food & Beverage', 
      icon: Users, 
      description: 'Temperature-controlled distribution',
      details: 'Cold chain management with HACCP compliance and food safety certifications.'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'C-TPAT Certified',
    'FDA Registered Facilities',
    'HACCP Food Safety Certified',
    'OSHA Safety Compliant',
    'SOC 2 Type II Security',
    'IATA Dangerous Goods Certified'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">World-Class Logistics Services</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Transform your supply chain with our comprehensive 3PL services. Trusted by Fortune 500 companies 
                to deliver operational excellence, cost optimization, and scalable growth solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-white text-primary hover:bg-blue-50 font-semibold py-4 px-8 text-lg">
                  Schedule Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary py-4 px-8">
                  <Download className="mr-2 h-5 w-5" />
                  Download Capabilities Brochure
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">50,000+</div>
                  <div className="text-blue-200 text-sm">Customers Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99.8%</div>
                  <div className="text-blue-200 text-sm">Order Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                alt="Modern logistics warehouse"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Service Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end logistics solutions designed to optimize your supply chain performance and drive measurable ROI
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Service Overview */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="logistics-gradient p-4 rounded-2xl">
                          <service.icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-primary">{service.title}</h3>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                      
                      <div className="mb-8">
                        <h4 className="font-semibold text-primary mb-4 text-lg">Service Capabilities:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start text-sm">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-6 rounded-xl mb-8">
                        <div className="flex items-center mb-3">
                          <TrendingUp className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-semibold text-primary">Business Impact</h4>
                        </div>
                        <p className="text-sm text-primary font-medium mb-4">{service.benefits}</p>
                        <div className="bg-blue-100 p-4 rounded-lg">
                          <p className="text-sm text-primary italic">"{service.caseStudy}"</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <Button className="cta-button">
                          Request Service Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline">
                          <Phone className="mr-2 h-4 w-4" />
                          Schedule Consultation
                        </Button>
                      </div>
                    </div>

                    {/* ROI Metrics */}
                    <div>
                      <h4 className="font-semibold text-primary mb-6 text-lg">Typical ROI Metrics</h4>
                      <div className="space-y-4">
                        {service.roiMetrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="bg-green-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{metric.value}</div>
                            <div className="text-sm text-green-700">{metric.metric}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                        <h5 className="font-semibold mb-3">Ready to Calculate Your ROI?</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          Use our ROI calculator to estimate potential savings
                        </p>
                        <Button variant="outline" className="w-full">
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Launch ROI Calculator
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Industry Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep vertical knowledge and specialized solutions for complex industry requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">{industry.name}</h3>
                  <p className="text-muted-foreground text-center mb-4">{industry.description}</p>
                  <p className="text-sm text-muted-foreground text-center">{industry.details}</p>
                  <Button variant="outline" className="w-full mt-6">
                    Industry Solutions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-muted-foreground">
              Maintaining the highest standards of quality, security, and regulatory compliance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium text-muted-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-20 logistics-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Download our comprehensive Supply Chain Assessment Guide and discover how leading companies 
                are reducing logistics costs by 25-40% while improving service levels.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>ROI Calculator & Cost Analysis Tools</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Industry Benchmarking Data</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Implementation Roadmap Template</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Get Your Free Assessment</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="email@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Monthly Shipping Volume</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Select Volume Range</option>
                    <option>Under 1,000 shipments</option>
                    <option>1,000 - 10,000 shipments</option>
                    <option>10,000 - 50,000 shipments</option>
                    <option>50,000+ shipments</option>
                  </select>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                  Download Free Assessment Guide
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
