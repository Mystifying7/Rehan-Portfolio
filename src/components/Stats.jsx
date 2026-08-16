import SectionReveal from "./SectionReveal";
import { Code2, Award, Rocket, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: <Rocket size={20} />,
    value: "5+",
    label: "AI & ML Projects",
  },
  {
    icon: <Code2 size={20} />,
    value: "400+",
    label: "DSA Problems Solved",
  },
  {
    icon: <Award size={20} />,
    value: "3",
    label: "NPTEL Credentials",
  },
  {
    icon: <GraduationCap size={20} />,
    value: "2024",
    label: "B.Tech CSE Journey",
  },
];

function Stats({ theme = "dark" }) {
  const isDark = theme === "dark";

  return (
    <section id="stats" className="px-6 py-6">
      <SectionReveal>
        <div
          className={`mx-auto max-w-5xl rounded-3xl border p-4 shadow-2xl backdrop-blur-xl transition duration-300 ${
            isDark
              ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
              : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
          }`}
        >
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`flex items-center gap-3 rounded-2xl border p-3.5 backdrop-blur-xl transition duration-300 ${
                  isDark
                    ? "border-white/10 bg-slate-950/60 hover:border-cyan-400/30"
                    : "border-slate-200 bg-slate-50 hover:border-cyan-500/30"
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  {stat.icon}
                </div>
                <div>
                  <h3
                    className={`text-xl font-black ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {stat.value}
                  </h3>
                  <p
                    className={`text-[11px] font-semibold ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default Stats;