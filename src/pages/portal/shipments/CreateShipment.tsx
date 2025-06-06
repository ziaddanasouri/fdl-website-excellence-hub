
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Package, MapPin, Calendar } from 'lucide-react';
import PortalLayout from '@/components/portal/PortalLayout';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const CreateShipment = () => {
  const [shipmentData, setShipmentData] = useState({
    origin: { address: '', city: '', state: '', zip: '' },
    destination: { address: '', city: '', state: '', zip: '' },
    package: { length: '', width: '', height: '', weight: '', description: '' },
    service: '',
    pickupDate: ''
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCreateShipment = () => {
    const shipmentId = `FDL-${Date.now()}`;
    toast({
      title: "Shipment Created Successfully!",
      description: `Your shipment ${shipmentId} has been created and scheduled for pickup.`,
    });
    navigate('/portal/shipments');
  };

  return (
    <PortalLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Create New Shipment</h1>
          <p className="text-muted-foreground">Schedule a new shipment for pickup and delivery</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-600" />
                Pickup Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Street Address</Label>
                <Input placeholder="123 Main Street" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>City</Label>
                  <Input placeholder="New York" />
                </div>
                <div>
                  <Label>State</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>ZIP Code</Label>
                <Input placeholder="10001" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-600" />
                Delivery Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Street Address</Label>
                <Input placeholder="456 Oak Avenue" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>City</Label>
                  <Input placeholder="Los Angeles" />
                </div>
                <div>
                  <Label>State</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>ZIP Code</Label>
                <Input placeholder="90210" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Package Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <Label>Length (inches)</Label>
                <Input placeholder="12" />
              </div>
              <div>
                <Label>Width (inches)</Label>
                <Input placeholder="8" />
              </div>
              <div>
                <Label>Height (inches)</Label>
                <Input placeholder="6" />
              </div>
              <div>
                <Label>Weight (lbs)</Label>
                <Input placeholder="5" />
              </div>
            </div>
            <div>
              <Label>Package Description</Label>
              <Input placeholder="Electronics, fragile items, etc." />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service & Scheduling</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Service Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                    <SelectItem value="express">Express (1-2 days)</SelectItem>
                    <SelectItem value="same-day">Same Day</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Pickup Date</Label>
                <Input type="date" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => navigate('/portal/shipments')}>
            Cancel
          </Button>
          <Button onClick={handleCreateShipment}>
            Create Shipment
          </Button>
        </div>
      </div>
    </PortalLayout>
  );
};

export default CreateShipment;
