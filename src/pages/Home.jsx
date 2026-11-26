import Button from '../components/Button';
import CtaBand from '../components/CtaBand';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import AboutSection from '../sections/AboutSection';
import EventsSection from '../sections/EventsSection';
import SignatureSection from '../sections/SignatureSection';

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        title="L’instant · Café & Restaurant à Sousse"
        description="L’instant, café-restaurant à Khzama Est, Sousse. Cafés d’exception, cuisine méditerranéenne et carte digitale."
      />

      <Hero
        photo={34206671}
        alt="Café chaleureux baigné de la lumière du coucher du soleil"
        eyebrow="Café · Restaurant · Sousse"
        title="Vivez l’instant"
        subtitle="Cafés d’exception, cuisine méditerranéenne et une ambiance chaleureuse, au cœur de Khzama Est."
        variant="full"
      >
        <Button to="/menu">Découvrir la carte</Button>
        <Button to="/about" variant="ghost">
          Notre univers
        </Button>
      </Hero>

      <AboutSection variant="teaser" />
      <SignatureSection />
      <EventsSection />

      <CtaBand
        eyebrow="Carte digitale"
        title={
          <>
            Une envie de café ? <em>La carte vous attend.</em>
          </>
        }
      >
        <Button to="/menu">Ouvrir la carte</Button>
      </CtaBand>
    </>
  );
}
