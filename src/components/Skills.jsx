import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Brain, Code2, Layers, Cpu, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain size={18} />,
    skills: ["Scikit-Learn", "Computer Vision (OpenCV, MediaPipe)", "NLP Basics", "Predictive Analytics"],
  },
  {
    title: "Programming Languages",
    icon: <Code2 size={18} />,
    skills: ["Python", "Java", "C", "JavaScript", "HTML5 & CSS3"],
  },
  {
    title: "Full-Stack Web Development",
    icon: <Server size={18} />,
    skills: ["React.js", "Flask", "FastAPI", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Core CS & Tools",
    icon: <Wrench size={18} />,
    skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS & SQL", "Git & GitHub", "Linux"],
  },
];

function Skills({ theme = "dark" }) {
  const isDark = theme === "dark";

  return (
    <section id="skills" className="px-6 py-10">
      <SectionReveal>
        <div
          className={`mx-auto max-w-5xl rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition duration-300 ${
            isDark
              ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
              : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
          }`}
        >
          {/* Section Header */}
          <div className="mb-8 text-center">
            <p
              className={`text-xs font-bold uppercase tracking-[0.35em] ${
                isDark ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              Skills
            </p>
            <h2
              className={`mt-2 text-3xl font-extrabold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Technical Expertise
            </h2>
            <p
              className={`mx-auto mt-2 max-w-lg text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Core domains, languages, frameworks, and engineering tools.
            </p>
          </div>

          {/* 2-Column Skill Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className={`rounded-2xl border p-4 backdrop-blur-xl transition duration-300 ${
                  isDark
                    ? "border-white/10 bg-slate-950/60 hover:border-cyan-400/30"
                    : "border-slate-200 bg-slate-50 hover:border-cyan-500/30"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    {category.icon}
                  </div>
                  <h3
                    className={`text-base font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border px-3 py-1 text-xs font-semibold backdrop-blur-md transition ${
                        isDark
                          ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300 hover:border-cyan-400/40"
                          : "border-cyan-600/20 bg-cyan-50 text-cyan-700 hover:border-cyan-600/40"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default Skills;