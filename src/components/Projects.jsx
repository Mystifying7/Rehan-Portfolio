import { ExternalLink, Code2 } from "lucide-react";
import SectionReveal from "./SectionReveal";

import Kavacham from "../assets/projects/Kavacham.mp4";
import PropEng from "../assets/projects/PROP_ENGINE.mp4";
import { FaYoutube } from "react-icons/fa6";
import { video } from "framer-motion/client";
import { Code2Icon } from "lucide-react";

const projects = [
  {
    title: "Kavacham",
    category: "Cyber Security",
    video: Kavacham,
    description:
      "Detect outbound personal-data exposure, inspect third-party APK risk, preserve encrypted evidence, prepare erasure requests, and organise a reviewable escalation timeline.",
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
    Youtube : "https://youtu.be/BeWeT9qgZ6U?si=_m7GKTOtG2QgaveM",
  },
  {
    title: "PROP_ENGINE.ai",
    category: "Computer Vision",
    video: PropEng,
    description:
      "A full-stack predictive web application built with React and Flask that leverages Scikit-Learn machine learning models to provide accurate, real-time real estate valuations across multiple Indian cities based on historical data vectors.",
    stack: ["React.js", "Tailwind CSS", "Python", "Flask", "Scikit-Learn", "Pandas", "Vercel", "Render"],
    github: "https://github.com/Mystifying7/House_Price_Project",
    live: "https://house-price-project-ten.vercel.app/"
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-10">
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
          <div className="mb-7 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Projects
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Featured Projects
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-sm text-slate-400">
              AI, Machine Learning and Software Development Projects.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-3 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-lg shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-400/10"
              >
                {/* Image */}
                <div className="h-65 overflow-hidden">
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-56 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-3">

                  <span className="inline-flex rounded-full bg-cyan-400/10 px-2 py-[2px] text-[10px] font-medium text-cyan-300">
                    {project.category}
                  </span>

                  <h3 className="mt-1.5 text-[15px] font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-4 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-1.5 py-[2px] text-[10px] text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex gap-2">

  {/* GitHub */}
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-white/10 py-1.5 text-[10px] font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
    >
      <Code2 size={12} />
      Code
    </a>
  )}

  {/* YouTube Demo */}
  {project.Youtube && (
    <a
      href={project.Youtube}
      target="_blank"
      rel="noreferrer"
      className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-red-600 py-1.5 text-[10px] font-bold text-white transition hover:bg-red-500"
    >
      <FaYoutube size={12} />
      Demo
    </a>
  )}

  {/* Live Demo */}
  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-cyan-400 py-1.5 text-[10px] font-bold text-slate-950 transition hover:bg-cyan-300"
    >
      <ExternalLink size={12} />
      Live
    </a>
  )}

</div>
                  </div>

                </div>
    
            ))}
          </div>

      </SectionReveal>
      </div>
    </section>
  );
}

export default Projects;