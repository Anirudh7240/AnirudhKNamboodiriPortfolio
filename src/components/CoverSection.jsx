import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { magazineIssue } from '../data/magazineData';

export default function CoverSection() {
  const { scrollY } = useScroll();

  // Scroll animations: split text & fade out smoothly like opening a magazine cover
  const topTextY = useTransform(scrollY, [0, 500], [0, -120]);
  const bottomTextY = useTransform(scrollY, [0, 500], [0, 120]);
  const coverOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const coverScale = useTransform(scrollY, [0, 500], [1, 0.96]);

  const scrollToFirstProject = () => {
    const el = document.getElementById('civicconnect');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cover" className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 lg:px-12 overflow-hidden border-b border-hairline">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-40" />

      {/* Top Issue Bar */}
      <motion.div
        style={{ opacity: coverOpacity }}
        className="relative z-10 flex flex-wrap items-center justify-between border-b border-hairline pb-6 text-xs font-mono-editorial text-[#8e8c87] uppercase tracking-widest gap-4"
      >
        <div className="flex items-center gap-4">
          <span className="text-[#c85a32] font-semibold">{magazineIssue.issueNumber}</span>
          <span className="hidden sm:inline-block">/</span>
          <span>{magazineIssue.volume}</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <span>{magazineIssue.editorialTagline}</span>
        </div>

        <div className="flex items-center gap-4">
          <span>{magazineIssue.location}</span>
        </div>
      </motion.div>

      {/* Hero Name Typography - The Centerpiece */}
      <motion.div
        style={{ opacity: coverOpacity, scale: coverScale }}
        className="relative z-10 my-auto py-12 flex flex-col items-start justify-center"
      >
        {/* Issue Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono-editorial text-[10px] sm:text-xs md:text-sm text-[#c85a32] tracking-widest font-semibold uppercase mb-3 sm:mb-4 border border-[#c85a32]/30 px-2.5 py-1 rounded-full"
        >
          CONTEMPORARY DIGITAL PUBLICATION
        </motion.span>

        {/* ANIRUDH (Top Part) */}
        <motion.div style={{ y: topTextY }} className="w-full max-w-full overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[13vw] sm:text-[10.5vw] lg:text-[9.2vw] font-extrabold leading-[0.88] tracking-tight text-[#f4f1ea] uppercase select-none whitespace-nowrap"
          >
            ANIRUDH
          </motion.h1>
        </motion.div>

        {/* K. NAMBOODIRI (Bottom Part) */}
        <motion.div style={{ y: bottomTextY }} className="w-full max-w-full overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-display text-[9.5vw] sm:text-[7.8vw] lg:text-[6.8vw] font-extrabold leading-[0.88] tracking-tight text-[#f4f1ea] uppercase select-none flex flex-wrap items-baseline gap-2 sm:gap-6 whitespace-nowrap"
          >
            <span className="font-serif-editorial italic font-normal text-[#8e8c87]">K.</span>
            <span>NAMBOODIRI</span>
          </motion.h1>
        </motion.div>

        {/* Subtitle Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-6 text-xs sm:text-sm md:text-base text-[#8e8c87] font-mono-editorial tracking-widest uppercase"
        >
          <span className="text-[#f4f1ea] font-bold">PYTHON FULL STACK DEVELOPER</span>
          <span className="hidden sm:inline-block">|</span>
          <span className="text-[#c85a32]">BCA GRADUATE 2026</span>
        </motion.div>
      </motion.div>

      {/* Bottom Cover Metadata Grid */}
      <motion.div
        style={{ opacity: coverOpacity }}
        className="relative z-10 pt-6 sm:pt-8 border-t border-hairline grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-[10px] sm:text-xs font-mono-editorial"
      >
        {magazineIssue.coverMetadata.map((meta, i) => (
          <div key={i} className="space-y-0.5 sm:space-y-1">
            <p className="text-[#8e8c87] uppercase text-[9px] sm:text-[10px] tracking-widest">{meta.label}</p>
            <p className="text-[#f4f1ea] font-semibold uppercase truncate">{meta.val}</p>
          </div>
        ))}
      </motion.div>

      {/* Scroll Down Cue */}
      <motion.button
        onClick={scrollToFirstProject}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 right-6 lg:right-12 z-20 flex items-center gap-2 text-xs font-mono-editorial text-[#8e8c87] hover:text-[#c85a32] transition-colors"
      >
        <span className="tracking-widest uppercase hidden sm:inline-block">OPEN ISSUE</span>
        <ArrowDown className="w-4 h-4 text-[#c85a32]" />
      </motion.button>
    </section>
  );
}
