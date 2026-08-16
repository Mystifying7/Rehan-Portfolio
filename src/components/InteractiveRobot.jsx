import { useRef, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export function InteractiveRobot({ theme = "dark", compact = false }) {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Lazy render / pause Spline when scrolled out of view to save Android GPU memory
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "150px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const onLoad = (splineApp) => {
    const allObjects = splineApp.getAllObjects ? splineApp.getAllObjects() : [];

    const fireAll = () => {
      const eventTypes = ["mouseHover", "start", "follow"];
      for (const obj of allObjects) {
        if (!obj.name) continue;
        for (const ev of eventTypes) {
          try {
            splineApp.emitEvent(ev, obj.name);
          } catch {
            // ignore unsupported events
          }
        }
      }
      try {
        splineApp.emitEvent("start", "Scene");
      } catch {
        // ignore
      }
      try {
        splineApp.emitEvent("mouseHover", "Robot");
      } catch {
        // ignore
      }
    };

    setTimeout(fireAll, 600);
    intervalRef.current = setInterval(fireAll, 4000);
  };

  useEffect(() => {
    // Strip Spline watermark badges cleanly
    const removeWatermarks = () => {
      if (!containerRef.current) return;
      ["#logo", "#spline-logo", 'a[href*="spline"]'].forEach((sel) => {
        containerRef.current.querySelectorAll(sel).forEach((el) => {
          el.style.display = "none";
          el.remove();
        });
      });
      document
        .querySelectorAll('#spline-logo, a[href*="spline.design"]')
        .forEach((el) => el.remove());
    };

    removeWatermarks();
    const wmInterval = setInterval(removeWatermarks, 500);

    return () => {
      clearInterval(wmInterval);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const isDark = theme === "dark";
  const containerHeight = compact
    ? "h-[200px] md:h-[240px]"
    : "h-[380px] md:h-[500px]";
  const splineHeight = compact
    ? "h-[260px] md:h-[300px] -mb-10"
    : "h-[430px] md:h-[560px] -mb-16";

  return (
    <div
      ref={containerRef}
      style={{ touchAction: "pan-y" }}
      className={`relative w-full ${containerHeight} flex flex-col items-center justify-center overflow-hidden select-none rounded-3xl`}
    >
      {/* 2D Background */}
      <div
        className="absolute inset-0 rounded-3xl transition-colors duration-500"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 50% 60%, #0a1628 0%, #050d1f 60%, #020812 100%)"
            : "radial-gradient(ellipse at 50% 60%, #e8f4ff 0%, #d0e8ff 60%, #bddcff 100%)",
        }}
      />
      <div
        className="absolute inset-0 rounded-3xl opacity-30"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(circle, rgba(34,211,238,0.35) 1px, transparent 1px)"
            : "radial-gradient(circle, rgba(6,100,180,0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: isDark
            ? "radial-gradient(ellipse 70% 55% at 50% 55%, rgba(34,211,238,0.14) 0%, transparent 75%)"
            : "radial-gradient(ellipse 70% 55% at 50% 55%, rgba(6,140,255,0.12) 0%, transparent 75%)",
        }}
      />

      {/* Floating orbs (CSS animated, GPU accelerated) */}
      <div
        className="absolute top-6 left-8 h-16 w-16 rounded-full blur-xl pointer-events-none opacity-25"
        style={{ background: isDark ? "#22d3ee" : "#3b82f6" }}
      />
      <div
        className="absolute bottom-8 right-8 h-20 w-20 rounded-full blur-xl pointer-events-none opacity-20"
        style={{ background: isDark ? "#6366f1" : "#60a5fa" }}
      />

      {/* Spline 3D Waving Robot with Viewport Optimization */}
      <motion.div
        drag
        dragConstraints={{ left: -80, right: 80, top: -60, bottom: 60 }}
        dragElastic={0.2}
        dragSnapToOrigin={true}
        className={`relative z-10 cursor-grab active:cursor-grabbing w-full ${splineHeight} flex items-center justify-center`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isInView ? (
          <Spline
            scene="https://prod.spline.design/FcZ66SFMX1YbF-0I/scene.splinecode"
            onLoad={onLoad}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-10 w-10 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default InteractiveRobot;
