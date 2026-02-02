import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import About from "./pages/About";
import Passes from "./pages/Passes";
import Gallery from "./pages/Gallery";
import Venue from "./pages/Venue";
import TextAnimationDemo from "./pages/TextAnimationDemo";
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

          {/* Routes with Spiral Animation Background */}
          <Route>
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/passes" element={<Passes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/text-animation-demo" element={<TextAnimationDemo />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
