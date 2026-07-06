import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiOpencv,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Programming & AI",
    skills: [
      { name: "Python", level: 90, icon: <FaPython /> },
      { name: "Java", level: 80, icon: <FaJava /> },
      { name: "JavaScript", level: 75, icon: <SiJavascript /> },
      { name: "Machine Learning", level: 85, icon: <SiTensorflow /> },
      { name: "TensorFlow", level: 75, icon: <SiTensorflow /> },
      { name: "OpenCV", level: 70, icon: <SiOpencv /> },
    ],
  },
  {
    title: "Web Development & Tools",
    skills: [
      { name: "React", level: 85, icon: <FaReact /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss /> },
      { name: "MySQL", level: 75, icon: <SiMysql /> },
      { name: "Git", level: 80, icon: <FaGitAlt /> },
      { name: "Linux", level: 75, icon: <FaLinux /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-12">
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

          {/* Heading */}
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Skills
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Technical Expertise
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm text-slate-400">
              Technologies and tools I use for Artificial Intelligence,
              Machine Learning and Modern Software Development.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 lg:grid-cols-2">

            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-4 shadow-lg shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-400/10"
              >
                <h3 className="mb-4 text-lg font-semibold text-cyan-400">
                  {group.title}
                </h3>

                <div className="space-y-3">

                  {group.skills.map((skill) => (
                    <div key={skill.name}>

                      <div className="mb-1 flex items-center justify-between">

                        <div className="flex items-center gap-2">

                          <span className="text-lg text-cyan-400">
                            {skill.icon}
                          </span>

                          <span className="text-[13px] font-medium text-slate-300">
                            {skill.name}
                          </span>

                        </div>

                        <span className="text-xs font-medium text-cyan-400">
                          {skill.level}%
                        </span>

                      </div>

                      <div className="h-1 overflow-hidden rounded-full bg-slate-800">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        />

                      </div>

                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>
      </SectionReveal>
      </div>
    </section>
  );
}

export default Skills;