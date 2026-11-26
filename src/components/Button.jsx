import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const VARIANT_CLASS = {
  primary: 'btn--primary',
  ghost: 'btn--ghost',
};

/**
 * Bouton polyvalent : lien interne (to), lien externe (href) ou bouton natif.
 * Passer icon={null} pour masquer l’icône.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  icon: Icon = ArrowUpRight,
  className = '',
  ...rest
}) {
  const classes = ['btn', VARIANT_CLASS[variant], className].filter(Boolean).join(' ');

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {Icon && (
        <span className="btn__icon" aria-hidden="true">
          <Icon size={14} strokeWidth={2} />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
