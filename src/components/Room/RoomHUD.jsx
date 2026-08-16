import { Box, ScrollText, Volume2, VolumeX, Sparkles } from "lucide-react";

export function RoomHUD({ mode, onToggleMode, soundEnabled, onToggleSound }) {
  return (
    <header className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-slate-950/85 px-4 py-2.5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:gap-5 md:px-6">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 font-extrabold text-slate-950 shadow-md shadow-cyan-400/30"
        >
          R
        </a>

        {/* HUD Title */}
        <div className="hidden flex-col md:flex">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400">
            <Sparkles size={13} />
            AI Lab System
          </span>
          <span className="text-[11px] text-slate-400">Rehan Alam Portfolio</span>
        </div>

        {/* View Mode Toggle Switch */}
        <div className="flex items-center rounded-xl border border-white/10 bg-slate-900/90 p-1">
          <button
            onClick={() => onToggleMode("room")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              mode === "room"
                ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
                : "text-slate-400 hover:text-cyan-300"
            }`}
          >
            <Box size={14} />
            3D AI Room
          </button>

          <button
            onClick={() => onToggleMode("classic")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              mode === "classic"
                ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
                : "text-slate-400 hover:text-cyan-300"
            }`}
          >
            <ScrollText size={14} />
            Classic Scroll
          </button>
        </div>

        {/* Sound Toggle */}
        <button
          onClick={onToggleSound}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/90 text-cyan-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
          title={soundEnabled ? "Mute Cyber Ambience" : "Enable Cyber Ambience"}
        >
          {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
      </div>
    </header>
  );
}

export default RoomHUD;
