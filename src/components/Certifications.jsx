import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CalendarDays, Trophy, Award, ChevronDown, Sparkles, BookOpen } from "lucide-react";
import SectionReveal from "./SectionReveal";

const certifications = [
  {
    id: "c-prog",
    title: "C Programming",
    issuer: "IIT Kharagpur (NPTEL)",
    duration: "Jan 2025 • Apr 2025",
    level: "CERTIFIED",
    achievement: "Verified Credential",
    view: "https://drive.google.com/file/d/1GZNpsqSgreEr3R66o0G9F4j0owizJIJt/view?usp=sharing",
    skills: ["Pointers & Memory", "Structures & Unions", "File I/O", "Algorithm Analysis"],
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    issuer: "IIT Kanpur (NPTEL)",
    duration: "Jul 2025 • Oct 2025",
    level: "SILVER",
    achievement: "Top 5% Rank",
    view: "https://drive.google.com/file/d/1qgEB7XEiFkzpWMk2Ga5lBFyOhekaZcud/view?usp=sharing",
    skills: ["Trees & Graphs", "Dynamic Programming", "Sorting & Searching", "Complexity Analysis"],
  },
  {
    id: "java-prog",
    title: "Java Programming",
    issuer: "IIT Kharagpur (NPTEL)",
    duration: "Jan 2026 • Apr 2026",
    level: "GOLD",
    achievement: "100% Score",
    view: "https://drive.google.com/file/d/1SFIKmGsCb684P81QMAZfz9oYpgwns0iU/view?usp=sharing",
    skills: ["OOP Concepts", "Multithreading", "Exception Handling", "Collections Framework"],
  },
];

function Certifications({ theme = "dark" }) {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [expandedId, setExpandedId] = useState("java-prog");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const isDark = theme === "dark";

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  const handleOpenCertificate = (url, title) => {
    triggerToast(`Opening Verified ${title} Certificate...`);
    window.open(url, "_blank", "noreferrer");
  };

  const filteredCerts =
    selectedFilter === "All"
      ? certifications
      : certifications.filter((c) => c.level === selectedFilter || c.achievement.includes(selectedFilter));

  return (
    <section id="certifications" className="relative px-6 py-10">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className={`fixed top-24 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-2 rounded-full border px-5 py-2.5 shadow-2xl backdrop-blur-2xl ${
              isDark
                ? "border-cyan-400/50 bg-slate-950/90 text-white shadow-cyan-500/30"
                : "border-cyan-500/50 bg-white/95 text-slate-900 shadow-slate-300/60"
            }`}
          >
            <Sparkles size={16} className="text-cyan-500" />
            <span className="text-xs font-bold">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

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
              Certifications
            </p>
            <h2
              className={`mt-2 text-3xl font-extrabold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Verified Credentials & Honors
            </h2>
            <p
              className={`mx-auto mt-2 max-w-lg text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              NPTEL credentials from IIT Kharagpur & IIT Kanpur. Click cards to inspect verified skills.
            </p>
          </div>

          {/* Interactive Level Filter Bar */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {["All", "GOLD", "SILVER"].map((flt) => (
              <button
                key={flt}
                onClick={() => setSelectedFilter(flt)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  selectedFilter === flt
                    ? "bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 shadow-lg shadow-cyan-400/30 scale-105"
                    : isDark
                    ? "border border-white/10 bg-slate-950/60 text-slate-400 hover:border-cyan-400/40 hover:text-cyan-300"
                    : "border border-slate-300 bg-slate-100 text-slate-600 hover:border-cyan-500/40 hover:text-cyan-600"
                }`}
              >
                {flt === "GOLD" && <Trophy size={12} className="text-amber-500" />}
                {flt === "SILVER" && <Award size={12} className="text-slate-400" />}
                {flt}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid gap-4 md:grid-cols-3">
            {filteredCerts.map((cert) => {
              const isExpanded = expandedId === cert.id;

              return (
                <motion.div
                  key={cert.title}
                  whileHover={{ scale: 1.02 }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 shadow-xl backdrop-blur-xl transition-all duration-300 ${
                    isDark
                      ? isExpanded
                        ? "border-cyan-400/60 bg-slate-950/80 shadow-cyan-500/10"
                        : "border-white/10 bg-slate-950/70 hover:border-cyan-400/40"
                      : isExpanded
                      ? "border-cyan-500 bg-white shadow-lg"
                      : "border-slate-200 bg-slate-50 hover:border-cyan-500/40"
                  }`}
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-500">
                        <Trophy size={16} />
                      </div>

                      {cert.level && (
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            cert.level === "GOLD"
                              ? "border-amber-400/50 bg-amber-400/15 text-amber-500 shadow-md shadow-amber-400/20"
                              : cert.level === "SILVER"
                              ? "border-slate-400/40 bg-slate-400/15 text-slate-700"
                              : "border-cyan-400/30 bg-cyan-400/10 text-cyan-500"
                          }`}
                        >
                          {cert.level}
                        </span>
                      )}
                    </div>

                    <h3
                      className={`mt-3 text-base font-bold leading-tight ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {cert.title}
                    </h3>

                    <p
                      className={`mt-1 text-xs font-semibold ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {cert.issuer}
                    </p>

                    <div
                      className={`mt-2 flex items-center gap-1.5 text-xs ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      <CalendarDays size={12} className="text-cyan-500" />
                      {cert.duration}
                    </div>

                    {cert.achievement && (
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-500">
                        <Trophy size={12} />
                        {cert.achievement}
                      </div>
                    )}

                    {/* Expandable Verified Skills */}
                    <div
                      onClick={() => setExpandedId(isExpanded ? null : cert.id)}
                      className="mt-3.5 flex cursor-pointer items-center justify-between border-t border-white/10 pt-2.5 text-xs font-bold text-cyan-500 hover:text-cyan-600"
                    >
                      <span className="flex items-center gap-1">
                        <BookOpen size={13} /> Verified Skills
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 flex flex-wrap gap-1.5"
                        >
                          {cert.skills.map((sk) => (
                            <span
                              key={sk}
                              className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold ${
                                isDark
                                  ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                                  : "border-cyan-600/30 bg-cyan-50 text-cyan-700"
                              }`}
                            >
                              {sk}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Action Link Button */}
                  <button
                    onClick={() => handleOpenCertificate(cert.view, cert.title)}
                    className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-400 to-sky-500 py-2.5 text-xs font-extrabold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:brightness-110"
                  >
                    <ExternalLink size={14} />
                    View Certificate PDF
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default Certifications;