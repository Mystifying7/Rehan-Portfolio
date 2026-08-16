export function Background3D({ theme = "dark" }) {
  const isDark = theme === "dark";

  const bg = isDark ? "#060f1e" : "#f0f4ff";
  const gridColor = isDark
    ? "rgba(30,80,140,0.18)"
    : "rgba(100,140,220,0.20)";

  return (
    <>
      <style>{`
        @keyframes gridMove {
          0%   { background-position: 0px 0px; }
          100% { background-position: 48px 48px; }
        }
        .animated-grid {
          transform: translateZ(0);
          will-change: auto;
        }
        @media (min-width: 769px) {
          .animated-grid {
            animation: gridMove 12s linear infinite;
          }
        }
      `}</style>
      <div
        className="animated-grid fixed inset-0 z-0 w-full h-full pointer-events-none"
        style={{
          backgroundColor: bg,
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
    </>
  );
}

export default Background3D;
