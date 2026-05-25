import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';
import WhatsAppFloat from './components/WhatsAppFloat';
import useScrollToTop from './hooks/useScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import RitualOilsPage from './pages/RitualOilsPage';
import SpellServicesPage from './pages/SpellServicesPage';
import AboutPage from './pages/AboutPage';

function App() {
  const location = useLocation();
  useScrollToTop();

  return (
    <div className="app-shell">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.main
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <HomePage />
              </motion.main>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ritual-oils" element={<RitualOilsPage />} />
          <Route path="/spells" element={<SpellServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ScrollTopButton />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
