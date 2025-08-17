import { AdminUser, Shipment, Customer, Carrier, PricingRule, Invoice, AuditLog, KPI } from '@/types/admin';

// Generate mock data with localStorage persistence
const STORAGE_KEY = 'fdl_admin_data';

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

function generateDate(daysAgo: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date;
}

function generateMockShipments(): Shipment[] {
  const statuses = ['new', 'quoted', 'booked', 'in-transit', 'out-for-delivery', 'delivered', 'exception'] as const;
  const services = ['LTL', 'FTL', 'Express', 'Standard'] as const;
  const carriers = ['UPS Freight', 'FedEx Freight', 'XPO Logistics', 'Old Dominion', 'R+L Carriers'];
  const companies = ['Wine World Inc', 'Vintage Distributors', 'Premium Spirits Co', 'Elite Beverages', 'Luxury Wine Co'];
  
  return Array.from({ length: 150 }, (_, i) => ({
    id: generateId(),
    trackingNumber: `FDL${String(i + 1).padStart(6, '0')}`,
    customerName: companies[Math.floor(Math.random() * companies.length)],
    customerEmail: `contact@company${i}.com`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    service: services[Math.floor(Math.random() * services.length)],
    carrier: Math.random() > 0.3 ? carriers[Math.floor(Math.random() * carriers.length)] : undefined,
    assignedTo: Math.random() > 0.5 ? 'John Smith' : 'Sarah Johnson',
    origin: {
      company: 'Wine Warehouse',
      street: '123 Industrial Blvd',
      city: 'Napa',
      state: 'CA',
      zip: '94558',
      country: 'US'
    },
    destination: {
      company: companies[Math.floor(Math.random() * companies.length)],
      street: '456 Retail Ave',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'US'
    },
    pickupDate: generateDate(Math.floor(Math.random() * 30)),
    deliveryDate: Math.random() > 0.5 ? generateDate(Math.floor(Math.random() * 10)) : undefined,
    estimatedDelivery: generateDate(-Math.floor(Math.random() * 5)),
    weight: Math.floor(Math.random() * 5000) + 100,
    dimensions: '48"x40"x60"',
    value: Math.floor(Math.random() * 50000) + 5000,
    cost: Math.floor(Math.random() * 2000) + 200,
    margin: Math.floor(Math.random() * 30) + 10,
    createdAt: generateDate(Math.floor(Math.random() * 60)),
    updatedAt: generateDate(Math.floor(Math.random() * 7)),
    podImageUrl: Math.random() > 0.7 ? '/src/assets/pod-wine-delivery.jpg' : undefined,
    deliveryAgent: Math.random() > 0.5 ? 'Mike Wilson' : 'Lisa Chen',
    recipient: Math.random() > 0.5 ? 'Store Manager' : 'Warehouse Supervisor',
    deliveryNotes: Math.random() > 0.7 ? 'Left at loading dock as instructed' : undefined
  }));
}

