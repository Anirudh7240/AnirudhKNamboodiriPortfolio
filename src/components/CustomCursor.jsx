import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ active: false, label: '' });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check touch screen
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if target has data-cursor attribute
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const label = target.getAttribute('data-cursor') || 'VIEW';
        setCursorState({ active: true, label });
      } else {
        setCursorState({ active: false, label: '' });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#c85a32] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: cursorState.active ? 0 : 1,
          opacity: 1
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.1 }}
      />

      {/* Expanded Outer Circle / Label */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[9998] border border-[#f4f1ea]/40 bg-[#0a0a0a]/80 backdrop-blur-sm text-[#f4f1ea] font-mono-editorial text-[10px] tracking-widest font-semibold uppercase px-2 shadow-2xl"
        animate={{
          x: mousePos.x - (cursorState.active ? 40 : 16),
          y: mousePos.y - (cursorState.active ? 40 : 16),
          width: cursorState.active ? 80 : 32,
          height: cursorState.active ? 80 : 32,
          opacity: cursorState.active ? 1 : 0.4,
          borderColor: cursorState.active ? 'rgba(200, 90, 50, 0.8)' : 'rgba(244, 241, 234, 0.2)'
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      >
        {cursorState.active && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[#c85a32] font-mono-editorial font-bold tracking-widest text-[11px]"
          >
            {cursorState.label}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
