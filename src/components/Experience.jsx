import SectionReveal from "./SectionReveal";
import { Code2, Brain, GraduationCap, Target } from "lucide-react";

const journey = [
  {
    year: "2024",
    title: "Started B.Tech in Computer Science",
    description:
      "Began studying Computer Science with a focus on programming fundamentals and software development.",
    icon: <GraduationCap size={15} />,
  },
  {
    year: "2025",
    title: "Data Structures & Algorithms",
    description:
      "Strengthening problem-solving skills through Java, DSA, and core programming concepts.",
    icon: <Code2 size={15} />,
  },
  {
    year: "2026",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Building AI and ML projects while studying deep learning, computer vision, Linux, and modern tools.",
    icon: <Brain size={15} />,
  },
  {
    year: "Goal",
    title: "AI and ML Engineer",
    description:
      "Aiming to build intelligent systems that solve real-world problems using AI ML and software engineering.",
    icon: <Target size={15} />,
  },
];

function Experience() {
  return (
    <section id="experience" className="px-6 py-10">
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
              Journey
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Learning Journey
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400">
              My growth path from computer science fundamentals to AI and
              machine learning development.
            </p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-cyan-400/25" />

            <div className="space-y-4">
              {journey.map((item) => (
                <div key={item.title} className="relative flex gap-5">
                  <div
                    className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-slate-950 shadow-lg ${
                      item.year === "Goal"
                        ? "border-amber-400/40 text-amber-300 shadow-amber-400/10"
                        : "border-cyan-400/30 text-cyan-400 shadow-cyan-400/10"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-lg shadow-cyan-500/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:shadow-cyan-400/10">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                        item.year === "Goal"
                          ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                          : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                      }`}
                    >
                      {item.year}
                    </span>

                    <h3 className="mt-3 text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-5 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
      </div>
    </section>
  );
}

export default Experience;