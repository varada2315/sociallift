import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  category: string;
  photoUrl: string;
}

function TeamCard({ member }: { member: TeamMember }) {
  const [isMemberHovered, setIsMemberHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsMemberHovered(true)}
      onMouseLeave={() => setIsMemberHovered(false)}
      className="group w-[280px] bg-[#141414] border border-[#232323] p-6 rounded-2xl flex-shrink-0 transition-all duration-300 hover:border-blue-500/20 hover:-translate-y-1 z-10"
    >
      <div className="h-6 mb-4 flex items-center overflow-hidden relative">
        <AnimatePresence mode="wait">
          {isMemberHovered ? (
            <motion.span
              key="tag"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="px-3 py-1 bg-blue-500 text-white rounded-full text-[10px] font-bold uppercase tracking-wider block"
            >
              {member.category}
            </motion.span>
          ) : (
            <motion.span
              key="role"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="text-[11px] font-mono font-light text-[#8A8A87] uppercase tracking-wider block"
            >
              / {member.role}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Avatar Photo portrait */}
      <div className="w-full h-[240px] bg-[#0A0A0A] rounded-xl border border-[#232323]/50 flex items-center justify-center overflow-hidden mb-6 group-hover:border-[#FFFFFF]/10 transition-colors duration-300">
        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Member Name */}
      <h3 className="text-xl font-medium text-[#F5F5F3] group-hover:text-[#FFFFFF] transition-colors duration-200">
        {member.name}
      </h3>
    </div>
  );
}

export default function Team() {
  const team: TeamMember[] = [
    {
      name: "M. Dinesh",
      role: "Founder & Lead Strategist",
      category: "Leadership",
      photoUrl: "https://framerusercontent.com/images/uSHHVp64IbFCGv1iRvQ4mi47kU.png",
    },
    {
      name: "Arun Kumar",
      role: "Lead Video Producer",
      category: "Design Team",
      photoUrl: "https://framerusercontent.com/images/xVgSCCsvizEBKn9olbCsvPejLbQ.png",
    },
    {
      name: "Priya Sharma",
      role: "Paid Ads Manager",
      category: "Ads Team",
      photoUrl: "https://framerusercontent.com/images/dH3E745rPwqwvIEDowEWp3cpmC4.png",
    },
    {
      name: "Sanjay Raj",
      role: "Lead Video Editor",
      category: "Design Team",
      photoUrl: "https://framerusercontent.com/images/kMmJL8Lh388UlTu330n0AScPrbE.png",
    },
    {
      name: "Kavitha R.",
      role: "Social Media Lead",
      category: "Marketing Team",
      photoUrl: "https://framerusercontent.com/images/5oeaWFgXfxXfxP3JKNg5Xk6E.png",
    },
  ];

  const extendedTeam = [...team, ...team, ...team];
  const totalItems = team.length;
  const initialIndex = totalItems;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  useEffect(() => {
    if (isHovered || isTouchDevice) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, isTouchDevice]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= totalItems * 2) {
        setTimeout(() => setCurrentIndex(initialIndex), 350);
        return next;
      }
      return next;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      if (next < totalItems - 1) {
        setTimeout(() => setCurrentIndex(initialIndex + totalItems - 1), 350);
        return next;
      }
      return next;
    });
  };

  const cardWidth = 280;
  const cardGap = 24;

  return (
    <section className="relative py-24 bg-[#0A0A0A] border-b border-[#232323] overflow-hidden">
      {/* Background pattern */}
      <img
        src="https://framerusercontent.com/images/Wyx3vnXhu5GNGk97dfJ58QbuQ.png"
        alt="team backdrop pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-[5vw] space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-[13px] font-semibold text-blue-500 uppercase tracking-widest block mb-4"
            >
              Team Members
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-4xl md:text-5xl font-medium text-[#F5F5F3] tracking-tight"
            >
              Meet Our Team Members
            </motion.h2>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex items-center space-x-4 self-end"
          >
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#232323] hover:border-blue-500 flex items-center justify-center text-[#8A8A87] hover:text-blue-400 transition-all duration-300 cursor-pointer"
              aria-label="Previous Team Member"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#232323] hover:border-blue-500 flex items-center justify-center text-[#8A8A87] hover:text-blue-400 transition-all duration-300 cursor-pointer"
              aria-label="Next Team Member"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative w-full overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Draggable Track */}
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -1000, right: 1000 }}
            onDragEnd={(_e, info) => {
              if (info.offset.x < -50) handleNext();
              else if (info.offset.x > 50) handlePrev();
            }}
            animate={{ x: -currentIndex * (cardWidth + cardGap) }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="flex cursor-grab active:cursor-grabbing select-none"
            style={{ gap: `${cardGap}px` }}
          >
            {extendedTeam.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
