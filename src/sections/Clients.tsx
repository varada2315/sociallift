import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Clients() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  const tags = ["Brand Identity", "UI/UX Design", "Development", "Marketing"];

  // 5 client logo SVGs
  const clientLogos = [
    // 1. NEXUS
    <div key="nexus" className="flex items-center space-x-2 text-[#8A8A87] hover:text-[#FFFFFF] transition-colors duration-300">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 22h20L12 2zm0 4.8L18.4 19H5.6L12 6.8z"/>
        <circle cx="12" cy="13" r="2" />
      </svg>
      <span className="font-sans font-bold text-sm tracking-widest uppercase">NEXUS</span>
    </div>,
    // 2. SPHERE
    <div key="sphere" className="flex items-center space-x-2 text-[#8A8A87] hover:text-[#FFFFFF] transition-colors duration-300">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
      <span className="font-sans font-bold text-sm tracking-widest uppercase">SPHERE</span>
    </div>,
    // 3. ECHO
    <div key="echo" className="flex items-center space-x-2 text-[#8A8A87] hover:text-[#FFFFFF] transition-colors duration-300">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="10" width="2" height="4" />
        <rect x="7" y="6" width="2" height="12" />
        <rect x="11" y="3" width="2" height="18" />
        <rect x="15" y="6" width="2" height="12" />
        <rect x="19" y="10" width="2" height="4" />
      </svg>
      <span className="font-sans font-bold text-sm tracking-widest uppercase">ECHO</span>
    </div>,
    // 4. PRISM
    <div key="prism" className="flex items-center space-x-2 text-[#8A8A87] hover:text-[#FFFFFF] transition-colors duration-300">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l10 17H2L12 2zm0 4.2L5.2 17h13.6L12 6.2z"/>
        <path d="M12 6v11" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="font-sans font-bold text-sm tracking-widest uppercase">PRISM</span>
    </div>,
    // 5. APEX
    <div key="apex" className="flex items-center space-x-2 text-[#8A8A87] hover:text-[#FFFFFF] transition-colors duration-300">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 12h5v10h10V12h5L12 2zm0 4.5l5 5h-3v8h-4v-8H7l5-5z" />
      </svg>
      <span className="font-sans font-bold text-sm tracking-widest uppercase">APEX</span>
    </div>,
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-20 bg-[#0A0A0A] overflow-hidden border-b border-[#232323]">
      <div className="max-w-[1280px] mx-auto px-[5vw]">
        {/* Row of Pill Tags */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-6 py-2.5 border border-[#232323] text-xs font-semibold uppercase tracking-wider text-[#8A8A87] hover:text-[#FFFFFF] hover:border-[#FFFFFF] rounded-full transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Marquee Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <span className="text-[11px] font-semibold text-[#8A8A87] uppercase tracking-widest">
            Trusted by Industry Leaders
          </span>
        </motion.div>

        {/* Infinite Logo Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full overflow-hidden py-4 border-t border-b border-[#232323]/50"
          onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
          onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div
            className={`animate-marquee flex items-center space-x-20 md:space-x-32 ${
              isHovered && !isTouchDevice ? "[animation-play-state:paused]" : ""
            }`}
          >
            {marqueeItems.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 select-none">
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
