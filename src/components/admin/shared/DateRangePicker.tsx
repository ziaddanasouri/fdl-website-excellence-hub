import { useState } from 'react';
import { CalendarIcon } from 'lucide-react';
import { format, subDays, startOfYear } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const presets = [
  {
    label: 'Last 7 days',
    value: '7d',
    range: { from: subDays(new Date(), 7), to: new Date() }
  },
  {
    label: 'Last 30 days', 
    value: '30d',
    range: { from: subDays(new Date(), 30), to: new Date() }
  },
  {
    label: 'Last 90 days',
    value: '90d', 
    range: { from: subDays(new Date(), 90), to: new Date() }
  },
  {
    label: 'Year to date',
    value: 'ytd',
    range: { from: startOfYear(new Date()), to: new Date() }
  }
];

interface DateRangePickerProps {
  value?: DateRange;
  onChange: (range: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function DateRangePicker({ 
  value, 
  onChange, 
  placeholder = "Select date range",
  className 
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);

  const formatDateRange = (range: DateRange | undefined) => {
    if (!range?.from) return placeholder;
    if (!range.to) return format(range.from, 'MMM dd, yyyy');
    return `${format(range.from, 'MMM dd')} - ${format(range.to, 'MMM dd, yyyy')}`;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "justify-start text-left font-normal",
            !value && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {formatDateRange(value)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex">
          <div className="border-r p-3 space-y-2">
            <p className="text-sm font-medium">Presets</p>
            {presets.map((preset) => (
              <Button
                key={preset.value}
                variant="ghost"
                size="sm"
                className="w-full justify-start text-sm"
                onClick={() => {
                  onChange(preset.range);
                  setOpen(false);
                }}
              >
                {preset.label}
              </Button>
            ))}
          </div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={value?.from}
            selected={value}
            onSelect={onChange}
            numberOfMonths={2}
            className="pointer-events-auto"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}