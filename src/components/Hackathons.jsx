import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Trophy, CalendarDays, Users, Clock, Award } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const levelStyles = {
  National: "border-purple-400/30 bg-purple-500/10 text-purple-300",
  State: "border-blue-400/30 bg-blue-500/10 text-blue-300",
  College: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
  International: "border-amber-400/30 bg-amber-500/10 text-amber-400",
};

const hackathons = [
  {
    name: "Citadel 1.0",
    level: "National",
    status: "Participant",
    project: "Kavacham",
    summary:
      "Detect outbound personal-data exposure, inspect third-party APK risk, preserve encrypted evidence, prepare erasure requests, and organise a reviewable escalation timeline.",
    date: "july 2026",
    team: "Team of 4",
    duration: "30 Hours",
    result: "Prototype",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Zod",
      "Lucide React",
      "Web Crypto API",
      "IndexedDB",
    ],
    github: "https://github.com/mystifying7",
    certificate: "#",
  },
];

function Hackathons({ theme = "dark" }) {
  const isDark = theme === "dark";

  return (
    <section id="hackathons" className="px-6 py-10">
      <SectionReveal>
        <div
          className={`mx-auto max-w-5xl rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition duration-300 ${
            isDark
              ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
              : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
          }`}
        >
          <div className="mb-8 text-center">
            <p
              className={`text-xs font-bold uppercase tracking-[0.35em] ${
                isDark ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              Hackathons
            </p>

            <h2
              className={`mt-2 text-3xl font-extrabold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Hackathons & Competitions
            </h2>

            <p
              className={`mx-auto mt-3 max-w-lg text-sm leading-6 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Fast-paced building, teamwork, and problem-solving under pressure.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.name}
                className={`group relative overflow-hidden rounded-2xl border p-6 shadow-xl backdrop-blur-xl transition-all duration-300 ${
                  isDark
                    ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/40"
                    : "border-slate-200 bg-slate-50 hover:border-cyan-500/40"
                }`}
              >
                {/* Header Row: Icon + Title + Level & Status Badges */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                      <Trophy size={18} />
                    </div>

                    <h3
                      className={`text-lg font-bold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {hackathon.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
                        levelStyles[hackathon.level] ||
                        "border-purple-400/30 bg-purple-500/10 text-purple-300"
                      }`}
                    >
                      {hackathon.level}
                    </span>

                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                      {hackathon.status}
                    </span>
                  </div>
                </div>

                {/* Project Subtitle */}
                <p className="text-sm font-extrabold text-cyan-400">
                  {hackathon.project}
                </p>

                {/* Summary Description */}
                <p
                  className={`mt-3 text-xs leading-6 ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {hackathon.summary}
                </p>

                {/* Grid Metadata */}
                <div
                  className={`mt-5 grid grid-cols-2 gap-3 text-xs ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  <p className="flex items-center gap-2">
                    <CalendarDays size={14} className="text-cyan-400" />
                    {hackathon.date}
                  </p>

                  <p className="flex items-center gap-2">
                    <Users size={14} className="text-cyan-400" />
                    {hackathon.team}
                  </p>

                  <p className="flex items-center gap-2">
                    <Clock size={14} className="text-cyan-400" />
                    {hackathon.duration}
                  </p>

                  <p className="flex items-center gap-2">
                    <Award size={14} className="text-cyan-400" />
                    {hackathon.result}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {hackathon.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
                        isDark
                          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                          : "border-cyan-600/30 bg-cyan-50 text-cyan-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: GitHub & Certificate */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={hackathon.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-xs font-bold transition ${
                      isDark
                        ? "border-white/10 bg-slate-900 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
                        : "border-slate-300 bg-white text-slate-700 hover:border-cyan-500/40 hover:text-cyan-600"
                    }`}
                  >
                    <FaGithub size={15} />
                    GitHub
                  </a>

                  <a
                    href={hackathon.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-xs font-bold text-cyan-400 transition hover:bg-cyan-400/20"
                  >
                    <Award size={15} />
                    Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default Hackathons;