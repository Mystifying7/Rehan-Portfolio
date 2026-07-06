import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import profile from "../assets/images/profile.png";
import ParticleBackground from "./ParticleBackground";

const roles = [
  "AI & ML Learner",
  "Python Programmer",
  "React Developer",
  "Computer Science Student",
];

const techStack = [
  "Python",
  "Machine Learning",
  "React",
  "Java",
  "Linux",
  "Git",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 text-center"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#020617]" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_40%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center"
      >
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

          <img
            src={profile}
            alt="Rehan Alam"
            className="relative h-32 w-32 rounded-full border border-cyan-400/30 object-cover shadow-2xl shadow-cyan-400/20 sm:h-40 sm:w-40 md:h-52 md:w-52"
          />
        </motion.div>

        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-300 backdrop-blur-md sm:text-sm">
          <Sparkles size={15} />
          Available for learning, projects & opportunities
        </div>

        {/* Name */}
        <p className="mb-3 text-base font-semibold text-cyan-400 sm:text-lg">
          Hi, I'm Rehan Alam
        </p>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
          Building{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Intelligent Software
          </span>
          <br />
          for the Future
        </h1>

        {/* Animated Role */}
        <div className="mt-5 h-7 text-lg font-semibold text-slate-300 sm:text-xl">
          <motion.span
            key={roles[roleIndex]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {roles[roleIndex]}
          </motion.span>
        </div>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg">
          Computer Science student focused on Artificial Intelligence,
          Machine Learning, Python, and building practical software projects.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
          >
            View Projects
            <ArrowDown size={17} />
          </a>

          <a
            href="/certificates/Rehan Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 px-7 py-3 font-bold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10"
          >
            Download Resume
            <Download size={17} />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#stats"
          className="mt-12 flex flex-col items-center text-cyan-400"
        >
          <div className="flex h-11 w-6 items-start justify-center rounded-full border-2 border-cyan-400 p-1.5">
            <div className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;