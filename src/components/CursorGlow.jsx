import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Trailing spring physics for spark trail
  const spring1X = useSpring(mouseX, { stiffness: 350, damping: 25 });
  const spring1Y = useSpring(mouseY, { stiffness: 350, damping: 25 });

  const spring2X = useSpring(mouseX, { stiffness: 220, damping: 22 });
  const spring2Y = useSpring(mouseY, { stiffness: 220, damping: 22 });

  const spring3X = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const spring3Y = useSpring(mouseY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);

      const target = event.target;
      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setHovering(Boolean(interactive));
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Background Soft Glow Aura */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9994] hidden h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl md:block"
        style={{
          x: spring3X,
          y: spring3Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? (hovering ? 0.8 : 0.4) : 0,
          scale: hovering ? 1.4 : 1,
        }}
      />

      {/* Trailing Spark 3 (Smallest & Slowest) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9995] hidden h-1.5 w-1.5 rounded-full bg-sky-400/60 shadow-[0_0_8px_#38bdf8] md:block"
        style={{
          x: spring2X,
          y: spring2Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 0.6 : 0,
          scale: hovering ? 1.3 : 1,
        }}
      />

      {/* Trailing Spark 2 (Medium) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9996] hidden h-2.5 w-2.5 rounded-full bg-cyan-300/80 shadow-[0_0_10px_#22d3ee] md:block"
        style={{
          x: spring1X,
          y: spring1Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 0.8 : 0,
          scale: hovering ? 1.2 : 1,
        }}
      />

      {/* Main Neural Spark Diamond Core */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.75 : hovering ? 1.4 : 1,
          rotate: hovering ? 90 : 45,
        }}
        transition={{
          rotate: { duration: 0.3, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 400, damping: 20 },
        }}
      >
        {/* SVG Glowing Diamond */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_12px_rgba(34,211,238,0.95)]"
        >
          {/* Outer Diamond Shell */}
          <polygon
            points="13,2 24,13 13,24 2,13"
            fill="rgba(34, 211, 238, 0.2)"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Inner Glowing Core Diamond */}
          <polygon points="13,7 19,13 13,19 7,13" fill="#38bdf8" />

          {/* Central Neural Node */}
          <circle cx="13" cy="13" r="2" fill="#ffffff" />
        </svg>
      </motion.div>
    </>
  );
}

export default CursorGlow;