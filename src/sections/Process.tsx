import { motion } from "framer-motion";
import { Lightbulb, PenTool, Video, Rocket } from "lucide-react";

interface ProcessStep {
  index: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Process() {
  const steps: ProcessStep[] = [
    {
      index: "/01",
      title: "Strategy & Audit",
      desc: "We analyze your current social metrics and competitor ads to map out a clear lead-gen roadmap.",
      icon: <Lightbulb className="w-4 h-4" />,
    },
    {
      index: "/02",
      title: "Creative & Scripting",
      desc: "Our team drafts cinematic commercials, Reels storyboards, and hooks designed to capture user attention.",
      icon: <PenTool className="w-4 h-4" />,
    },
    {
      index: "/03",
      title: "Production & Setup",
      desc: "We shoot high-quality commercials, capture reels, and configure conversion tracking for Google and Meta Ads.",
      icon: <Video className="w-4 h-4" />,
    },
    {
      index: "/04",
      title: "Scale & Optimize",
      desc: "We monitor audience metrics, run daily optimization loops, and scale winning campaigns for sustainable growth.",
      icon: <Rocket className="w-4 h-4" />,
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#0A0A0A] border-b border-[#232323]">
      <div className="max-w-[1280px] mx-auto px-[5vw] space-y-16">
        
        {/* Two-Column Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#232323]/50 pb-12">
          <div className="space-y-4 max-w-xl">
            {/* Pill Badge with waveform icon */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#141414] border border-[#232323] rounded-full shadow-inner"
            >
              <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5v14M22 9v6M7 7v10M2 10v4" strokeLinecap="round"/>
              </svg>
              <span className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold">
                Our Process
              </span>
            </motion.div>
            
            {/* Title with serif italics */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight text-[#F5F5F3] leading-[1.05]"
            >
              <span className="italic font-serif bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6] block md:inline">
                The Journey
              </span>{" "}
              to a Successful Product
            </motion.h2>
          </div>
          
          {/* Right column description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-[#8A8A87] leading-relaxed max-w-md md:pb-2"
          >
            We keep things lean and collaborative — so ideas go from concept to launch without the chaos.
          </motion.p>
        </div>

        {/* 4 Cards Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-[#141414]/30 backdrop-blur-md border border-[#232323] hover:border-blue-500/20 p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between h-[320px] cursor-default shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.08)] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] overflow-visible"
            >
              {/* Subtle glassmorphic radial hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none z-0 rounded-3xl" />

              {/* Card Content details */}
              <div className="space-y-4 relative z-10">
                <span className="text-xs text-[#8A8A87] font-mono block">
                  {step.index}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-[#F5F5F3] tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-[#8A8A87] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arch shape container that clips the dashed circle inside the card */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border border-dashed border-[#232323]/80 bg-gradient-to-b from-[#232323]/25 to-transparent group-hover:border-blue-500/15 transition-colors duration-300" />
              </div>

              {/* Circular icon badge sitting centered on the bottom border edge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#F5F5F3] group-hover:bg-blue-500 flex items-center justify-center shadow-lg text-[#0a0a0a] group-hover:text-white border border-[#232323]/10 z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
