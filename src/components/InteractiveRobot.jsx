import { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export function InteractiveRobot({ theme = "dark", compact = false }) {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const onLoad = (splineApp) => {
    // Log all objects so we know the exact names in the scene
    const allObjects = splineApp.getAllObjects ? splineApp.getAllObjects() : [];
    console.log('[Spline] All objects:', allObjects.map(o => o.name));

    // Fire every known Spline event type on every object
    const eventTypes = ['mouseDown', 'mouseUp', 'mouseHover', 'mouseLeave', 'keyDown', 'lookAt', 'follow', 'start'];

    const fireAll = () => {
      for (const obj of allObjects) {
        if (!obj.name) continue;
        for (const ev of eventTypes) {
          try { splineApp.emitEvent(ev, obj.name); } catch (_) {}
        }
      }
      // Also try without specific targets (global)
      try { splineApp.emitEvent('start', 'Scene'); } catch (_) {}
      try { splineApp.emitEvent('mouseHover', 'Robot'); } catch (_) {}
    };

    // Fire immediately and then every 3 seconds
    setTimeout(fireAll, 600);
    intervalRef.current = setInterval(fireAll, 3000);
  };

  useEffect(() => {
    // Strip Spline watermark badges
    const removeWatermarks = () => {
      if (!containerRef.current) return;
      ['#logo', '#spline-logo', 'a[href*="spline"]'].forEach((sel) => {
        containerRef.current.querySelectorAll(sel).forEach((el) => {
          el.style.display = 'none';
          el.remove();
        });
      });
      document.querySelectorAll('#spline-logo, a[href*="spline.design"]').forEach((el) => el.remove());
    };
    removeWatermarks();
    const wmInterval = setInterval(removeWatermarks, 300);

    return () => {
      clearInterval(wmInterval);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const isDark = theme === "dark";
  const containerHeight = compact ? "h-[200px] md:h-[240px]" : "h-[380px] md:h-[500px]";
  const splineHeight = compact ? "h-[260px] md:h-[300px] -mb-10" : "h-[430px] md:h-[560px] -mb-16";

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${containerHeight} flex flex-col items-center justify-center overflow-hidden select-none rounded-3xl`}
    >
      {/* 2D Background */}
      <div className="absolute inset-0 rounded-3xl" style={{
        background: isDark
          ? "radial-gradient(ellipse at 50% 60%, #0a1628 0%, #050d1f 60%, #020812 100%)"
          : "radial-gradient(ellipse at 50% 60%, #e8f4ff 0%, #d0e8ff 60%, #bddcff 100%)",
      }} />
      <div className="absolute inset-0 rounded-3xl opacity-30" style={{
        backgroundImage: isDark
          ? "radial-gradient(circle, rgba(34,211,238,0.35) 1px, transparent 1px)"
          : "radial-gradient(circle, rgba(6,100,180,0.25) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />
      <div className="absolute inset-0 rounded-3xl" style={{
        background: isDark
          ? "radial-gradient(ellipse 70% 55% at 50% 55%, rgba(34,211,238,0.14) 0%, transparent 75%)"
          : "radial-gradient(ellipse 70% 55% at 50% 55%, rgba(6,140,255,0.12) 0%, transparent 75%)",
      }} />

      {/* Floating orbs */}
      <motion.div animate={{ y: [0, -12, 0], opacity: [0.18, 0.32, 0.18] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-8 h-16 w-16 rounded-full blur-2xl" style={{ background: isDark ? "#22d3ee55" : "#3b82f655" }} />
      <motion.div animate={{ y: [0, 10, 0], opacity: [0.12, 0.24, 0.12] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 right-8 h-20 w-20 rounded-full blur-2xl" style={{ background: isDark ? "#6366f155" : "#60a5fa55" }} />

      {/* Spline robot */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -80, bottom: 80 }}
        dragElastic={0.25}
        dragSnapToOrigin={true}
        className={`relative z-10 cursor-grab active:cursor-grabbing w-full ${splineHeight} flex items-center justify-center`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Spline
          scene="https://prod.spline.design/FcZ66SFMX1YbF-0I/scene.splinecode"
          onLoad={onLoad}
        />
      </motion.div>
    </div>
  );
}

export default InteractiveRobot;
