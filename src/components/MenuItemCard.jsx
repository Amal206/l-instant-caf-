import { formatPrice } from '../utils/formatPrice';

/**
 * Ligne de carte : nom, pointillés, prix, description et étiquettes.
 */
export default function MenuItemCard({ item }) {
  return (
    <article className="menu-item">
      <div className="menu-item__head">
        <h3 className="menu-item__name">{item.name}</h3>
        <span className="menu-item__leader" aria-hidden="true" />
        <span className="menu-item__price">{formatPrice(item.price)}</span>
      </div>
      <p className="menu-item__desc">{item.description}</p>
      {item.tags?.length > 0 && (
        <ul className="menu-item__tags" aria-label="Caractéristiques">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
