import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, CheckCircle, XCircle, Search } from 'lucide-react';
import Papa from 'papaparse';

interface ZipData {
  zip: string;
  carrier: string;
  county: string;
  days_of_service: string;
}

interface DeliveryResult {
  carrier: string;
  county: string;
  schedule: string[];
  isServiced: boolean;
  specialNote?: string;
}

const ZipCodeChecker = () => {
  const [zipCode, setZipCode] = useState('');
  const [result, setResult] = useState<DeliveryResult | null>(null);
  const [isSearched, setIsSearched] = useState(false);
  const [zipData, setZipData] = useState<Map<string, ZipData>>(new Map());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCSV = async () => {
      try {
        const response = await fetch('/src/data/dnt-zip-codes.csv');
        const csvText = await response.text();
        
        Papa.parse<ZipData>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const dataMap = new Map<string, ZipData>();
            results.data.forEach((row) => {
              if (row.zip) {
                dataMap.set(row.zip.trim(), row);
              }
            });
            setZipData(dataMap);
            setIsLoading(false);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
            setIsLoading(false);
          }
        });
      } catch (error) {
        console.error('Error loading CSV:', error);
        setIsLoading(false);
      }
    };

    loadCSV();
  }, []);

  const parseDays = (daysString: string): string[] => {
    // Handle special cases
    if (daysString.includes('CALL') || daysString.includes('DNT')) {
      return [];
    }

    // Map 3-letter abbreviations to full day names
    const dayMap: { [key: string]: string } = {
      'MON': 'Monday',
      'TUE': 'Tuesday',
      'WED': 'Wednesday',
      'THU': 'Thursday',
      'FRI': 'Friday',
      'SAT': 'Saturday',
      'SUN': 'Sunday',
      // Legacy support for single letter abbreviations
      'M': 'Monday',
      'T': 'Tuesday',
      'W': 'Wednesday',
      'R': 'Thursday',
      'F': 'Friday'
    };

    // Split by comma and parse each day
    return daysString
      .split(',')
      .map(day => day.trim())
      .filter(day => day.length > 0)
      .map(day => dayMap[day.toUpperCase()] || day)
      .filter(Boolean);
  };

  const handleSearch = () => {
    const cleanZip = zipCode.trim();
    setIsSearched(true);
    
    const data = zipData.get(cleanZip);
    
    if (data) {
      const daysOfService = data.days_of_service || '';
      const isSpecialCase = daysOfService.includes('CALL') || daysOfService.includes('DNT');
      const schedule = parseDays(daysOfService);
      
      setResult({
        carrier: data.carrier,
        county: data.county,
        schedule,
        isServiced: schedule.length > 0 || isSpecialCase,
        specialNote: isSpecialCase ? daysOfService : undefined
      });
    } else {
      setResult({
        carrier: '',
        county: '',
        schedule: [],
        isServiced: false
      });
    }
  };

  if (isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto bg-white shadow-xl">
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Loading zip code data...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

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
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
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
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Service Available!</span>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg space-y-2">
                    {result.county && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span className="text-sm"><strong>County:</strong> {result.county}</span>
                      </div>
                    )}
                    {result.carrier && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span className="text-sm"><strong>Carrier:</strong> {result.carrier}</span>
                      </div>
                    )}
                    {result.specialNote ? (
                      <div className="flex items-start space-x-2">
                        <Clock className="h-4 w-4 text-green-600 mt-0.5" />
                        <span className="text-sm"><strong>Note:</strong> {result.specialNote}</span>
                      </div>
                    ) : result.schedule.length > 0 && (
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span className="text-sm"><strong>Delivery Days:</strong> {result.schedule.join(', ')}</span>
                      </div>
                    )}
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