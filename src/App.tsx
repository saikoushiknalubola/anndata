
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import CropAdvisor from "./pages/CropAdvisor";
import SoilScanner from "./pages/SoilScanner";
import Alerts from "./pages/Alerts";
import FarmerTips from "./pages/FarmerTips";
import WasteIdeas from "./pages/WasteIdeas";
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
          <Route path="/crop-advisor" element={<CropAdvisor />} />
          <Route path="/soil-scanner" element={<SoilScanner />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/farmer-tips" element={<FarmerTips />} />
          <Route path="/waste-ideas" element={<WasteIdeas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
