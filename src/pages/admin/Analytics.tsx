import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { DateRangePicker } from '@/components/admin/shared/DateRangePicker';
import { KPIStatCard } from '@/components/admin/shared/KPIStatCard';
import { adminApi } from '@/data/adminApi';
import { DateRange } from 'react-day-picker';
import { subDays } from 'date-fns';
import { Download, TrendingUp, Package, DollarSign, Clock } from 'lucide-react';

const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', '#8884d8', '#82ca9d', '#ffc658', '#ff7c7c'];

export default function Analytics() {
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 90),
    to: new Date()
  });
  
  // Data states
  const [revenueData, setRevenueData] = useState([]);
  const [serviceMixData, setServiceMixData] = useState([]);
  const [carrierPerformanceData, setCarrierPerformanceData] = useState([]);
  const [topCustomersData, setTopCustomersData] = useState([]);
  const [volumeByMonthData, setVolumeByMonthData] = useState([]);

  // KPIs
  const analyticsKPIs = [
    {
      label: 'Total Revenue',
      value: 2847500,
      change: 12.5,
      trend: 'up' as const,
      format: 'currency' as const
    },
    {
      label: 'Shipment Volume',
      value: 1247,
      change: -2.3,
      trend: 'down' as const,
      format: 'number' as const
    },
    {
      label: 'Avg Revenue/Shipment',
      value: 2284,
      change: 15.2,
      trend: 'up' as const,
      format: 'currency' as const
    },
    {
      label: 'On-Time Performance',
      value: 94.2,
      change: 1.8,
      trend: 'up' as const,
      format: 'percentage' as const
    }
  ];

  useEffect(() => {
    const loadAnalyticsData = async () => {
      setLoading(true);
      try {
        const [trends, serviceMix, carrierPerf] = await Promise.all([
          adminApi.getShipmentTrends(90),
          adminApi.getServiceMix(),
          adminApi.getCarrierPerformance()
        ]);

        setRevenueData(trends);
        setServiceMixData(serviceMix);
        setCarrierPerformanceData(carrierPerf);

        // Generate mock data for additional charts
        setTopCustomersData([
          { name: 'Wine World Inc', revenue: 485200, margin: 18.5 },
          { name: 'Vintage Distributors', revenue: 324100, margin: 22.1 },
          { name: 'Premium Spirits Co', revenue: 298750, margin: 16.8 },
          { name: 'Elite Beverages', revenue: 187300, margin: 19.9 },
          { name: 'Luxury Wine Co', revenue: 156800, margin: 21.4 }
        ]);

        setVolumeByMonthData([
          { month: 'Jan', volume: 145, cost: 125000 },
          { month: 'Feb', volume: 158, cost: 138000 },
          { month: 'Mar', volume: 172, cost: 149000 },
          { month: 'Apr', volume: 165, cost: 142000 },
          { month: 'May', volume: 189, cost: 165000 },
          { month: 'Jun', volume: 203, cost: 178000 }
        ]);
      } catch (error) {
        console.error('Failed to load analytics data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAnalyticsData();
  }, [dateRange]);

  const exportData = (data: any[], filename: string) => {
    const csvContent = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Deep insights into your logistics operations
          </p>
        </div>
        <div className="flex items-center gap-4">
          <DateRangePicker
            value={dateRange}
            onChange={setDateRange}
            className="w-64"
          />
          <Button variant="outline" onClick={() => exportData(revenueData, 'analytics-export')}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-4">
        {analyticsKPIs.map((kpi, index) => (
          <KPIStatCard key={index} kpi={kpi} />
        ))}
      </div>

      {/* Charts */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="carriers">Carriers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Revenue Trend */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Revenue Trend
                </CardTitle>
                <CardDescription>Daily revenue over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="date" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Service Mix */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Service Distribution
                </CardTitle>
                <CardDescription>Revenue by service type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={serviceMixData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="revenue"
                    >
                      {serviceMixData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="operations" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Volume vs Cost */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Volume vs Cost Analysis
                </CardTitle>
                <CardDescription>Monthly volume and cost trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={volumeByMonthData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis yAxisId="left" className="text-xs" />
                    <YAxis yAxisId="right" orientation="right" className="text-xs" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Bar yAxisId="left" dataKey="volume" fill="hsl(var(--primary))" name="Volume" />
                    <Bar yAxisId="right" dataKey="cost" fill="hsl(var(--accent))" name="Cost ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Customers */}
            <Card>
              <CardHeader>
                <CardTitle>Top Customers by Revenue</CardTitle>
                <CardDescription>Highest revenue generating customers</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={topCustomersData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis type="number" className="text-xs" />
                    <YAxis dataKey="name" type="category" className="text-xs" width={120} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                    />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Financial Performance</CardTitle>
              <CardDescription>Revenue and margin analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-semibold">Revenue Breakdown</h4>
                  {topCustomersData.map((customer, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded">
                      <span className="font-medium">{customer.name}</span>
                      <div className="text-right">
                        <div className="font-semibold">${customer.revenue.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">{customer.margin}% margin</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Key Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 border rounded">
                      <span>Average Deal Size</span>
                      <span className="font-semibold">$2,284</span>
                    </div>
                    <div className="flex justify-between p-3 border rounded">
                      <span>Customer Acquisition Cost</span>
                      <span className="font-semibold">$156</span>
                    </div>
                    <div className="flex justify-between p-3 border rounded">
                      <span>Customer Lifetime Value</span>
                      <span className="font-semibold">$48,592</span>
                    </div>
                    <div className="flex justify-between p-3 border rounded">
                      <span>Monthly Recurring Revenue</span>
                      <span className="font-semibold">$284,750</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="carriers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Carrier Performance
              </CardTitle>
              <CardDescription>On-time delivery rates by carrier</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={carrierPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="carrier" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => [`${Number(value).toFixed(1)}%`, 'On-Time Rate']}
                  />
                  <Bar dataKey="rate" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}