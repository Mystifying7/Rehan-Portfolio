import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-3xl font-black text-cyan-400 shadow-2xl shadow-cyan-400/20"
        >
          R
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl font-bold text-white"
        >
          Rehan Alam
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500"
        >
          AI • Machine Learning • Software
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ delay: 0.5, duration: 1.2, repeat: Infinity }}
          className="mt-6 text-sm font-medium text-cyan-400"
        >
          Initializing Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;