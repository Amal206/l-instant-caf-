import { Fragment, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Bannière immersive avec parallaxe au scroll et titre animé mot par mot.
 * variant="full" (accueil) ou "compact" (pages secondaires).
 */
export default function Hero({ photo, alt, eyebrow, title, subtitle, variant = 'full', children }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '22%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '-25%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const words = title.split(' ');

  return (
    <section ref={sectionRef} className={`hero hero--${variant}`}>
      <motion.div className="hero__media" style={{ y: mediaY }}>
        <OptimizedImage photo={photo} alt={alt} priority sizes="100vw" className="hero__img" />
      </motion.div>
      <div className="hero__overlay" aria-hidden="true" />

      <motion.div className="hero__content container" style={{ y: contentY, opacity: contentOpacity }}>
        {eyebrow && (
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
          >
            {eyebrow}
          </motion.p>
        )}

        <h1 className="hero__title">
          {words.map((word, index) => (
            <Fragment key={`${word}-${index}`}>
              <span className="hero__word-mask">
                <motion.span
                  className="hero__word"
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.1, delay: 0.3 + index * 0.1, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>{' '}
            </Fragment>
          ))}
        </h1>

        {subtitle && (
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9, ease: EASE }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
