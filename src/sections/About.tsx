import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, animate, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

// Odometer Counter Component triggering count-up when in view
function OdometerCounter({ value, suffix, label }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, motionValue]);

  return (
    <div ref={ref} className="border-t border-[#232323]/60 pt-6 w-full text-center flex flex-col items-center">
      <span className="text-xs md:text-sm text-[#8A8A87] uppercase tracking-widest font-medium mb-4 block">
        {label}
      </span>
      
      <div className="relative font-sans font-medium text-7xl sm:text-8xl md:text-[100px] lg:text-[120px] tracking-tighter leading-none select-none">
        <motion.span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6] inline-block">
          {displayValue}
        </motion.span>
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6] inline-block ml-0.5">
          {suffix}
        </span>
      </div>
    </div>
  );
}

// Word Component for Scroll Reveal
function RevealWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: any;
}) {
  const start = index / total;
  const end = Math.min(1, (index + 2) / total); // overlap slightly for smooth flow
  
  // Transitions from gray to white
  const opacity = useTransform(progress, [start, end], [0.25, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em] font-medium text-[#F5F5F3] select-none">
      {word}
    </motion.span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire About container
  const { scrollYProgress: containerScroll } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  // Track scroll progress specifically for the banner image zoom
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: imageScroll } = useScroll({
    target: imageRef,
    offset: ["start 95%", "center center"],
  });
  
  const scale = useTransform(imageScroll, [0, 1], [0.85, 1]);
  const opacity = useTransform(imageScroll, [0, 1], [0.6, 1]);

  const rawText = "We are a creative digital marketing agency specializing in cinematic advertising that transforms brands into compelling visual experiences. By combining strategic storytelling with high-quality production, we create campaigns that drive measurable growth across Meta and Google Ads, branding, and social media handling.";
  const words = rawText.split(" ");

  const stats = [
    { value: 98, suffix: "%", label: "Client Retention" },
    { value: 10, suffix: "M+", label: "Ad Impressions" },
    { value: 3, suffix: "x+", label: "Average ROI" },
  ];

  return (
    <section ref={containerRef} id="about" className="py-24 bg-[#0A0A0A] border-b border-[#232323] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[5vw] flex flex-col items-center space-y-20">
        
        {/* Centered Intro & Title Pill */}
        <div className="w-full flex flex-col items-center text-center space-y-12">
          {/* About Us Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-[#141414] border border-[#232323] rounded-full shadow-inner"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#8A8A87] font-semibold">
              About Us
            </span>
          </motion.div>

          {/* Centered Scroll Reveal Paragraph */}
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl lg:text-[34px] font-medium leading-relaxed tracking-tight flex flex-wrap justify-center">
              {words.map((word, idx) => (
                <RevealWord
                  key={idx}
                  word={word}
                  index={idx}
                  total={words.length}
                  progress={containerScroll}
                />
              ))}
            </p>
          </div>
        </div>

        {/* Large Horizontal Banner Image (Scroll Pinned Zoom) */}
        <div ref={imageRef} className="w-full overflow-hidden rounded-2xl border border-[#232323] bg-[#141414] aspect-[2.8/1] flex items-center justify-center">
          <motion.img
            style={{ scale, opacity }}
            src="https://framerusercontent.com/images/TGcveslLFOoJEhB079jeYPrB8A.png"
            alt="Socialliftsolutions team banner"
            className="w-full h-full object-cover filter grayscale brightness-90"
          />
        </div>

        {/* Centered Odometer Stats Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full pt-8">
          {stats.map((stat, idx) => (
            <OdometerCounter
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
