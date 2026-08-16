import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { GraduationCap, CalendarDays, MapPin, ChevronDown, BookOpen } from "lucide-react";

const education = [
  {
    id: "btech",
    year: "2024 - Present",
    degree: "B.Tech in Computer Science Engineering",
    institute: "Swami Vivekananda University",
    focus:
      "Focused on Artificial Intelligence, Machine Learning, Data Structures, Operating Systems, and Software Engineering.",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS & SQL",
      "Software Engineering",
    ],
  },
  {
    id: "class12",
    year: "2023 - 2024",
    degree: "Senior Secondary Education (Class XII)",
    institute: "Kendriya Vidyalaya Godda",
    focus:
      "Built a strong foundation in mathematics, analytical thinking, physics, and problem-solving.",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
  },
  {
    id: "class10",
    year: "2021 - 2022",
    degree: "Secondary Education (Class X)",
    institute: "Kendriya Vidyalaya Singarsi",
    focus:
      "Developed core academic discipline, logical reasoning, and learning consistency.",
    coursework: ["Mathematics", "Science", "Social Studies", "English", "Hindi"],
  },
];

function Education({ theme = "dark" }) {
  const [expandedId, setExpandedId] = useState("btech");
  const isDark = theme === "dark";

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="education" className="px-6 py-10">
      <SectionReveal>
        <div
          className={`mx-auto max-w-5xl rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition duration-300 ${
            isDark
              ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
              : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
          }`}
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <p
              className={`text-xs font-bold uppercase tracking-[0.35em] ${
                isDark ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              Education
            </p>
            <h2
              className={`mt-2 text-3xl font-extrabold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Academic Journey
            </h2>
            <p
              className={`mx-auto mt-3 max-w-lg text-sm leading-6 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Click any academic milestone to inspect core coursework & technical focus.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-sky-400 to-blue-600 opacity-30 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-6">
              {education.map((item, index) => {
                const isExpanded = expandedId === item.id;

                return (
                  <div
                    key={item.degree}
                    className={`relative flex ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Node Ring Icon */}
                    <div
                      className={`absolute left-4 top-5 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 text-cyan-400 shadow-lg md:left-1/2 ${
                        isDark
                          ? "border-cyan-400/50 bg-slate-950 shadow-cyan-400/30"
                          : "border-cyan-500 bg-white shadow-cyan-500/20"
                      }`}
                    >
                      <GraduationCap size={15} />
                    </div>

                    {/* Timeline Card */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      onClick={() => toggleExpand(item.id)}
                      className={`ml-10 w-full cursor-pointer rounded-2xl border p-4 shadow-xl backdrop-blur-xl transition-all duration-300 md:ml-0 md:w-[46%] ${
                        isDark
                          ? isExpanded
                            ? "border-cyan-400/60 bg-slate-900/70 shadow-cyan-500/10"
                            : "border-white/10 bg-slate-900/70 hover:border-cyan-400/40"
                          : isExpanded
                          ? "border-cyan-500 bg-white shadow-lg"
                          : "border-slate-200 bg-slate-50 hover:border-cyan-500/40"
                      } ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                    >
                      {/* Year Badge */}
                      <div className="mb-2 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-0.5 text-[11px] font-bold text-cyan-500">
                          <CalendarDays size={12} />
                          {item.year}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`text-cyan-500 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <h3
                        className={`text-base font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.degree}
                      </h3>

                      <p
                        className={`mt-1 flex items-center gap-1.5 text-xs font-semibold ${
                          isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        <MapPin size={12} className="text-cyan-500 shrink-0" />
                        {item.institute}
                      </p>

                      <p
                        className={`mt-2 text-xs leading-5 ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {item.focus}
                      </p>

                      {/* Expandable Coursework Badges */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 border-t border-cyan-400/20 pt-3"
                          >
                            <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-cyan-500 mb-2">
                              <BookOpen size={12} /> Key Coursework
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {item.coursework.map((course) => (
                                <span
                                  key={course}
                                  className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold ${
                                    isDark
                                      ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                                      : "border-cyan-600/30 bg-cyan-50 text-cyan-700"
                                  }`}
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default Education;