function generateMockCustomers(): Customer[] {
  const companies = ['Wine World Inc', 'Vintage Distributors', 'Premium Spirits Co', 'Elite Beverages', 'Luxury Wine Co'];
  
  return companies.map(name => ({
    id: generateId(),
    name,
    email: `contact@${name.toLowerCase().replace(/\s/g, '')}.com`,
    phone: `(555) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    address: {
      company: name,
      street: `${Math.floor(Math.random() * 9999)} Commerce St`,
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      country: 'US'
    },
    accountManager: Math.random() > 0.5 ? 'Sarah Johnson' : 'Mike Chen',
    creditLimit: Math.floor(Math.random() * 100000) + 50000,
    paymentTerms: 'Net 30',
    totalShipments: Math.floor(Math.random() * 200) + 50,
    totalRevenue: Math.floor(Math.random() * 500000) + 100000,
    avgMargin: Math.floor(Math.random() * 20) + 15,
    status: Math.random() > 0.1 ? 'active' : 'inactive',
    createdAt: generateDate(Math.floor(Math.random() * 365))
  }));
}

function generateMockCarriers(): Carrier[] {
  return [
    {
      id: generateId(),
      name: 'UPS Freight',
      type: 'LTL',
      onTimeRate: 94.2,
      damageRate: 0.8,
      costIndex: 98,
      lanesCovered: ['CA-NY', 'CA-FL', 'TX-NY'],
      totalShipments: 2400,
      avgTransitTime: 3.2,
      status: 'active',
      lastUsed: generateDate(1)
    },
    {
      id: generateId(),
      name: 'FedEx Freight',
      type: 'LTL',
      onTimeRate: 92.8,
      damageRate: 1.2,
      costIndex: 102,
      lanesCovered: ['CA-TX', 'NY-FL', 'CA-IL'],
      totalShipments: 1800,
      avgTransitTime: 3.5,
      status: 'active',
      lastUsed: generateDate(2)
    },
    {
      id: generateId(),
      name: 'XPO Logistics',
      type: 'FTL',
      onTimeRate: 89.5,
      damageRate: 0.6,
      costIndex: 95,
      lanesCovered: ['CA-NY', 'TX-FL', 'IL-CA'],
      totalShipments: 950,
      avgTransitTime: 2.8,
      status: 'active',
      lastUsed: generateDate(3)
    }
  ];
}

function generateMockPricingRules(): PricingRule[] {
  return [
    {
      id: generateId(),
      name: 'CA to NY LTL Standard',
      service: 'LTL',
      zone: 'West to East',
      originZip: '90000-99999',
      destinationZip: '10000-19999',
      weightMin: 150,
      weightMax: 10000,
      baseRate: 2.50,
      fuelSurcharge: 0.25,
      accessorials: [
        { name: 'Liftgate', rate: 75 },
        { name: 'Inside Delivery', rate: 125 }
      ],
      effectiveFrom: generateDate(30),
      enabled: true,
      version: 1,
      createdBy: 'admin@fdl.com',
      createdAt: generateDate(30)
    },
    {
      id: generateId(),
      name: 'Express Service Premium',
      service: 'Express',
      zone: 'National',
      weightMin: 1,
      weightMax: 1000,
      baseRate: 4.75,
      fuelSurcharge: 0.35,
      accessorials: [
        { name: 'Signature Required', rate: 25 },
        { name: 'Saturday Delivery', rate: 150 }
      ],
      effectiveFrom: generateDate(60),
      enabled: true,
      version: 2,
      createdBy: 'admin@fdl.com',
      createdAt: generateDate(60)
    }
  ];
}

function generateMockInvoices(): Invoice[] {
  return Array.from({ length: 25 }, (_, i) => ({
    id: generateId(),
    invoiceNumber: `INV-${String(i + 1).padStart(4, '0')}`,
    customerId: generateId(),
    customerName: ['Wine World Inc', 'Vintage Distributors', 'Premium Spirits Co'][i % 3],
    amount: Math.floor(Math.random() * 10000) + 1000,
    tax: Math.floor(Math.random() * 800) + 80,
    total: 0, // Will be calculated
    status: ['draft', 'sent', 'paid', 'overdue', 'disputed'][Math.floor(Math.random() * 5)] as any,
    issueDate: generateDate(Math.floor(Math.random() * 60)),
    dueDate: generateDate(-Math.floor(Math.random() * 30)),
    paidDate: Math.random() > 0.5 ? generateDate(Math.floor(Math.random() * 7)) : undefined,
    shipments: [generateId(), generateId()],
    createdAt: generateDate(Math.floor(Math.random() * 90))
  })).map(invoice => ({ ...invoice, total: invoice.amount + invoice.tax }));
}

function generateMockAuditLogs(): AuditLog[] {
  const actions = ['created', 'updated', 'deleted', 'viewed', 'exported'];
  const entities = ['shipment', 'customer', 'pricing-rule', 'invoice', 'user'];
  
  return Array.from({ length: 100 }, (_, i) => ({
    id: generateId(),
    timestamp: generateDate(Math.floor(Math.random() * 30)),
    actor: ['admin@fdl.com', 'sarah@fdl.com', 'mike@fdl.com'][Math.floor(Math.random() * 3)],
    action: actions[Math.floor(Math.random() * actions.length)],
    entity: entities[Math.floor(Math.random() * entities.length)],
    entityId: generateId(),
    changes: {
      status: { from: 'new', to: 'quoted' }
    },
    metadata: { userAgent: 'Mozilla/5.0...', sessionId: generateId() },
    ipAddress: '192.168.1.100'
  }));
}

function generateKPIs(): KPI[] {
  return [
    {
      label: 'Total Revenue',
      value: 2847500,
      change: 12.5,
      trend: 'up',
      format: 'currency'
    },
    {
      label: 'Active Shipments',
      value: 342,
      change: -5.2,
      trend: 'down',
      format: 'number'
    },
    {
      label: 'On-Time Delivery',
      value: 94.2,
      change: 2.1,
      trend: 'up',
      format: 'percentage'
    },
    {
      label: 'Average Margin',
      value: 18.7,
      change: 0.8,
      trend: 'up',
      format: 'percentage'
    }
  ];
}

// Data management with localStorage
export class AdminDataStore {
  private static instance: AdminDataStore;
  private data: {
    shipments: Shipment[];
    customers: Customer[];
    carriers: Carrier[];
    pricingRules: PricingRule[];
    invoices: Invoice[];
    auditLogs: AuditLog[];
    kpis: KPI[];
  };

  private constructor() {
    this.data = this.loadFromStorage();
  }

  static getInstance(): AdminDataStore {
    if (!AdminDataStore.instance) {
      AdminDataStore.instance = new AdminDataStore();
    }
    return AdminDataStore.instance;
  }

  private loadFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Convert date strings back to Date objects
        parsed.shipments = parsed.shipments?.map((s: any) => ({
          ...s,
          pickupDate: new Date(s.pickupDate),
          deliveryDate: s.deliveryDate ? new Date(s.deliveryDate) : undefined,
          estimatedDelivery: new Date(s.estimatedDelivery),
          createdAt: new Date(s.createdAt),
          updatedAt: new Date(s.updatedAt)
        }));
        
        parsed.customers = parsed.customers?.map((c: any) => ({
          ...c,
          createdAt: new Date(c.createdAt)
        }));
        
        parsed.carriers = parsed.carriers?.map((c: any) => ({
          ...c,
          lastUsed: new Date(c.lastUsed)
        }));
        
        return parsed;
      } catch (e) {
        console.warn('Failed to parse stored admin data, generating fresh data');
      }
    }
    
    return {
      shipments: generateMockShipments(),
      customers: generateMockCustomers(),
      carriers: generateMockCarriers(),
      pricingRules: generateMockPricingRules(),
      invoices: generateMockInvoices(),
      auditLogs: generateMockAuditLogs(),
      kpis: generateKPIs()
    };
  }

  private saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  }

  // Getters
  getShipments() { return this.data.shipments; }
  getCustomers() { return this.data.customers; }
  getCarriers() { return this.data.carriers; }
  getPricingRules() { return this.data.pricingRules; }
  getInvoices() { return this.data.invoices; }
  getAuditLogs() { return this.data.auditLogs; }
  getKPIs() { return this.data.kpis; }

  // Updaters
  updateShipment(id: string, updates: Partial<Shipment>) {
    const index = this.data.shipments.findIndex(s => s.id === id);
    if (index >= 0) {
      this.data.shipments[index] = { ...this.data.shipments[index], ...updates, updatedAt: new Date() };
      this.saveToStorage();
    }
  }

  addShipment(shipment: Omit<Shipment, 'id' | 'createdAt' | 'updatedAt'>) {
    const newShipment: Shipment = {
      ...shipment,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.data.shipments.push(newShipment);
    this.saveToStorage();
    return newShipment;
  }

  deleteShipment(id: string) {
    this.data.shipments = this.data.shipments.filter(s => s.id !== id);
    this.saveToStorage();
  }

  // Similar methods for other entities...
  updatePricingRule(id: string, updates: Partial<PricingRule>) {
    const index = this.data.pricingRules.findIndex(p => p.id === id);
    if (index >= 0) {
      this.data.pricingRules[index] = { ...this.data.pricingRules[index], ...updates };
      this.saveToStorage();
    }
  }

  addPricingRule(rule: Omit<PricingRule, 'id' | 'createdAt'>) {
    const newRule: PricingRule = {
      ...rule,
      id: generateId(),
      createdAt: new Date()
    };
    this.data.pricingRules.push(newRule);
    this.saveToStorage();
    return newRule;
  }
}