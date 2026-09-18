import React from 'react';
import { motion } from 'framer-motion';
import { magazineIssue } from '../data/magazineData';

export default function AboutSection() {
  const { about } = magazineIssue;

  return (
    <section id="about" className="py-28 px-6 lg:px-12 border-b border-hairline relative">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-hairline pb-8 gap-4">
          <div>
            <span className="font-mono-editorial text-xs text-[#c85a32] tracking-widest uppercase">
              SECTION 05 / 07
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#f4f1ea] uppercase mt-2">
              {about.title}
            </h2>
          </div>
          <span className="font-serif-editorial text-2xl text-[#8e8c87] italic">
            "Editorial Profile"
          </span>
        </div>

        {/* Profile Spread Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Portrait Photo (Lg col span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative group border border-hairline bg-[#121212] overflow-hidden rounded-sm"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={about.portrait}
                alt="Anirudh K. Namboodiri Portrait"
                className="w-full h-full object-cover grayscale contrast-125 transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-4 border-t border-hairline bg-[#161616] flex items-center justify-between text-xs font-mono-editorial">
              <span className="text-[#f4f1ea] font-semibold">{about.name}</span>
              <span className="text-[#c85a32]">KERALA, INDIA</span>
            </div>
          </motion.div>

          {/* Right Editorial Text Column (Lg col span 7) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Big Headline */}
            <div>
              <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-[#f4f1ea] leading-tight uppercase">
                ANIRUDH K. NAMBOODIRI
              </h3>
              <p className="font-serif-editorial text-2xl text-[#8e8c87] italic mt-2">
                {about.subtitle}
              </p>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-[#f4f1ea]/90 leading-relaxed font-sans">
              {about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* 3 Core Principles */}
            <div className="pt-8 border-t border-hairline space-y-6">
              <h4 className="font-mono-editorial text-xs text-[#c85a32] tracking-widest uppercase">
                ENGINEERING & DESIGN PRINCIPLES
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {about.principles.map((p, idx) => (
                  <div key={idx} className="p-5 border border-hairline bg-[#121212]/50 space-y-2">
                    <span className="font-mono-editorial text-xs text-[#c85a32] font-bold">
                      {p.num}
                    </span>
                    <h5 className="font-display text-xs font-bold text-[#f4f1ea] uppercase tracking-wider">
                      {p.title}
                    </h5>
                    <p className="text-xs text-[#8e8c87] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
