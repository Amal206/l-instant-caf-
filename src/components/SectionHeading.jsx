import ScrollReveal from './ScrollReveal';

/**
 * En-tête de section réutilisable : surtitre + titre, avec révélation au scroll.
 */
export default function SectionHeading({ eyebrow, title, align = 'left', id }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && (
        <ScrollReveal>
          <span className="eyebrow">{eyebrow}</span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.08}>
        <h2 className="section-heading__title" id={id}>
          {title}
        </h2>
      </ScrollReveal>
    </header>
  );
}
