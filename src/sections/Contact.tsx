import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Parallax Scroll logic for left card background image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 bg-[#0A0A0A] border-b border-[#232323] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-[5vw] space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#141414] border border-[#232323] rounded-full shadow-inner"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold">
              Contact
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-sm md:text-base text-[#8A8A87] leading-relaxed max-w-xl mx-auto"
          >
            We collaborate with ambitious brands to script, shoot, and scale marketing campaigns that convert. Reach out via the form, or message us directly on WhatsApp at{" "}
            <a
              href="https://wa.me/918438646470"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F3] hover:underline font-semibold font-mono"
            >
              +91 84386 46470
            </a>.
          </motion.p>
        </div>

        {/* Panels Grid Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Panel: Headline Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative bg-[#141414]/30 border border-[#232323] p-10 md:p-14 rounded-[32px] overflow-hidden flex flex-col justify-end min-h-[420px] md:h-[550px] shadow-sm group"
          >
            {/* Parallax Background dotted pattern */}
            <motion.img
              style={{ y: parallaxY }}
              src="https://framerusercontent.com/images/lqo8ZRIavdu917iJA3Qe51RLPg.png"
              alt="contact backdrop texture"
              className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover opacity-20 pointer-events-none select-none z-0"
            />
            
            {/* Dark gradient overlay bottom-up */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 pointer-events-none" />

            {/* Bottom-left Typography */}
            <div className="relative z-10 space-y-2">
              <h3 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#F5F5F3] tracking-tight">
                Let's Talk
              </h3>
              <h4 className="text-4xl md:text-5xl lg:text-[56px] italic font-serif bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6] tracking-tight leading-tight">
                Your Next Big Idea
              </h4>
            </div>
          </motion.div>

          {/* Right Panel: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="bg-[#141414]/30 backdrop-blur-md border border-[#232323] p-10 md:p-14 rounded-[32px] flex flex-col justify-between min-h-[420px] md:h-[550px] shadow-sm"
          >
            <h3 className="text-2xl font-medium text-[#F5F5F3] tracking-tight mb-6">
              Fill This Form Below
            </h3>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between gap-8">
              
              {/* Form Input fields */}
              <div className="space-y-6">
                {/* Input Name */}
                <div className="flex flex-col space-y-2 border-b border-[#232323] focus-within:border-blue-500/40 transition-colors duration-300 pb-2">
                  <label className="text-xs uppercase tracking-wider text-[#8A8A87] font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="bg-transparent text-sm text-[#F5F5F3] outline-none placeholder:text-[#444444] py-1"
                  />
                </div>

                {/* Input Email */}
                <div className="flex flex-col space-y-2 border-b border-[#232323] focus-within:border-blue-500/40 transition-colors duration-300 pb-2">
                  <label className="text-xs uppercase tracking-wider text-[#8A8A87] font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter the e-mail"
                    className="bg-transparent text-sm text-[#F5F5F3] outline-none placeholder:text-[#444444] py-1"
                  />
                </div>

                {/* Input Message */}
                <div className="flex flex-col space-y-2 border-b border-[#232323] focus-within:border-blue-500/40 transition-colors duration-300 pb-2">
                  <label className="text-xs uppercase tracking-wider text-[#8A8A87] font-semibold">
                    More About The Project
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Type your message here..."
                    className="bg-transparent text-sm text-[#F5F5F3] outline-none placeholder:text-[#444444] py-1 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button - Solid full-width capsule */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#F5F5F3] hover:bg-blue-500 hover:text-white text-[#0A0A0A] font-semibold rounded-full text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer text-center"
                >
                  Send Message
                </button>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
