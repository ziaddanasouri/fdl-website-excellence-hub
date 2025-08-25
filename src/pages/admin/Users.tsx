import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Plus, Eye, Edit, Shield, UserCheck, Users as UsersIcon } from 'lucide-react';
import type { AdminUser } from '@/types/admin';

// Mock data for users
const mockUsers: AdminUser[] = [
  {
    id: '1',
    email: 'john.doe@company.com',
    name: 'John Doe',
    role: 'Owner',
    avatar: '',
    lastLogin: new Date('2024-01-15T10:30:00'),
    status: 'active'
  },
  {
    id: '2',
    email: 'sarah.johnson@company.com',
    name: 'Sarah Johnson',
    role: 'Admin',
    avatar: '',
    lastLogin: new Date('2024-01-14T16:45:00'),
    status: 'active'
  },
  {
    id: '3',
    email: 'mike.chen@company.com',
    name: 'Mike Chen',
    role: 'Analyst',
    avatar: '',
    lastLogin: new Date('2024-01-13T09:15:00'),
    status: 'active'
  },
  {
    id: '4',
    email: 'lisa.wang@company.com',
    name: 'Lisa Wang',
    role: 'Agent',
    avatar: '',
    lastLogin: new Date('2024-01-10T14:20:00'),
    status: 'inactive'
  },
  {
    id: '5',
    email: 'david.brown@company.com',
    name: 'David Brown',
    role: 'Agent',
    avatar: '',
    lastLogin: new Date('2024-01-12T11:30:00'),
    status: 'active'
  },
];

// Mock role permissions
const rolePermissions = {
  Owner: ['All Permissions'],
  Admin: ['Manage Users', 'Manage Shipments', 'View Analytics', 'Manage Pricing', 'Manage Carriers'],
  Analyst: ['View Analytics', 'View Shipments', 'Generate Reports'],
  Agent: ['View Shipments', 'Update Tracking', 'Customer Support'],
};

export default function AdminUsers() {
  const [users, setUsers] = useState<AdminUser[]>(mockUsers);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleBadge = (role: AdminUser['role']) => {
    const roleConfig = {
      Owner: { label: 'Owner', variant: 'default' as const },
      Admin: { label: 'Admin', variant: 'secondary' as const },
      Analyst: { label: 'Analyst', variant: 'outline' as const },
      Agent: { label: 'Agent', variant: 'outline' as const },
    };
    const config = roleConfig[role];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getStatusBadge = (status: AdminUser['status']) => {
    const statusConfig = {
      active: { label: 'Active', variant: 'default' as const },
      inactive: { label: 'Inactive', variant: 'secondary' as const },
    };
    const config = statusConfig[status];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getRoleStats = () => {
    return users.reduce((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  };

  const roleStats = getRoleStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users & Roles</h1>
        <p className="text-muted-foreground">Manage user accounts, roles, and permissions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <UsersIcon className="h-4 w-4 mr-2" />
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-muted-foreground">
              {users.filter(u => u.status === 'active').length} active
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Admins</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(roleStats.Owner || 0) + (roleStats.Admin || 0)}</div>
            <p className="text-xs text-muted-foreground">Admin level access</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Analysts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{roleStats.Analyst || 0}</div>
            <p className="text-xs text-muted-foreground">Analytics access</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{roleStats.Agent || 0}</div>
            <p className="text-xs text-muted-foreground">Support agents</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>
            Manage user accounts, assign roles, and control system access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="users" className="space-y-4">
            <TabsList>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 w-80"
                    />
                  </div>
                  <Select value={roleFilter} onValueChange={setRoleFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="Owner">Owner</SelectItem>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Analyst">Analyst</SelectItem>
                      <SelectItem value="Agent">Agent</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Add User</span>
                </Button>
              </div>

              {loading ? (
                <div className="text-center py-8">Loading users...</div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{user.name}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{getRoleBadge(user.role)}</TableCell>
                          <TableCell>{getStatusBadge(user.status)}</TableCell>
                          <TableCell>{formatDate(user.lastLogin)}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Shield className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>

            <TabsContent value="roles" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(rolePermissions).map(([role, permissions]) => (
                  <Card key={role}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{role}</span>
                        <Badge>{roleStats[role] || 0} users</Badge>
                      </CardTitle>
                      <CardDescription>
                        Permissions for {role.toLowerCase()} role
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {permissions.map((permission) => (
                          <div key={permission} className="flex items-center space-x-2">
                            <UserCheck className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{permission}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="mt-4 w-full">
                        Edit Permissions
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}