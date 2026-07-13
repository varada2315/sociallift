import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer: "We offer end-to-end digital marketing solutions including cinematic commercial shooting, Instagram Reels production, Meta & Google Ads management, professional video editing, and social media handling.",
    },
    {
      question: "How do paid ads grow my business?",
      answer: "By launching conversion-optimized campaigns on Meta (Facebook/Instagram) and Google, we connect your business directly with qualified leads and active searchers, multiplying your client acquisition and maximizing ROI.",
    },
    {
      question: "Do you handle video production from scratch?",
      answer: "Yes. We handle the entire video lifecycle—from initial strategy, scriptwriting, and visual storyboarding, to shooting cinematic footage, post-production video editing, and final formatting for Reels and Ads.",
    },
    {
      question: "How does pricing work?",
      answer: "Since every business has unique scaling goals and video requirements, we do not offer generic pricing. All of our pricing is inquiry-based; contact us to discuss your goals and receive a custom marketing proposal.",
    },
    {
      question: "How fast will we see campaign results?",
      answer: "Paid campaigns (Meta/Google Ads) can start generating qualified leads within days of launch. Organic channels and branding sprints build compounding authority and take 2-4 weeks to establish visible conversion lifts.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
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
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-4xl md:text-5xl font-medium text-[#F5F5F3] tracking-tight"
          >
            FAQs
          </motion.h2>
        </div>

        {/* FAQ Accordion List with staggered entry */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl space-y-2"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                variants={rowVariants}
                className="border-b border-[#232323] overflow-hidden"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-base md:text-lg font-medium text-[#F5F5F3] group-hover:text-blue-400 transition-colors duration-200">
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="p-1 border border-[#232323] group-hover:border-blue-500/50 rounded-full text-[#8A8A87] group-hover:text-blue-400 transition-colors duration-300 ml-4 flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Answer Collapsible Box */}
                <motion.div
                  initial={idx === 0 ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-6 text-sm text-[#8A8A87] leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
