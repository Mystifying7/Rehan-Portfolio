import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Code2, Brain, GraduationCap, Target, Sparkles } from "lucide-react";

const journey = [
  {
    id: "2024",
    year: "2024",
    title: "Started B.Tech in Computer Science",
    description:
      "Began studying Computer Science with a focus on programming fundamentals, C, Python, and core algorithms.",
    icon: <GraduationCap size={15} />,
    skills: ["Python Basics", "C Programming", "Logic Building", "CS Fundamentals"],
  },
  {
    id: "2025",
    year: "2025",
    title: "Data Structures & Algorithms Mastery",
    description:
      "Strengthening problem-solving skills through Java, Object-Oriented Programming, and solving 400+ DSA problems.",
    icon: <Code2 size={15} />,
    skills: ["Java OOP", "DSA Problem Solving", "LeetCode / GFG", "NPTEL Silver Rank"],
  },
  {
    id: "2026",
    year: "2026",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Building production ML & Computer Vision projects using OpenCV, MediaPipe, Scikit-Learn, FastAPI, and Flask.",
    icon: <Brain size={15} />,
    skills: ["Machine Learning", "Computer Vision", "Scikit-Learn", "FastAPI & Flask"],
  },
  {
    id: "Goal",
    year: "Goal",
    title: "AI and ML Engineer",
    description:
      "Aiming to build intelligent systems that solve high-impact real-world problems using AI, ML, and software engineering.",
    icon: <Target size={15} />,
    skills: ["Deep Learning", "LLMs & GenAI", "Scalable AI Pipelines", "MLOps"],
  },
];

function Experience({ theme = "dark" }) {
  const [selectedYear, setSelectedYear] = useState("All");
  const isDark = theme === "dark";

  const filteredJourney =
    selectedYear === "All"
      ? journey
      : journey.filter((item) => item.year === selectedYear);

  return (
    <section id="journey" className="px-6 py-10">
      <SectionReveal>
        <div
          className={`mx-auto max-w-5xl rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition duration-300 ${
            isDark
              ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
              : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
          }`}
        >
          {/* Header */}
          <div className="mb-6 text-center">
            <p
              className={`text-xs font-bold uppercase tracking-[0.35em] ${
                isDark ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              Journey
            </p>
            <h2
              className={`mt-2 text-3xl font-extrabold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Learning Journey Roadmap
            </h2>
            <p
              className={`mx-auto mt-2 max-w-lg text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              My growth trajectory from core programming to Machine Learning & AI Engineering.
            </p>
          </div>

          {/* Interactive Year Stepper Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {["All", "2024", "2025", "2026", "Goal"].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  selectedYear === yr
                    ? "bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 shadow-lg shadow-cyan-400/30 scale-105"
                    : isDark
                    ? "border border-white/10 bg-slate-950/60 text-slate-400 hover:border-cyan-400/40 hover:text-cyan-300"
                    : "border border-slate-300 bg-slate-100 text-slate-600 hover:border-cyan-500/40 hover:text-cyan-600"
                }`}
              >
                {yr === "Goal" && <Sparkles size={12} />}
                {yr}
              </button>
            ))}
          </div>

          {/* Vertical Timeline */}
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-sky-400 to-amber-400 opacity-30" />

            <div className="space-y-6">
              {filteredJourney.map((item) => {
                const isSelected = selectedYear === item.year || selectedYear === "All";

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex gap-5"
                  >
                    {/* Node Icon */}
                    <div
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border shadow-lg transition-all duration-300 ${
                        isDark
                          ? item.year === "Goal"
                            ? "border-amber-400/60 bg-slate-950 text-amber-300 shadow-amber-400/20"
                            : "border-cyan-400/50 bg-slate-950 text-cyan-400 shadow-cyan-400/20"
                          : item.year === "Goal"
                          ? "border-amber-500 bg-white text-amber-600 shadow-amber-500/20"
                          : "border-cyan-500 bg-white text-cyan-600 shadow-cyan-500/20"
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Milestone Card */}
                    <motion.div
                      whileHover={{ scale: 1.01, x: 4 }}
                      className={`group relative w-full overflow-hidden rounded-2xl border p-5 shadow-xl backdrop-blur-xl transition-all duration-300 ${
                        isDark
                          ? isSelected
                            ? "border-white/10 bg-slate-900/70 hover:border-cyan-400/50"
                            : "border-white/5 bg-slate-950/40 opacity-60"
                          : isSelected
                          ? "border-slate-200 bg-slate-50 hover:border-cyan-500/40"
                          : "border-slate-200 bg-white/60 opacity-60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex rounded-full border px-3 py-0.5 text-[11px] font-bold ${
                            item.year === "Goal"
                              ? "border-amber-400/40 bg-amber-400/10 text-amber-500"
                              : "border-cyan-400/30 bg-cyan-400/10 text-cyan-500"
                          }`}
                        >
                          {item.year}
                        </span>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider ${
                            isDark ? "text-slate-500" : "text-slate-400"
                          }`}
                        >
                          MILESTONE
                        </span>
                      </div>

                      <h3
                        className={`mt-3 text-base font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`mt-2 text-xs leading-5 ${
                          isDark ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* Interactive Skill Badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-3">
                        {item.skills.map((sk) => (
                          <span
                            key={sk}
                            className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold ${
                              item.year === "Goal"
                                ? "border-amber-400/30 bg-amber-400/5 text-amber-500"
                                : "border-cyan-400/30 bg-cyan-400/5 text-cyan-500"
                            }`}
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default Experience;