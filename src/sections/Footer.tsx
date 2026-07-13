import { ArrowUp } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Audits", id: "audits" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#232323] pt-20 pb-8 z-10">
      <div className="max-w-[1280px] mx-auto px-[5vw] space-y-16">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
          
          {/* Col 1: Location */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#8A8A87] font-semibold">
              / Location
            </span>
            <div className="text-sm text-[#8A8A87] leading-relaxed space-y-1 font-light">
              <p>Chennai, India</p>
            </div>
          </div>

          {/* Col 2: Contact */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#8A8A87] font-semibold">
              / Contact
            </span>
            <div className="text-sm text-[#8A8A87] leading-relaxed space-y-1 font-light">
              <p>
                <a href="mailto:hello@socialliftsolutions.com" className="hover:text-[#FFFFFF] transition-colors duration-200">
                  hello@socialliftsolutions.com
                </a>
              </p>
              <p>
                <a href="tel:+918438646470" className="hover:text-[#FFFFFF] transition-colors duration-200">
                  +91 84386 46470
                </a>
              </p>
            </div>
          </div>

          {/* Col 3: Links */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#8A8A87] font-semibold">
              / Navigation
            </span>
            <ul className="text-sm text-[#8A8A87] space-y-2 font-light">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="hover:text-[#FFFFFF] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Socials */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#8A8A87] font-semibold">
              / Socials
            </span>
            <ul className="text-sm text-[#8A8A87] space-y-2 font-light">
              <li>
                <a href="https://www.instagram.com/socialliftsolutions?igsh=cWRjdGg1YWUxc25x" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFFFF] transition-colors duration-200">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/918438646470" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFFFF] transition-colors duration-200">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFFFF] transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Faint wordmark text across the bottom */}
        <div className="pt-8 select-none pointer-events-none border-t border-[#232323]/30">
          <h2 className="text-[7.5vw] font-bold text-[#141414] tracking-tighter text-center uppercase leading-[0.8] font-sans">
            Socialliftsolutions.
          </h2>
        </div>

        {/* Copyright Line + Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#232323]/50 text-xs text-[#8a8a87] font-mono relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p>© 2024 Socialliftsolutions. All Rights Reserved.</p>
            <span className="hidden sm:inline text-[#232323]">|</span>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("terms");
              }}
              className="hover:text-[#FFFFFF] transition-colors duration-200 underline sm:no-underline"
            >
              Terms of Service
            </a>
          </div>
          
          <a
            href="#"
            onClick={handleBackToTop}
            className="group flex items-center space-x-2 text-[#8A8A87] hover:text-[#FFFFFF] transition-colors duration-200"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>

      </div>
    </footer>
  );
}
