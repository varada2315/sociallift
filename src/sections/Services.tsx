import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ServiceItem {
  index: string;
  name: string;
  desc: string;
  photoUrl: string;
}

function ServiceCard({
  service,
  index,
  progress,
}: {
  service: ServiceItem;
  index: number;
  progress: any;
}) {
  // Define animation steps for 5 cards over scroll range [0.15, 0.90]
  const startRange = 0.15 + index * 0.14;
  const endRange = 0.15 + (index + 1) * 0.14;

  // Slide up from bottom
  const y = useTransform(
    progress,
    [startRange, endRange],
    [650, 0]
  );

  // Scale down slightly when subsequent cards stack on top
  const scale = useTransform(
    progress,
    [endRange, endRange + 0.14, 1],
    [1, 0.96 - (4 - index) * 0.012, 0.92]
  );

  // Dim background slightly when covered
  const opacity = useTransform(
    progress,
    [endRange, endRange + 0.14],
    [1, 0.85]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1,
        // Stack cards on top of each other with a top offset
        top: `${index * 16}px`,
      }}
      className="absolute w-full h-[480px] md:h-[350px] bg-[#141414]/85 backdrop-blur-md border border-[#232323] hover:border-blue-500/20 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl transition-colors duration-300 group cursor-pointer"
    >
      {/* Left content: Index, Title, Desc */}
      <div className="flex-1 flex items-start space-x-6 h-full">
        <span className="font-mono text-sm md:text-base text-[#8A8A87] font-semibold pt-1 block">
          {service.index}
        </span>
        <div className="space-y-4 flex-1">
          <h3 className="text-2xl md:text-3xl font-medium text-[#F5F5F3] group-hover:text-blue-400 transition-colors duration-200">
            {service.name}
          </h3>
          <p className="text-xs md:text-sm text-[#8A8A87] leading-relaxed max-w-2xl">
            {service.desc}
          </p>
        </div>
      </div>

      {/* Right content: Massive widescreen cinematic image preview */}
      <div className="w-full md:w-[480px] h-[180px] md:h-[270px] rounded-2xl overflow-hidden border border-[#232323] flex-shrink-0 group-hover:border-[#FFFFFF]/20 transition-all duration-300">
        <img
          src={service.photoUrl}
          alt={service.name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the services container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Center header at start, translate up and shrink as scroll progresses
  const headerY = useTransform(scrollYProgress, [0, 0.15], ["18vh", "0vh"]);
  const headerScale = useTransform(scrollYProgress, [0, 0.15], [1.08, 1.0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.85], [1.0, 0.9]);

  const services: ServiceItem[] = [
    {
      index: "/01",
      name: "Cinematic Ads & Reels",
      desc: "Captivating commercial shooting and Instagram reels production that hooks viewers in the first 3 seconds.",
      photoUrl: "https://framerusercontent.com/images/kSNWwZnlXmObrxxkf8A0ATWAqUM.png",
    },
    {
      index: "/02",
      name: "Meta & Google Ads",
      desc: "Strategic, data-driven paid advertising campaigns optimized to acquire qualified leads and increase revenue.",
      photoUrl: "https://framerusercontent.com/images/9I7Qx7g7CBfFZ73OXVEkVFSQ.png",
    },
    {
      index: "/03",
      name: "Performance & Influencer Marketing",
      desc: "Combining conversion rate optimization with creator collaborations to multiply brand visibility and sales.",
      photoUrl: "https://framerusercontent.com/images/8k6Berw12UVQksnDsQX0hgMEs.png",
    },
    {
      index: "/04",
      name: "Video Editing",
      desc: "High-end post-production, visual pacing, color grading, and audio design that elevates raw video footage.",
      photoUrl: "https://framerusercontent.com/images/zPbOW46xOX0IqHUqx1WsHTkDEeo.png",
    },
    {
      index: "/05",
      name: "Social Media Handling",
      desc: "End-to-end account management, visual branding, content layout curation, and growth analytics reporting.",
      photoUrl: "https://framerusercontent.com/images/kJJrWRLfOnlr1d8RHlDLgRsGag.png",
    },
  ];

  return (
    // Outer scroll track container defining pinned scroll duration
    <div ref={containerRef} className="relative h-[450vh] w-full bg-[#0A0A0A]">
      
      {/* Sticky Inner Viewport containing layout elements */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start pt-12 md:pt-14">
        
        {/* Centered Header: Slides up to top of sticky frame */}
        <motion.div
          style={{ y: headerY, scale: headerScale, opacity: headerOpacity }}
          className="text-center max-w-2xl mx-auto space-y-4 px-[5vw] z-10"
        >
          <span className="text-[13px] font-semibold text-blue-500 uppercase tracking-widest block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium text-[#F5F5F3] tracking-tight">
            What We Do
          </h2>
          <p className="text-sm md:text-base text-[#8A8A87] leading-relaxed max-w-xl mx-auto">
            We are a creative digital marketing agency specializing in cinematic advertising that transforms brands into compelling visual experiences and campaigns that drive growth.
          </p>
        </motion.div>

        {/* Full-width cards track stack */}
        <div className="relative w-full max-w-[1280px] mx-auto mt-6 px-[5vw] h-[500px] flex justify-center items-start z-20">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.index}
              service={service}
              index={idx}
              progress={scrollYProgress}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
