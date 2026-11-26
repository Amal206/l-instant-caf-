import { Coffee, Flame, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import OptimizedImage from '../components/OptimizedImage';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';

const PILLARS = [
  {
    icon: Coffee,
    title: 'Cafés d’exception',
    text: 'Des cafés soigneusement sélectionnés, du café turc traditionnel aux créations signature.',
  },
  {
    icon: Flame,
    title: 'Cuisine généreuse',
    text: 'Des saveurs méditerranéennes et tunisiennes, cuisinées chaque jour avec des produits frais.',
  },
  {
    icon: Sparkles,
    title: 'Ambiance & accueil',
    text: 'Un lieu pensé pour se poser, partager et prendre le temps, du matin jusqu’au soir.',
  },
];

/**
 * Présentation de la maison.
 * variant="teaser" (accueil) ou "full" (page Notre Univers).
 */
export default function AboutSection({ variant = 'teaser' }) {
  const isFull = variant === 'full';

  return (
    <section className="section about" id="histoire">
      <div className="container about__grid">
        <ScrollReveal className="about__media">
          <div className="media-frame">
            <OptimizedImage
              photo={isFull ? 40441642 : 776538}
              alt="Intérieur chaleureux de L’instant, éclairé par des suspensions"
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </ScrollReveal>

        <div className="about__content">
          <SectionHeading
            eyebrow="Notre histoire"
            title={isFull ? 'Un lieu pensé pour l’instant présent' : 'Un café où le temps ralentit'}
          />

          <ScrollReveal delay={0.1}>
            <p className="lead">
              L’instant est né d’une idée simple : offrir un moment de répit où l’on prend enfin le temps de savourer.
            </p>
          </ScrollReveal>

          {isFull && (
            <ScrollReveal delay={0.15}>
              <p className="about__text">
                Entre la lumière chaude de la salle et l’air marin de Khzama, L’instant réunit une carte généreuse,
                des cafés soigneusement préparés et une équipe attentive. Qu’il s’agisse d’un petit-déjeuner,
                d’un déjeuner entre amis ou d’une soirée en terrasse, chaque visite se veut singulière.
              </p>
            </ScrollReveal>
          )}

          <ul className="pillars">
            {PILLARS.map(({ icon: Icon, title, text }, index) => (
              <ScrollReveal key={title} delay={0.1 + index * 0.08} className="pillar">
                <span className="pillar__icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </ul>

          {!isFull && (
            <ScrollReveal delay={0.3}>
              <Button to="/about">Découvrir notre univers</Button>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
