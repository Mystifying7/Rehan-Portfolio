import React from "react";

function AboutMarquee({ theme = "dark" }) {
  const isDark = theme === "dark";

  const words = [
    "ABOUT ME",
    "ABOUT ME",
    "ABOUT ME",
    "ABOUT ME",
    "ABOUT ME",
    "ABOUT ME",
  ];

  return (
    <div className="relative w-full overflow-hidden py-3 sm:py-5 my-4 sm:my-6 select-none contain-paint">
      <style>{`
        @keyframes pureMarqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes pureMarqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-left-track {
          display: flex;
          flex-shrink: 0;
          will-change: transform;
          animation: pureMarqueeLeft 12s linear infinite;
        }
        .marquee-right-track {
          display: flex;
          flex-shrink: 0;
          will-change: transform;
          animation: pureMarqueeRight 12s linear infinite;
        }
      `}</style>

      {/* Top Cyber Accent Glow Line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent 0%, rgba(0, 242, 254, 0.9) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(2, 132, 199, 0.8) 50%, transparent 100%)",
          boxShadow: isDark ? "0 0 10px #00f2fe" : "0 0 6px rgba(2, 132, 199, 0.4)",
        }}
      />

      {/* Cyber Background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundColor: isDark ? "#040b18" : "#f0f8ff",
          backgroundImage: isDark
            ? "linear-gradient(to right, rgba(0, 242, 254, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 242, 254, 0.06) 1px, transparent 1px)"
            : "linear-gradient(to right, rgba(2, 132, 199, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 132, 199, 0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Marquee Continuous Rows */}
      <div className="w-full overflow-hidden flex flex-col gap-1.5 sm:gap-2.5 py-1">
        {/* Row 1: Left Continuous Loop */}
        <div className="flex overflow-hidden">
          <div className="marquee-left-track">
            {[...words, ...words].map((item, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex items-center mx-3 sm:mx-6 shrink-0"
              >
                <span
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider"
                  style={{
                    color: isDark ? "#00f2fe" : "#0284c7",
                    textShadow: isDark
                      ? "0 0 12px rgba(0, 242, 254, 0.6)"
                      : "0 0 8px rgba(2, 132, 199, 0.3)",
                  }}
                >
                  ABOUT
                </span>
                <span
                  className="ml-2 sm:ml-3 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white"
                  style={{
                    color: isDark ? "#ffffff" : "#0f172a",
                    textShadow: isDark
                      ? "0 0 10px rgba(255, 255, 255, 0.4)"
                      : "none",
                  }}
                >
                  ME
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right Continuous Loop */}
        <div className="flex overflow-hidden">
          <div className="marquee-right-track">
            {[...words, ...words].map((item, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex items-center mx-3 sm:mx-6 shrink-0"
              >
                <span
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider"
                  style={{
                    color: isDark ? "#00f2fe" : "#0284c7",
                    textShadow: isDark
                      ? "0 0 12px rgba(0, 242, 254, 0.6)"
                      : "0 0 8px rgba(2, 132, 199, 0.3)",
                  }}
                >
                  ABOUT
                </span>
                <span
                  className="ml-2 sm:ml-3 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white"
                  style={{
                    color: isDark ? "#ffffff" : "#0f172a",
                    textShadow: isDark
                      ? "0 0 10px rgba(255, 255, 255, 0.4)"
                      : "none",
                  }}
                >
                  ME
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Cyber Accent Glow Line */}
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent 0%, rgba(0, 242, 254, 0.9) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(2, 132, 199, 0.8) 50%, transparent 100%)",
          boxShadow: isDark ? "0 0 10px #00f2fe" : "0 0 6px rgba(2, 132, 199, 0.4)",
        }}
      />
    </div>
  );
}

export default AboutMarquee;
