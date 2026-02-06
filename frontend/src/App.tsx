import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Plan from "./pages/plan";
import Holiday from "./pages/holiday";
import TripResult from "./pages/TripResult";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          {/* Fixed Navbar */}
          <Navbar />

          {/* Page Content */}
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/holiday-packages" element={<Holiday />} />
              <Route path="/trip-result/:id" element={<TripResult />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
