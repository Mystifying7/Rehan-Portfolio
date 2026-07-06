import { Code2, Award, Brain, BookOpen } from "lucide-react";
import SectionReveal from "./SectionReveal";

const stats = [
  {
    number: "3+",
    label: "Projects",
    icon: <Code2 size={32} />,
  },
  {
    number: "5+",
    label: "Certificates",
    icon: <Award size={32} />,
  },
  {
    number: "20+",
    label: "DSA Problems",
    icon: <Brain size={32} />,
  },
  {
    number: "2024",
    label: "Learning Journey",
    icon: <BookOpen size={32} />,
  },
];

function Stats() {
  return (
    <section id="stats" className="px-6 py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <SectionReveal>
        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Highlights
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              A Quick Overview
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              My journey in Artificial Intelligence, Machine Learning,
              programming, and software development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-8 text-center shadow-xl shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-cyan-500/20"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition group-hover:scale-110">
                  {stat.icon}
                </div>

                <h3 className="text-4xl font-black text-white">
                  {stat.number}
                </h3>

                <p className="mt-3 text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </SectionReveal>
    </section>
  );
}

export default Stats;