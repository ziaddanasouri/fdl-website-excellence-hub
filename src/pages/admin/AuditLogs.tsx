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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Search, Filter, Download, Eye, Activity, User, Database, Settings } from 'lucide-react';
import { adminApi } from '@/data/adminApi';
import type { AuditLog } from '@/types/admin';

export default function AdminAuditLogs() {
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState<string>('all');
  const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null);

  useEffect(() => {
    loadAuditLogs();
  }, []);

  const loadAuditLogs = async () => {
    try {
      setLoading(true);
      const data = await adminApi.getAuditLogs();
      setAuditLogs(data);
    } catch (error) {
      console.error('Failed to load audit logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = log.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.entity.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = actionFilter === 'all' || log.action.toLowerCase().includes(actionFilter.toLowerCase());
    return matchesSearch && matchesAction;
  });

  const getActionBadge = (action: string) => {
    const actionLower = action.toLowerCase();
    if (actionLower.includes('create')) {
      return <Badge variant="default">Create</Badge>;
    } else if (actionLower.includes('update')) {
      return <Badge variant="secondary">Update</Badge>;
    } else if (actionLower.includes('delete')) {
      return <Badge variant="destructive">Delete</Badge>;
    } else if (actionLower.includes('login')) {
      return <Badge variant="outline">Login</Badge>;
    } else {
      return <Badge variant="outline">{action}</Badge>;
    }
  };

  const getEntityIcon = (entity: string) => {
    const entityLower = entity.toLowerCase();
    if (entityLower.includes('user')) {
      return <User className="h-4 w-4" />;
    } else if (entityLower.includes('shipment')) {
      return <Database className="h-4 w-4" />;
    } else if (entityLower.includes('setting')) {
      return <Settings className="h-4 w-4" />;
    } else {
      return <Activity className="h-4 w-4" />;
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  };

  const getActivityStats = () => {
    const last24h = auditLogs.filter(log => 
      Date.now() - log.timestamp.getTime() < 24 * 60 * 60 * 1000
    ).length;
    
    const thisWeek = auditLogs.filter(log => 
      Date.now() - log.timestamp.getTime() < 7 * 24 * 60 * 60 * 1000
    ).length;

    const uniqueUsers = new Set(auditLogs.map(log => log.actor)).size;

    return { last24h, thisWeek, uniqueUsers };
  };

  const stats = getActivityStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Audit Logs</h1>
        <p className="text-muted-foreground">Track system activities and user actions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Activity className="h-4 w-4 mr-2" />
              Last 24 Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.last24h}</div>
            <p className="text-xs text-muted-foreground">Recent activities</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.thisWeek}</div>
            <p className="text-xs text-muted-foreground">Total activities</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.uniqueUsers}</div>
            <p className="text-xs text-muted-foreground">Unique actors</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Audit Trail</CardTitle>
          <CardDescription>
            Complete log of all system activities and user actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search logs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-80"
                />
              </div>
              <Select value={actionFilter} onValueChange={setActionFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="create">Create</SelectItem>
                  <SelectItem value="update">Update</SelectItem>
                  <SelectItem value="delete">Delete</SelectItem>
                  <SelectItem value="login">Login</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export Logs</span>
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading audit logs...</div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Actor</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Entity</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>
                        <div className="text-sm">
                          {formatDate(log.timestamp)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{log.actor}</div>
                      </TableCell>
                      <TableCell>{getActionBadge(log.action)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getEntityIcon(log.entity)}
                          <span>{log.entity}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <code className="text-xs bg-muted px-1 py-0.5 rounded">
                          {log.ipAddress}
                        </code>
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedLog(log)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Audit Log Details</DialogTitle>
                              <DialogDescription>
                                Complete information for this audit log entry
                              </DialogDescription>
                            </DialogHeader>
                            {selectedLog && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-medium mb-1">Timestamp</h4>
                                    <p className="text-sm text-muted-foreground">
                                      {formatDate(selectedLog.timestamp)}
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">Actor</h4>
                                    <p className="text-sm text-muted-foreground">{selectedLog.actor}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">Action</h4>
                                    <p className="text-sm text-muted-foreground">{selectedLog.action}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">Entity</h4>
                                    <p className="text-sm text-muted-foreground">{selectedLog.entity}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">Entity ID</h4>
                                    <p className="text-sm text-muted-foreground">{selectedLog.entityId}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">IP Address</h4>
                                    <p className="text-sm text-muted-foreground">{selectedLog.ipAddress}</p>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Changes</h4>
                                  <div className="bg-muted p-3 rounded-md">
                                    <pre className="text-xs">
                                      {JSON.stringify(selectedLog.changes, null, 2)}
                                    </pre>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Metadata</h4>
                                  <div className="bg-muted p-3 rounded-md">
                                    <pre className="text-xs">
                                      {JSON.stringify(selectedLog.metadata, null, 2)}
                                    </pre>
                                  </div>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}