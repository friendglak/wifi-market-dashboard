
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell } from 'recharts';

export const ConversionChart = () => {
  const data = [
    { name: 'WiFi Connect', value: 100, color: '#3b82f6' },
    { name: 'Landing Page', value: 78, color: '#6366f1' },
    { name: 'Form View', value: 45, color: '#8b5cf6' },
    { name: 'Email Submit', value: 28, color: '#a855f7' },
    { name: 'Lead Captured', value: 18, color: '#c084fc' }
  ];

  const CustomTooltip = ({ active, payload, label }: {
    active?: boolean;
    payload?: Array<{ value: number }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      const percentage = ((payload[0].value / data[0].value) * 100).toFixed(1);
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-200">
          <p className="text-sm font-medium text-slate-900">{label}</p>
          <p className="text-sm text-indigo-600">
            Users: <span className="font-semibold">{payload[0].value}</span>
          </p>
          <p className="text-sm text-slate-500">
            Conversion: <span className="font-semibold">{percentage}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="name"
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="value"
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
