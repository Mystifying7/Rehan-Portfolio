import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import {
  Code2,
  Award,
  Layers,
  Trophy,
  GraduationCap,
  Play,
  X,
  Plus,
  Shield,
  Cpu,
  Eye,
  Tv,
  Navigation,
  ExternalLink,
  CalendarDays,
  ChevronDown,
  Sparkles,
  BookOpen,
  Users,
  Clock,
  Target,
  Brain,
  Server,
  Wrench,
  CheckCircle2,
  Download,
  FileText,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Media imports
import propEngineMedia from "../assets/projects/PROP_ENGINE.mp4";
import airCursorMedia from "../assets/projects/Air-Cursor.mp4";
import cineMindMedia from "../assets/projects/CineMindAI.mp4";
import kavachamMedia from "../assets/projects/Kavacham.mp4";
import virtualSteeringMedia from "../assets/projects/Virtual_Steering.mp4";

// Education Image imports
import universityImg from "../assets/images/university.jpg";
import class12Img from "../assets/images/class-12.jpg";
import class10Img from "../assets/images/class-10.jpg";

// PDF Certificate & Resume imports
import cProgPDF from "../assets/certificates/C_programming.pdf";
import dsaPDF from "../assets/certificates/Data_Structure_Algorithm.pdf";
import javaProgPDF from "../assets/certificates/Java_programming.pdf";
import resumePDF from "../assets/certificates/Rehan_Resume.pdf";
import citadelPDF from "../assets/certificates/Citadel.pdf";

/* ==========================================================================
   DATA DEFINITIONS
   ========================================================================== */

const tabs = [
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "skills", label: "Tech Stack", icon: Layers },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "hackathons", label: "Hackathons", icon: Trophy },
  { id: "education", label: "Education & Journey", icon: GraduationCap },
];

const projects = [
  {
    id: "kavacham",
    title: "Kavacham",
    tagline: "Cyber Security & Digital Evidence Preservation",
    media: kavachamMedia,
    icon: <Shield size={22} className="text-cyan-400" />,
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
    icon: <Cpu size={22} className="text-cyan-400" />,
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
    icon: <Navigation size={22} className="text-cyan-400" />,
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
    icon: <Eye size={22} className="text-cyan-400" />,
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
    icon: <Tv size={22} className="text-cyan-400" />,
    badgeColor: "from-indigo-500/20 to-cyan-500/20 border-indigo-400/30",
    gradient: "from-slate-950 via-indigo-950/40 to-cyan-950/30",
    github: "https://github.com/Mystifying7/Movie-Recommendation-System",
    tags: ["NLP", "TF-IDF Vectorization", "Flask", "Tailwind CSS"],
    description:
      "Natural Language Processing movie recommendation system parsing plot summaries and genre vectors.",
  },
];

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain size={20} />,
    skills: [
      "Scikit-Learn",
      "Computer Vision (OpenCV, MediaPipe)",
      "NLP Basics",
      "Predictive Analytics",
      "Model Evaluation",
    ],
  },
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    skills: ["Python", "Java", "C", "JavaScript", "HTML5 & CSS3", "SQL"],
  },
  {
    title: "Full-Stack Web Development",
    icon: <Server size={20} />,
    skills: ["React.js", "Flask", "FastAPI", "Tailwind CSS", "REST APIs", "Node.js"],
  },
  {
    title: "Core CS & Engineering Tools",
    icon: <Wrench size={20} />,
    skills: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS & SQL",
      "Git & GitHub",
      "Linux",
      "WebSockets",
    ],
  },
];

const certifications = [
  {
    id: "c-prog",
    title: "C Programming",
    issuer: "IIT Kharagpur (NPTEL)",
    duration: "Jan 2025 • Apr 2025",
    level: "CERTIFIED",
    achievement: "Verified Elite Credential",
    pdf: cProgPDF,
    skills: ["Pointers & Memory", "Structures & Unions", "File I/O", "Algorithm Analysis"],
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    issuer: "IIT Kanpur (NPTEL)",
    duration: "Jul 2025 • Oct 2025",
    level: "SILVER",
    achievement: "Top 5% Elite+Silver Rank",
    pdf: dsaPDF,
    skills: ["Trees & Graphs", "Dynamic Programming", "Sorting & Searching", "Complexity Analysis"],
  },
  {
    id: "java-prog",
    title: "Java Programming",
    issuer: "IIT Kharagpur (NPTEL)",
    duration: "Jan 2026 • Apr 2026",
    level: "GOLD",
    achievement: "Elite Gold Credential",
    pdf: javaProgPDF,
    skills: ["OOP Concepts", "Multithreading", "Exception Handling", "Collections Framework"],
  },
];

