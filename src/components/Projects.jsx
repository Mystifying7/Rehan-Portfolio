import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Play, X, Shield, Cpu, Eye, Tv, Navigation } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import propEngineMedia from "../assets/projects/PROP_ENGINE.mp4";
import airCursorMedia from "../assets/projects/Air-Cursor.mp4";
import cineMindMedia from "../assets/projects/CineMindAI.mp4";
import kavachamMedia from "../assets/projects/Kavacham.mp4";
import virtualSteeringMedia from "../assets/projects/Virtual_Steering.mp4";

const projects = [
  {
    id: "kavacham",
    title: "Kavacham",
    tagline: "Cyber Security & Digital Evidence Preservation",
    media: kavachamMedia,
    icon: <Shield size={24} className="text-cyan-400" />,
    badgeColor: "from-purple-500/20 to-cyan-500/20 border-cyan-400/30",
    gradient: "from-slate-950 via-purple-950/40 to-cyan-950/30",
    github: "https://github.com/hackerskr76/Kavacham-Citadel1.0",
    tags: ["Cyber Security", "Digital Forensics", "React", "Python"],
    description:
      "A security application built for evidence integrity, chain of custody logging, and digital artifact preservation.",
  },
  {
    id: "prop-engine",
    title: "PROP_ENGINE.ai",
    tagline: "ML Real Estate Valuation Platform",
    media: propEngineMedia,
    icon: <Cpu size={24} className="text-cyan-400" />,
    badgeColor: "from-sky-500/20 to-blue-500/20 border-sky-400/30",
    gradient: "from-slate-950 via-blue-950/40 to-cyan-950/30",
    github: "https://github.com/Mystifying7/House_Price_Project",
    tags: ["Machine Learning", "Scikit-Learn", "FastAPI", "React"],
    description:
      "Machine learning real estate pricing engine that predicts property valuations using historical trend analytics.",
  },
  {
    id: "virtual-steering",
    title: "Virtual Steering Wheel",
    tagline: "CV Hand Gesture Driving Utility",
    media: virtualSteeringMedia,
    icon: <Navigation size={24} className="text-cyan-400" />,
    badgeColor: "from-emerald-500/20 to-cyan-500/20 border-emerald-400/30",
    gradient: "from-slate-950 via-emerald-950/40 to-cyan-950/30",
    github: "https://github.com/Mystifying7/virtual-steering-wheel-master",
    tags: ["Computer Vision", "OpenCV", "MediaPipe", "Python"],
    description:
      "Real-time computer vision utility translating hand gestures into steering controls for driving simulators.",
  },
  {
    id: "air-cursor",
    title: "Air-Cursor",
    tagline: "WebSocket Spatial Hand Gesture Control",
    media: airCursorMedia,
    icon: <Eye size={24} className="text-cyan-400" />,
    badgeColor: "from-cyan-500/20 to-teal-500/20 border-cyan-400/30",
    gradient: "from-slate-950 via-cyan-950/40 to-teal-950/30",
    github: "https://github.com/Mystifying7/AirCursor",
    tags: ["OpenCV", "MediaPipe", "WebSockets", "Node.js"],
    description:
      "Spatial hand-tracking gesture system controlling mouse cursors wirelessly over low-latency WebSockets.",
  },
  {
    id: "cinemind",
    title: "CineMind AI",
    tagline: "NLP Content Recommendation Engine",
    media: cineMindMedia,
    icon: <Tv size={24} className="text-cyan-400" />,
    badgeColor: "from-indigo-500/20 to-cyan-500/20 border-indigo-400/30",
    gradient: "from-slate-950 via-indigo-950/40 to-cyan-950/30",
    github: "https://github.com/Mystifying7/Movie-Recommendation-System",
    tags: ["NLP", "TF-IDF Vectorization", "Flask", "Tailwind CSS"],
    description:
      "Natural Language Processing movie recommendation system parsing plot summaries and genre vectors.",
  },
];

function ProjectCard({ project, isDark, onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group flex flex-col justify-between overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
        isDark
          ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
          : "border-slate-200 bg-slate-50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10"
      }`}
    >
      {/* Media Poster & Lazy Video Preview */}
      <div
        onClick={() => onOpenModal(project)}
        className="relative aspect-[16/9] w-full cursor-pointer overflow-hidden bg-slate-950 select-none"
      >
        {/* Futuristic Cyber Poster Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Cyber Grid Pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(34,211,238,0.5) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Project Icon Badge */}
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900/80 shadow-lg shadow-cyan-500/20">
            {project.icon}
          </div>

          <h4 className="relative z-10 mt-3 text-sm font-black tracking-wide text-white">
            {project.title}
          </h4>

          {/* Play Hint */}
          <div className="relative z-10 mt-2 flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-0.5 text-[10px] font-bold text-cyan-300 backdrop-blur-md">
            <Play size={10} className="fill-cyan-400" /> Click to Watch Video Demo
          </div>
        </div>

        {/* Hover Video Element (preload none to prevent 120MB network choking) */}
        <video
          ref={videoRef}
          src={project.media}
          preload="none"
          muted
          loop
          playsInline
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            isHovered ? "opacity-100 scale-105" : "opacity-0"
          }`}
        />

        {/* Hover Overlay Action */}
        <div
          className={`absolute inset-0 bg-slate-950/40 flex items-center justify-center transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-400/40">
            <Play size={20} className="ml-0.5 fill-slate-950" />
          </div>
        </div>
      </div>

      {/* Card Body Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3
            className={`text-base font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mt-1 text-xs font-semibold ${
              isDark ? "text-cyan-300" : "text-cyan-600"
            }`}
          >
            {project.tagline}
          </p>
          <p
            className={`mt-2 text-xs leading-5 line-clamp-2 ${
              isDark ? "text-slate-400" : "text-slate-600"
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
                className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold ${
                  isDark
                    ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                    : "border-cyan-600/20 bg-cyan-50 text-cyan-700"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-bold transition ${
                isDark
                  ? "text-slate-300 hover:text-cyan-400"
                  : "text-slate-700 hover:text-cyan-600"
              }`}
            >
              <FaGithub size={14} /> View Code Base
            </a>

            <button
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              <Play size={12} className="fill-cyan-400" /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects({ theme = "dark" }) {
  const [activeMedia, setActiveMedia] = useState(null);
  const isDark = theme === "dark";

  return (
    <section id="projects" className="px-6 py-10">
      <SectionReveal>
        <div
          className={`mx-auto max-w-6xl rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition duration-300 ${
            isDark
              ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
              : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
          }`}
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <p
              className={`text-xs font-bold uppercase tracking-[0.35em] ${
                isDark ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              Projects
            </p>
            <h2
              className={`mt-2 text-3xl font-extrabold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Featured AI & Engineering Systems
            </h2>
            <p
              className={`mx-auto mt-2 max-w-lg text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              High-performance applications built with Machine Learning, Computer Vision, and Web tech.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isDark={isDark}
                onOpenModal={setActiveMedia}
              />
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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-cyan-400/40 bg-slate-950 p-3 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <h3 className="text-sm font-bold text-white">
                    {activeMedia.title} — Video Demo
                  </h3>
                </div>
                <button
                  onClick={() => setActiveMedia(null)}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-cyan-400 hover:text-slate-950 transition"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-2 overflow-hidden rounded-xl bg-black">
                <video
                  src={activeMedia.media}
                  controls
                  autoPlay
                  className="w-full max-h-[70vh] rounded-xl object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;