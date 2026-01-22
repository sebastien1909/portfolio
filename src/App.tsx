import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showAiPopup, setShowAiPopup] = useState(false);

  useEffect(() => {
    setShowAiPopup(true);
  }, []);

  return (
    <>
      {showAiPopup && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
          onClick={(e) => e.stopPropagation()}
        >
          <div 
            className="max-w-lg rounded-xl bg-white p-8 shadow-2xl ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800 max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-xl font-bold text-neutral-900 dark:text-white">
              Information importante
            </h2>
            <div className="mb-6 space-y-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              <p>Mon site Portfolio officiel étant actuellement en travaux, un site provisoire a été mis en place.</p>
              <p>Il est important de noter que ce site a été fait à l'aide en grande partie avec l'aide d'une IA (Lovable), et ne reflète donc pas mes compétences ainsi que mon univers graphique.</p>
              <p>Cependant, vous pourrez y trouver mes projets avec quelques informations dessus.</p>
              <p>Le site officiel arrivera quant à lui plus tard, représentant cette fois mes compétences actuelles ainsi que mon univers graphique.</p>
              <p className="text-xs italic text-neutral-500 dark:text-neutral-400">
                (génération de base par IA, puis faible personnalisation manuelle)
              </p>
            </div>
            <button
              onClick={() => setShowAiPopup(false)}
              className="w-full rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-all duration-200"
              type="button"
            >
              J’ai compris
            </button>
          </div>
        </div>
      )}

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/portfolio/">
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;