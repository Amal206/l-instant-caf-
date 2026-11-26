import Hero from '../components/Hero';
import SEO from '../components/SEO';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import EventsSection from '../sections/EventsSection';
import GallerySection from '../sections/GallerySection';

/**
 * Notre Univers : histoire, galerie, événements et localisation.
 */
export default function About() {
  return (
    <>
      <SEO
        path="/about"
        title="Notre Univers · L’instant Café Restaurant"
        description="Découvrez l’univers de L’instant à Sousse : notre histoire, notre galerie, nos événements et notre localisation à Khzama Est."
      />

      <Hero
        photo={33630389}
        alt="Terrasse de L’instant face à la mer au coucher du soleil"
        eyebrow="Notre univers"
        title="Notre Univers"
        subtitle="Un espace pensé comme une maison : lumière, saveurs et temps partagé."
        variant="compact"
      />

      <AboutSection variant="full" />
      <GallerySection />
      <EventsSection />
      <ContactSection />
    </>
  );
}
