import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { ExternalLink, Play, Code2, Sparkles, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import propEngineMedia from "../assets/projects/PROP_ENGINE.mp4";
import airCursorMedia from "../assets/projects/Air-Cursor.mp4";
import cineMindMedia from "../assets/projects/CineMindAI.mp4";
import kavachamMedia from "../assets/projects/Kavacham.mp4";
import virtualSteeringMedia from "../assets/projects/Virtual_Steering.mp4";

const projects = [
  {
    title: "Kavacham",
    tagline: "Cyber Security & Digital Evidence Preservation",
    type: "video",
    media: kavachamMedia,
    github: "https://github.com/hackerskr76/Kavacham-Citadel1.0",
    demo: "",
    tags: ["Cyber Security", "Digital Forensics", "React", "Python"],
    description:
      "A security application built for evidence integrity, chain of custody logging, and digital artifact preservation.",
  },
  {
    title: "PROP_ENGINE.ai",
    tagline: "ML Real Estate Valuation Platform",
    type: "video",
    media: propEngineMedia,
    github: "https://github.com/Mystifying7/House_Price_Project",
    demo: "",
    tags: ["Machine Learning", "Scikit-Learn", "FastAPI", "React"],
    description:
      "Machine learning real estate pricing engine that predicts property valuations using historical trend analytics.",
  },
  {
    title: "Virtual Steering Wheel",
    tagline: "CV Hand Gesture Driving Utility",
    type: "video",
    media: virtualSteeringMedia,
    github: "https://github.com/Mystifying7/virtual-steering-wheel-master",
    demo: "",
    tags: ["Computer Vision", "OpenCV", "MediaPipe", "Python"],
    description:
      "Real-time computer vision utility translating hand gestures into steering controls for driving simulators.",
  },
  {
    title: "Air-Cursor",
    tagline: "WebSocket Spatial Hand Gesture Control",
    type: "video",
    media: airCursorMedia,
    github: "https://github.com/Mystifying7/AirCursor",
    demo: "",
    tags: ["OpenCV", "MediaPipe", "WebSockets", "Node.js"],
    description:
      "Spatial hand-tracking gesture system controlling mouse cursors wirelessly over low-latency WebSockets.",
  },
  {
    title: "CineMind AI",
    tagline: "NLP Content Recommendation Engine",
    type: "video",
    media: cineMindMedia,
    github: "https://github.com/Mystifying7/Movie-Recommendation-System",
    demo: "",
    tags: ["NLP", "TF-IDF Vectorization", "Flask", "Tailwind CSS"],
    description:
      "Natural Language Processing movie recommendation system parsing plot summaries and genre vectors.",
  },
];

function Projects({ theme = "dark" }) {
  const [activeMedia, setActiveMedia] = useState(null);
  const isDark = theme === "dark";

  return (
    <section id="projects" className="px-6 py-10">
      <SectionReveal>
        <div
          className={`mx-auto max-w-6xl rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition duration-300 ${isDark
              ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
              : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
            }`}
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <p
              className={`text-xs font-bold uppercase tracking-[0.35em] ${isDark ? "text-cyan-400" : "text-cyan-600"
                }`}
            >
              Projects
            </p>
            <h2
              className={`mt-2 text-3xl font-extrabold ${isDark ? "text-white" : "text-slate-900"
                }`}
            >
              Featured AI & Engineering Systems
            </h2>
            <p
              className={`mx-auto mt-2 max-w-lg text-sm ${isDark ? "text-slate-400" : "text-slate-600"
                }`}
            >
              High-performance applications built with Machine Learning, Computer Vision, and Web tech.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${isDark
                    ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/40"
                    : "border-slate-200 bg-slate-50 hover:border-cyan-500/40"
                  }`}
              >
                {/* Media Container */}
                <div
                  onClick={() => setActiveMedia(project)}
                  className="relative aspect-[16/9] w-full cursor-pointer overflow-hidden bg-slate-900"
                >
                  <video
                    src={project.media}
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg">
                      <Play size={18} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"
                        }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`mt-1 text-xs font-semibold ${isDark ? "text-cyan-300" : "text-cyan-600"
                        }`}
                    >
                      {project.tagline}
                    </p>
                    <p
                      className={`mt-2 text-xs leading-5 line-clamp-2 ${isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold ${isDark
                              ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                              : "border-cyan-600/20 bg-cyan-50 text-cyan-700"
                            }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-bold transition ${isDark
                          ? "text-slate-300 hover:text-cyan-400"
                          : "text-slate-700 hover:text-cyan-600"
                        }`}
                    >
                      <FaGithub size={14} /> View Code Base
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Video Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMedia(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-cyan-400/40 bg-slate-950 p-2 shadow-2xl"
            >
              <button
                onClick={() => setActiveMedia(null)}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-cyan-400 hover:text-slate-950"
              >
                <X size={18} />
              </button>
              <video
                src={activeMedia.media}
                controls
                autoPlay
                className="w-full rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;