import {
  Trophy,
  CalendarDays,
  Users,
  Clock,
  ExternalLink,
  Award,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import SectionReveal from "./SectionReveal";

const levelStyles = {
  National: "border-purple-400/30 bg-purple-500/10 text-purple-300",
  State: "border-blue-400/30 bg-blue-500/10 text-blue-300",
  College: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
  International: "border-amber-400/30 bg-amber-500/10 text-amber-300",
};

const hackathons = [
  {
    name: "Ciadetal",
    level: "National",
    status: "Participant",
    project: "Kavacham",
    summary:
      "Detect outbound personal-data exposure, inspect third-party APK risk, preserve encrypted evidence, prepare erasure requests, and organise a reviewable escalation timeline.",
    date: "july 2026",
    team: "Team of 4",
    duration: "30 Hours",
    result: "Prototype",
    stack: ["React"
,"TypeScript"
,"Vite"
,"React Router "
,"Tailwind CSS "
,"Zod "
,"Lucide React"
,"Web Crypto API"
,"IndexedDB"],
    github: "https://github.com/hackerskr76/Kavacham-Citadel1.0",
    live: "#",
    certificate: "https://drive.google.com/file/d/1PZf5RfAhI-AmBtAl9Dinb6_CVhYdglIC/view?usp=drive_link",
  },
];

function Hackathons() {
  return (
    <section id="hackathons" className="px-6 py-10">
       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-4
        shadow-lg
        shadow-cyan-500/5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:bg-cyan-400/[0.04]
        hover:shadow-cyan-400/10
        ">
      <SectionReveal>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Hackathons
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Hackathons & Competitions
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400">
              Fast-paced building, teamwork, and problem-solving under pressure.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-lg shadow-cyan-500/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:shadow-cyan-400/10"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                      <Trophy size={17} />
                    </div>

                    <h3 className="text-base font-semibold text-white">
                      {hackathon.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        levelStyles[hackathon.level] ||
                        "border-slate-400/30 bg-slate-500/10 text-slate-300"
                      }`}
                    >
                      {hackathon.level}
                    </span>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      {hackathon.status}
                    </span>
                  </div>
                </div>

                <p className="text-[13px] font-medium text-cyan-300">
                  {hackathon.project}
                </p>

                <p className="mt-3 text-[13px] leading-5 text-slate-400">
                  {hackathon.summary}
                </p>

                <div className="mt-4 grid gap-2 text-[12px] text-slate-400 sm:grid-cols-2">
                  <p className="flex items-center gap-2">
                    <CalendarDays size={12} className="text-cyan-400" />
                    {hackathon.date}
                  </p>

                  <p className="flex items-center gap-2">
                    <Users size={12} className="text-cyan-400" />
                    {hackathon.team}
                  </p>

                  <p className="flex items-center gap-2">
                    <Clock size={12} className="text-cyan-400" />
                    {hackathon.duration}
                  </p>

                  <p className="flex items-center gap-2">
                    <Award size={12} className="text-cyan-400" />
                    {hackathon.result}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {hackathon.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-[11px] text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {hackathon.github !== "#" && (
                    <a
                      href={hackathon.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      <FaGithub size={13} />
                      GitHub
                    </a>
                  )}

                  {hackathon.live !== "#" && (
                    <a
                      href={hackathon.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      <ExternalLink size={13} />
                      Live
                    </a>
                  )}

                  {hackathon.certificate !== "#" && (
                    <a
                      href={hackathon.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-cyan-400/30 px-3 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                    >
                      <Award size={13} />
                      Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
      </div>
    </section>
  );
}

export default Hackathons;