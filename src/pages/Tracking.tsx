
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Package, 
  Truck, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Search,
  AlertCircle,
  Calendar,
  User,
  Phone,
  Mail
} from 'lucide-react';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample tracking data
  const sampleTracking = {
    trackingNumber: 'FDL1234567890',
    status: 'In Transit',
    estimatedDelivery: '2024-06-08',
    currentLocation: 'Chicago Distribution Center',
    destination: 'Milwaukee, WI 53202',
    shipmentDetails: {
      sender: 'TechCorp Solutions',
      recipient: 'John Anderson',
      service: 'FDL Express 2-Day',
      weight: '2.5 lbs',
      dimensions: '12" x 8" x 4"'
    },
    timeline: [
      {
        status: 'Order Processed',
        location: 'Fond Du Lac, WI',
        date: '2024-06-06',
        time: '10:30 AM',
        completed: true
      },
      {
        status: 'Picked Up',
        location: 'Fond Du Lac, WI',
        date: '2024-06-06',
        time: '2:15 PM',
        completed: true
      },
      {
        status: 'In Transit',
        location: 'Chicago Distribution Center',
        date: '2024-06-07',
        time: '6:45 AM',
        completed: true
      },
      {
        status: 'Out for Delivery',
        location: 'Milwaukee, WI',
        date: '2024-06-08',
        time: 'Scheduled',
        completed: false
      },
      {
        status: 'Delivered',
        location: 'Milwaukee, WI 53202',
        date: '2024-06-08',
        time: 'Pending',
        completed: false
      }
    ]
  };

  const handleTrack = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (trackingNumber.toLowerCase().includes('fdl') || trackingNumber === '1234567890') {
        setTrackingResult(sampleTracking);
      } else {
        setTrackingResult('not_found');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Track Your Shipment</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Real-time tracking and updates for all your FDL shipments. 
            Get instant visibility into your package location and delivery status.
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-2">Enter Tracking Number</h2>
                <p className="text-muted-foreground">
                  Enter your FDL tracking number to get real-time updates on your shipment
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Input
                  type="text"
                  placeholder="Enter tracking number (e.g., FDL1234567890)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="text-lg py-6 flex-1"
                />
                <Button 
                  onClick={handleTrack}
                  disabled={!trackingNumber || isLoading}
                  className="cta-button text-lg py-6 px-8"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Tracking...
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Track Package
                    </>
                  )}
                </Button>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>Try sample tracking number: <span className="font-mono text-primary">FDL1234567890</span></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingResult && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {trackingResult === 'not_found' ? (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-8 text-center">
                  <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-red-700 mb-2">Tracking Number Not Found</h3>
                  <p className="text-red-600 mb-4">
                    Please check your tracking number and try again. Make sure to enter the complete tracking number.
                  </p>
                  <div className="space-y-2 text-sm text-red-600">
                    <p>Need help? Contact us:</p>
                    <div className="flex justify-center space-x-4">
                      <span className="flex items-center">
                        <Phone className="h-4 w-4 mr-1" />
                        1-800-FDL-SHIP
                      </span>
                      <span className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        track@fdllogistics.com
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Tracking Timeline */}
                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-primary">Tracking Timeline</h3>
                        <span className="px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold">
                          {trackingResult.status}
                        </span>
                      </div>
                      
                      <div className="space-y-6">
                        {trackingResult.timeline.map((event, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className={`p-2 rounded-full ${event.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                              {event.completed ? (
                                <CheckCircle className="h-6 w-6 text-green-600" />
                              ) : (
                                <Clock className="h-6 w-6 text-gray-400" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h4 className={`font-semibold ${event.completed ? 'text-primary' : 'text-gray-500'}`}>
                                  {event.status}
                                </h4>
                                <span className="text-sm text-muted-foreground">
                                  {event.date} {event.time}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground flex items-center mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                {event.location}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Shipment Details */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-4">Shipment Details</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Tracking Number</p>
                          <p className="font-mono text-sm">{trackingResult.trackingNumber}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Service</p>
                          <p className="font-semibold">{trackingResult.shipmentDetails.service}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                          <p className="font-semibold text-green-600 flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {trackingResult.estimatedDelivery}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Current Location</p>
                          <p className="font-semibold flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {trackingResult.currentLocation}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-4">Package Information</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground">From</p>
                          <p className="font-semibold">{trackingResult.shipmentDetails.sender}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">To</p>
                          <p className="font-semibold">{trackingResult.shipmentDetails.recipient}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Destination</p>
                          <p className="font-semibold">{trackingResult.destination}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Weight</p>
                            <p className="font-semibold">{trackingResult.shipmentDetails.weight}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Dimensions</p>
                            <p className="font-semibold">{trackingResult.shipmentDetails.dimensions}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Tracking Features</h2>
            <p className="text-xl text-muted-foreground">
              Advanced tracking capabilities for complete shipment visibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Real-Time GPS</h3>
                <p className="text-muted-foreground">
                  Live GPS tracking with exact location updates every 15 minutes during transit.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Delivery Alerts</h3>
                <p className="text-muted-foreground">
                  Automatic SMS and email notifications for all major shipment milestones.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="logistics-gradient p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Proof of Delivery</h3>
                <p className="text-muted-foreground">
                  Digital signatures and photos for verified delivery confirmation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Need Help with Tracking?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our customer service team is available 24/7 to assist with any tracking questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cta-button">
              <Phone className="h-5 w-5 mr-2" />
              Call 1-800-FDL-SHIP
            </Button>
            <Button variant="outline">
              <Mail className="h-5 w-5 mr-2" />
              Email Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tracking;
