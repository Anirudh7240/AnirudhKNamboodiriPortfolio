import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Film, Music } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { magazineIssue } from '../data/magazineData';

export default function ArticleBCA1080P() {
  const project = magazineIssue.projects[3];

  return (
    <section id="bca1080p" className="py-24 px-6 lg:px-12 border-b border-hairline relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Feature Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-xs font-mono-editorial text-[#c85a32] tracking-widest uppercase">
            <span>ARTICLE {project.number} / 04</span>
            <span>—</span>
            <span>FEATURE COVER ARTICLE</span>
            <span>—</span>
            <span>GRADUATION ARCHIVE</span>
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
              <p className="font-serif-editorial text-xl sm:text-2xl text-[#f4f1ea] italic leading-tight">
                "{project.headline}"
              </p>
              <p className="text-xs font-mono-editorial text-[#8e8c87] mt-2 uppercase tracking-wider">
                {project.quote}
              </p>
            </div>
          </div>
        </div>

        {/* Feature Visual Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group border border-hairline bg-[#121212] overflow-hidden rounded-sm shadow-2xl"
          data-cursor="PLAY MUSIC"
        >
          <div className="bg-[#181818] px-4 py-3 border-b border-hairline flex flex-wrap items-center justify-between text-[11px] font-mono-editorial text-[#8e8c87] gap-2">
            <div className="flex items-center gap-2 text-[#c85a32]">
              <Film className="w-3.5 h-3.5" />
              <span>BCA 1080P DIGITAL ARCHIVE</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Music className="w-3 h-3 text-[#f4f1ea]" />
                <span>LOFI AUDIO EXPERIENCE</span>
              </span>
              <span>1080P FULL HD</span>
            </div>
          </div>

          <div className="aspect-[16/9] overflow-hidden relative">
            <img
              src={project.image}
              alt="BCA 1080P Memory Archive"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Narrative Story & Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono-editorial text-xs text-[#8e8c87] tracking-widest uppercase">
              EDITORIAL STORY
            </h3>
            <p className="text-base sm:text-lg text-[#f4f1ea]/90 leading-relaxed font-sans">
              {project.description}
            </p>


          </div>

          <div className="lg:col-span-5 bg-[#121212]/60 p-8 border border-hairline space-y-6">
            <h3 className="font-mono-editorial text-xs text-[#c85a32] tracking-widest uppercase border-b border-hairline pb-4">
              ARTICLE CREDITS
            </h3>

            <div className="space-y-4 font-mono-editorial text-xs">
              <div className="flex justify-between border-b border-hairline/50 pb-3">
                <span className="text-[#8e8c87]">CREATIVE DIRECTION</span>
                <span className="text-[#f4f1ea] font-semibold">{project.role}</span>
              </div>

              <div className="flex justify-between border-b border-hairline/50 pb-3">
                <span className="text-[#8e8c87]">BATCH</span>
                <span className="text-[#f4f1ea] font-semibold">BCA Class of 2026</span>
              </div>

              <div className="flex justify-between border-b border-hairline/50 pb-3">
                <span className="text-[#8e8c87]">FORMAT</span>
                <span className="text-[#f4f1ea] font-semibold">1080p Interactive Web</span>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[#8e8c87] block mb-2">AUDIO & UI STACK</span>
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

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 border border-[#c85a32]/60 bg-[#c85a32]/10 hover:bg-[#c85a32] text-xs font-mono-editorial text-[#f4f1ea] hover:text-[#0a0a0a] transition-colors uppercase font-bold"
                >
                  <span>VISIT LIVE WEBSITE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 border border-hairline bg-[#161616] hover:border-[#c85a32] text-xs font-mono-editorial text-[#f4f1ea] hover:text-[#c85a32] transition-colors uppercase"
              >
                <span>PROJECT REPOSITORY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
