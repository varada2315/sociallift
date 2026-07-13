import { useState } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Awards from "./sections/Awards";
import Team from "./sections/Team";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import StubPage from "./sections/Stubs";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigate = (id: string) => {
    if (id === "home") {
      setCurrentPage("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "blog" || id === "about" || id === "projects" || id === "audits") {
      // These are styled sub-page stubs
      setCurrentPage(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Services and Contact scroll to the homepage section
      setCurrentPage("home");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F3] font-sans antialiased min-h-screen relative">
      {/* Sticky Navigation */}
      <Navbar onNavigate={handleNavigate} />

      {/* Global Interactive Custom Cursor */}
      <CustomCursor />

      {/* Main Content Area */}
      {currentPage === "home" ? (
        <main className="relative z-10 bg-[#0A0A0A]">
          {/* 1. Hero Landing */}
          <Hero onContactClick={() => handleNavigate("contact")} />

          {/* 2. Services Rows */}
          <Services />

          {/* 4. About Details */}
          <About />

          {/* 5. Portfolio Grid */}
          <Projects onNavigate={handleNavigate} />

          {/* 6. Process Flow */}
          <Process />

          {/* 7. Awards Recognition */}
          <Awards />

          {/* 8. Team Members Carousel */}
          <Team />

          {/* 9. Pricing Schemes */}
          <Pricing />

          {/* 11. FAQ Accordions */}
          <FAQ />

          {/* 12. Contact Form */}
          <Contact />
        </main>
      ) : (
        /* Stub pages for sub-routes */
        <main className="relative z-10 bg-[#0A0A0A]">
          <StubPage page={currentPage} onBack={() => handleNavigate("home")} />
        </main>
      )}

      {/* Footer and Wordmark */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
