import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { NAV_LINKS } from '../data/siteConfig';

const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloque le scroll de la page quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__brand" onClick={closeMenu} aria-label="L’instant, retour à l’accueil">
            <Logo variant="compact" />
          </Link>

          <nav className="navbar__links" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className="navbar__link">
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="navbar__indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__actions">
            <Button to="/about#contact" variant="ghost" icon={null} className="navbar__cta">
              Nous trouver
            </Button>
            <button
              type="button"
              className="navbar__toggle"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            className="navbar__mobile"
            aria-label="Navigation mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.6, ease: EASE }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className="navbar__mobile-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <Button to="/about#contact" onClick={closeMenu} className="navbar__mobile-cta">
              Nous trouver
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
