import SectionReveal from "./SectionReveal";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const education = [
  {
    year: "2024 - Present",
    degree: "B.Tech in Computer Science Engineering",
    institute: "Your College Name",
    focus:
      "Focused on Artificial Intelligence, Machine Learning, Data Structures, Operating Systems, and Software Engineering.",
  },
  {
    year: "2022 - 2024",
    degree: "Senior Secondary Education",
    institute: "Your School Name",
    focus:
      "Built a strong foundation in mathematics, analytical thinking, and problem-solving.",
  },
  {
    year: "2020 - 2022",
    degree: "Secondary Education",
    institute: "Your School Name",
    focus:
      "Developed core academic discipline, logical reasoning, and learning consistency.",
  },
];

function Education() {
  return (
    <section id="education" className="px-6 py-10">
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
              Education
            </p>

            <h2 className="mt-2 text-3xl font-bold">Academic Journey</h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400">
              My academic path and the foundation behind my computer science,
              AI, and software development journey.
            </p>
          </div>

          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-4 top-0 h-full w-px bg-cyan-400/25 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-4">
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className={`relative flex ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div className="absolute left-4 top-5 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-cyan-400 shadow-lg shadow-cyan-400/20 md:left-1/2">
                    <GraduationCap size={14} />
                  </div>

                  <div
                    className={`ml-10 w-full rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-4 shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/30 md:ml-0 md:w-[46%] ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-0.5 text-[11px] text-cyan-300">
                      <CalendarDays size={12} />
                      {item.year}
                    </div>

                    <h3 className="text-base font-semibold text-white">
                      {item.degree}
                    </h3>

                    <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-slate-300">
                      <MapPin size={12} className="text-cyan-400" />
                      {item.institute}
                    </p>

                    <p className="mt-2 text-[13px] leading-5 text-slate-400">
                      {item.focus}
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

export default Education;