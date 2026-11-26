import ScrollReveal from './ScrollReveal';

/**
 * Bandeau d’appel à l’action en fin de page.
 */
export default function CtaBand({ eyebrow, title, children }) {
  return (
    <section className="cta-band">
      <ScrollReveal className="container cta-band__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="cta-band__title">{title}</h2>
        {children && <div className="cta-band__actions">{children}</div>}
      </ScrollReveal>
    </section>
  );
}
