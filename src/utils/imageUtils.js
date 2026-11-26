const PEXELS_CDN = 'https://images.pexels.com/photos';

/**
 * URL optimisée du CDN pour un identifiant de photo et une largeur cible.
 */
export const getPhotoUrl = (id, width = 1200) =>
  `${PEXELS_CDN}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

/**
 * srcset responsive : les mobiles téléchargent des fichiers plus légers.
 */
export const getPhotoSrcSet = (id) =>
  [480, 800, 1200, 1800].map((width) => `${getPhotoUrl(id, width)} ${width}w`).join(', ');
