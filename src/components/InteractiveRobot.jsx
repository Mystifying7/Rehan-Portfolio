import { useRef, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export function InteractiveRobot({ theme = "dark", compact = false }) {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768
      );
    }

    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "200px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Penetrate Shadow DOM and regular DOM to completely remove the Spline watermark
  useEffect(() => {
    const purgeAllWatermarks = () => {
      // 1. Regular DOM cleanup
      document
        .querySelectorAll(
          '#logo, #spline-logo, a[href*="spline.design"], a[href*="spline"], [class*="spline-watermark"]'
        )
        .forEach((el) => {
          el.style.setProperty("display", "none", "important");
          el.style.setProperty("opacity", "0", "important");
          el.style.setProperty("visibility", "hidden", "important");
          el.style.setProperty("pointer-events", "none", "important");
          try {
            el.remove();
          } catch {
            // ignore
          }
        });

      // 2. Penetrate any custom elements / shadowRoots (e.g. spline-viewer)
      document.querySelectorAll("*").forEach((node) => {
        if (node.shadowRoot) {
          if (!node.shadowRoot.querySelector("#anti-spline-watermark-style")) {
            const style = document.createElement("style");
            style.id = "anti-spline-watermark-style";
            style.textContent = `
              #logo, #spline-logo, a[href*="spline"], [class*="logo"], [class*="watermark"] {
                display: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
                width: 0 !important;
                height: 0 !important;
                position: absolute !important;
                z-index: -9999 !important;
              }
            `;
            node.shadowRoot.appendChild(style);
          }

          node.shadowRoot
            .querySelectorAll('#logo, #spline-logo, a[href*="spline"], a')
            .forEach((badge) => {
              badge.style.setProperty("display", "none", "important");
              badge.style.setProperty("opacity", "0", "important");
              badge.style.setProperty("visibility", "hidden", "important");
              badge.style.setProperty("pointer-events", "none", "important");
              try {
                badge.remove();
              } catch {
                // ignore
              }
            });
        }
      });
    };

    purgeAllWatermarks();
    const interval = setInterval(purgeAllWatermarks, 80);
    const timer = setTimeout(() => clearInterval(interval), 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const isDark = theme === "dark";
  const containerHeight = compact
    ? "h-[200px] md:h-[240px]"
    : "h-[320px] sm:h-[380px] md:h-[480px]";
  const splineHeight = compact
    ? "h-[260px] md:h-[300px]"
    : "h-[360px] sm:h-[420px] md:h-[520px]";

  return (
    <div
      ref={containerRef}
      style={{ touchAction: "pan-y" }}
      className={`relative w-full ${containerHeight} flex flex-col items-center justify-center overflow-hidden select-none rounded-3xl will-change-transform transform-gpu`}
    >
      {/* Dynamic 2D Gradient Backdrop */}
      <div
        className="absolute inset-0 rounded-3xl transition-colors duration-500 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 50% 60%, #0a1628 0%, #050d1f 60%, #020812 100%)"
            : "radial-gradient(ellipse at 50% 60%, #e8f4ff 0%, #d0e8ff 60%, #bddcff 100%)",
        }}
      />
      <div
        className="absolute inset-0 rounded-3xl opacity-25 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(circle, rgba(34,211,238,0.3) 1px, transparent 1px)"
            : "radial-gradient(circle, rgba(6,100,180,0.2) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse 70% 55% at 50% 55%, rgba(34,211,238,0.12) 0%, transparent 75%)"
            : "radial-gradient(ellipse 70% 55% at 50% 55%, rgba(6,140,255,0.1) 0%, transparent 75%)",
        }}
      />

      {/* Floating Accent Orbs */}
      <div
        className="absolute top-6 left-8 h-16 w-16 rounded-full blur-xl pointer-events-none opacity-20"
        style={{ background: isDark ? "#22d3ee" : "#3b82f6" }}
      />
      <div
        className="absolute bottom-8 right-8 h-20 w-20 rounded-full blur-xl pointer-events-none opacity-15"
        style={{ background: isDark ? "#6366f1" : "#60a5fa" }}
      />

      {/* Spline 3D Robot Container */}
      <div
        style={{ touchAction: "pan-y" }}
        className={`relative z-10 w-full ${splineHeight} flex items-center justify-center ${
          isMobile ? "pointer-events-none" : "cursor-grab active:cursor-grabbing"
        }`}
      >
        {isInView ? (
          <Spline scene="https://prod.spline.design/FcZ66SFMX1YbF-0I/scene.splinecode" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-9 w-9 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
          </div>
        )}
      </div>

      {/* Bottom-Right Futuristic Cyber Badge that completely covers and blends into the portfolio */}
      <div
        className={`absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 z-30 pointer-events-none flex items-center justify-center gap-2.5 rounded-2xl sm:rounded-full border px-4 py-2.5 min-w-[180px] sm:min-w-[200px] h-12 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
          isDark
            ? "border-cyan-400/50 bg-[#050d1f] text-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.35)]"
            : "border-slate-300 bg-white text-cyan-700 shadow-lg shadow-slate-300/60"
        }`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        </span>
        <span className="text-[11px] font-black tracking-wider uppercase">
          3D Companion • Live
        </span>
      </div>
    </div>
  );
}

export default InteractiveRobot;
