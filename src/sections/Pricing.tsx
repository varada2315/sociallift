import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  desc: string;
  price: string;
  isPopular: boolean;
  features: string[];
}

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: "Kickstart Package",
      desc: "For early-stage campaigns or single projects",
      price: "Inquire",
      isPopular: false,
      features: [
        "Discovery session & roadmap",
        "Cinematic video scripting",
        "Standard ad campaign setup",
        "1 round of revisions",
      ],
    },
    {
      name: "Growth Sprint",
      desc: "For scaling brands needing ongoing client acquisition",
      price: "Inquire",
      isPopular: true,
      features: [
        "Cinematic commercial shoots & Reels",
        "Meta & Google Ads management",
        "Conversion rate optimization (CRO)",
        "Advanced monthly analytics audit",
        "Priority Slack communication",
      ],
    },
    {
      name: "Enterprise Suite",
      desc: "Bespoke marketing strategy and full production sprints",
      price: "Inquire",
      isPopular: false,
      features: [
        "Bespoke omni-channel campaigns",
        "Unlimited professional video editing",
        "Dedicated marketing team & PM",
        "Custom analytics tracking setup",
        "Continuous performance retainers",
      ],
    },
  ];

  return (
    <section className="relative py-24 bg-[#0A0A0A] border-b border-[#232323] overflow-hidden">
      {/* Background pattern */}
      <img
        src="https://framerusercontent.com/images/Mgx0Qq7ew3h1frg8a3PNelTetM.svg"
        alt="pricing backdrop grid"
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-[5vw] space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-[13px] font-semibold text-blue-500 uppercase tracking-widest block"
          >
            Inquire Rates
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-4xl md:text-5xl font-medium text-[#F5F5F3] tracking-tight"
          >
            Flexible Sprints for Real Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-base text-[#8A8A87] max-w-xl mx-auto leading-relaxed"
          >
            Every campaign is tailored to your business goals. Inquire below to schedule a discovery call and receive a custom marketing proposal.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              whileHover={{ y: -6 }}
              className={`flex flex-col justify-between p-8 rounded-2xl border transition-all duration-200 cursor-default select-none shadow-sm hover:shadow-2xl ${
                plan.isPopular
                  ? "bg-[#F5F5F3] text-[#0A0A0A] border-[#F5F5F3] hover:border-blue-500/30"
                  : "bg-[#141414] text-[#F5F5F3] border-[#232323] hover:border-blue-500/20"
              }`}
            >
              {/* Header Details */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className={`text-lg font-medium ${plan.isPopular ? "text-[#0A0A0A]" : "text-[#F5F5F3]"}`}>
                    {plan.name}
                  </span>
                  
                  {plan.isPopular && (
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-[9px] font-bold uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>

                <p className={`text-sm leading-relaxed ${plan.isPopular ? "text-[#555555]" : "text-[#8A8A87]"}`}>
                  {plan.desc}
                </p>

                {/* Price */}
                <div className="py-4 border-t border-b border-current/10">
                  <span className="text-4xl md:text-5xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono ml-2 opacity-60">/ Quote</span>
                </div>

                {/* Feature Bullet List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className={plan.isPopular ? "text-[#2A2A28]" : "text-[#8A8A87]"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <a
                  href="#contact"
                  className={`block text-center w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-transparent text-[#F5F5F3] border border-[#232323] hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  Inquire Now
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
