import { motion } from "framer-motion";

interface AwardItem {
  platform: string;
  award: string;
  project: string;
}

function AwardRow({ platform, award, project }: AwardItem) {
  return (
    <div className="group border-b border-[#232323] py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-[#141414] px-6 -mx-6 rounded-xl transition-all duration-300">
      {/* Platform Name */}
      <div className="w-full md:w-[200px] flex-shrink-0">
        <span className="text-[#8A8A87] group-hover:text-blue-400 text-sm font-medium transition-colors duration-300">
          {platform}
        </span>
      </div>

      {/* Award Title */}
      <div className="w-full md:w-[450px] flex-grow md:text-center">
        <h6 className="text-[#F5F5F3] group-hover:text-blue-400 text-sm md:text-base font-medium transition-colors duration-300">
          {award}
        </h6>
      </div>

      {/* Project Title */}
      <div className="w-full md:w-[250px] flex-shrink-0 md:text-right">
        <span className="text-[#8A8A87] group-hover:text-blue-400 text-sm font-light transition-colors duration-300 font-mono">
          {project}
        </span>
      </div>
    </div>
  );
}

export default function Awards() {
  const awards: AwardItem[] = [
    {
      platform: "Meta Ads",
      award: "Certified Performance Partner",
      project: "Active Lead-Gen Campaigns",
    },
    {
      platform: "Google Ads",
      award: "Certified Search & Video Partner",
      project: "Active Search Campaigns",
    },
    {
      platform: "Commercials",
      award: "Best Cinematic Ads Production",
      project: "Cinematic Commercials",
    },
    {
      platform: "ROI Scale",
      award: "Average 3.5x ROI on Marketing Spend",
      project: "Performance Marketing",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#232323]">
      <div className="max-w-[1280px] mx-auto px-[5vw] space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-[13px] font-semibold text-blue-500 uppercase tracking-widest block mb-4"
          >
            Our Award
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-4xl md:text-5xl font-medium text-[#F5F5F3] tracking-tight"
          >
            Awards & Recognitions
          </motion.h2>
        </div>

        {/* Awards list container with staggered entry */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-1"
        >
          {awards.map((award, idx) => (
            <motion.div key={idx} variants={rowVariants}>
              <AwardRow {...award} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
