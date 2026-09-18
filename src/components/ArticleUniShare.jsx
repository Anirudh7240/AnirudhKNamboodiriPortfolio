import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Download, Star, Share2 } from 'lucide-react';
import { magazineIssue } from '../data/magazineData';

export default function ArticleUniShare() {
  const project = magazineIssue.projects[2];

  return (
    <section id="unishare" className="py-24 px-6 lg:px-12 border-b border-hairline relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Article Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-xs font-mono-editorial text-[#c85a32] tracking-widest uppercase">
            <span>ARTICLE {project.number} / 04</span>
            <span>—</span>
            <span>{project.category}</span>
            <span>—</span>
            <span>{project.year}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#f4f1ea] uppercase">
                {project.title}
              </h2>
              <p className="font-serif-editorial text-xl sm:text-3xl lg:text-4xl text-[#8e8c87] italic mt-2">
                {project.tagline}
              </p>
            </div>

            <div className="lg:col-span-4 border-l border-hairline pl-6 py-2">
              <p className="text-sm text-[#f4f1ea] leading-relaxed font-sans font-medium">
                "{project.headline}"
              </p>
            </div>
          </div>
        </div>



        {/* Large Screenshot Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group border border-hairline bg-[#121212] overflow-hidden rounded-sm"
          data-cursor="EXPLORE"
        >
          <div className="bg-[#181818] px-4 py-2 border-b border-hairline flex items-center justify-between text-[11px] font-mono-editorial text-[#8e8c87]">
            <span>UNISHARE KNOWLEDGE HUB</span>
            <span className="text-[#c85a32]">COMMUNITY FEED & PROFILE</span>
          </div>
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt="UniShare Student Hub Platform"
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Narrative & Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono-editorial text-xs text-[#8e8c87] tracking-widest uppercase">
              COMMUNITY CONTEXT
            </h3>
            <p className="text-base sm:text-lg text-[#f4f1ea]/90 leading-relaxed">
              {project.description}
            </p>
            <div className="space-y-3 pt-4 border-t border-hairline">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-mono-editorial text-[#8e8c87]">
                  <Share2 className="w-4 h-4 text-[#c85a32] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#121212]/60 p-8 border border-hairline space-y-6">
            <h3 className="font-mono-editorial text-xs text-[#c85a32] tracking-widest uppercase border-b border-hairline pb-4">
              SPECIFICATIONS
            </h3>

            <div className="space-y-4 font-mono-editorial text-xs">
              <div className="flex justify-between border-b border-hairline/50 pb-3">
                <span className="text-[#8e8c87]">ROLE</span>
                <span className="text-[#f4f1ea] font-semibold">{project.role}</span>
              </div>
              <div className="flex justify-between border-b border-hairline/50 pb-3">
                <span className="text-[#8e8c87]">TARGET AUDIENCE</span>
                <span className="text-[#f4f1ea] font-semibold">BCA / University Students</span>
              </div>
              <div className="flex justify-between border-b border-hairline/50 pb-3">
                <span className="text-[#8e8c87]">YEAR</span>
                <span className="text-[#f4f1ea] font-semibold">{project.year}</span>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[#8e8c87] block mb-2">TECHNOLOGIES</span>
                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#1a1a1a] border border-hairline text-[11px] text-[#f4f1ea] rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 border border-hairline bg-[#161616] hover:border-[#c85a32] text-xs font-mono-editorial text-[#f4f1ea] hover:text-[#c85a32] transition-colors uppercase"
              >
                <span>EXPLORE REPOSITORY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
