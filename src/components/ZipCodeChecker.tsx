import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, CheckCircle, XCircle, Search } from 'lucide-react';
import deliveryData from '@/data/deliverySchedule.json';

interface DeliveryResult {
  zone: string;
  city: string;
  schedule: string[];
  description: string;
}

const ZipCodeChecker = () => {
  const [zipCode, setZipCode] = useState('');
  const [result, setResult] = useState<DeliveryResult | null>(null);
  const [isServiced, setIsServiced] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = () => {
    const cleanZip = zipCode.trim();
    setIsSearched(true);
    
    if (deliveryData.zipCodes[cleanZip]) {
      const zipData = deliveryData.zipCodes[cleanZip];
      const zoneData = deliveryData.zones[zipData.zone];
      
      setResult({
        zone: zoneData.name,
        city: zipData.city,
        schedule: zoneData.schedule,
        description: zoneData.description
      });
      setIsServiced(true);
    } else {
      setResult(null);
      setIsServiced(false);
    }
  };

  const formatDays = (days: string[]) => {
    const dayMap: { [key: string]: string } = {
      'MON': 'Monday',
      'TUE': 'Tuesday', 
      'WED': 'Wednesday',
      'THU': 'Thursday',
      'FRI': 'Friday'
    };
    
    return days.map(day => dayMap[day]).join(', ');
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-xl">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
          <h3 className="text-xl font-bold text-primary">Check Service Area</h3>
          <p className="text-sm text-muted-foreground">Enter your ZIP code to see delivery days</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter ZIP code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              maxLength={5}
              className="flex-1"
            />
            <Button 
              onClick={handleSearch}
              disabled={!zipCode.trim()}
              className="px-6"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          {isSearched && (
            <div className="mt-4">
              {isServiced && result ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Service Available!</span>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span className="text-sm"><strong>Zone:</strong> {result.zone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-sm"><strong>Delivery Days:</strong> {formatDays(result.schedule)}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-red-600">
                    <XCircle className="h-5 w-5" />
                    <span className="font-semibold">Service Not Available</span>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-red-700">
                      We don't currently service this ZIP code. Please contact us for special arrangements.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ZipCodeChecker;