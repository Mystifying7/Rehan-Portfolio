import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 220,
    damping: 24,
    mass: 0.2,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 220,
    damping: 24,
    mass: 0.2,
  });

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
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9995] hidden h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl md:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? (hovering ? 0.7 : 0.35) : 0,
          scale: hovering ? 1.35 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

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
          scale: clicking ? 0.78 : hovering ? 1.18 : 1,
          rotate: hovering ? 8 : 0,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 420,
            damping: 22,
          },
          rotate: {
            duration: 0.2,
          },
        }}
      >
        <svg
          width="34"
          height="40"
          viewBox="0 0 34 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_8px_rgba(34,211,238,0.95)]"
        >
          <path
            d="M17 4V31"
            stroke="rgb(103 232 249)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path
            d="M17 12C12.5 12 9.5 9.5 9.5 5.5"
            stroke="rgb(103 232 249)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path
            d="M17 12C21.5 12 24.5 9.5 24.5 5.5"
            stroke="rgb(103 232 249)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path
            d="M9.5 5.5L6.5 9"
            stroke="rgb(103 232 249)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path
            d="M9.5 5.5L10 1.8"
            stroke="rgb(103 232 249)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path
            d="M24.5 5.5L27.5 9"
            stroke="rgb(103 232 249)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path
            d="M24.5 5.5L24 1.8"
            stroke="rgb(103 232 249)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path
            d="M17 4L14.7 7.5"
            stroke="rgb(103 232 249)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path
            d="M17 4L19.3 7.5"
            stroke="rgb(103 232 249)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path
            d="M12.5 31H21.5"
            stroke="rgb(103 232 249)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path
            d="M17 31V37"
            stroke="rgb(103 232 249)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </>
  );
}

export default CursorGlow;