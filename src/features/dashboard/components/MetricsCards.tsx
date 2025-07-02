
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Wifi, Clock, BarChart3 } from 'lucide-react';

interface MetricsCardsProps {
  dateRange: string;
}

export const MetricsCards = ({ dateRange }: MetricsCardsProps) => {
  // Simulate different data based on date range
  const getMetrics = (range: string) => {
    const baseMetrics = {
      visitors: 1248,
      conversions: 89,
      avgTime: 18,
      clickRate: 7.3
    };

    const multiplier = range === '30d' ? 4.2 : range === '7d' ? 1 : 0.3;

    return {
      visitors: Math.round(baseMetrics.visitors * multiplier),
      conversions: Math.round(baseMetrics.conversions * multiplier),
      avgTime: baseMetrics.avgTime + (range === '30d' ? 5 : range === '1d' ? -3 : 0),
      clickRate: baseMetrics.clickRate + (range === '30d' ? 1.2 : range === '1d' ? -0.8 : 0)
    };
  };

  const metrics = getMetrics(dateRange);

  const cards = [
    {
      title: 'Total Visitors',
      value: metrics.visitors.toLocaleString(),
      description: 'WiFi connections',
      icon: Users,
      change: '+12.5%',
      changeType: 'positive' as const,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Conversions',
      value: metrics.conversions.toString(),
      description: 'Leads captured',
      icon: BarChart3,
      change: '+8.2%',
      changeType: 'positive' as const,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Avg. Connection Time',
      value: `${metrics.avgTime}m`,
      description: 'Per session',
      icon: Clock,
      change: '+2.1%',
      changeType: 'positive' as const,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Click Rate',
      value: `${metrics.clickRate}%`,
      description: 'Campaign engagement',
      icon: Wifi,
      change: '-0.5%',
      changeType: 'negative' as const,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card key={index} className="bg-white/70 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              {card.title}
            </CardTitle>
            <div className={`p-2 rounded-lg bg-gradient-to-r ${card.gradient}`}>
              <card.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 mb-1">
              {card.value}
            </div>
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-500">
                {card.description}
              </CardDescription>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${card.changeType === 'positive'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
                }`}>
                {card.change}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
