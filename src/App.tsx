import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AbcTechItsm from "./pages/AbcTechItsm";
import RiceLeafDetection from "./pages/RiceLeafDetection";
import NotFound from "./pages/NotFound";

// ✅ ADD THIS
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* ✅ CHATBOT (GLOBAL UI) */}
      <Chatbot />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/abc-tech-itsm" element={<AbcTechItsm />} />
          <Route path="/rice-leaf-detection" element={<RiceLeafDetection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;