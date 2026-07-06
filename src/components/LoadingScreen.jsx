import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]"
    >
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-3xl font-black text-cyan-400 shadow-2xl shadow-cyan-400/20"
        >
          R
        </motion.div>

        <h1 className="text-xl font-bold text-white">Rehan Alam</h1>

        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
          AI • Machine Learning • Software
        </p>

        <div className="mt-6 flex justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
              className="h-2 w-2 rounded-full bg-cyan-400"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;