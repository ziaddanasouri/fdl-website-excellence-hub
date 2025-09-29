
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";

// Individual Service Pages - Updated
import ColdStorageWarehousing from "./pages/services/ColdStorageWarehousing";
import TemperatureControlledWarehousing from "./pages/services/TemperatureControlledWarehousing";
const LazyLastMileDelivery = lazy(() => import("./pages/services/LastMileDelivery"));
import WineSpirits from "./pages/solutions/WineSpirits";
import SpecialtyCheese from "./pages/solutions/SpecialtyCheese";
import ConfectionerySweets from "./pages/solutions/ConfectionerySweets";

import ColdChainCrossDocking from "./pages/services/ColdChainCrossDocking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Portal Pages
import PortalLogin from "./pages/portal/Login";
import PortalDashboard from "./pages/portal/Dashboard";
import NewQuote from "./pages/portal/quotes/NewQuote";
import QuotesList from "./pages/portal/quotes/QuotesList";
import ShipmentsList from "./pages/portal/shipments/ShipmentsList";
import CreateShipment from "./pages/portal/shipments/CreateShipment";

import Reports from "./pages/portal/reports/Reports";
import Support from "./pages/portal/support/Support";
import Settings from "./pages/portal/settings/Settings";
import Billing from "./pages/portal/billing/Billing";
import Inventory from "./pages/portal/inventory/Inventory";

// Admin Pages
import { AdminLayout } from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminWorkload from "./pages/admin/Workload";
import AdminShipments from "./pages/admin/Shipments";
import AdminPricing from "./pages/admin/Pricing";
import AdminAnalytics from "./pages/admin/Analytics";
import AdminCustomers from "./pages/admin/Customers";
import AdminCarriers from "./pages/admin/Carriers";
import AdminBilling from "./pages/admin/Billing";
import AdminUsers from "./pages/admin/Users";
import AdminAuditLogs from "./pages/admin/AuditLogs";
import AdminSettings from "./pages/admin/Settings";
import ColdChainGuide from "./pages/ColdChainGuide";
import DeliverySchedule from "./pages/DeliverySchedule";
import ColdStorageQuote from "./pages/quote/ColdStorageQuote";
import Consultation from "./pages/Consultation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cold-storage-warehousing" element={<ColdStorageWarehousing />} />
          <Route path="/services/temperature-controlled-warehousing" element={<TemperatureControlledWarehousing />} />
          <Route path="/services/last-mile-delivery" element={<LazyLastMileDelivery />} />
          
          {/* Solution Pages */}
          <Route path="/solutions/wine-spirits" element={<WineSpirits />} />
          <Route path="/solutions/specialty-cheese-dairy" element={<SpecialtyCheese />} />
          <Route path="/solutions/confectionery-sweets" element={<ConfectionerySweets />} />
          
          <Route path="/services/cold-chain-cross-docking" element={<ColdChainCrossDocking />} />
          <Route path="/cold-chain-guide" element={<ColdChainGuide />} />
          <Route path="/delivery-schedule" element={<DeliverySchedule />} />
          <Route path="/quote/cold-storage" element={<ColdStorageQuote />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Portal Routes */}
          <Route path="/portal/login" element={<PortalLogin />} />
          <Route path="/portal/dashboard" element={<PortalDashboard />} />
          <Route path="/portal/quotes/new" element={<NewQuote />} />
          <Route path="/portal/quotes" element={<QuotesList />} />
          <Route path="/portal/shipments" element={<ShipmentsList />} />
          <Route path="/portal/shipments/create" element={<CreateShipment />} />
          <Route path="/portal/reports" element={<Reports />} />
          <Route path="/portal/billing" element={<Billing />} />
          <Route path="/portal/inventory" element={<Inventory />} />
          <Route path="/portal/support" element={<Support />} />
          <Route path="/portal/settings" element={<Settings />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="workload" element={<AdminWorkload />} />
            <Route path="shipments" element={<AdminShipments />} />
            <Route path="pricing" element={<AdminPricing />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="carriers" element={<AdminCarriers />} />
            <Route path="billing" element={<AdminBilling />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="audit-logs" element={<AdminAuditLogs />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
