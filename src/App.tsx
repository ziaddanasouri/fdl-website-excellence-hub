
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
import CustomerPortal from "./pages/CustomerPortal";
import EcommerceSolution from "./pages/solutions/EcommerceSolution";
import ManufacturingSolution from "./pages/solutions/ManufacturingSolution";
import HealthcareSolution from "./pages/solutions/HealthcareSolution";
import TechnologySolution from "./pages/solutions/TechnologySolution";
import AutomotiveSolution from "./pages/solutions/AutomotiveSolution";
import FoodBeverageSolution from "./pages/solutions/FoodBeverageSolution";
import SuccessStories from "./pages/SuccessStories";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import SecurityPolicy from "./pages/legal/SecurityPolicy";
import Compliance from "./pages/legal/Compliance";
import CookiePolicy from "./pages/legal/CookiePolicy";
import NotFound from "./pages/NotFound";

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
          <Route path="/solutions/ecommerce" element={<EcommerceSolution />} />
          <Route path="/solutions/manufacturing" element={<ManufacturingSolution />} />
          <Route path="/solutions/healthcare" element={<HealthcareSolution />} />
          <Route path="/solutions/technology" element={<TechnologySolution />} />
          <Route path="/solutions/automotive" element={<AutomotiveSolution />} />
          <Route path="/solutions/food-beverage" element={<FoodBeverageSolution />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/portal" element={<CustomerPortal />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/security-policy" element={<SecurityPolicy />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
