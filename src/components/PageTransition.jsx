import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: 'easeIn' } },
};

/**
 * Enveloppe animée de chaque page (entrée/sortie cinématique via AnimatePresence).
 */
export default function PageTransition({ children }) {
  return (
    <motion.div id="main" className="page" variants={variants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}
