import { motion } from "framer-motion";
function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-cyan-400/40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.2,
          }}
          animate={{
            y: [null, -100],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default Background;