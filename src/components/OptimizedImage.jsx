import { getPhotoSrcSet, getPhotoUrl } from '../utils/imageUtils';

/**
 * Image optimisée : srcset responsive, chargement différé (lazy) et décodage asynchrone.
 * priority = true réserve le chargement prioritaire aux images au-dessus de la ligne de flottaison.
 */
export default function OptimizedImage({
  photo,
  alt,
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  className = '',
}) {
  return (
    <img
      src={getPhotoUrl(photo, 800)}
      srcSet={getPhotoSrcSet(photo)}
      sizes={sizes}
      alt={alt}
      className={`media-img ${className}`.trim()}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
}
