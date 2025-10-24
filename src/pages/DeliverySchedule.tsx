import React from 'react';
import { Truck, Calendar, Clock, MapPin } from 'lucide-react';
import ZipCodeChecker from '@/components/ZipCodeChecker';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import deliveryData from '@/data/deliverySchedule.json';

const DeliverySchedule = () => {
  const getDayName = (day: string) => {
    const dayMap = {
      'MON': 'Monday',
      'TUE': 'Tuesday', 
      'WED': 'Wednesday',
      'THU': 'Thursday',
      'FRI': 'Friday',
      'SAT': 'Saturday',
      'SUN': 'Sunday'
    };
    return dayMap[day as keyof typeof dayMap] || day;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Truck className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              FDL Delivery Schedule
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide reliable temperature-controlled delivery across multiple zones in the New York & New Jersey Area. 
              View our delivery schedules and service areas below.
            </p>
          </div>

          {/* Service Information */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  <Clock className="h-8 w-8 text-primary" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Service Areas
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• New York City (Manhattan & Brooklyn)</li>
                      <li>• New Jersey (North, Central, South & Southwest)</li>
                      <li>• Westchester County</li>
                      <li>• Long Island</li>
                      <li>• The Hamptons</li>
                      <li>• Jersey Shore</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Delivery Times
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Standard delivery hours: 9:00 AM - 6:00 PM</li>
                      <li>• Order cutoff: 4:30 PM for next business day</li>
                      <li>• Temperature-controlled vehicles</li>
                      <li>• Holiday schedules may vary</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center pt-6 border-t">
                  <p className="text-muted-foreground mb-4">
                    Need specific delivery information for your area?
                  </p>
                  <Button 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Us Today
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Zone Overview */}
          <div className="max-w-6xl mx-auto">
            {/* Zip Code Checker */}
            <div className="max-w-md mx-auto mb-16">
              <ZipCodeChecker />
            </div>

            <div className="text-center mb-12 blur-[1px]">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Delivery Zones
              </h2>
              <p className="text-muted-foreground">
                FDL serves multiple zones across the New York & New Jersey Area with reliable temperature-controlled delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(deliveryData.zones).map(([key, zone]) => (
                <Card key={key} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{zone.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {zone.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {zone.schedule.map((day) => (
                          <Badge
                            key={day}
                            variant="secondary"
                            className="text-xs"
                          >
                            {getDayName(day)}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DeliverySchedule;