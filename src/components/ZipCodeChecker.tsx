import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, CheckCircle, XCircle, Search } from 'lucide-react';
import zipServiceData from '@/data/fdl_service_zips.json';

interface ZipInfo {
  days: string[];
  city?: string;
  zone?: string;
  state?: string;
}

interface DeliveryResult {
  zone: string;
  city: string;
  schedule: string[];
  isServiced: boolean;
  specialNote?: string;
}

const ZipCodeChecker = () => {
  const [zipCode, setZipCode] = useState('');
  const [result, setResult] = useState<DeliveryResult | null>(null);
  const [isSearched, setIsSearched] = useState(false);
  const [zipData, setZipData] = useState<Map<string, ZipInfo>>(new Map());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadZipData = () => {
      try {
        const dataMap = new Map<string, ZipInfo>();
        
        // Process the JSON data structure
        const data = zipServiceData as any;
        
        // Handle by_zip structure if it exists
        if (data.by_zip) {
          Object.entries(data.by_zip).forEach(([zip, info]: [string, any]) => {
            if (zip && info) {
              dataMap.set(zip, {
                days: info.days || [],
                city: info.city,
                zone: info.zone,
                state: info.state
              });
            }
          });
        }
        
        // Handle records array structure if it exists
        if (data.records && Array.isArray(data.records)) {
          data.records.forEach((record: any) => {
            if (record.zip) {
              dataMap.set(record.zip, {
                days: record.days || record.delivery_days || [],
                city: record.city,
                zone: record.zone,
                state: record.state
              });
            }
          });
        }
        
        console.log(`✅ Loaded ${dataMap.size} zip codes`);
        setZipData(dataMap);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading zip data:', error);
        setIsLoading(false);
      }
    };

    loadZipData();
  }, []);

  const normalizeDayName = (day: string): string => {
    const dayMap: { [key: string]: string } = {
      'MON': 'Monday',
      'TUE': 'Tuesday',
      'WED': 'Wednesday',
      'THU': 'Thursday',
      'FRI': 'Friday',
      'SAT': 'Saturday',
      'SUN': 'Sunday',
      'MONDAY': 'Monday',
      'TUESDAY': 'Tuesday',
      'WEDNESDAY': 'Wednesday',
      'THURSDAY': 'Thursday',
      'FRIDAY': 'Friday',
      'SATURDAY': 'Saturday',
      'SUNDAY': 'Sunday',
      // Legacy single letter support
      'M': 'Monday',
      'T': 'Tuesday',
      'W': 'Wednesday',
      'R': 'Thursday',
      'F': 'Friday'
    };
    
    const normalized = dayMap[day.toUpperCase()];
    return normalized || day;
  };

  const handleSearch = () => {
    const cleanZip = zipCode.trim();
    setIsSearched(true);
    
    const data = zipData.get(cleanZip);
    
    if (data) {
      // Normalize day names
      const schedule = data.days
        .map(day => normalizeDayName(day))
        .filter(Boolean);
      
      setResult({
        zone: data.zone || 'N/A',
        city: data.city || 'N/A',
        schedule,
        isServiced: schedule.length > 0
      });
    } else {
      setResult({
        zone: '',
        city: '',
        schedule: [],
        isServiced: false
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && zipCode.trim().length === 5) {
      handleSearch();
    }
  };

  if (isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto bg-card shadow-xl">
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Loading zip code data...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-card shadow-xl">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
          <h3 className="text-xl font-bold text-foreground">Check Service Area</h3>
          <p className="text-sm text-muted-foreground">Enter your ZIP code to see delivery days</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter ZIP code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
              onKeyPress={handleKeyPress}
              maxLength={5}
              className="flex-1"
            />
            <Button 
              onClick={handleSearch}
              disabled={!zipCode.trim() || zipCode.length !== 5}
              className="px-6"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          {isSearched && result && (
            <div className="mt-4">
              {result.isServiced ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-green-600 dark:text-green-500">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Service Available!</span>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg space-y-2">
                    {result.city && result.city !== 'N/A' && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-green-600 dark:text-green-500" />
                        <span className="text-sm text-foreground"><strong>City:</strong> {result.city}</span>
                      </div>
                    )}
                    {result.zone && result.zone !== 'N/A' && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-green-600 dark:text-green-500" />
                        <span className="text-sm text-foreground"><strong>Zone:</strong> {result.zone}</span>
                      </div>
                    )}
                    {result.schedule.length > 0 && (
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-green-600 dark:text-green-500" />
                        <span className="text-sm text-foreground"><strong>Delivery Days:</strong> {result.schedule.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-red-600 dark:text-red-500">
                    <XCircle className="h-5 w-5" />
                    <span className="font-semibold">Service Not Available</span>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                    <p className="text-sm text-red-700 dark:text-red-400">
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
