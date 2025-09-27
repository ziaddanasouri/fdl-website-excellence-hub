import React, { useState } from 'react';
import { Search, Truck, MapPin, Calendar, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import deliveryData from '@/data/deliverySchedule.json';

interface DeliveryInfo {
  zone: string;
  city: string;
}

const DeliverySchedule = () => {
  const [zipCode, setZipCode] = useState('');
  const [result, setResult] = useState<DeliveryInfo | null>(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const trimmedZip = zipCode.trim();
    
    if (!trimmedZip) {
      setError('Please enter a zip code');
      return;
    }

    if (!/^\d{5}$/.test(trimmedZip)) {
      setError('Please enter a valid 5-digit zip code');
      return;
    }

    const deliveryInfo = deliveryData.zipCodes[trimmedZip as keyof typeof deliveryData.zipCodes];
    
    if (deliveryInfo) {
      setResult(deliveryInfo);
      setError('');
    } else {
      setResult(null);
      setError('Sorry, we currently do not service this zip code. Please contact us for more information.');
    }
    
    setSearched(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getZoneInfo = (zoneName: string) => {
    return deliveryData.zones[zoneName as keyof typeof deliveryData.zones];
  };

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

  const getDayColor = (day: string) => {
    const colorMap = {
      'MON': 'bg-blue-500',
      'TUE': 'bg-green-500',
      'WED': 'bg-yellow-500',
      'THU': 'bg-orange-500',
      'FRI': 'bg-purple-500',
      'SAT': 'bg-red-500',
      'SUN': 'bg-gray-500'
    };
    return colorMap[day as keyof typeof colorMap] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Truck className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Delivery Schedule Lookup
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check when FDL delivers to your area. Simply enter your zip code to see your delivery schedule.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Search className="h-6 w-6 text-primary" />
                Enter Your Zip Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Enter 5-digit zip code (e.g., 10001)"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="text-lg h-12"
                  maxLength={5}
                />
                <Button 
                  onClick={handleSearch}
                  className="h-12 px-8 bg-primary hover:bg-primary/90"
                >
                  Search
                </Button>
              </div>
              {error && (
                <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                  <p className="text-destructive text-sm">{error}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        {searched && result && (
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-500 rounded-full">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-green-800 dark:text-green-200">
                  Delivery Available for {result.city}
                </CardTitle>
                <p className="text-green-600 dark:text-green-400">
                  Zip Code: {zipCode} • Zone: {getZoneInfo(result.zone).name}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Delivery Days */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                      Delivery Days
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {getZoneInfo(result.zone).schedule.map((day) => (
                      <Badge
                        key={day}
                        className={`${getDayColor(day)} text-white px-4 py-2 text-sm font-medium`}
                      >
                        {getDayName(day)}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-green-600 dark:text-green-400 mt-3 text-sm">
                    {getZoneInfo(result.zone).description}
                  </p>
                </div>

                {/* Additional Info */}
                <div className="border-t border-green-200 dark:border-green-800 pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                      Important Information
                    </h3>
                  </div>
                  <div className="bg-white dark:bg-green-900 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                      <li>• Deliveries are typically made between 8:00 AM - 5:00 PM</li>
                      <li>• Orders must be placed by 3:00 PM for next business day delivery</li>
                      <li>• Holiday schedules may vary - please contact us for updates</li>
                      <li>• Temperature-controlled storage maintains product quality</li>
                    </ul>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center border-t border-green-200 dark:border-green-800 pt-6">
                  <p className="text-green-600 dark:text-green-400 mb-4">
                    Need to place an order or have questions?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Contact Us Today
                    </Button>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Zone Overview */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Delivery Zones
            </h2>
            <p className="text-muted-foreground">
              FDL serves multiple zones across the tri-state area with reliable cold chain delivery
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
  );
};

export default DeliverySchedule;