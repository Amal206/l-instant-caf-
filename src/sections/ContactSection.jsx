import {
  Clock,
  Map as MapIcon,
  MapPin,
  Navigation,
  Phone,
} from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import {
  PHONE_LINK,
  ADDRESS_LINES,
  GOOGLE_MAPS_LINKS,
  MAP_EMBED_URL,
  OPENING_HOURS,
  PHONE_NUMBER,
  
} from '../data/siteConfig';

/**
 * Contact et localisation : carte Google Maps intégrée + actions d’itinéraire.
 */
export default function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <SectionHeading eyebrow="Contact & localisation" title="Venez nous rendre visite" />

          <ScrollReveal delay={0.15}>
            <ul className="contact__list">
              <li>
  <span className="contact__icon" aria-hidden="true">
    <Phone size={18} strokeWidth={1.6} />
  </span>
  <div>
    <strong>Téléphone</strong>
    <a href={PHONE_LINK}>{PHONE_NUMBER}</a>
  </div>
</li>
              <li>
                <span className="contact__icon" aria-hidden="true">
                  <MapPin size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <strong>Adresse</strong>
                  <span>{ADDRESS_LINES.join(', ')}</span>
                </div>
              </li>
              <li>
                <span className="contact__icon" aria-hidden="true">
                  <Clock size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <strong>Horaires</strong>
                  <span>{OPENING_HOURS}</span>
                </div>
              </li>
            </ul>

            <div className="contact__actions">
              <Button href={GOOGLE_MAPS_LINKS.directions} icon={Navigation}>
                Obtenir l’itinéraire
              </Button>
              <Button href={GOOGLE_MAPS_LINKS.place} variant="ghost" icon={MapIcon}>
                Nous trouver sur Google Maps
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="map-frame">
          <iframe
            className="map-frame__iframe"
            title="Emplacement de L’instant Café Restaurant sur Google Maps"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-frame__card" aria-hidden="true">
            <MapPin size={18} />
            <div>
              <strong>L’instant</strong>
              <span>Khzama Est, Sousse</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
