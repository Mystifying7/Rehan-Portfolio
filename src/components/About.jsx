import SectionReveal from "./SectionReveal";
import { Brain, Code2, Target } from "lucide-react";

const points = [
  {
    icon: <Brain size={20} />,
    title: "AI & ML Focus",
    desc: "Learning machine learning, deep learning, and practical AI development.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Software Skills",
    desc: "Building projects with Python, Java, React, Tailwind CSS, and Git.",
  },
  {
    icon: <Target size={20} />,
    title: "Goal",
    desc: "To become an AI and ML engineer who builds useful real-world intelligent systems.",
  },
];

function About() {
  return (
    <section id="about" className="px-6 py-12">
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
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Computer Science Student focused on AI & ML
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400">
            I am building a strong foundation in programming, computer science,
            artificial intelligence, and machine learning through consistent
            learning and practical projects.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {points.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-5 text-left shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  {item.icon}
                </div>

                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
      </SectionReveal>
      </div>

    </section>
  );
}

export default About;