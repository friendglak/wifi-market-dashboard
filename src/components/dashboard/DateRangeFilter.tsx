
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

interface DateRangeFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export const DateRangeFilter = ({ value, onChange }: DateRangeFilterProps) => {
  const options = [
    { label: 'Today', value: '1d' },
    { label: '7 Days', value: '7d' },
    { label: '30 Days', value: '30d' }
  ];

  return (
    <div className="flex items-center space-x-2">
      <CalendarDays className="w-4 h-4 text-slate-500" />
      <div className="flex rounded-lg bg-slate-100 p-1">
        {options.map((option) => (
          <Button
            key={option.value}
            variant={value === option.value ? "default" : "ghost"}
            size="sm"
            onClick={() => onChange(option.value)}
            className={`text-xs ${
              value === option.value 
                ? "bg-white shadow-sm text-slate-900" 
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
