
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, Package, Truck, CheckCircle, Clock, Search } from 'lucide-react';
import PortalLayout from '@/components/portal/PortalLayout';

const PortalTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);

  const handleTrack = () => {
    // Simulate tracking data
    setTrackingData({
      id: 'FDL-2024-002',
      status: 'in-transit',
      currentLocation: 'Atlanta, GA Distribution Center',
      origin: 'Chicago, IL',
      destination: 'Miami, FL',
      estimatedDelivery: '2024-01-19',
      timeline: [
        { date: '2024-01-16 09:00', location: 'Chicago, IL', event: 'Package picked up', completed: true },
        { date: '2024-01-16 14:30', location: 'Chicago, IL Hub', event: 'Departed facility', completed: true },
        { date: '2024-01-17 08:15', location: 'Atlanta, GA', event: 'Arrived at facility', completed: true },
        { date: '2024-01-17 15:45', location: 'Atlanta, GA', event: 'In transit', completed: true },
        { date: '2024-01-18 10:00', location: 'Jacksonville, FL', event: 'Expected arrival', completed: false },
        { date: '2024-01-19 14:00', location: 'Miami, FL', event: 'Out for delivery', completed: false },
        { date: '2024-01-19 17:00', location: 'Miami, FL', event: 'Delivered', completed: false }
      ]
    });
  };

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Track Shipments</h1>
          <p className="text-muted-foreground">Enter a tracking number to see real-time updates</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Track Your Package</CardTitle>
            <CardDescription>Enter your tracking number or shipment ID</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter tracking number (e.g., TRK123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
              </div>
              <Button onClick={handleTrack}>
                <Search className="h-4 w-4 mr-2" />
                Track
              </Button>
            </div>
          </CardContent>
        </Card>

        {trackingData && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipment {trackingData.id}</CardTitle>
                <CardDescription>
                  {trackingData.origin} → {trackingData.destination}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Current Status</h3>
                    <Badge className="bg-blue-100 text-blue-800">In Transit</Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Current Location</h3>
                    <p className="text-sm">{trackingData.currentLocation}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Estimated Delivery</h3>
                    <p className="text-sm">{trackingData.estimatedDelivery}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tracking Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingData.timeline.map((event, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        event.completed ? 'bg-green-500' : 'bg-gray-200'
                      }`}>
                        {event.completed ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : (
                          <Clock className="h-4 w-4 text-gray-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${event.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {event.event}
                        </p>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </PortalLayout>
  );
};

export default PortalTracking;
