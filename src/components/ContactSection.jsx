import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { magazineIssue } from '../data/magazineData';

export default function ContactSection() {
  const { contact } = magazineIssue;

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 border-b border-hairline relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Back Cover Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-hairline pb-8 gap-4">
          <div>
            <span className="font-mono-editorial text-xs text-[#c85a32] tracking-widest uppercase">
              SECTION 07 / 07 — BACK COVER
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#f4f1ea] uppercase mt-2">
              {contact.title}
            </h2>
          </div>
          <span className="font-serif-editorial text-2xl text-[#8e8c87] italic">
            "{contact.subtitle}"
          </span>
        </div>

        {/* Main Statement */}
        <div className="space-y-8 py-8">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold leading-none tracking-tighter text-[#f4f1ea] uppercase"
          >
            LET'S BUILD <br />
            <span className="font-serif-editorial italic text-[#8e8c87] font-normal">
              SOMETHING.
            </span>
          </motion.h3>

          <p className="text-lg text-[#8e8c87] max-w-xl font-mono-editorial">
            Open for software engineering roles, digital product collaborations, and experimental web builds.
          </p>
        </div>

        {/* Editorial Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-hairline">
          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="p-8 border border-hairline bg-[#121212]/40 hover:bg-[#161616] hover:border-[#c85a32] transition-all group flex flex-col justify-between min-h-[180px]"
          >
            <div className="flex items-center justify-between text-xs font-mono-editorial text-[#8e8c87]">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c85a32]" />
                EMAIL DIRECT
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:text-[#c85a32] transition-colors" />
            </div>
            <span className="font-display text-lg font-bold text-[#f4f1ea] group-hover:text-[#c85a32] transition-colors break-all">
              {contact.email}
            </span>
          </a>

          {/* GitHub */}
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="p-8 border border-hairline bg-[#121212]/40 hover:bg-[#161616] hover:border-[#c85a32] transition-all group flex flex-col justify-between min-h-[180px]"
          >
            <div className="flex items-center justify-between text-xs font-mono-editorial text-[#8e8c87]">
              <span className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-[#c85a32]" />
                GITHUB CODE REPO
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:text-[#c85a32] transition-colors" />
            </div>
            <span className="font-display text-lg font-bold text-[#f4f1ea] group-hover:text-[#c85a32] transition-colors">
              @Anirudh7240
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-8 border border-hairline bg-[#121212]/40 hover:bg-[#161616] hover:border-[#c85a32] transition-all group flex flex-col justify-between min-h-[180px]"
          >
            <div className="flex items-center justify-between text-xs font-mono-editorial text-[#8e8c87]">
              <span className="flex items-center gap-2">
                <LinkedinIcon className="w-4 h-4 text-[#c85a32]" />
                LINKEDIN PROFILE
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:text-[#c85a32] transition-colors" />
            </div>
            <span className="font-display text-lg font-bold text-[#f4f1ea] group-hover:text-[#c85a32] transition-colors">
              ANIRUDH K. NAMBOODIRI
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
