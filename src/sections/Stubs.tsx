import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import FAQ from "./FAQ";
import Contact from "./Contact";

interface StubPageProps {
  page: string;
  onBack: () => void;
}

export default function StubPage({ page, onBack }: StubPageProps) {
  let pageTitle = page.charAt(0).toUpperCase() + page.slice(1);
  if (page === "about") {
    pageTitle = "About Us";
  } else if (page === "projects") {
    pageTitle = "Our Projects";
  } else if (page === "terms") {
    pageTitle = "Terms of Service";
  } else if (page === "audits") {
    pageTitle = "Business Audits";
  }

  // Motion configs
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
      },
    },
  };

  // Render different content depending on the page
  const renderContent = () => {
    switch (page) {
      case "audits":
        const auditCards = [
          {
            title: "Tax Filing & Income Compliance",
            desc: "Full corporate and individual income tax planning, filing automation, GST audits, and compliance lodging.",
            tag: "Tax & Compliance",
          },
          {
            title: "Corporate Legal Structuring",
            desc: "Incorporating private limited entities, partnership deeds, copyright registration for commercials, and contract protection.",
            tag: "Legal Services",
          },
          {
            title: "Financial Auditing & P&L Analysis",
            desc: "Comprehensive auditing of cash-flows, P&L books, scaling budgets, and corporate financial statements.",
            tag: "Financial Audit",
          },
          {
            title: "Asset & Trademark Valuation",
            desc: "Licensing and asset audits, intellectual property protection, and copyright evaluation for high-value branding assets.",
            tag: "Intellectual Property",
          },
        ];

        return (
          <div className="space-y-28 w-full">
            {/* 1. Intro block */}
            <motion.div variants={childVariants} className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-[#141414] border border-[#232323] rounded-full shadow-inner">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
                      Legal & Financial Audits
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F3] leading-[1.1]">
                    Auditing and compliance strategies designed to secure your growth and optimize your filings.
                  </h2>
                </div>
                <div className="space-y-6 lg:pt-14">
                  <p className="text-base md:text-lg text-[#8A8A87] leading-relaxed">
                    Scaling a business requires clean books, sound legal structures, and compliant tax filing frameworks. We audit your financial structures, copyright your creative properties, and manage your income tax filing and filings with our certified corporate legal and accounting partners.
                  </p>
                </div>
              </div>

              {/* Stats Counters Grid */}
              <div className="pt-12 border-t border-[#232323] grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-1 text-center md:text-left">
                  <div className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6]">
                    100%
                  </div>
                  <div className="text-xs text-[#8A8A87] uppercase tracking-wider font-mono">
                    Filing Accuracy
                  </div>
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <div className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6]">
                    50+
                  </div>
                  <div className="text-xs text-[#8A8A87] uppercase tracking-wider font-mono">
                    Corporate Audits Completed
                  </div>
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <div className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6]">
                    Zero
                  </div>
                  <div className="text-xs text-[#8A8A87] uppercase tracking-wider font-mono">
                    Compliance Issues
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Audit Services Grid */}
            <motion.div variants={childVariants} className="space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-[#141414] border border-[#232323] rounded-full shadow-inner">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
                    Core Solutions
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F3]">
                  Compliance & <span className="italic font-serif bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6]">Auditing Scope</span>
                </h2>
              </div>

              {/* Grid block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {auditCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#141414]/30 backdrop-blur-md border border-[#232323] hover:border-blue-500/20 p-8 rounded-[32px] flex flex-col justify-between min-h-[220px] transition-all duration-300 shadow-sm"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-medium text-[#F5F5F3] group-hover:text-blue-400 transition-colors duration-200">
                          {card.title}
                        </h3>
                        <span className="text-[10px] uppercase tracking-widest font-mono text-blue-400/90 font-semibold">
                          {card.tag}
                        </span>
                      </div>
                      <p className="text-sm text-[#8A8A87] leading-relaxed mt-4">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. FAQ */}
            <FAQ />

            {/* 4. Contact Form */}
            <Contact />
          </div>
        );

      case "about":
        const capabilities = [
          {
            name: "Cinematic Video Production",
            desc: "Hook viewers in the first 3 seconds with high-end shooting, pacing, sound design, and custom formatting for Reels & Ads.",
            tag: "Starts at Inquire",
          },
          {
            name: "Paid Advertising (Meta & Google)",
            desc: "Launch conversion-focused search, video, and social ad campaigns targeted to acquire high-value clients and drive traffic.",
            tag: "Starts at Inquire",
          },
          {
            name: "Video Post-Production",
            desc: "Premium editing services, visual pacing calibration, custom grading, graphic assets, and audio polishing retainers.",
            tag: "Starts at Inquire",
          },
          {
            name: "Performance Marketing",
            desc: "Funnels strategy, conversion rate tracking implementation, landing audits, and growth analytical diagnostics.",
            tag: "Starts at Inquire",
          },
        ];

        const timeline = [
          {
            role: "Founder & Lead Strategist",
            company: "Socialliftsolutions",
            duration: "2023 - Present",
            desc: "Developing performance marketing roadmaps, scripting commercials, and scaling client ad spend across social platforms.",
            status: "Active",
          },
          {
            role: "Lead Media Producer",
            company: "Socialliftsolutions",
            duration: "2020 - 2023",
            desc: "Directing commercial video shoots, coordinating edits, and launching Meta traffic tests.",
            status: "Completed",
          },
          {
            role: "Growth Analyst & Video Editor",
            company: "Independent Freelancing",
            duration: "2018 - 2020",
            desc: "Developing paid advertising campaigns, conversion rate hooks, and high-pacing video edits.",
            status: "Completed",
          },
        ];

        return (
          <div className="space-y-28 w-full">
            
            {/* 1. About Info and Stats Counters Grid */}
            <motion.div variants={childVariants} className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-[#141414] border border-[#232323] rounded-full shadow-inner">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
                      Who We Are
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F3] leading-[1.1]">
                    Socialliftsolutions is a creative digital marketing agency specializing in cinematic advertising.
                  </h2>
                </div>
                <div className="space-y-6 lg:pt-14">
                  <p className="text-base md:text-lg text-[#8A8A87] leading-relaxed">
                    By combining strategic storytelling with high-quality video production, we create impactful campaigns that engage audiences and deliver measurable results. Our expertise extends across Meta Ads, Google Ads, professional video editing, and social media handling.
                  </p>
                </div>
              </div>

              {/* Stats Counters Grid */}
              <div className="pt-12 border-t border-[#232323] grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-1 text-center md:text-left">
                  <div className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6]">
                    200+
                  </div>
                  <div className="text-xs text-[#8A8A87] uppercase tracking-wider font-mono">
                    Commercials Delivered
                  </div>
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <div className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6]">
                    4+ Years
                  </div>
                  <div className="text-xs text-[#8A8A87] uppercase tracking-wider font-mono">
                    Scaling Client Brands
                  </div>
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <div className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6]">
                    98%
                  </div>
                  <div className="text-xs text-[#8A8A87] uppercase tracking-wider font-mono">
                    Client Retention Rate
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Capabilities Section */}
            <motion.div variants={childVariants} className="space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-[#141414] border border-[#232323] rounded-full shadow-inner">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
                    Built With Passion
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F3]">
                  Your Growth, <span className="italic font-serif bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6]">Our Mission</span>
                </h2>
              </div>

              {/* Grid block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#141414]/30 backdrop-blur-md border border-[#232323] hover:border-blue-500/20 p-8 rounded-[32px] flex flex-col justify-between min-h-[220px] transition-all duration-300 shadow-sm"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-medium text-[#F5F5F3] group-hover:text-blue-400 transition-colors duration-200">
                          {cap.name}
                        </h3>
                        <span className="text-[10px] uppercase tracking-widest font-mono text-blue-400/90 font-semibold">
                          {cap.tag}
                        </span>
                      </div>
                      <p className="text-sm text-[#8A8A87] leading-relaxed mt-4">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. Timeline / Journey Section */}
            <motion.div variants={childVariants} className="space-y-12">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-[#141414] border border-[#232323] rounded-full shadow-inner">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
                    Our Journey
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F3]">
                  Our Expertise That <span className="italic font-serif bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6]">Creatively Evolves</span>
                </h2>
                <p className="text-[#8A8A87] text-sm md:text-base leading-relaxed">
                  We've grown through every campaign and creator partnership. Each project has sharpened our pacing, sound edits, and paid traffic hooks.
                </p>
              </div>

              {/* Chronological list */}
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="group border-b border-[#232323]/50 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-medium text-[#F5F5F3] group-hover:text-blue-400 transition-colors duration-200">
                          {item.role}
                        </h3>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider ${
                          item.status === "Active" 
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                            : "bg-[#232323] text-[#8A8A87]"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#8A8A87] font-mono">
                        {item.company} &nbsp;|&nbsp; {item.duration}
                      </p>
                      <p className="text-sm text-[#8A8A87] max-w-3xl pt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 4. FAQs Accordion */}
            <FAQ />

            {/* 5. Contact panel form */}
            <Contact />

          </div>
        );

      case "projects":
        const mockProjects = [
          { title: "Silo Commercial Ad", category: "Cinematic Ads", date: "Jan 2026" },
          { title: "Clarity Ads Launch", category: "Meta & Google Ads", date: "Nov 2025" },
          { title: "Reels Creator Growth", category: "Social Media Handling", date: "Aug 2025" },
        ];
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {mockProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                variants={childVariants}
                className="group bg-[#141414] border border-[#232323] rounded-2xl p-6 hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between h-[220px]"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-[#8A8A87] font-mono">{proj.date}</span>
                    <h3 className="text-xl font-medium text-[#F5F5F3] mt-2 group-hover:text-blue-400 transition-colors duration-200">
                      {proj.title}
                    </h3>
                  </div>
                  <div className="p-2 border border-[#232323] group-hover:border-blue-500/40 rounded-full text-[#8A8A87] group-hover:text-blue-400 transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 border border-[#232323] rounded-full text-[11px] text-[#8A8A87] uppercase tracking-wider font-semibold">
                    {proj.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "terms":
        return (
          <div className="space-y-8 max-w-3xl w-full">
            <motion.div variants={childVariants} className="space-y-4">
              <h2 className="text-2xl font-medium text-[#F5F5F3]">1. Acceptance of Terms</h2>
              <p className="text-base text-[#8A8A87] leading-relaxed">
                By accessing or using the services, paid campaigns, video editing production packages, or social media handling provided by Socialliftsolutions, you agree to be bound by these terms. If you do not agree, please do not use our services.
              </p>
            </motion.div>

            <motion.div variants={childVariants} className="space-y-4">
              <h2 className="text-2xl font-medium text-[#F5F5F3]">2. Custom Campaign Scope</h2>
              <p className="text-base text-[#8A8A87] leading-relaxed">
                Every client campaign is tailored to specific brand budgets and growth goals. Deliverables, shooting schedules, ad budgets, and retainers will be detailed in individual proposal agreements signed before kickoff.
              </p>
            </motion.div>

            <motion.div variants={childVariants} className="space-y-4">
              <h2 className="text-2xl font-medium text-[#F5F5F3]">3. Intellectual Property Rights</h2>
              <p className="text-base text-[#8A8A87] leading-relaxed">
                Unless otherwise specified in writing, cinematic ad creatives, scripted elements, and post-production video footage remain the intellectual property of Socialliftsolutions until invoice clearance, at which point licenses transfer as per contractual scopes.
              </p>
            </motion.div>

            <motion.div variants={childVariants} className="space-y-4">
              <h2 className="text-2xl font-medium text-[#F5F5F3]">4. Contact & Inquiries</h2>
              <p className="text-base text-[#8A8A87] leading-relaxed">
                For legal queries or terms questions, please reach Dinesh at <a href="mailto:hello@socialliftsolutions.com" className="text-[#F5F5F3] underline">hello@socialliftsolutions.com</a> or via phone/WhatsApp at <a href="tel:+918438646470" className="text-[#F5F5F3] underline font-mono font-semibold hover:text-blue-400">+91 84386 46470</a>.
              </p>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="min-h-screen bg-[#0A0A0A] w-full flex flex-col justify-start relative overflow-hidden"
    >
      {/* 1. Full Bleed Background Video Hero */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] w-full flex flex-col justify-center items-center bg-[#0A0A0A] border-b border-[#232323] overflow-hidden pt-28 pb-16">
        {/* Background video layer */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <video
            src="https://framerusercontent.com/assets/shkethPArotkZlMS0MbrQ6WEC78.mp4"
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover opacity-50 filter brightness-[0.8]"
          />
        </div>

        {/* Dot pattern overlay layer */}
        <img
          src="https://framerusercontent.com/images/BpfOumvX8P7lsL2wQSQv5LuVKg.svg"
          alt="dot pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none z-10"
        />

        {/* Glowing ice blue light orb */}
        <div className="absolute bottom-[10%] left-[50%] -translate-x-[50%] w-[320px] h-[100px] bg-blue-500/10 blur-[100px] pointer-events-none z-10 rounded-full" />

        {/* Shadow cover gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0A0A0A] z-10 pointer-events-none" />

        {/* Centered details */}
        <div className="relative z-20 max-w-[1280px] w-full mx-auto px-[5vw] flex flex-col items-center text-center space-y-6">
          
          {/* Capsule Back Button */}
          <motion.button
            variants={childVariants}
            onClick={onBack}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-[#141414]/85 backdrop-blur-md border border-[#232323] hover:border-blue-500 rounded-full text-xs font-semibold uppercase tracking-widest text-[#8A8A87] hover:text-white transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </motion.button>

          {/* Page Display Header */}
          <motion.h1
            variants={childVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-medium tracking-tight text-white leading-none bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#8BB4F8] to-[#3B82F6]"
          >
            {pageTitle}
          </motion.h1>

          {/* Subpage tagline */}
          <motion.p
            variants={childVariants}
            className="text-xs md:text-sm text-[#8A8A87] max-w-xl mx-auto leading-relaxed uppercase tracking-wider font-mono font-medium opacity-80"
          >
            {page === "about" && "/ Empowering brands with cinematic strategy & reels production"}
            {page === "projects" && "/ Selected paid advertising campaigns & commercials showcase"}
            {page === "terms" && "/ Terms of service for project scaling retainers"}
            {page === "audits" && "/ Audit frameworks, corporate filings, and legal compliance"}
          </motion.p>
        </div>
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="max-w-[1280px] w-full mx-auto px-[5vw] py-20 relative z-20 flex flex-col items-center">
        {renderContent()}
      </div>

    </motion.div>
  );
}
