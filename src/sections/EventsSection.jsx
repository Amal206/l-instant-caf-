import { Clock } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import { events } from '../data/eventsData';

/**
 * Rendez-vous récurrents de la maison (jazz, brunch, ateliers).
 */
export default function EventsSection() {
  return (
    <section className="section events" id="evenements">
      <div className="container">
        <SectionHeading eyebrow="Événements" title="Vivre l’instant, à plusieurs" />

        <div className="events__grid">
          {events.map((event, index) => (
            <ScrollReveal key={event.id} delay={index * 0.1}>
              <FeatureCard
                photo={event.photo}
                alt={event.title}
                title={event.title}
                description={event.description}
                sizes="(max-width: 900px) 100vw, 33vw"
                meta={
                  <>
                    <Clock size={14} aria-hidden="true" />
                    <span>{event.schedule}</span>
                  </>
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
