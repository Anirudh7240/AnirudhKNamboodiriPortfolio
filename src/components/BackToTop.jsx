import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-8 right-8 z-40 flex items-center gap-2 px-4 py-3 border border-hairline bg-[#121212]/90 backdrop-blur-md hover:border-[#c85a32] text-xs font-mono-editorial text-[#f4f1ea] hover:text-[#c85a32] transition-colors rounded-sm shadow-2xl group"
          aria-label="Scroll back to top"
          data-cursor="TOP"
        >
          <span className="tracking-widest uppercase text-[11px] hidden sm:inline-block">TOP</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-[#c85a32]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
