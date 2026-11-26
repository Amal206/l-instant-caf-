import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Révèle son contenu en fondu + glissement lorsqu’il entre dans le viewport.
 * Une seule fois par défaut, pour rester léger et fluide.
 */
export default function ScrollReveal({ children, delay = 0, y = 36, className = '' }) {
  return (
    <motion.div
      className={className || undefined}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
