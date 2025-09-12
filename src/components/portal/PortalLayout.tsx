
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  LayoutDashboard,
  Package,
  DollarSign,
  MapPin,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Truck,
  Bell,
  Search,
  Receipt,
  Warehouse
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import fdlLogo from '@/assets/fdl-dnt-logo.png';

interface PortalLayoutProps {
  children: React.ReactNode;
}

const PortalLayout = ({ children }: PortalLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const navigationItems = [
    { name: 'Dashboard', href: '/portal/dashboard', icon: LayoutDashboard },
    { name: 'Orders / Shipments', href: '/portal/shipments', icon: Package, badge: '12' },
    { name: 'Billing', href: '/portal/billing', icon: Receipt, badge: '2' },
    { name: 'Inventory', href: '/portal/inventory', icon: Warehouse },
    { name: 'Reports', href: '/portal/reports', icon: BarChart3 },
    { name: 'Support', href: '/portal/support', icon: MessageSquare },
    { name: 'Settings', href: '/portal/settings', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  const handleLogout = () => {
    localStorage.removeItem('fdl_customer_token');
    localStorage.removeItem('fdl_customer_email');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/portal/login');
  };

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('fdl_customer_token');
    if (!token) {
      navigate('/portal/login');
    }
  }, [navigate]);

  const userEmail = localStorage.getItem('fdl_customer_email') || 'demo@company.com';
  const userInitials = userEmail.split('@')[0].substring(0, 2).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            <Link to="/" className="flex items-center space-x-2">
              <img src={fdlLogo} alt="FDL DNT Logo" className="h-10 w-auto" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search orders, shipments..." 
                className="pl-9 w-64"
              />
            </div>
            
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">3</Badge>
            </Button>

            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{userInitials}</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{userEmail}</p>
                <p className="text-xs text-muted-foreground">Premium Account</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } transition-all duration-300 overflow-hidden bg-white border-r border-slate-200 min-h-[calc(100vh-73px)]`}>
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
            
            <div className="pt-4 mt-4 border-t border-slate-200">
              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-0' : 'ml-0'
        }`}>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;
