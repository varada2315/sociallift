import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Audits", id: "audits" },
    { name: "Contact", id: "contact" },
  ];



  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/95 border-b border-[#232323] py-4"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-[5vw] flex items-center justify-between">
        {/* Left: Text Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
          className="flex items-center space-x-2 text-xl font-bold tracking-tight text-[#F5F5F3] hover:opacity-90 transition-opacity"
        >
          <span>Socialliftsolutions</span>
          <span className="text-blue-500">.</span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-10 text-sm font-medium text-[#8A8A87] tracking-wide">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("contact");
            }}
            className="px-6 py-2.5 border border-[#232323] hover:border-blue-500 hover:bg-blue-500 hover:text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
          >
            Start Your Growth
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
