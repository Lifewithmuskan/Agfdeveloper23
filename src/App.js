import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import NextGenNavbar from './components/NextGenNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectShowcase from './pages/Project';
import BrokerPortal from './pages/BrokerPortal';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Nextgen from './pages/Nextgen';
import Career from './pages/Career';
import BusinessSupport from './pages/BusinessSupport';
import Privacypolicy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';
import Termsconditions from './pages/Termsconditions';
import Comingsoon from './pages/Comingsoon';
import SRM from './pages/SMR';
import VedicVillage from './pages/Vedic village';
function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/Nextgen' ? <NextGenNavbar /> : <Navbar />}
      <Routes>
         <Route path="/termsconditions" element={<Termsconditions />} />
         <Route path="/comingsoon" element={<Comingsoon />} />
         <Route path="/vedicvillage" element={<VedicVillage />} />
         <Route path="/smr" element={<SRM />} />
         <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/nextgen" element={<Nextgen />} />
        <Route path="/project" element={<ProjectShowcase />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/broker-portal" element={<BrokerPortal />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/businessSupport" element={<BusinessSupport />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}