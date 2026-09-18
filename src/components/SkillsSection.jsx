import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { magazineIssue } from '../data/magazineData';

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-28 px-6 lg:px-12 border-b border-hairline relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-hairline pb-8 gap-4">
          <div>
            <span className="font-mono-editorial text-xs text-[#c85a32] tracking-widest uppercase">
              SECTION 06 / 07
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#f4f1ea] uppercase mt-2">
              TECHNICAL INDEX
            </h2>
          </div>
          <span className="font-mono-editorial text-xs text-[#8e8c87] uppercase tracking-wider">
            STACK & COMPETENCIES
          </span>
        </div>

        {/* Large Typographic Index List */}
        <div className="space-y-4">
          {magazineIssue.skills.map((skill) => {
            const isHovered = hoveredSkill === skill.num;

            return (
              <motion.div
                key={skill.num}
                onMouseEnter={() => setHoveredSkill(skill.num)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`p-6 sm:p-8 border border-hairline transition-all duration-300 ${
                  isHovered ? 'bg-[#161616] border-[#c85a32]/60' : 'bg-[#121212]/40 hover:bg-[#121212]'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Skill Number */}
                  <div className="md:col-span-2 font-mono-editorial text-sm text-[#c85a32] font-semibold tracking-wider">
                    {skill.num}
                  </div>

                  {/* Skill Name */}
                  <div className="md:col-span-6">
                    <h3 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f1ea] uppercase">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Level & Category */}
                  <div className="md:col-span-4 flex flex-col items-start md:items-end space-y-1">
                    <span className="font-mono-editorial text-xs text-[#c85a32] font-semibold tracking-widest uppercase">
                      [{skill.category}]
                    </span>
                    <span className="text-xs font-mono-editorial text-[#8e8c87]">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