const hackathons = [
  {
    name: "Citadel 1.0",
    level: "National",
    status: "Participant",
    project: "Kavacham",
    summary:
      "Detect outbound personal-data exposure, inspect third-party APK risk, preserve encrypted evidence, prepare erasure requests, and organise a reviewable escalation timeline.",
    date: "July 2026",
    team: "Team of 4",
    duration: "30 Hours",
    result: "Security Prototype",
    pdf: citadelPDF,
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Zod",
      "Lucide React",
      "Web Crypto API",
      "IndexedDB",
    ],
    github: "https://github.com/hackerskr76/Kavacham-Citadel1.0",
  },
];

const educationList = [
  {
    id: "btech",
    year: "2024 – PRESENT • KOLKATA, INDIA",
    degree: "B.Tech in Computer Science Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    institute: "Swami Vivekananda University",
    image: universityImg,
    focus:
      "Specializing in Artificial Intelligence, Machine Learning, Computer Vision, and Software Systems Design.",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Structures & Algorithms",
      "Computer Vision",
      "Operating Systems",
      "DBMS & SQL",
      "Software Systems Design",
      "FastAPI & React",
    ],
  },
  {
    id: "class12",
    year: "2023 – 2024 • JHARKHAND, INDIA",
    degree: "Senior Secondary Education (Class XII)",
    specialization: "Science • Physics, Chemistry, Math & CS",
    institute: "Kendriya Vidyalaya Godda",
    image: class12Img,
    focus:
      "Built a solid foundation in analytical calculus, problem solving, physics, and computer science fundamentals.",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "Analytical Reasoning",
      "English",
    ],
  },
  {
    id: "class10",
    year: "2021 – 2022 • JHARKHAND, INDIA",
    degree: "Secondary Education (Class X)",
    specialization: "Foundational Science & Mathematics",
    institute: "Kendriya Vidyalaya Singarsi",
    image: class10Img,
    focus:
      "Developed core academic discipline, logical reasoning, and learning consistency.",
    coursework: [
      "Mathematics",
      "Science",
      "Social Studies",
      "English",
      "Information Technology",
    ],
  },
];

const journeyMilestones = [
  {
    year: "2024",
    title: "Started B.Tech CSE",
    desc: "Began computer science journey, programming fundamentals, C, Python, and algorithm design.",
    icon: GraduationCap,
    tags: ["C Programming", "Python Basics", "CS Foundations"],
  },
  {
    year: "2025",
    title: "DSA Mastery & 400+ Problems",
    desc: "Advanced data structures, algorithmic problem solving in Java, NPTEL Silver Rank top 5%.",
    icon: Code2,
    tags: ["Java OOP", "400+ DSA", "LeetCode / GFG", "NPTEL Silver"],
  },
  {
    year: "2026",
    title: "AI, ML & Real-World Systems",
    desc: "Building production ML, Computer Vision pipelines with OpenCV, MediaPipe, Scikit-Learn, and FastAPI.",
    icon: Brain,
    tags: ["Computer Vision", "Machine Learning", "FastAPI", "Full-Stack"],
  },
  {
    year: "Goal",
    title: "AI & ML Engineer",
    desc: "Developing next-generation AI software, neural architectures, and scalable intelligent solutions.",
    icon: Target,
    tags: ["Deep Learning", "LLMs & GenAI", "MLOps", "High Impact"],
  },
];

/* ==========================================================================
   TAB VIEWS
   ========================================================================== */

