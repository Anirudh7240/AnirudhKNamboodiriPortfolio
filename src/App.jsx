import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import MagazineNav from './components/MagazineNav';
import CoverSection from './components/CoverSection';
import ArticleCivicConnect from './components/ArticleCivicConnect';
import ArticleETranslator from './components/ArticleETranslator';
import ArticleUniShare from './components/ArticleUniShare';
import ArticleBCA1080P from './components/ArticleBCA1080P';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('cover');

  useEffect(() => {
    // Initialize Lenis Smooth Scroll for inertia editorial scroll feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Section Observer for Magazine Index indicator
    const sections = ['cover', 'civicconnect', 'etranslator', 'unishare', 'bca1080p', 'about', 'skills', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] text-[#f4f1ea] min-h-screen selection:bg-[#c85a32] selection:text-[#0a0a0a]">
      {/* Editorial Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Custom Context-Aware Magnetic Cursor */}
      <CustomCursor />

      {/* Minimal Top Editorial Navbar */}
      <MagazineNav activeSection={activeSection} />

      {/* Main Magazine Issue Content */}
      <main className="relative z-10">
        <CoverSection />
        <ArticleCivicConnect />
        <ArticleETranslator />
        <ArticleUniShare />
        <ArticleBCA1080P />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Floating Editorial Back To Top Button */}
      <BackToTop />

      {/* Magazine Footer */}
      <Footer />
    </div>
  );
}
