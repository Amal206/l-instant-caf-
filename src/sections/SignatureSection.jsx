import FeatureCard from '../components/FeatureCard';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import { featuredItems } from '../data/menuData';
import { formatPrice } from '../utils/formatPrice';

/**
 * Sélection de plats et de boissons mis en avant depuis la carte.
 */
export default function SignatureSection() {
  return (
    <section className="section signature" id="signatures">
      <div className="container">
        <SectionHeading eyebrow="Signatures" title="Nos incontournables" />

        <div className="signature__grid">
          {featuredItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.12}>
              <FeatureCard
                photo={item.photo}
                alt={item.name}
                title={item.name}
                description={item.description}
                sizes="(max-width: 900px) 100vw, 33vw"
                meta={<span>{formatPrice(item.price)}</span>}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
