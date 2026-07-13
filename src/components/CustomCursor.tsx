import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springConfig = { stiffness: 300, damping: 30 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of width/height (120px / 2 = 60px) to center it under mouse
      mouseX.set(e.clientX - 60);
      mouseY.set(e.clientY - 60);

      const target = e.target as HTMLElement | null;
      if (target) {
        const hasProjectCursor = target.closest('[data-cursor="project"]');
        if (hasProjectCursor) {
          setIsVisible(true);
          document.body.classList.add("custom-cursor-active");
        } else {
          setIsVisible(false);
          document.body.classList.remove("custom-cursor-active");
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.classList.remove("custom-cursor-active");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
          }}
          className="fixed top-0 left-0 w-[120px] h-[120px] rounded-full bg-[#F5F5F3] text-[#0A0A0A] flex items-center justify-center pointer-events-none z-50 font-sans text-xs font-semibold uppercase tracking-widest shadow-2xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          View Project
        </motion.div>
      )}
    </AnimatePresence>
  );
}
