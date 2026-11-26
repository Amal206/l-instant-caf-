import { Helmet } from 'react-helmet-async';
import { getPhotoUrl } from '../utils/imageUtils';

const SHARE_IMAGE_ID = 34206671;

/**
 * Métadonnées SEO et partage (Open Graph / Twitter) par page.
 * L’URL canonique utilise VITE_SITE_URL si défini, sinon l’origine courante.
 */
export default function SEO({ title, description, path = '/' }) {
  const origin = import.meta.env.VITE_SITE_URL || window.location.origin;
  const url = `${origin}${path}`;
  const image = getPhotoUrl(SHARE_IMAGE_ID, 1200);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="L’instant Café Restaurant" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
