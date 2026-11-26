/**
 * Configuration centrale du site : identité, adresse, navigation et liens Google Maps.
 * Aucune coordonnée GPS n’est utilisée : l’adresse officielle sert de requête.
 */
export const SITE_NAME = 'L’instant';
export const PHONE_NUMBER = '+216 50 450 780';
export const PHONE_LINK = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;
export const ADDRESS = 'Rue Colonel Garnaoui, Khzama Est, Sousse, Tunisia';
export const ADDRESS_LINES = ['Rue Colonel Garnaoui', 'Khzama Est, Sousse', 'Tunisie'];

export const OPENING_HOURS = 'Tous les jours · 08h00 – 23h30';

const encodedAddress = encodeURIComponent(ADDRESS);

/**
 * Si une clé Google Maps Embed API est fournie (VITE_GOOGLE_MAPS_API_KEY),
 * on utilise l’API officielle « place » ; sinon l’embed public sans clé est utilisé.
 */
const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const MAP_EMBED_URL = mapsApiKey
  ? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${encodedAddress}&zoom=16`
  : `https://www.google.com/maps?q=${encodedAddress}&z=16&output=embed`;

export const GOOGLE_MAPS_LINKS = {
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
  place: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
};

export const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/menu', label: 'Notre Carte' },
  { to: '/about', label: 'Notre Univers' },
];
