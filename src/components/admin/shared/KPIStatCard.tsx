import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { KPI } from '@/types/admin';

interface KPIStatCardProps {
  kpi: KPI;
  className?: string;
}

export function KPIStatCard({ kpi, className }: KPIStatCardProps) {
  const formatValue = (value: number, format: string) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(value);
      case 'percentage':
        return `${value.toFixed(1)}%`;
      case 'number':
        return new Intl.NumberFormat('en-US').format(value);
      default:
        return value.toString();
    }
  };

  const formatChange = (change: number) => {
    const abs = Math.abs(change);
    return `${change >= 0 ? '+' : ''}${abs.toFixed(1)}%`;
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-3 w-3" />;
      case 'down':
        return <TrendingDown className="h-3 w-3" />;
      default:
        return <Minus className="h-3 w-3" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'down':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {kpi.label}
        </CardTitle>
        <Badge 
          variant="outline" 
          className={`${getTrendColor(kpi.trend)} flex items-center gap-1 px-2 py-1`}
        >
          {getTrendIcon(kpi.trend)}
          {formatChange(kpi.change)}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {formatValue(kpi.value, kpi.format)}
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          vs. previous period
        </p>
      </CardContent>
    </Card>
  );
}