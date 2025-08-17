export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'Owner' | 'Admin' | 'Analyst' | 'Agent';
  avatar?: string;
  lastLogin: Date;
  status: 'active' | 'inactive';
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  customerName: string;
  customerEmail: string;
  status: 'new' | 'quoted' | 'booked' | 'in-transit' | 'out-for-delivery' | 'delivered' | 'exception';
  service: 'LTL' | 'FTL' | 'Express' | 'Standard';
  carrier?: string;
  assignedTo?: string;
  origin: Address;
  destination: Address;
  pickupDate: Date;
  deliveryDate?: Date;
  estimatedDelivery: Date;
  weight: number;
  dimensions: string;
  value: number;
  cost: number;
  margin: number;
  createdAt: Date;
  updatedAt: Date;
  podImageUrl?: string;
  deliveryAgent?: string;
  recipient?: string;
  deliveryNotes?: string;
}

export interface Address {
  company: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  accountManager: string;
  creditLimit: number;
  paymentTerms: string;
  totalShipments: number;
  totalRevenue: number;
  avgMargin: number;
  status: 'active' | 'inactive' | 'suspended';
  createdAt: Date;
}

export interface Carrier {
  id: string;
  name: string;
  type: 'LTL' | 'FTL' | 'Express';
  onTimeRate: number;
  damageRate: number;
  costIndex: number;
  lanesCovered: string[];
  totalShipments: number;
  avgTransitTime: number;
  status: 'active' | 'inactive';
  lastUsed: Date;
}

export interface PricingRule {
  id: string;
  name: string;
  service: 'LTL' | 'FTL' | 'Express' | 'Standard';
  zone: string;
  originZip?: string;
  destinationZip?: string;
  weightMin: number;
  weightMax: number;
  baseRate: number;
  fuelSurcharge: number;
  accessorials: { name: string; rate: number }[];
  effectiveFrom: Date;
  effectiveTo?: Date;
  enabled: boolean;
  version: number;
  createdBy: string;
  createdAt: Date;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customerId: string;
  customerName: string;
  amount: number;
  tax: number;
  total: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'disputed';
  issueDate: Date;
  dueDate: Date;
  paidDate?: Date;
  shipments: string[];
  createdAt: Date;
}

export interface AuditLog {
  id: string;
  timestamp: Date;
  actor: string;
  action: string;
  entity: string;
  entityId: string;
  changes: Record<string, { from: any; to: any }>;
  metadata: Record<string, any>;
  ipAddress: string;
}

export interface KPI {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  format: 'currency' | 'percentage' | 'number';
}

export interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

export interface DateRange {
  from: Date;
  to: Date;
}

export type TimeRange = '7d' | '30d' | '90d' | 'ytd' | 'custom';