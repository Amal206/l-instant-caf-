import OptimizedImage from './OptimizedImage';
import TiltCard from './TiltCard';

/**
 * Carte éditoriale (plat signature, événement…) avec image, méta-donnée et texte.
 */
export default function FeatureCard({ photo, alt, title, description, meta, sizes }) {
  return (
    <TiltCard className="feature-card">
      <div className="feature-card__media">
        <OptimizedImage photo={photo} alt={alt} sizes={sizes} />
      </div>
      <div className="feature-card__body">
        {meta && <div className="feature-card__meta">{meta}</div>}
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__text">{description}</p>
      </div>
    </TiltCard>
  );
}
