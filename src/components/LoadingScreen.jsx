import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Cpu, Terminal } from "lucide-react";

const LOADING_STEPS = [
  "Initializing Neural Weights...",
  "Loading Machine Learning & Scikit-Learn Pipelines...",
  "Starting OpenCV & MediaPipe Computer Vision...",
  "Rendering 3D WebGL Particle Constellation...",
  "Portfolio Ready • Welcome!",
];

export function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 5;
        const boundedNext = Math.min(next, 100);

        const sIndex = Math.min(
          Math.floor((boundedNext / 100) * LOADING_STEPS.length),
          LOADING_STEPS.length - 1
        );
        setStepIndex(sIndex);

        return boundedNext;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={onFinish}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] px-6 text-white cursor-pointer select-none"
      >
        {/* Background Radial Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_65%)]" />

        {/* Central Glowing AI Neural Core */}
        <div className="relative mb-6 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/40 bg-gradient-to-tr from-cyan-950/80 via-slate-900 to-sky-950/80 shadow-[0_0_35px_rgba(34,211,238,0.35)] backdrop-blur-xl"
          >
            <div className="absolute inset-1.5 rounded-2xl border border-cyan-300/30 bg-slate-950/90 flex items-center justify-center">
              <Cpu size={32} className="text-cyan-400 animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold text-cyan-300">
            <Sparkles size={13} className="text-cyan-400 animate-pulse" />
            MD REHAN ALAM
          </div>
          <h2 className="mt-2 text-lg font-black uppercase tracking-wider text-white sm:text-xl">
            AI & Machine Learning Engineering
          </h2>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="mt-6 w-full max-w-md">
          <div className="mb-2 flex items-center justify-between text-xs font-mono font-bold">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <Terminal size={14} className="text-cyan-400" />
              {LOADING_STEPS[stepIndex]}
            </span>
            <span className="text-cyan-400">{progress}%</span>
          </div>

          {/* Track Bar */}
          <div className="h-2.5 w-full overflow-hidden rounded-full border border-cyan-400/30 bg-slate-900 p-0.5 shadow-inner">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-md shadow-cyan-400/50"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          </div>
        </div>

        {/* Status Indicator & Interactive Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-400"
        >
          <Cpu size={14} className="text-cyan-400" />
          <span>Click anywhere to enter instantly</span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default LoadingScreen;