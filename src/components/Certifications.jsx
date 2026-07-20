import { ExternalLink, CalendarDays, Trophy } from "lucide-react";
import SectionReveal from "./SectionReveal";

const certifications = [
  {
    title: "C Programming",
    issuer: "IIT Kharagpur",
    duration: "Jan 2024 • Apr 2024",
    level: "",
    achievement: "",
    view: "/certificates/C programming.pdf",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "IIT Kanpur",
    duration: "Jul 2025 • Oct 2025",
    level: "SILVER",
    achievement: "Top 5% Rank",
    view: "/certificates/DSA.pdf",
  },
  {
    title: "Java Programming",
    issuer: "IIT Kharagpur",
    duration: "Jan 2026 • Apr 2026",
    level: "GOLD",
    achievement: "100% Score",
    view: "/certificates/Java.pdf",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="px-6 py-10">
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
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Certifications
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Certifications & Achievements
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400">
              Verified learning credentials from programming and computer
              science foundations.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-lg shadow-cyan-500/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:shadow-cyan-400/10"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />

                {cert.level && (
                  <span
                    className={`absolute right-3 top-3 rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider shadow-lg ${
                      cert.level === "SILVER"
                          ? "border-slate-300/30 bg-slate-400/10 text-slate-200"
                          : "border-amber-400/30 bg-amber-500/15 text-amber-300"
                    }`}
                  >
                    {cert.level}
                  </span>
                )}

                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Trophy size={17} />
                </div>

                <h3 className="pr-20 text-base font-semibold leading-6 text-white">
                  {cert.title}
                </h3>

                <p className="mt-2 text-[13px] text-slate-400">
                  {cert.issuer}
                </p>

                <div className="mt-2 flex items-center gap-2 text-[12px] text-slate-500">
                  <CalendarDays size={12} />
                  {cert.duration}
                </div>

                {cert.achievement && (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[12px] font-medium text-cyan-300">
                    <Trophy size={12} />
                    {cert.achievement}
                  </div>
                )}

                <a
                  href={cert.view}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/90 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  <ExternalLink size={14} />
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
      </div>
    </section>
  );
}

export default Certifications;