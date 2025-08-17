import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  DollarSign, 
  CreditCard, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Download,
  Eye,
  Filter,
  CalendarIcon,
  X,
  Loader2
} from 'lucide-react';
import { format, addDays, subDays, subMonths, isWithinInterval, parseISO } from 'date-fns';
import PortalLayout from '@/components/portal/PortalLayout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Billing = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('3m');
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [invoices, setInvoices] = useState(() => {
    const saved = localStorage.getItem('fdl_portal_invoices');
    return saved ? JSON.parse(saved) : allInvoices;
  });
  const [isPaymentProcessing, setIsPaymentProcessing] = useState<string | null>(null);

  // Extended mock data with more history
  const allSpendData = [
    { month: 'Jan', date: '2024-01-15', amount: 11500, budget: 15000 },
    { month: 'Feb', date: '2024-02-15', amount: 13200, budget: 15000 },
    { month: 'Mar', date: '2024-03-15', amount: 12800, budget: 15000 },
    { month: 'Apr', date: '2024-04-15', amount: 14900, budget: 15000 },
    { month: 'May', date: '2024-05-15', amount: 15200, budget: 15000 },
    { month: 'Jun', date: '2024-06-15', amount: 13832, budget: 15000 },
    { month: 'Jul', date: '2024-07-15', amount: 12500, budget: 15000 },
    { month: 'Aug', date: '2024-08-15', amount: 14200, budget: 15000 },
    { month: 'Sep', date: '2024-09-15', amount: 13800, budget: 15000 },
    { month: 'Oct', date: '2024-10-15', amount: 15900, budget: 15000 },
    { month: 'Nov', date: '2024-11-15', amount: 16200, budget: 15000 },
    { month: 'Dec', date: '2024-12-15', amount: 14832, budget: 15000 }
  ];

  const { toast } = useToast();

  // Save invoices to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('fdl_portal_invoices', JSON.stringify(invoices));
  }, [invoices]);

  const allInvoices = [
    { id: 'INV-2024-0234', date: '2024-01-15', dueDate: '2024-02-14', amount: 2450.75, status: 'paid', services: 'LTL Freight' },
    { id: 'INV-2024-0235', date: '2024-01-18', dueDate: '2024-02-17', amount: 1850.25, status: 'overdue', services: 'FTL Freight' },
    { id: 'INV-2024-0236', date: '2024-01-20', dueDate: '2024-02-19', amount: 950.50, status: 'pending', services: 'Warehousing' },
    { id: 'INV-2024-0237', date: '2024-01-22', dueDate: '2024-02-21', amount: 3200.00, status: 'pending', services: 'Last Mile' },
    { id: 'INV-2024-0220', date: '2024-02-05', dueDate: '2024-03-05', amount: 2100.00, status: 'paid', services: 'LTL Freight' },
    { id: 'INV-2024-0221', date: '2024-02-10', dueDate: '2024-03-10', amount: 3500.75, status: 'paid', services: 'FTL Freight' },
    { id: 'INV-2024-0222', date: '2024-02-15', dueDate: '2024-03-15', amount: 1200.50, status: 'paid', services: 'Warehousing' },
    { id: 'INV-2024-0180', date: '2024-03-08', dueDate: '2024-04-08', amount: 2800.00, status: 'paid', services: 'Last Mile' },
    { id: 'INV-2024-0181', date: '2024-03-12', dueDate: '2024-04-12', amount: 1750.25, status: 'paid', services: 'LTL Freight' },
    { id: 'INV-2024-0182', date: '2024-03-18', dueDate: '2024-04-18', amount: 4200.50, status: 'paid', services: 'FTL Freight' }
  ];

  const allPayments = [
    { id: 'PAY-2024-0112', date: '2024-01-15', amount: 2450.75, method: 'Bank Transfer', invoice: 'INV-2024-0234', status: 'completed' },
    { id: 'PAY-2024-0111', date: '2024-01-10', amount: 4200.50, method: 'ACH', invoice: 'INV-2024-0233', status: 'completed' },
    { id: 'PAY-2024-0110', date: '2024-01-08', amount: 1750.25, method: 'Wire Transfer', invoice: 'INV-2024-0232', status: 'completed' },
    { id: 'PAY-2024-0105', date: '2024-02-12', amount: 2100.00, method: 'Bank Transfer', invoice: 'INV-2024-0220', status: 'completed' },
    { id: 'PAY-2024-0106', date: '2024-02-18', amount: 3500.75, method: 'ACH', invoice: 'INV-2024-0221', status: 'completed' },
    { id: 'PAY-2024-0107', date: '2024-02-22', amount: 1200.50, method: 'Wire Transfer', invoice: 'INV-2024-0222', status: 'completed' }
  ];

  // Date range preset options
  const datePresets = [
    { label: 'Last 7 days', value: 'last7days', days: 7 },
    { label: 'Last 30 days', value: 'last30days', days: 30 },
    { label: 'Last 3 months', value: 'last3months', months: 3 },
    { label: 'Last 6 months', value: 'last6months', months: 6 },
    { label: 'Last year', value: 'lastyear', months: 12 }
  ];

  // Helper functions for date filtering
  const filterDataByDateRange = (data: any[], dateField: string) => {
    if (!dateRange) return data;
    return data.filter(item => {
      const itemDate = parseISO(item[dateField]);
      return isWithinInterval(itemDate, { start: dateRange.from, end: dateRange.to });
    });
  };

  const calculateFilteredData = () => {
    const filteredInvoices = filterDataByDateRange(invoices, 'date');
    const filteredPayments = filterDataByDateRange(allPayments, 'date');
    const filteredSpendData = filterDataByDateRange(allSpendData, 'date');

    // Calculate KPIs based on filtered data
    const totalSpend = filteredInvoices.reduce((sum, inv) => sum + inv.amount, 0);
    const paidInvoices = filteredInvoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);
    const outstanding = filteredInvoices.filter(inv => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0);
    const overdueAmount = filteredInvoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.amount, 0);

    // Calculate service breakdown based on filtered invoices
    const serviceAmounts = filteredInvoices.reduce((acc, invoice) => {
      acc[invoice.services] = (acc[invoice.services] || 0) + invoice.amount;
      return acc;
    }, {} as Record<string, number>);

    const serviceBreakdown = [
      { name: 'LTL Freight', amount: serviceAmounts['LTL Freight'] || 0, color: 'hsl(var(--primary))' },
      { name: 'FTL Freight', amount: serviceAmounts['FTL Freight'] || 0, color: 'hsl(var(--accent))' },
      { name: 'Warehousing', amount: serviceAmounts['Warehousing'] || 0, color: 'hsl(var(--logistics-orange))' },
      { name: 'Last Mile', amount: serviceAmounts['Last Mile'] || 0, color: 'hsl(var(--logistics-green))' }
    ].map(service => ({
      ...service,
      value: totalSpend > 0 ? Math.round((service.amount / totalSpend) * 100) : 0
    }));

    return {
      billingOverview: {
        totalSpend,
        outstanding,
        paidInvoices,
        overdueAmount,
        avgMonthlySpend: filteredSpendData.length > 0 ? totalSpend / filteredSpendData.length : 0
      },
      spendData: filteredSpendData,
      serviceBreakdown,
      recentInvoices: filteredInvoices.slice(0, 10),
      payments: filteredPayments.slice(0, 10)
    };
  };

  // Use filtered data if date range is set, otherwise use default last 6 months
  const {
    billingOverview,
    spendData,
    serviceBreakdown,
    recentInvoices,
    payments
  } = dateRange ? calculateFilteredData() : {
    billingOverview: {
      totalSpend: 87432.50,
      outstanding: 4250.75,
      paidInvoices: 83181.75,
      overdueAmount: 1850.25,
      avgMonthlySpend: 14572.08
    },
    spendData: allSpendData.slice(-6),
    serviceBreakdown: [
      { name: 'LTL Freight', value: 45, amount: 39244.13, color: 'hsl(var(--primary))' },
      { name: 'FTL Freight', value: 30, amount: 26229.75, color: 'hsl(var(--accent))' },
      { name: 'Warehousing', value: 15, amount: 13114.88, color: 'hsl(var(--logistics-orange))' },
      { name: 'Last Mile', value: 10, amount: 8743.25, color: 'hsl(var(--logistics-green))' }
    ],
    recentInvoices: invoices.slice(0, 4),
    payments: allPayments.slice(0, 3)
  };

  const handlePresetSelect = (preset: any) => {
    const now = new Date();
    let from: Date;
    
    if (preset.days) {
      from = subDays(now, preset.days);
    } else if (preset.months) {
      from = subMonths(now, preset.months);
    } else {
      return;
    }
    
    setDateRange({ from, to: now });
    setIsFilterOpen(false);
  };

  const clearFilter = () => {
    setDateRange(null);
    setIsFilterOpen(false);
  };

  const formatDateRange = () => {
    if (!dateRange) return 'Filter';
    return `${format(dateRange.from, 'MMM dd')} - ${format(dateRange.to, 'MMM dd, yyyy')}`;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'overdue':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      paid: 'default' as const,
      completed: 'default' as const, 
      overdue: 'destructive' as const,
      pending: 'secondary' as const
    };
    return <Badge variant={variants[status as keyof typeof variants] || 'secondary'}>{status}</Badge>;
  };

  const handlePayNow = async (invoice: any) => {
    setIsPaymentProcessing(invoice.id);
    
    // Show redirect toast
    toast({
      title: "Redirecting to Stripe...",
      description: "Please wait while we redirect you to the payment portal.",
    });
    
    // Simulate redirect delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Update invoice status to paid
    setInvoices(prev => prev.map(inv => 
      inv.id === invoice.id 
        ? { ...inv, status: 'paid' }
        : inv
    ));
    
    setIsPaymentProcessing(null);
    
    // Show success toast
    toast({
      title: "Payment successful",
      description: `Invoice ${invoice.id} has been marked as paid.`,
    });
  };

  return (
    <PortalLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Billing & Finance</h1>
            <p className="text-muted-foreground">
              Manage your account spending and invoices
              {dateRange && (
                <span className="ml-2 text-primary font-medium">
                  • Filtered: {format(dateRange.from, 'MMM dd')} - {format(dateRange.to, 'MMM dd, yyyy')}
                </span>
              )}
            </p>
          </div>
          <div className="flex gap-2">
            <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <PopoverTrigger asChild>
                <Button 
                  variant={dateRange ? "default" : "outline"} 
                  size="sm"
                  className={cn(
                    "gap-2",
                    dateRange && "bg-primary text-primary-foreground"
                  )}
                >
                  <CalendarIcon className="h-4 w-4" />
                  {formatDateRange()}
                  {dateRange && (
                    <X 
                      className="h-3 w-3 ml-1" 
                      onClick={(e) => {
                        e.stopPropagation();
                        clearFilter();
                      }}
                    />
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <div className="p-4 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Date Range</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {datePresets.map((preset) => (
                        <Button
                          key={preset.value}
                          variant="ghost"
                          size="sm"
                          className="justify-start"
                          onClick={() => handlePresetSelect(preset)}
                        >
                          {preset.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-sm mb-2">Custom Range</h4>
                    <Calendar
                      mode="range"
                      selected={dateRange}
                      onSelect={(range) => {
                        if (range?.from && range?.to) {
                          setDateRange(range as { from: Date; to: Date });
                          setIsFilterOpen(false);
                        }
                      }}
                      className={cn("pointer-events-auto")}
                      numberOfMonths={2}
                    />
                  </div>
                  {dateRange && (
                    <div className="border-t pt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={clearFilter}
                        className="w-full"
                      >
                        Clear Filter
                      </Button>
                    </div>
                  )}
                </div>
              </PopoverContent>
            </Popover>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Spend</p>
                  <p className="text-2xl font-bold text-foreground">${billingOverview.totalSpend.toLocaleString()}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% from last period
                  </p>
                </div>
                <div className="p-3 bg-primary/10 rounded-full">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Outstanding</p>
                  <p className="text-2xl font-bold text-foreground">${billingOverview.outstanding.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground mt-1">Due within 30 days</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Paid Invoices</p>
                  <p className="text-2xl font-bold text-foreground">${billingOverview.paidInvoices.toLocaleString()}</p>
                  <p className="text-xs text-green-600 mt-1">95.2% on-time payment</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Overdue</p>
                  <p className="text-2xl font-bold text-red-600">${billingOverview.overdueAmount.toLocaleString()}</p>
                  <p className="text-xs text-red-600 mt-1">Immediate attention</p>
                </div>
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="payments">Payment History</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Spending Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>Spending Trends</CardTitle>
                  <CardDescription>Monthly spending vs budget allocation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={spendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                      <Line type="monotone" dataKey="amount" stroke="hsl(var(--primary))" strokeWidth={2} />
                      <Line type="monotone" dataKey="budget" stroke="hsl(var(--muted-foreground))" strokeDasharray="5 5" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Service Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Spend by Service</CardTitle>
                  <CardDescription>Distribution of spending across services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={serviceBreakdown}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="hsl(var(--primary))"
                        dataKey="value"
                        label={({ name, value }) => `${name} ${value}%`}
                      >
                        {serviceBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    {serviceBreakdown.map((service) => (
                      <div key={service.name} className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: service.color }} />
                          {service.name}
                        </span>
                        <span className="font-medium">${service.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common billing tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <CreditCard className="h-6 w-6 mb-2" />
                    Pay Outstanding
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    Download Statements
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Calendar className="h-6 w-6 mb-2" />
                    Setup Auto-Pay
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Invoices Tab */}
          <TabsContent value="invoices" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Invoices</CardTitle>
                <CardDescription>Track and manage your invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Invoice #</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Date</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Due Date</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Amount</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Services</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      {recentInvoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b last:border-b-0">
                          <td className="py-3 text-sm font-medium">{invoice.id}</td>
                          <td className="py-3 text-sm">{invoice.date}</td>
                          <td className="py-3 text-sm">{invoice.dueDate}</td>
                          <td className="py-3 text-sm font-medium">${invoice.amount.toLocaleString()}</td>
                          <td className="py-3 text-sm">{invoice.services}</td>
                          <td className="py-3">{getStatusBadge(invoice.status)}</td>
                          <td className="py-3">
                            <div className="flex gap-2">
                              {(invoice.status === 'pending' || invoice.status === 'overdue') && (
                                <Button 
                                  size="sm"
                                  onClick={() => handlePayNow(invoice)}
                                  disabled={isPaymentProcessing === invoice.id}
                                  className="bg-primary hover:bg-primary/90"
                                >
                                  {isPaymentProcessing === invoice.id ? (
                                    <>
                                      <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                                      Processing...
                                    </>
                                  ) : (
                                    <>
                                      <CreditCard className="h-4 w-4 mr-1" />
                                      Pay Now
                                    </>
                                  )}
                                </Button>
                              )}
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>View all your payment transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Payment #</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Date</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Amount</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Method</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Invoice</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="pb-3 text-sm font-medium text-muted-foreground">Receipt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payments.map((payment) => (
                        <tr key={payment.id} className="border-b last:border-b-0">
                          <td className="py-3 text-sm font-medium">{payment.id}</td>
                          <td className="py-3 text-sm">{payment.date}</td>
                          <td className="py-3 text-sm font-medium">${payment.amount.toLocaleString()}</td>
                          <td className="py-3 text-sm">{payment.method}</td>
                          <td className="py-3 text-sm">{payment.invoice}</td>
                          <td className="py-3">{getStatusBadge(payment.status)}</td>
                          <td className="py-3">
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cost Efficiency Metrics</CardTitle>
                  <CardDescription>Track your logistics spend efficiency</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Cost per Shipment</span>
                      <span className="font-medium">$245.32</span>
                    </div>
                    <Progress value={75} />
                    <p className="text-xs text-muted-foreground">15% below industry average</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Payment Terms Efficiency</span>
                      <span className="font-medium">95.2%</span>
                    </div>
                    <Progress value={95} />
                    <p className="text-xs text-muted-foreground">On-time payment rate</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Budget Utilization</span>
                      <span className="font-medium">87.5%</span>
                    </div>
                    <Progress value={88} />
                    <p className="text-xs text-muted-foreground">Within planned budget</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quarterly Business Review</CardTitle>
                  <CardDescription>Key insights and recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Cost Optimization</h4>
                        <p className="text-sm text-green-700">Your LTL consolidation strategy saved $12,450 this quarter</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-800">Growth Opportunity</h4>
                        <p className="text-sm text-blue-700">Consider dedicated fleet for 20% cost reduction on high-volume lanes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800">Action Required</h4>
                        <p className="text-sm text-yellow-700">Set up auto-pay to avoid late fees and improve cash flow</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  );
};

export default Billing;