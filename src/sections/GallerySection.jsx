import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import { galleryItems } from '../data/galleryData';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Galerie en grille asymétrique avec visionneuse plein écran (clavier et souris).
 */
export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;
  const total = galleryItems.length;

  const showNext = () => setActiveIndex((index) => (index + 1) % total);
  const showPrevious = () => setActiveIndex((index) => (index - 1 + total) % total);
  const close = () => setActiveIndex(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % total);
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + total) % total);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, total]);

  const activeItem = isOpen ? galleryItems[activeIndex] : null;

  return (
    <section className="section gallery" id="galerie">
      <div className="container">
        <SectionHeading eyebrow="Galerie" title="Un univers à regarder" align="center" />

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={(index % 3) * 0.08}
              className={`gallery__item gallery__item--${item.size}`}
            >
              <button
                type="button"
                className="gallery__button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Agrandir la photo : ${item.alt}`}
              >
                <OptimizedImage
                  photo={item.photo}
                  alt={item.alt}
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <span className="gallery__caption">{item.alt}</span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {activeItem && (
            <motion.div
              key="lightbox"
              className="lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Visionneuse de la galerie"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.figure
                key={activeItem.id}
                className="lightbox__figure"
                onClick={(event) => event.stopPropagation()}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <OptimizedImage
                  photo={activeItem.photo}
                  alt={activeItem.alt}
                  sizes="90vw"
                  className="lightbox__img"
                />
                <figcaption>{activeItem.alt}</figcaption>
              </motion.figure>

              <button type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label="Fermer">
                <X size={20} />
              </button>
              <button
                type="button"
                className="lightbox__btn lightbox__prev"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Photo précédente"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                className="lightbox__btn lightbox__next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Photo suivante"
              >
                <ChevronRight size={22} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
}
