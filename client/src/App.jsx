import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import MissionVision from "./pages/MissionVision";
import Leadership from "./pages/Leadership";
import ContactLocations from "./pages/ContactLocations";
import InvestorOverview from "./pages/InvestorOverview";
import StockInformation from "./pages/StockInformation";
import EventsPresentations from "./pages/EventsPresentations";
import Reports from "./pages/Reports";
import ClientLogin from "./pages/ClientLogin";
import Careers from "./pages/Careers";
import Newsroom from "./pages/Newsroom";
import CorporateGovernance from "./pages/CorporateGovernance";
import AboutBlackmont from "./pages/AboutBlackmont";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-charcoal-950 text-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about/mission-vision" element={<MissionVision />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route
              path="/about/contacts-locations"
              element={<ContactLocations />}
            />
            <Route path="/about-blackmont" element={<AboutBlackmont />} />
            <Route
              path="/mission-vision"
              element={<Navigate to="/about/mission-vision" replace />}
            />
            <Route
              path="/leadership"
              element={<Navigate to="/about/leadership" replace />}
            />
            <Route
              path="/contacts-locations"
              element={<Navigate to="/about/contacts-locations" replace />}
            />
            <Route
              path="/investor-relations"
              element={<Navigate to="/investor-relations/overview" replace />}
            />
            <Route
              path="/investor-relations/overview"
              element={<InvestorOverview />}
            />
            <Route
              path="/investor-relations/stock-information"
              element={<StockInformation />}
            />
            <Route
              path="/investor-relations/events"
              element={<EventsPresentations />}
            />
            <Route
              path="/investor-relations/reports"
              element={<Reports />}
            />
            <Route path="/login" element={<ClientLogin />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/corporate-governance" element={<CorporateGovernance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
