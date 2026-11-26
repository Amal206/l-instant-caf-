/**
 * Logo L’instant recréé en SVG + typographie (aucun fichier image requis).
 * variant="compact" : pour la navigation · variant="full" : pour le pied de page.
 */
export default function Logo({ variant = 'compact', className = '' }) {
  const isFull = variant === 'full';

  return (
    <span
      className={`logo logo--${variant} ${className}`.trim()}
      role="img"
      aria-label="L’instant Café Restaurant"
    >
      <svg className="logo__mark" viewBox="0 0 48 64" aria-hidden="true" focusable="false">
        <path className="logo__stem" d="M12 8 V58" />
        <path className="logo__foot" d="M3 52 H35" />
        <path className="logo__flame" d="M31 4 C37 12 39 19 33.5 27 C30.5 21 27.5 17.5 26.5 12 C25.8 8.5 27.6 6 31 4 Z" />
      </svg>

      <span className="logo__text">
        <span className="logo__word">instant</span>
        {isFull && <span className="logo__sub">Café · Restaurant</span>}
      </span>

      {isFull && <span className="logo__script">Vivez L’instant</span>}
    </span>
  );
}
