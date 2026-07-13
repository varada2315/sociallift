import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  title: string;
  category: string;
  date: string;
  photoUrl: string;
}

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const projects: ProjectItem[] = [
    {
      title: "Silo Commercial Ad",
      category: "Cinematic Ads",
      date: "January 2026",
      photoUrl: "https://framerusercontent.com/images/NH3j2ImSbnpK9zkiaepQLR9qlY.png",
    },
    {
      title: "Clarity Ads Launch",
      category: "Meta & Google Ads",
      date: "November 2025",
      photoUrl: "https://framerusercontent.com/images/i1M8Jv2eLyenDXYjYmMXoV0by4.png",
    },
    {
      title: "Reels Creator Growth",
      category: "Social Media Handling",
      date: "August 2025",
      photoUrl: "https://framerusercontent.com/images/2atPLR2IqGGvLEIP5GYe8EnOOeo.png",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A] border-b border-[#232323]">
      <div className="max-w-[1280px] mx-auto px-[5vw] space-y-16">
        
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
              Our Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-4xl md:text-5xl font-medium text-[#F5F5F3] tracking-tight"
            >
              Featured Campaigns
            </motion.h2>
          </div>
          
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            onClick={() => onNavigate("projects")}
            className="group relative self-start sm:self-auto py-2 text-sm text-[#8A8A87] hover:text-blue-400 transition-colors duration-200 font-semibold"
          >
            <span>View All Campaigns</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </motion.button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              data-cursor="project"
              className="group relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden border border-[#232323] cursor-none bg-[#141414] transition-all duration-300 hover:border-blue-500/20"
            >
              {/* Card Image Background */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={project.photoUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Subtle gradient overlay to darken image on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 z-0 pointer-events-none" />
              </div>

              {/* Card Header overlay */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10">
                <span className="px-3.5 py-1.5 border border-[#232323] rounded-full text-[10px] font-semibold text-[#8A8A87] uppercase tracking-wider bg-[#0A0A0A]/50 backdrop-blur-md">
                  {project.category}
                </span>
                
                <span className="px-2.5 py-1 rounded-md text-[9px] font-semibold text-[#FFFFFF] bg-[#232323] uppercase tracking-wider flex items-center space-x-1">
                  <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
                  <span>Featured</span>
                </span>
              </div>

              {/* Card Footer detail overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pt-24 z-10 transition-all duration-300 ease-out opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-xs text-[#8A8A87] font-medium font-mono">{project.date}</span>
                    <h3 className="text-xl md:text-2xl font-medium text-[#F5F5F3] group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="w-10 h-10 border border-[#232323] rounded-full flex items-center justify-center text-[#F5F5F3] bg-[#0A0A0A] hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
