
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, BarChart3, PieChart, TrendingUp, Calendar } from 'lucide-react';
import PortalLayout from '@/components/portal/PortalLayout';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Reports = () => {
  const monthlyData = [
    { month: 'Jan', shipments: 145, cost: 12500, onTime: 98 },
    { month: 'Feb', shipments: 178, cost: 15200, onTime: 97 },
    { month: 'Mar', shipments: 203, cost: 17800, onTime: 99 },
    { month: 'Apr', shipments: 189, cost: 16900, onTime: 96 },
    { month: 'May', shipments: 234, cost: 21200, onTime: 98 },
    { month: 'Jun', shipments: 267, cost: 24800, onTime: 99 }
  ];

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Reports & Analytics</h1>
            <p className="text-muted-foreground">Comprehensive insights into your logistics performance</p>
          </div>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export All Reports
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Shipment Volume</CardTitle>
              <CardDescription>Track shipment trends over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{
                shipments: { label: "Shipments", color: "#3b82f6" }
              }} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="shipments" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cost Analysis</CardTitle>
              <CardDescription>Monthly shipping costs breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{
                cost: { label: "Cost ($)", color: "#10b981" }
              }} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="cost" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Shipment Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Shipments</span>
                  <Badge>1,216</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Average per Month</span>
                  <Badge variant="secondary">203</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Growth Rate</span>
                  <Badge className="bg-green-100 text-green-800">+15.2%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>On-Time Delivery</span>
                  <Badge className="bg-green-100 text-green-800">98.1%</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Customer Satisfaction</span>
                  <Badge className="bg-blue-100 text-blue-800">4.8/5</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Damage Rate</span>
                  <Badge variant="secondary">0.02%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Cost Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Transportation</span>
                  <Badge>65%</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Handling</span>
                  <Badge variant="secondary">20%</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Insurance</span>
                  <Badge variant="secondary">15%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
};

export default Reports;
