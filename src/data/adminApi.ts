import { AdminDataStore } from './adminMock';
import { Shipment, Customer, Carrier, PricingRule, Invoice, AuditLog, KPI } from '@/types/admin';

// Simulate async API calls with loading delays
const delay = (ms: number = 300) => new Promise(resolve => setTimeout(resolve, ms));

const store = AdminDataStore.getInstance();

export const adminApi = {
  // Shipments
  async getShipments(): Promise<Shipment[]> {
    await delay();
    return store.getShipments();
  },

  async getShipment(id: string): Promise<Shipment | null> {
    await delay();
    return store.getShipments().find(s => s.id === id) || null;
  },

  async updateShipment(id: string, updates: Partial<Shipment>): Promise<void> {
    await delay();
    store.updateShipment(id, updates);
  },

  async createShipment(shipment: Omit<Shipment, 'id' | 'createdAt' | 'updatedAt'>): Promise<Shipment> {
    await delay();
    return store.addShipment(shipment);
  },

  async deleteShipment(id: string): Promise<void> {
    await delay();
    store.deleteShipment(id);
  },

  // Customers
  async getCustomers(): Promise<Customer[]> {
    await delay();
    return store.getCustomers();
  },

  // Carriers  
  async getCarriers(): Promise<Carrier[]> {
    await delay();
    return store.getCarriers();
  },

  // Pricing Rules
  async getPricingRules(): Promise<PricingRule[]> {
    await delay();
    return store.getPricingRules();
  },

  async updatePricingRule(id: string, updates: Partial<PricingRule>): Promise<void> {
    await delay();
    store.updatePricingRule(id, updates);
  },

  async createPricingRule(rule: Omit<PricingRule, 'id' | 'createdAt'>): Promise<PricingRule> {
    await delay();
    return store.addPricingRule(rule);
  },

  // Invoices
  async getInvoices(): Promise<Invoice[]> {
    await delay();
    return store.getInvoices();
  },

  // Audit Logs
  async getAuditLogs(): Promise<AuditLog[]> {
    await delay();
    return store.getAuditLogs();
  },

  // KPIs
  async getKPIs(): Promise<KPI[]> {
    await delay();
    return store.getKPIs();
  },

  // Analytics data generators
  async getShipmentTrends(days: number = 30): Promise<{ date: string; shipments: number; revenue: number }[]> {
    await delay();
    const shipments = store.getShipments();
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - days);

    const trends = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dayShipments = shipments.filter(s => 
        s.createdAt.toDateString() === d.toDateString()
      );
      
      trends.push({
        date: d.toISOString().split('T')[0],
        shipments: dayShipments.length,
        revenue: dayShipments.reduce((sum, s) => sum + s.cost, 0)
      });
    }
    
    return trends;
  },

  async getServiceMix(): Promise<{ service: string; count: number; revenue: number }[]> {
    await delay();
    const shipments = store.getShipments();
    const services = shipments.reduce((acc, shipment) => {
      if (!acc[shipment.service]) {
        acc[shipment.service] = { count: 0, revenue: 0 };
      }
      acc[shipment.service].count++;
      acc[shipment.service].revenue += shipment.cost;
      return acc;
    }, {} as Record<string, { count: number; revenue: number }>);

    return Object.entries(services).map(([service, data]) => ({
      service,
      count: data.count,
      revenue: data.revenue
    }));
  },

  async getCarrierPerformance(): Promise<{ carrier: string; onTime: number; total: number; rate: number }[]> {
    await delay();
    const shipments = store.getShipments();
    const carriers = shipments.reduce((acc, shipment) => {
      if (!shipment.carrier) return acc;
      
      if (!acc[shipment.carrier]) {
        acc[shipment.carrier] = { onTime: 0, total: 0 };
      }
      acc[shipment.carrier].total++;
      
      // Simulate on-time calculation
      if (Math.random() > 0.1) {
        acc[shipment.carrier].onTime++;
      }
      
      return acc;
    }, {} as Record<string, { onTime: number; total: number }>);

    return Object.entries(carriers).map(([carrier, data]) => ({
      carrier,
      onTime: data.onTime,
      total: data.total,
      rate: (data.onTime / data.total) * 100
    }));
  }
};