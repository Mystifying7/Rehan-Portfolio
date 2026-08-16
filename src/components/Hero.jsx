import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles, Terminal } from "lucide-react";
import ThreeIDCard from "./ThreeIDCard";

const roles = [
  "AI & ML Engineer",
  "Python & Computer Vision",
  "React & Flask Developer",
  "Computer Science Student",
];

const techStack = [
  "Python",
  "Machine Learning",
  "Computer Vision",
  "React",
  "Java",
  "Flask",
  "Git",
];

function Hero({ theme = "dark" }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Top Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Radial Glow Overlay */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 ${
          isDark
            ? "bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.14),transparent_60%)]"
            : "bg-[radial-gradient(circle_at_50%_35%,rgba(14,165,233,0.12),transparent_60%)]"
        }`}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left"
        >
          {/* Status Badge */}
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold shadow-xl backdrop-blur-xl ${
              isDark
                ? "border-cyan-400/40 bg-slate-900/70 text-cyan-300 shadow-cyan-500/10"
                : "border-cyan-500/30 bg-white/80 text-cyan-700 shadow-slate-300/40"
            }`}
          >
            <Sparkles size={14} className="text-cyan-400 animate-pulse" />
            <span>AI & Machine Learning Engineering</span>
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          </div>

          {/* Name & Title */}
          <p
            className={`mb-2 text-sm font-extrabold uppercase tracking-[0.25em] ${
              isDark ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            Md Rehan Alam
          </p>

          <h1
            className={`text-4xl font-black leading-tight sm:text-5xl md:text-6xl tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Building{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 bg-clip-text text-transparent">
              Intelligent Software
            </span>
            <br />
            for Real-World Impact
          </h1>

          {/* Role Rotator */}
          <div className="mt-4 h-8 text-lg font-bold sm:text-xl">
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`inline-flex items-center gap-2 ${
                isDark ? "text-cyan-300" : "text-cyan-700"
              }`}
            >
              <Terminal size={18} className="text-cyan-400" />
              {roles[roleIndex]}
            </motion.span>
          </div>

          {/* Bio */}
          <p
            className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Computer Science student at Swami Vivekananda University focused on Artificial Intelligence, Machine Learning, Computer Vision, and full-stack software development.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex w-full max-w-md flex-col gap-3.5 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-7 py-3.5 font-bold text-slate-950 shadow-xl shadow-cyan-400/30 transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
            >
              Explore Projects
              <ArrowDown size={17} />
            </a>

            <a
              href="https://drive.google.com/file/d/1OU3D8z2AB95H2S-mMWdrHhmAw4Hu6eIZ/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-xl border px-7 py-3.5 font-bold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "border-white/15 bg-slate-900/70 text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                  : "border-slate-300 bg-white/80 text-cyan-700 hover:border-cyan-500/50 hover:bg-cyan-50"
              }`}
            >
              Download Resume
              <Download size={17} />
            </a>
          </div>

          {/* Tech Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {techStack.map((tech) => (
              <span
                key={tech}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-xl transition-all duration-300 ${
                  isDark
                    ? "border-white/15 bg-slate-900/60 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300"
                    : "border-slate-300 bg-white/80 text-slate-700 hover:border-cyan-500/50 hover:text-cyan-700"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: 3D ID Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:col-span-5"
        >
          <ThreeIDCard theme={theme} />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#stats"
        className="absolute bottom-6 flex flex-col items-center text-cyan-400 transition hover:scale-110"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cyan-400/60 p-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
        </div>
      </a>
    </section>
  );
}

export default Hero;