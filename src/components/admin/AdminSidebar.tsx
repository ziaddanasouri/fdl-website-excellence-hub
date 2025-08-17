import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Package,
  Truck,
  DollarSign,
  BarChart3,
  Users,
  Building2,
  CreditCard,
  UserCheck,
  FileText,
  Settings
} from 'lucide-react';

const navigationItems = [
  {
    title: 'Overview',
    items: [
      { title: 'Dashboard', url: '/admin/dashboard', icon: LayoutDashboard },
      { title: 'Workload', url: '/admin/workload', icon: Package }
    ]
  },
  {
    title: 'Operations',
    items: [
      { title: 'Shipments', url: '/admin/shipments', icon: Truck },
      { title: 'Pricing', url: '/admin/pricing', icon: DollarSign },
      { title: 'Analytics', url: '/admin/analytics', icon: BarChart3 }
    ]
  },
  {
    title: 'Management',
    items: [
      { title: 'Customers', url: '/admin/customers', icon: Users },
      { title: 'Carriers', url: '/admin/carriers', icon: Building2 },
      { title: 'Billing', url: '/admin/billing', icon: CreditCard }
    ]
  },
  {
    title: 'System',
    items: [
      { title: 'Users & Roles', url: '/admin/users', icon: UserCheck },
      { title: 'Audit Logs', url: '/admin/audit-logs', icon: FileText },
      { title: 'Settings', url: '/admin/settings', icon: Settings }
    ]
  }
];

export function AdminSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={open ? 'w-64' : 'w-16'} collapsible="icon">
      <SidebarContent className="mt-16">
        {navigationItems.map((group) => {
          const hasActiveItem = group.items.some(item => isActive(item.url));
          
          return (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel className={open ? '' : 'sr-only'}>
                {group.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive(item.url)}>
                        <NavLink
                          to={item.url}
                          className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
                        >
                          <item.icon className="h-4 w-4 shrink-0" />
                          {open && <span>{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}