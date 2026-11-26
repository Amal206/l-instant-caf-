import CtaBand from '../components/CtaBand';
import Hero from '../components/Hero';
import MenuItemCard from '../components/MenuItemCard';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import Button from '../components/Button';
import useActiveSection from '../hooks/useActiveSection';
import { menuCategories } from '../data/menuData';
import { GOOGLE_MAPS_LINKS } from '../data/siteConfig';

/**
 * Carte digitale. Page autonome, accessible directement via /menu (QR code).
 */
export default function Menu() {
  const categoryIds = menuCategories.map((category) => category.id);
  const activeId = useActiveSection(categoryIds);

  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <SEO
        path="/menu"
        title="Notre Carte · L’instant Sousse"
        description="Découvrez la carte de L’instant : cafés, petits-déjeuners, mezze, plats du chef et desserts à Khzama Est, Sousse."
      />

      <Hero
        photo={5083910}
        alt="Tables de mezze méditerranéens dressées pour le partage"
        eyebrow="Carte digitale"
        title="Notre Carte"
        subtitle="Cafés, petits-déjeuners, mezze et plats du chef, à découvrir sur place."
        variant="compact"
      />

      <nav className="menu-tabs" aria-label="Catégories de la carte">
        <div className="container menu-tabs__inner">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`menu-tabs__btn${activeId === category.id ? ' is-active' : ''}`}
              aria-current={activeId === category.id ? 'true' : undefined}
              onClick={() => jumpTo(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="container menu">
        {menuCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className="menu-category"
            aria-labelledby={`${category.id}-title`}
          >
            <ScrollReveal>
              <header className="menu-category__header">
                <span className="menu-category__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 id={`${category.id}-title`}>{category.label}</h2>
                  <p>{category.description}</p>
                </div>
              </header>
            </ScrollReveal>

            <div className="menu-category__items">
              {category.items.map((item, itemIndex) => (
                <ScrollReveal key={item.id} delay={(itemIndex % 2) * 0.08}>
                  <MenuItemCard item={item} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      <CtaBand
        eyebrow="Besoin d’aide ?"
        title={
          <>
            Une question sur un plat ? <em>Notre équipe vous répond.</em>
          </>
        }
      >
        <Button to="/about#contact" variant="ghost">
          Nous trouver
        </Button>
        <Button href={GOOGLE_MAPS_LINKS.directions}>Obtenir l’itinéraire</Button>
      </CtaBand>
    </>
  );
}
