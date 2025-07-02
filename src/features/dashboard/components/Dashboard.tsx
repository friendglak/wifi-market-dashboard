
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, Users, Wifi, LayoutDashboard, ArrowLeft, LogOut, User } from 'lucide-react';
import { MetricsCards } from './MetricsCards';
import { VisitorsChart } from './VisitorsChart';
import { ConversionChart } from './ConversionChart';
import { CampaignManager } from '../../campaigns/components/CampaignManager';
import { DateRangeFilter } from './DateRangeFilter';
import { Link } from 'react-router-dom';
import { useAuth } from '@/features/authentication/hooks/useAuth';
import { toast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dateRange, setDateRange] = useState('7d');
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      toast({
        title: error instanceof Error ? error.message : 'Failed to sign out',
        description: 'Failed to sign out',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-slate-300 mx-4" />
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">WiFi Marketing</h1>
                <p className="text-sm text-slate-500">Dashboard Pro</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Online
              </Badge>
              {user && (
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <User className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <TabsList className="grid w-full sm:w-auto grid-cols-2 lg:grid-cols-2">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="campaigns" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Campaigns
              </TabsTrigger>
            </TabsList>
            {activeTab === 'dashboard' && (
              <DateRangeFilter value={dateRange} onChange={setDateRange} />
            )}
          </div>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Metrics Cards */}
            <MetricsCards dateRange={dateRange} />

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="col-span-1 bg-white/70 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-slate-900">Visitors Over Time</CardTitle>
                  <CardDescription>Daily visitor connections to your WiFi network</CardDescription>
                </CardHeader>
                <CardContent>
                  <VisitorsChart dateRange={dateRange} />
                </CardContent>
              </Card>

              <Card className="col-span-1 bg-white/70 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-slate-900">Conversion Funnel</CardTitle>
                  <CardDescription>From WiFi connection to lead conversion</CardDescription>
                </CardHeader>
                <CardContent>
                  <ConversionChart />
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-white/70 backdrop-blur-sm border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-900">Recent Activity</CardTitle>
                <CardDescription>Latest visitor interactions and conversions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: '2 min ago', action: 'New lead captured', user: 'Anonymous User #1234', status: 'success' },
                    { time: '5 min ago', action: 'WiFi connection', user: 'Anonymous User #1235', status: 'info' },
                    { time: '8 min ago', action: 'Campaign click', user: 'Anonymous User #1236', status: 'warning' },
                    { time: '12 min ago', action: 'Email subscribed', user: 'Anonymous User #1237', status: 'success' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' :
                          activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`}></div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                          <p className="text-xs text-slate-500">{activity.user}</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns">
            <CampaignManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
