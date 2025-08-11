
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Tracking from "./pages/Tracking";
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
import PortalTracking from "./pages/portal/tracking/PortalTracking";
import Reports from "./pages/portal/reports/Reports";
import Support from "./pages/portal/support/Support";
import Settings from "./pages/portal/settings/Settings";
import Billing from "./pages/portal/billing/Billing";
import Inventory from "./pages/portal/inventory/Inventory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Portal Routes */}
          <Route path="/portal/login" element={<PortalLogin />} />
          <Route path="/portal/dashboard" element={<PortalDashboard />} />
          <Route path="/portal/quotes/new" element={<NewQuote />} />
          <Route path="/portal/quotes" element={<QuotesList />} />
          <Route path="/portal/shipments" element={<ShipmentsList />} />
          <Route path="/portal/shipments/create" element={<CreateShipment />} />
          <Route path="/portal/tracking" element={<PortalTracking />} />
          <Route path="/portal/reports" element={<Reports />} />
          <Route path="/portal/billing" element={<Billing />} />
          <Route path="/portal/inventory" element={<Inventory />} />
          <Route path="/portal/support" element={<Support />} />
          <Route path="/portal/settings" element={<Settings />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
