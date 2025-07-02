
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Wifi, BarChart3, Users, Zap, Shield, Sparkles, Play, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/features/authentication/hooks/useAuth';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">WiFi Marketing</h1>
                <p className="text-sm text-gray-400">Dashboard Pro</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <User className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSignOut}
                    className="text-gray-300 hover:text-white"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                  <Link to="/dashboard">
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Dashboard
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 bg-white/5 border-white/10 text-white">
              <Sparkles className="w-3 h-3 mr-2" />
              Now with AI-powered insights
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Transform WiFi into
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent block">
                Marketing Gold
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Turn every WiFi connection into a lead. Track visitor behavior, create targeted campaigns,
              and grow your business with powerful analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {user ? (
                <Link to="/dashboard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6 group"
                  >
                    Go to Dashboard
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              ) : (
                <Link to="/auth">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6 group"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              )}

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 group"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to turn your WiFi network into a customer acquisition machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Track visitor behavior, connection patterns, and conversion rates with beautiful, interactive dashboards.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Lead Generation",
                description: "Convert WiFi users into leads with customizable landing pages and smart capture forms.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Zap,
                title: "Campaign Management",
                description: "Create and manage targeted marketing campaigns that reach users at the perfect moment.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Shield,
                title: "Secure & Compliant",
                description: "Enterprise-grade security with GDPR compliance built-in. Your data is safe with us.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Wifi,
                title: "Easy Integration",
                description: "Works with any WiFi router or access point. Setup takes less than 5 minutes.",
                gradient: "from-indigo-500 to-blue-500"
              },
              {
                icon: Sparkles,
                title: "AI Insights",
                description: "Get actionable recommendations powered by machine learning algorithms.",
                gradient: "from-pink-500 to-violet-500"
              }
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "2.5M+", label: "WiFi Connections" },
              { number: "150K+", label: "Leads Generated" },
              { number: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of businesses already using WiFi Marketing to grow their customer base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link to="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6 group"
                >
                  Enter Dashboard
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6 group"
                >
                  Enter Dashboard
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Wifi className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">WiFi Marketing Pro</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 WiFi Marketing. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
