import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Remonte en haut de page à chaque navigation.
 * Gère aussi les ancres (ex. /about#contact) en attendant que la section soit montée
 * (la transition de page peut retarder son apparition).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    const targetId = hash.slice(1);
    let attempts = 0;
    let timer;

    const scrollToTarget = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 30) {
        attempts += 1;
        timer = setTimeout(scrollToTarget, 60);
      }
    };

    scrollToTarget();
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
