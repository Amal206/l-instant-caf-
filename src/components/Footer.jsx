import { Link } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';
import Logo from './Logo';
import {
  ADDRESS_LINES,
  GOOGLE_MAPS_LINKS,
  NAV_LINKS,
  OPENING_HOURS,
} from '../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="full" />
          <p className="footer__about">
            Un café-restaurant à Sousse où chaque visite devient un instant à savourer.
          </p>
        </div>

        <div className="footer__col">
          <h2 className="footer__title">Visitez-nous</h2>
          <p className="footer__item">
            <MapPin size={16} aria-hidden="true" />
            <span>{ADDRESS_LINES.join(', ')}</span>
          </p>
          <p className="footer__item">
            <Clock size={16} aria-hidden="true" />
            <span>{OPENING_HOURS}</span>
          </p>
          <a
            href={GOOGLE_MAPS_LINKS.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Obtenir l’itinéraire
          </a>
        </div>

        <nav className="footer__col" aria-label="Liens du pied de page">
          <h2 className="footer__title">Explorer</h2>
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="footer__link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>© {currentYear} L’instant · Café – Restaurant · Sousse, Tunisie</p>
        <p>Vivez L’instant</p>
      </div>
    </footer>
  );
}
