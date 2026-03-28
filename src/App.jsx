import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import LeadershipTraining from "./pages/approach/LeadershipTraining";
import OrgDevelopment from "./pages/approach/OrgDevelopment";
import HRPractices from "./pages/approach/HRPractices";
import OpExcellence from "./pages/approach/OpExcellence";
import ProcessAutomation from "./pages/approach/ProcessAutomation";
import Team from "./pages/Team";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/shared/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/approach/leadership-training" element={<LeadershipTraining />} />
        <Route path="/approach/organizational-development" element={<OrgDevelopment />} />
        <Route path="/approach/hr-practices" element={<HRPractices />} />
        <Route path="/approach/operational-excellence" element={<OpExcellence />} />
        <Route path="/approach/process-automation" element={<ProcessAutomation />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
