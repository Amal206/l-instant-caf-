import { useEffect, useState } from 'react';

/**
 * Retourne l’identifiant de la section actuellement visible à l’écran.
 * Utilisé pour synchroniser la barre de catégories de la carte avec le scroll.
 */
export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);
  // Clé stable pour éviter de relancer l’observateur à chaque rendu.
  const idsKey = ids.join('|');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey]);

  return activeId;
}
