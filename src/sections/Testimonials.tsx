import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photoUrl: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "Agenciy felt like an extension of our team. Their design instincts and speed were exactly what we needed to launch on time — and with style.",
      name: "Sarah Coleman",
      role: "CEO at NovaTech",
      photoUrl: "https://framerusercontent.com/images/R5C9E9dqFAvJrv0g9dLqaUvnNT0.png",
    },
    {
      quote: "From the first call to the final handoff, everything was seamless. The UI/UX work was some of the best we’ve seen.",
      name: "Daniel Reyes",
      role: "Product Manager at Clarity CRM",
      photoUrl: "https://framerusercontent.com/images/L20k7SPWAbx9kHfan5W4WR514g.png",
    },
    {
      quote: "We came to Agenciy with a rough idea, and they turned it into a beautiful, functional MVP in weeks. Highly recommended.",
      name: "Rachel Lin",
      role: "Co-Founder at Driftly",
      photoUrl: "https://framerusercontent.com/images/3cgQeJYcAexgICvg7JYOYiUt30E.png",
    },
    {
      quote: "Their process is clear, communication is fast, and the results speak for themselves. We saw a 40% boost in engagement post-launch.",
      name: "Jason Ford",
      role: "Marketing Lead at BrightChain",
      photoUrl: "https://framerusercontent.com/images/8MseiF3JqiiEF1hCSU56AnC1Ow.png",
    },
  ];

  const [activePair, setActivePair] = useState(0); // 0 = first pair (0,1), 1 = second pair (2,3)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePair((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = activePair === 0 
    ? [testimonials[0], testimonials[1]] 
    : [testimonials[2], testimonials[3]];

  return (
    <section className="relative py-24 bg-[#0A0A0A] border-b border-[#232323] overflow-hidden">
      {/* Background Image spanning the whole section */}
      <img
        src="https://framerusercontent.com/images/vt1yWVm705HU96sMIHFT2Gf0SZ0.png"
        alt="testimonials backdrop texture"
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-[5vw] space-y-12">
        {/* Slider Header Area */}
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <span className="text-[13px] font-semibold text-[#8A8A87] uppercase tracking-widest block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-[#F5F5F3] tracking-tight">
              Hear from the Clients<br />We've Partnered With
            </h2>
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActivePair(0)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activePair === 0 ? "bg-[#FFFFFF] w-6" : "bg-[#232323]"
              }`}
              aria-label="View first pair of testimonials"
            />
            <button
              onClick={() => setActivePair(1)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activePair === 1 ? "bg-[#FFFFFF] w-6" : "bg-[#232323]"
              }`}
              aria-label="View second pair of testimonials"
            />
          </div>
        </div>

        {/* Testimonials Slider Area */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePair}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {visibleTestimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-[#141414]/40 backdrop-blur-[22px] border border-[#232323] p-8 rounded-2xl flex flex-col justify-between h-full hover:border-[#FFFFFF]/25 transition-colors duration-300"
                >
                  <p className="text-sm md:text-base text-[#8A8A87] leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-[#232323]/50">
                    {/* Portrait Avatar */}
                    <div className="w-10 h-10 rounded-full border border-[#232323] overflow-hidden flex-shrink-0 bg-[#0A0A0A]">
                      <img
                        src={testimonial.photoUrl}
                        alt={testimonial.name}
                        className="w-full h-full object-cover filter grayscale"
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-[#F5F5F3]">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-[#8A8A87]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
