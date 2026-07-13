import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  const line1 = "Your Creative";
  const line2 = "Growth Partner";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/socialliftsolutions?igsh=cWRjdGg1YWUxc25x",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      )
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918438646470",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      )
    }
  ];

  const clientLogos = [
    "https://framerusercontent.com/images/Os7ysPpNF81KXSwoiKe05fqaug.svg",
    "https://framerusercontent.com/images/IiHC7c0IrE5gCeVJ5uuD6MpFB4o.svg",
    "https://framerusercontent.com/images/xQD7ksKN1zo25trsYz1zfhQF3s.svg",
    "https://framerusercontent.com/images/PwEx7CMnmSjZlq05ledcnMg0nA.svg",
    "https://framerusercontent.com/images/gkkSyTiBsQ6NpzUiFeoxGL3mVwc.svg",
    "https://framerusercontent.com/images/1unviV3defPmI81PQUtSqRTQYY.svg",
  ];

  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative min-h-[100vh] w-full flex flex-col justify-center bg-[#0A0A0A] border-b border-[#232323] overflow-hidden pt-36 pb-16">
      {/* Full Screen Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <video
          src="https://framerusercontent.com/assets/shkethPArotkZlMS0MbrQ6WEC78.mp4"
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 filter brightness-[0.85]"
        />
      </div>

      {/* Dot pattern background layered on top of video */}
      <img
        src="https://framerusercontent.com/images/BpfOumvX8P7lsL2wQSQv5LuVKg.svg"
        alt="dot pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none z-10"
      />

      {/* Glow Blur Orb bottom-center */}
      <div className="absolute bottom-[20%] left-[50%] -translate-x-[50%] w-[320px] h-[100px] bg-blue-500/10 blur-[100px] pointer-events-none z-10 rounded-full" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0A0A0A] z-10 pointer-events-none" />

      {/* Downward Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex justify-center items-center">
        <a
          href="#services"
          className="w-10 h-10 border border-[#232323] rounded-full flex items-center justify-center text-[#8A8A87] hover:text-blue-400 hover:border-blue-500/40 bg-[#0A0A0A] transition-all duration-300"
          aria-label="Scroll to Services"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 animate-bounce"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </a>
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 max-w-[1280px] w-full mx-auto px-[5vw]">
        
        {/* Top: Headlines & Tagline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8 mb-24">
          
          {/* Left Side: Staggered Headlines */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col items-start leading-[0.85] overflow-visible"
          >
            {/* Line 1 */}
            <div className="overflow-hidden w-full mb-2">
              <motion.span
                variants={wordVariants}
                className="text-4xl sm:text-5xl md:text-[60px] lg:text-[76px] font-medium text-[#F5F5F3] tracking-tighter block whitespace-nowrap"
              >
                {line1}
              </motion.span>
            </div>

            {/* Line 2 with vertical gradient text fill */}
            <div className="overflow-hidden w-full">
              <motion.span
                variants={wordVariants}
                className="text-4xl sm:text-5xl md:text-[60px] lg:text-[76px] font-medium tracking-tighter block bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6] whitespace-nowrap"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {line2}
              </motion.span>
            </div>
          </motion.div>

          {/* Right Side: Tagline, Trust Badge, and CTAs */}
          <div className="flex-1 flex flex-col justify-end max-w-lg lg:pl-8 space-y-6">
            
            {/* Trust Element badge (Rating / Review) */}
            <motion.div
              custom={0.5}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center space-x-2 text-[10px] md:text-xs tracking-widest text-[#8A8A87] font-semibold font-mono"
            >
              <span className="text-blue-400">★ ★ ★ ★ ★</span>
              <span>5.0 RATED PARTNER</span>
              <span className="text-[#232323] font-sans">|</span>
              <span>100% CLIENT SATISFACTION</span>
            </motion.div>

            {/* Sub-headline text */}
            <motion.p
              custom={0.6}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl font-light tracking-tight leading-[1.3] text-left"
            >
              <span className="text-[#EEEEEE]">
                Empowering businesses with cinematic commercials, strategic branding, Meta & Google Ads,{" "}
              </span>
              <span className="text-[#8A8A87]">
                professional video editing, and social media management—all designed to grow your business.
              </span>
            </motion.p>

            {/* Contact CTA and Circular Social Icons */}
            <motion.div
              custom={0.8}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-row items-center space-x-6 w-full"
            >
              {/* Contact Button */}
              <button
                onClick={onContactClick}
                className="group px-7 py-3.5 bg-[#F5F5F3] hover:bg-blue-500 hover:text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ease-out flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Start Your Growth</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                {socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-[#232323] hover:border-blue-500 bg-[#141414] hover:bg-blue-500 flex items-center justify-center text-[#8A8A87] hover:text-white transition-all duration-300"
                    aria-label={soc.name}
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Section (We Do Tags + Client Marquee) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 1.0,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="border-t border-[#232323] pt-12 flex flex-col md:flex-row md:items-end justify-between gap-12 w-full"
        >
          {/* Left Column: We do tags */}
          <div className="flex flex-col items-start gap-6 max-w-[306px] w-full shrink-0">
            <span className="text-[11px] font-semibold text-[#8A8A87] uppercase tracking-widest">
              We do
            </span>
            <div className="flex flex-col gap-3.5 w-full">
              {/* Row 1 */}
              <div className="flex items-center text-sm font-semibold text-[#8A8A87] gap-3">
                <a href="#services" className="hover:text-white transition-colors duration-300">Cinematic Ads</a>
                <span className="text-[#232323]">|</span>
                <a href="#services" className="hover:text-white transition-colors duration-300">Meta & Google Ads</a>
              </div>
              {/* Row 2 */}
              <div className="flex items-center text-sm font-semibold text-[#8A8A87] gap-3">
                <a href="#services" className="hover:text-white transition-colors duration-300">Performance Marketing</a>
                <span className="text-[#232323]">|</span>
                <a href="#services" className="hover:text-white transition-colors duration-300">Social Media Handling</a>
              </div>
            </div>
          </div>

          {/* Right Column: Client Logo Marquee */}
          <div
            className="flex-1 w-full overflow-hidden relative py-2"
            onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
            onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
          >
            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

            {/* Marquee Track */}
            <div
              className={`animate-marquee flex items-center space-x-16 md:space-x-24 ${
                isHovered && !isTouchDevice ? "[animation-play-state:paused]" : ""
              }`}
            >
              {marqueeItems.map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 select-none">
                  <img
                    src={logo}
                    alt="Client Logo"
                    className="h-5 md:h-6 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 filter grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
