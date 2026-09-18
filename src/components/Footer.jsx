import React from 'react';
import { magazineIssue } from '../data/magazineData';

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 bg-[#0a0a0a] text-xs font-mono-editorial text-[#8e8c87]">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="border-t border-hairline pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-display font-extrabold text-[#f4f1ea] tracking-wider uppercase">
              {magazineIssue.title}
            </span>
            <span>—</span>
            <span>ISSUE 01 / 01</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest">
            <span>2026 EDITION</span>
            <span>|</span>
            <span>DESIGN & DEVELOPMENT</span>
            <span>|</span>
            <span className="text-[#c85a32]">KERALA, INDIA</span>
          </div>
        </div>

        <div className="text-center text-[10px] text-[#4a4947] tracking-widest uppercase">
          CONTEMPORARY DIGITAL PUBLICATION SYSTEM • ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
