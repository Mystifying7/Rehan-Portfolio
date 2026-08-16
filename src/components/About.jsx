import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Sparkles, Brain, Code2, Rocket } from "lucide-react";
import InteractiveRobot from "./InteractiveRobot";

function About({ theme = "dark" }) {
  const isDark = theme === "dark";

  return (
    <section id="about" className="px-6 py-10">
      <SectionReveal>
        <div
          className={`mx-auto max-w-6xl rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition duration-300 ${
            isDark
              ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
              : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
          }`}
        >
          {/* Side-by-Side Layout: Left Robot Companion (Picture 3 Layout) & Right Content */}
          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Left Column: Interactive 3D AI Robot Companion */}
            <div className="flex justify-center lg:col-span-5 border-b border-white/10 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
              <InteractiveRobot theme={theme} />
            </div>

            {/* Right Column: About Content & 3 Core Pillar Badges */}
            <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
              <p
                className={`text-xs font-bold uppercase tracking-[0.35em] ${
                  isDark ? "text-cyan-400" : "text-cyan-600"
                }`}
              >
                About Me
              </p>

              <h2
                className={`mt-2 text-3xl font-extrabold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Computer Science Student Focused on AI & ML
              </h2>

              <p
                className={`mt-3 max-w-xl text-sm leading-7 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Building strong computer science foundations, artificial intelligence algorithms, and machine learning models through real-world projects. Specializing in computer vision pipelines, predictive analytics, and full-stack software development.
              </p>

              {/* 3 Core Pillar Cards */}
              <div className="mt-6 grid gap-3 w-full sm:grid-cols-3">
                {/* AI & ML Focus */}
                <div
                  className={`rounded-2xl border p-3.5 backdrop-blur-xl transition duration-300 text-left ${
                    isDark ? "border-white/10 bg-slate-950/60" : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Brain size={18} />
                  </div>
                  <h3
                    className={`mt-2.5 text-xs font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    AI & ML Focus
                  </h3>
                  <p
                    className={`mt-1 text-[11px] leading-4 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Machine learning algorithms, computer vision, and practical AI systems.
                  </p>
                </div>

                {/* Software Skills */}
                <div
                  className={`rounded-2xl border p-3.5 backdrop-blur-xl transition duration-300 text-left ${
                    isDark ? "border-white/10 bg-slate-950/60" : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Code2 size={18} />
                  </div>
                  <h3
                    className={`mt-2.5 text-xs font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Software Skills
                  </h3>
                  <p
                    className={`mt-1 text-[11px] leading-4 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Full-stack apps with Python, Java, React, Flask, and version control.
                  </p>
                </div>

                {/* Goal */}
                <div
                  className={`rounded-2xl border p-3.5 backdrop-blur-xl transition duration-300 text-left ${
                    isDark ? "border-white/10 bg-slate-950/60" : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Rocket size={18} />
                  </div>
                  <h3
                    className={`mt-2.5 text-xs font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Goal
                  </h3>
                  <p
                    className={`mt-1 text-[11px] leading-4 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Building real-world intelligent software systems to solve complex problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default About;