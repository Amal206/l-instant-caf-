import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';

/**
 * Racine de l’application : navigation, transitions de pages et routes.
 * Trois pages distinctes : / (Accueil), /menu (Notre Carte), /about (Notre Univers).
 */
export default function App() {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>

      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>

      <Footer />
    </MotionConfig>
  );
}
