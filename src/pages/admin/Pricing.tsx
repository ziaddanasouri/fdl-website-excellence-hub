import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { adminApi } from '@/data/adminApi';
import { PricingRule } from '@/types/admin';
import { Plus, Edit, Calculator, DollarSign } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function Pricing() {
  const [pricingRules, setPricingRules] = useState<PricingRule[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingRule, setEditingRule] = useState<PricingRule | null>(null);
  const [showSimulator, setShowSimulator] = useState(false);
  const [simulationResult, setSimulationResult] = useState<number | null>(null);
  
  const { register, handleSubmit, reset, setValue, watch } = useForm();

  useEffect(() => {
    const loadPricingRules = async () => {
      try {
        const data = await adminApi.getPricingRules();
        setPricingRules(data);
      } catch (error) {
        console.error('Failed to load pricing rules:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPricingRules();
  }, []);

  const handleToggleRule = async (ruleId: string, enabled: boolean) => {
    try {
      await adminApi.updatePricingRule(ruleId, { enabled });
      setPricingRules(prev => prev.map(r => 
        r.id === ruleId ? { ...r, enabled } : r
      ));
    } catch (error) {
      console.error('Failed to update pricing rule:', error);
    }
  };

  const handleCreateOrUpdateRule = async (data: any) => {
    try {
      const ruleData = {
        ...data,
        accessorials: [],
        weightMin: Number(data.weightMin),
        weightMax: Number(data.weightMax),
        baseRate: Number(data.baseRate),
        fuelSurcharge: Number(data.fuelSurcharge),
        version: editingRule ? editingRule.version + 1 : 1,
        createdBy: 'admin@fdl.com'
      };

      if (editingRule) {
        await adminApi.updatePricingRule(editingRule.id, ruleData);
        setPricingRules(prev => prev.map(r => 
          r.id === editingRule.id ? { ...r, ...ruleData } : r
        ));
      } else {
        const newRule = await adminApi.createPricingRule(ruleData);
        setPricingRules(prev => [...prev, newRule]);
      }

      setEditingRule(null);
      reset();
    } catch (error) {
      console.error('Failed to save pricing rule:', error);
    }
  };

  const calculatePrice = (weight: number, service: string) => {
    const applicableRules = pricingRules.filter(rule => 
      rule.enabled &&
      rule.service === service &&
      weight >= rule.weightMin &&
      weight <= rule.weightMax
    );

    if (applicableRules.length === 0) return null;

    const rule = applicableRules[0];
    const basePrice = weight * rule.baseRate;
    const fuelSurcharge = basePrice * (rule.fuelSurcharge / 100);
    
    return basePrice + fuelSurcharge;
  };

  const handleSimulate = (data: any) => {
    const price = calculatePrice(Number(data.weight), data.service);
    setSimulationResult(price);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Skeleton className="h-96 w-full" />
          </div>
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pricing Management</h1>
          <p className="text-muted-foreground">
            Configure pricing rules and simulate quotes
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Rule
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingRule ? 'Edit Pricing Rule' : 'Create Pricing Rule'}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit(handleCreateOrUpdateRule)} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Rule Name</Label>
                  <Input
                    id="name"
                    {...register('name', { required: true })}
                    placeholder="e.g. CA to NY LTL Standard"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <Select onValueChange={(value) => setValue('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LTL">LTL</SelectItem>
                      <SelectItem value="FTL">FTL</SelectItem>
                      <SelectItem value="Express">Express</SelectItem>
                      <SelectItem value="Standard">Standard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zone">Zone</Label>
                  <Input
                    id="zone"
                    {...register('zone')}
                    placeholder="e.g. West to East"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="originZip">Origin ZIP Range</Label>
                  <Input
                    id="originZip"
                    {...register('originZip')}
                    placeholder="e.g. 90000-99999"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destinationZip">Destination ZIP Range</Label>
                  <Input
                    id="destinationZip"
                    {...register('destinationZip')}
                    placeholder="e.g. 10000-19999"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weightMin">Min Weight (lbs)</Label>
                  <Input
                    id="weightMin"
                    type="number"
                    {...register('weightMin', { required: true })}
                    placeholder="150"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weightMax">Max Weight (lbs)</Label>
                  <Input
                    id="weightMax"
                    type="number"
                    {...register('weightMax', { required: true })}
                    placeholder="10000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="baseRate">Base Rate ($/lb)</Label>
                  <Input
                    id="baseRate"
                    type="number"
                    step="0.01"
                    {...register('baseRate', { required: true })}
                    placeholder="2.50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fuelSurcharge">Fuel Surcharge (%)</Label>
                  <Input
                    id="fuelSurcharge"
                    type="number"
                    step="0.01"
                    {...register('fuelSurcharge', { required: true })}
                    placeholder="15.5"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setEditingRule(null)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingRule ? 'Update Rule' : 'Create Rule'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Pricing Rules Table */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Active Pricing Rules</CardTitle>
              <CardDescription>
                Manage your pricing rules and their effective dates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rule Name</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Weight Range</TableHead>
                    <TableHead>Base Rate</TableHead>
                    <TableHead>Fuel %</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingRules.map((rule) => (
                    <TableRow key={rule.id}>
                      <TableCell className="font-medium">{rule.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{rule.service}</Badge>
                      </TableCell>
                      <TableCell>
                        {rule.weightMin.toLocaleString()} - {rule.weightMax.toLocaleString()} lbs
                      </TableCell>
                      <TableCell>${rule.baseRate}/lb</TableCell>
                      <TableCell>{rule.fuelSurcharge}%</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={rule.enabled}
                            onCheckedChange={(checked) => handleToggleRule(rule.id, checked)}
                          />
                          <span className="text-sm">
                            {rule.enabled ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setEditingRule(rule);
                            Object.entries(rule).forEach(([key, value]) => {
                              setValue(key, value);
                            });
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Price Simulator */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Price Simulator
            </CardTitle>
            <CardDescription>
              Test pricing with current rules
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(handleSimulate)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="simService">Service Type</Label>
                <Select onValueChange={(value) => setValue('service', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LTL">LTL</SelectItem>
                    <SelectItem value="FTL">FTL</SelectItem>
                    <SelectItem value="Express">Express</SelectItem>
                    <SelectItem value="Standard">Standard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="simWeight">Weight (lbs)</Label>
                <Input
                  id="simWeight"
                  type="number"
                  {...register('weight')}
                  placeholder="1500"
                />
              </div>

              <Button type="submit" className="w-full">
                <DollarSign className="h-4 w-4 mr-2" />
                Calculate Price
              </Button>

              {simulationResult !== null && (
                <Card className="mt-4">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Estimated Price</p>
                      <p className="text-2xl font-bold text-primary">
                        ${simulationResult.toFixed(2)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {simulationResult === null && watch('weight') && watch('service') && (
                <Card className="mt-4 border-orange-200 bg-orange-50">
                  <CardContent className="pt-6">
                    <div className="text-center text-orange-700">
                      <p className="text-sm">No applicable pricing rule found</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}