/* 1. Projects View */
function ProjectsView({ isDark, onSelectProject }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ y: -6 }}
          className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-300 ${
            isDark
              ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/15"
              : "border-slate-200 bg-white hover:border-cyan-500/50 hover:shadow-xl hover:shadow-slate-300/40"
          }`}
        >
          <div>
            {/* Project Video / Media Preview */}
            <div
              onClick={() => onSelectProject(project)}
              className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-slate-900 mb-4 group/media"
            >
              <video
                src={project.media}
                muted
                loop
                playsInline
                className="h-full w-full object-cover transition-transform duration-500 group-hover/media:scale-105"
                onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/media:opacity-100">
                <span className="flex items-center gap-1.5 rounded-full bg-cyan-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-lg">
                  <Play size={12} className="fill-slate-950" />
                  Preview Video
                </span>
              </div>
            </div>

            {/* Header with Icon and Title */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  {project.icon}
                </div>
                <div>
                  <h3
                    className={`text-lg font-black tracking-tight ${
                      isDark ? "text-white group-hover:text-cyan-300" : "text-slate-900 group-hover:text-cyan-700"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className={`mt-3 text-xs leading-relaxed line-clamp-2 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {project.description}
            </p>
          </div>

          {/* Tags & Action Row */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                    isDark
                      ? "bg-slate-900 text-cyan-300 border border-cyan-400/20"
                      : "bg-cyan-50 text-cyan-700 border border-cyan-200"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={`flex h-8 w-8 items-center justify-center rounded-lg border transition ${
                  isDark
                    ? "border-white/10 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"
                    : "border-slate-300 bg-slate-100 text-slate-700 hover:border-cyan-500 hover:text-cyan-700"
                }`}
                title="View on GitHub"
              >
                <FaGithub size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* 2. Skills / Tech Stack View */
function SkillsView({ isDark }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {skillCategories.map((category) => (
        <motion.div
          key={category.title}
          whileHover={{ y: -4 }}
          className={`rounded-2xl border p-5 backdrop-blur-xl transition duration-300 ${
            isDark
              ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
              : "border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-lg shadow-slate-200/50"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
              {category.icon}
            </div>
            <h3
              className={`text-base font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {category.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold backdrop-blur-md transition-all duration-200 hover:scale-105 ${
                  isDark
                    ? "border-cyan-400/25 bg-cyan-400/10 text-cyan-300 hover:border-cyan-400/60 hover:bg-cyan-400/20"
                    : "border-cyan-600/20 bg-cyan-50 text-cyan-800 hover:border-cyan-600/40 hover:bg-cyan-100"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* 3. Certificates View */
function CertificatesView({ isDark, onSelectCert }) {
  const [filter, setFilter] = useState("ALL");

  const filteredCerts =
    filter === "ALL"
      ? certifications
      : certifications.filter((c) => c.level === filter);

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {["ALL", "GOLD", "SILVER", "CERTIFIED"].map((lvl) => (
          <button
            key={lvl}
            onClick={() => setFilter(lvl)}
            className={`rounded-xl px-4 py-1.5 text-xs font-bold transition ${
              filter === lvl
                ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/30"
                : isDark
                ? "border border-white/10 bg-slate-900 text-slate-400 hover:text-white"
                : "border border-slate-300 bg-white text-slate-600 hover:text-slate-900"
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-5 md:grid-cols-3">
        {filteredCerts.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ y: -4 }}
            className={`flex flex-col justify-between rounded-2xl border p-5 backdrop-blur-xl transition duration-300 ${
              isDark
                ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
                : "border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-lg"
            }`}
          >
            <div>
              {/* Badge & Level */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                    cert.level === "GOLD"
                      ? "bg-amber-400/20 text-amber-300 border border-amber-400/40"
                      : cert.level === "SILVER"
                      ? "bg-slate-300/20 text-slate-200 border border-slate-300/40"
                      : "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                  }`}
                >
                  {cert.level}
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  {cert.duration}
                </span>
              </div>

              <h4
                className={`mt-3 text-lg font-black ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {cert.title}
              </h4>
              <p className="text-xs font-semibold text-cyan-400">{cert.issuer}</p>

              {/* Achievement Note */}
              <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                <Sparkles size={13} className="text-amber-400" />
                <span>{cert.achievement}</span>
              </div>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${
                      isDark
                        ? "bg-slate-900 text-slate-300 border border-white/10"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* View Certificate & Direct Download Actions */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2">
              <button
                onClick={() => onSelectCert && onSelectCert(cert)}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-cyan-400/10 border border-cyan-400/30 py-2.5 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 hover:shadow-md cursor-pointer"
              >
                <Eye size={14} />
                <span>Preview Certificate</span>
              </button>
              <a
                href={cert.pdf}
                download={`${cert.title.replace(/\s+/g, "_")}.pdf`}
                className={`flex h-9 w-9 items-center justify-center rounded-xl border transition ${
                  isDark
                    ? "border-white/10 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"
                    : "border-slate-300 bg-slate-100 text-slate-700 hover:border-cyan-500 hover:text-cyan-700"
                }`}
                title="Direct Download PDF"
              >
                <Download size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* 4. Hackathons View */
function HackathonsView({ isDark, onSelectHackathon }) {
  return (
    <div className="space-y-6">
      {hackathons.map((hack) => (
        <motion.div
          key={hack.name}
          whileHover={{ y: -4 }}
          className={`rounded-2xl border p-6 backdrop-blur-xl transition duration-300 ${
            isDark
              ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/40"
              : "border-slate-200 bg-white hover:border-cyan-500/40"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400 border border-purple-400/30">
                <Trophy size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3
                    className={`text-xl font-black ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {hack.name}
                  </h3>
                  <span className="rounded-full border border-purple-400/40 bg-purple-500/20 px-2.5 py-0.5 text-[10px] font-bold text-purple-300">
                    {hack.level} Level
                  </span>
                </div>
                <p className="text-xs font-semibold text-cyan-400">
                  Project: {hack.project} ({hack.result})
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1">
                <CalendarDays size={13} className="text-cyan-400" />
                {hack.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={13} className="text-cyan-400" />
                {hack.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users size={13} className="text-cyan-400" />
                {hack.team}
              </span>
            </div>
          </div>

          <p
            className={`mt-4 text-xs leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {hack.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {hack.stack.map((item) => (
              <span
                key={item}
                className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${
                  isDark
                    ? "bg-slate-900 text-cyan-300 border border-cyan-400/20"
                    : "bg-cyan-50 text-cyan-700 border border-cyan-200"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Action Row: Preview Certificate + Direct Download + GitHub Repo */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {hack.pdf && (
                <>
                  <button
                    onClick={() =>
                      onSelectHackathon &&
                      onSelectHackathon({
                        title: `${hack.name} Hackathon Certificate`,
                        issuer: `National Cyber Security Hackathon • Project ${hack.project}`,
                        level: `${hack.level.toUpperCase()} LEVEL`,
                        pdf: hack.pdf,
                      })
                    }
                    className="flex items-center gap-2 rounded-xl bg-purple-500/15 border border-purple-400/30 px-4 py-2 text-xs font-bold text-purple-300 transition hover:bg-purple-500 hover:text-slate-950 hover:shadow-lg cursor-pointer"
                  >
                    <Eye size={14} />
                    <span>Preview Certificate</span>
                  </button>

                  <a
                    href={hack.pdf}
                    download={`${hack.name.replace(/\s+/g, "_")}_Certificate.pdf`}
                    className={`flex h-8 w-8 items-center justify-center rounded-xl border transition ${
                      isDark
                        ? "border-white/10 bg-slate-900 text-slate-300 hover:border-purple-400 hover:text-purple-300"
                        : "border-slate-300 bg-slate-100 text-slate-700 hover:border-purple-500 hover:text-purple-700"
                    }`}
                    title="Direct Download Certificate PDF"
                  >
                    <Download size={14} />
                  </a>
                </>
              )}
            </div>

            <a
              href={hack.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400/10 border border-cyan-400/30 px-4 py-2 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              <FaGithub size={14} />
              <span>View Repository</span>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* Education Card Component matching the user's reference images */
function EducationCard({ edu, isDark }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 cursor-pointer min-h-[300px] flex flex-col justify-end p-6 ${
        isDark
          ? "border-white/15 hover:border-cyan-400/60 shadow-2xl hover:shadow-cyan-500/20"
          : "border-slate-300 hover:border-cyan-500/60 shadow-xl"
      }`}
    >
      {/* Background Campus Photo with Smooth Zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${edu.image})` }}
      />

      {/* Dark Vignette & Frosted Glass Layer */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isHovered
            ? "bg-slate-950/92 backdrop-blur-md"
            : "bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/20"
        }`}
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full">
        {/* Top Year & Location in Gold */}
        <p className="text-[11px] sm:text-xs font-black tracking-widest uppercase text-amber-400 mb-1 drop-shadow">
          {edu.year}
        </p>

        {/* Degree Title */}
        <h4 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">
          {edu.degree}
        </h4>

        {/* Specialization & Institute */}
        <p className="text-xs sm:text-sm font-bold text-amber-300/90 mt-1 drop-shadow">
          {edu.specialization}
        </p>
        <p className="text-xs font-semibold text-slate-300 mt-0.5 drop-shadow">
          {edu.institute}
        </p>

        {/* Expanded Coursework & Details on Hover (Image 2 format) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 12 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-4 pt-3 border-t border-white/15 overflow-hidden"
            >
              <p className="text-xs text-slate-200 leading-relaxed mb-3">
                {edu.focus}
              </p>

              {/* Coursework Topic Badges */}
              <div className="flex flex-wrap gap-1.5">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-amber-400/20"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Circular Plus/Close Action Button */}
      <div className="absolute bottom-5 right-5 z-20 pointer-events-none">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-2xl backdrop-blur-xl transition-all duration-300 ${
            isHovered
              ? "bg-amber-400 text-slate-950 border-amber-300 scale-110 shadow-amber-400/40"
              : "bg-slate-950/80 text-white border-white/30 group-hover:border-cyan-400 group-hover:scale-110"
          }`}
        >
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Plus size={20} className="font-extrabold" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* 5. Education & Journey View */
function EducationJourneyView({ isDark }) {
  const [subView, setSubView] = useState("education");

  return (
    <div className="space-y-6">
      {/* Sub-Switch: Degrees vs Milestone Roadmap */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSubView("education")}
          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition ${
            subView === "education"
              ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/30"
              : isDark
              ? "border border-white/10 bg-slate-900 text-slate-400 hover:text-white"
              : "border border-slate-300 bg-white text-slate-600"
          }`}
        >
          Degrees & Academics
        </button>
        <button
          onClick={() => setSubView("journey")}
          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition ${
            subView === "journey"
              ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/30"
              : isDark
              ? "border border-white/10 bg-slate-900 text-slate-400 hover:text-white"
              : "border border-slate-300 bg-white text-slate-600"
          }`}
        >
          Timeline & Career Milestones
        </button>
      </div>

      {subView === "education" ? (
        /* Academic Degrees: Photography & Expanding Details Cards */
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {educationList.map((edu) => (
            <EducationCard key={edu.id} edu={edu} isDark={isDark} />
          ))}
        </div>
      ) : (
        /* Career Milestone Roadmap */
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {journeyMilestones.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.year}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border p-5 backdrop-blur-xl transition duration-300 flex flex-col justify-between ${
                  isDark
                    ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/40"
                    : "border-slate-200 bg-white hover:border-cyan-500/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="rounded-full bg-cyan-400/15 border border-cyan-400/40 px-2.5 py-0.5 text-xs font-black text-cyan-300">
                      {m.year}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                      <Icon size={16} />
                    </div>
                  </div>
                  <h4
                    className={`text-sm font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {m.title}
                  </h4>
                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {m.desc}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                        isDark
                          ? "bg-slate-900 text-cyan-300 border border-cyan-400/20"
                          : "bg-cyan-50 text-cyan-700"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   MAIN PORTFOLIO SHOWCASE COMPONENT
   ========================================================================== */

function PortfolioShowcase({ theme = "dark" }) {
  const [activeTab, setActiveTab] = useState("projects");
  const [modalProject, setModalProject] = useState(null);
  const [modalDoc, setModalDoc] = useState(null);
  const isDark = theme === "dark";

  // Sync with URL hashes (e.g. #projects, #skills, #hackathons, etc.)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (
        [
          "projects",
          "skills",
          "certificates",
          "certifications",
          "hackathons",
          "education",
          "journey",
          "showcase",
        ].includes(hash)
      ) {
        if (hash === "certifications") setActiveTab("certificates");
        else if (hash === "journey") setActiveTab("education");
        else if (hash === "showcase") setActiveTab("projects");
        else setActiveTab(hash);
      }
    };

    window.addEventListener("hashchange", handleHash);
    handleHash();
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
    window.dispatchEvent(
      new CustomEvent("portfolio-tab-active", { detail: tabId })
    );
  };

  return (
    <section id="showcase" className="px-6 py-14 relative scroll-mt-20">
      <SectionReveal>
        <div className="mx-auto max-w-6xl">
          {/* Main Title Matching the Reference Screenshot */}
          <div className="mb-8 text-center flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider">
              <span
                className={
                  isDark ? "marquee-text-cyan-dark" : "marquee-text-cyan-light"
                }
              >
                PORTFOLIO
              </span>{" "}
              <span
                className={
                  isDark ? "marquee-text-white-dark" : "marquee-text-white-light"
                }
              >
                SHOWCASE
              </span>
            </h2>
            <p
              className={`mt-2 text-xs sm:text-sm font-medium ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Explore my interactive software projects, core tech stack, credentials, and journey.
            </p>
          </div>

          {/* Unified Tab Selector Bar */}
          <div className="flex justify-center mb-8">
            <div
              className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-2xl md:rounded-3xl border p-2 backdrop-blur-xl shadow-2xl transition duration-300 max-w-full overflow-x-auto ${
                isDark
                  ? "border-white/10 bg-slate-900/70 shadow-cyan-500/5"
                  : "border-slate-300 bg-white/90 shadow-slate-300/40"
              }`}
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative flex items-center gap-2 rounded-xl md:rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 select-none ${
                      isActive
                        ? isDark
                          ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_16px_rgba(34,211,238,0.3)]"
                          : "bg-cyan-500 text-white shadow-md shadow-cyan-500/30"
                        : isDark
                        ? "text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
                    }`}
                  >
                    <Icon size={16} className={isActive ? "animate-pulse" : ""} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Container */}
          <div
            className={`rounded-3xl border p-6 md:p-8 shadow-2xl backdrop-blur-xl transition duration-300 ${
              isDark
                ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
                : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "projects" && (
                  <ProjectsView
                    isDark={isDark}
                    onSelectProject={(p) => setModalProject(p)}
                  />
                )}
                {activeTab === "skills" && <SkillsView isDark={isDark} />}
                {activeTab === "certificates" && (
                  <CertificatesView
                    isDark={isDark}
                    onSelectCert={(c) => setModalDoc(c)}
                  />
                )}
                {activeTab === "hackathons" && (
                  <HackathonsView
                    isDark={isDark}
                    onSelectHackathon={(doc) => setModalDoc(doc)}
                  />
                )}
                {activeTab === "education" && (
                  <EducationJourneyView isDark={isDark} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </SectionReveal>

      {/* Project Fullscreen Video/Details Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border p-6 shadow-2xl backdrop-blur-2xl ${
                isDark
                  ? "border-cyan-400/30 bg-slate-950 text-white"
                  : "border-slate-300 bg-white text-slate-900"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalProject(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-slate-300 transition hover:scale-110 hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  {modalProject.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black">{modalProject.title}</h3>
                  <p className="text-xs font-semibold text-cyan-400">
                    {modalProject.tagline}
                  </p>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-inner">
                <video
                  src={modalProject.media}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>

              <p
                className={`mt-4 text-sm leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {modalProject.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {modalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <div className="mt-6 flex justify-end">
                <a
                  href={modalProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:brightness-110"
                >
                  <FaGithub size={16} />
                  <span>View on GitHub</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* In-App Certificate & Resume PDF Document Preview Modal */}
      <AnimatePresence>
        {modalDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md"
            onClick={() => setModalDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative flex flex-col h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-2xl ${
                isDark
                  ? "border-cyan-400/40 bg-slate-950 text-white shadow-cyan-500/20"
                  : "border-slate-300 bg-white text-slate-900 shadow-2xl"
              }`}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 shrink-0 bg-slate-900/70">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/30">
                    <FileText size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-black">{modalDoc.title}</h3>
                      {modalDoc.level && (
                        <span className="rounded-full bg-cyan-400/20 border border-cyan-400/40 px-2 py-0.5 text-[10px] font-black text-cyan-300">
                          {modalDoc.level}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-cyan-400">
                      {modalDoc.issuer || modalDoc.achievement}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Download Button */}
                  <a
                    href={modalDoc.pdf}
                    download={`${modalDoc.title.replace(/\s+/g, "_")}.pdf`}
                    className="flex items-center gap-1.5 rounded-xl border border-cyan-400/40 bg-cyan-400/15 px-3 py-2 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 cursor-pointer"
                    title="Download PDF"
                  >
                    <Download size={14} />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  {/* Open in New Window Button */}
                  <a
                    href={modalDoc.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-slate-900/80 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                    title="Open in Full Tab"
                  >
                    <ExternalLink size={15} />
                  </a>

                  {/* Close Button */}
                  <button
                    onClick={() => setModalDoc(null)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-slate-900/80 text-slate-300 transition hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-400 cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal PDF Frame View */}
              <div className="relative flex-1 w-full bg-slate-900/90 overflow-hidden">
                <iframe
                  src={`${modalDoc.pdf}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-0"
                  title={modalDoc.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PortfolioShowcase;
