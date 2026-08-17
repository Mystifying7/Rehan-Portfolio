export function Background3D({ theme = "dark" }) {
  const isDark = theme === "dark";

  const bg = isDark ? "#060f1e" : "#f0f4ff";
  const gridColor = isDark
    ? "rgba(30,80,140,0.22)"
    : "rgba(100,140,220,0.22)";

  return (
    <div
      className="fixed inset-0 z-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      <style>{`
        @keyframes gpuGridMove {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(48px, 48px, 0);
          }
        }
        .gpu-animated-grid {
          position: absolute;
          top: -96px;
          left: -96px;
          width: calc(100% + 192px);
          height: calc(100% + 192px);
          will-change: transform;
          transform: translate3d(0, 0, 0);
          animation: gpuGridMove 6s linear infinite;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
      <div
        className="gpu-animated-grid"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

export default Background3D;
