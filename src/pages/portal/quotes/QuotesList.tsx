
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Eye, Download, CheckCircle, Clock, XCircle } from 'lucide-react';
import PortalLayout from '@/components/portal/PortalLayout';
import { Link } from 'react-router-dom';

const QuotesList = () => {
  const quotes = [
    {
      id: 'Q-2024-045',
      status: 'pending',
      route: 'New York, NY → Los Angeles, CA',
      service: 'Express',
      total: '$89.99',
      createdDate: '2024-01-17',
      expiryDate: '2024-02-16',
      packages: 2
    },
    {
      id: 'Q-2024-044',
      status: 'accepted',
      route: 'Chicago, IL → Miami, FL',
      service: 'Standard',
      total: '$45.99',
      createdDate: '2024-01-16',
      acceptedDate: '2024-01-16',
      packages: 1
    },
    {
      id: 'Q-2024-043',
      status: 'expired',
      route: 'Seattle, WA → Boston, MA',
      service: 'Standard',
      total: '$125.99',
      createdDate: '2024-12-15',
      expiryDate: '2024-01-14',
      packages: 3
    }
  ];

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Quotes</h1>
            <p className="text-muted-foreground">Manage your shipping quotes</p>
          </div>
          <Link to="/portal/quotes/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Quote
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Quotes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quote ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Route</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quotes.map((quote) => (
                  <TableRow key={quote.id}>
                    <TableCell className="font-medium">{quote.id}</TableCell>
                    <TableCell>
                      <Badge variant={
                        quote.status === 'accepted' ? 'default' :
                        quote.status === 'pending' ? 'secondary' : 'destructive'
                      }>
                        {quote.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{quote.route}</TableCell>
                    <TableCell>{quote.service}</TableCell>
                    <TableCell className="font-medium">{quote.total}</TableCell>
                    <TableCell>{quote.createdDate}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        {quote.status === 'pending' && (
                          <Button size="sm">
                            Accept
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default QuotesList;
