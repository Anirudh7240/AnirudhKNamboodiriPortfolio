import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { magazineIssue } from '../data/magazineData';

export default function MagazineNav({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'cover', num: '00', title: 'COVER — ISSUE 01' },
    ...magazineIssue.projects.map((p) => ({
      id: p.id,
      num: p.number,
      title: p.title
    })),
    { id: 'about', num: '05', title: 'ABOUT THE BUILDER' },
    { id: 'skills', num: '06', title: 'TECHNICAL INDEX' },
    { id: 'contact', num: '07', title: 'END / CONTACT' }
  ];

  return (
    <>
      {/* Top Editorial Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-hairline py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Top Left Title */}
          <button
            onClick={() => scrollToSection('cover')}
            className="text-left group flex items-center gap-3"
          >
            <span className="font-display font-extrabold text-sm md:text-base tracking-wider uppercase text-[#f4f1ea] group-hover:text-[#c85a32] transition-colors">
              ANIRUDH K. NAMBOODIRI
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono-editorial text-[#8e8c87] border border-hairline px-2 py-0.5 rounded-full">
              KERALA, IN
            </span>
          </button>

          {/* Top Right Issue & Drawer Toggle */}
          <div className="flex items-center gap-6">
            <span className="hidden md:block font-mono-editorial text-xs text-[#8e8c87] tracking-widest uppercase">
              ISSUE 01 / 2026
            </span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 px-4 py-2 border border-hairline bg-[#121212]/80 hover:border-[#c85a32] transition-colors text-xs font-mono-editorial tracking-widest text-[#f4f1ea] uppercase group"
              aria-label="Open Magazine Index"
            >
              <span>{isOpen ? 'CLOSE' : 'INDEX'}</span>
              {isOpen ? (
                <X className="w-3.5 h-3.5 text-[#c85a32]" />
              ) : (
                <Menu className="w-3.5 h-3.5 group-hover:text-[#c85a32] transition-colors" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Magazine Index Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl pt-28 pb-12 px-6 lg:px-20 overflow-y-auto flex flex-col justify-between"
          >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto">
              {/* Left Column: Metadata */}
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-hairline pb-8 lg:pb-0 lg:pr-12">
                <p className="font-mono-editorial text-xs text-[#c85a32] tracking-widest uppercase mb-4">
                  ISSUE 01 CONTENTS
                </p>
                <h2 className="font-display text-3xl font-extrabold text-[#f4f1ea] leading-tight uppercase mb-6">
                  ANIRUDH K. NAMBOODIRI
                </h2>
                <p className="text-xs text-[#8e8c87] leading-relaxed mb-6 font-serif-editorial text-base italic">
                  "A contemporary digital publication documenting code, design, and product engineering."
                </p>

                <div className="space-y-3 font-mono-editorial text-[11px] text-[#8e8c87]">
                  <div className="flex justify-between border-b border-hairline/50 pb-2">
                    <span>PUBLICATION</span>
                    <span className="text-[#f4f1ea]">DIGITAL EDITION 01</span>
                  </div>
                  <div className="flex justify-between border-b border-hairline/50 pb-2">
                    <span>SECTIONS</span>
                    <span className="text-[#f4f1ea]">04 ARTICLES + ARCHIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>YEAR</span>
                    <span className="text-[#c85a32]">2026</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Index List */}
              <div className="lg:col-span-8 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ x: 10 }}
                    className={`w-full text-left py-3 px-4 border-b border-hairline flex items-center justify-between group transition-colors ${
                      activeSection === item.id ? 'bg-[#161616]' : 'hover:bg-[#121212]'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-mono-editorial text-xs text-[#c85a32] font-semibold tracking-wider">
                        {item.num}
                      </span>
                      <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#f4f1ea] group-hover:text-[#c85a32] transition-colors uppercase">
                        {item.title}
                      </span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#8e8c87] group-hover:text-[#c85a32] transition-colors" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Bottom Footer inside drawer */}
            <div className="max-w-6xl mx-auto w-full pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between text-xs font-mono-editorial text-[#8e8c87] gap-4">
              <span>ANIRUDH K. NAMBOODIRI © 2026</span>
              <div className="flex gap-6">
                <a
                  href="https://github.com/Anirudh7240"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#f4f1ea]"
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/anirudh-k-namboodiri-8a881a302"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#f4f1ea]"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
