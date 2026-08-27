import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import DocModal from "./DocModal";
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
  ChevronLeft,
  ChevronRight,
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
  Search,
  ShieldCheck,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Media imports
import propEngineMedia from "../assets/projects/PROP_ENGINE.mp4";
import airCursorMedia from "../assets/projects/Air-Cursor.mp4";
import cineMindMedia from "../assets/projects/CineMindAI.mp4";
import kavachamMedia from "../assets/projects/Kavacham.mp4";
import virtualSteeringMedia from "../assets/projects/Virtual_Steering.mp4";
import hybrid from "../assets/projects/Hybrid-RAG.mp4";
import deepfakeMedia from "../assets/projects/deepfake.mp4";

// Education Image imports
import universityImg from "../assets/images/university.jpeg";
import class12Img from "../assets/images/class-12.jpg";
import class10Img from "../assets/images/class-10.jpg";

// PDF Certificate & Resume imports
import cProgPDF from "../assets/certificates/C_programming.pdf";
import dsaPDF from "../assets/certificates/Data_Structure_Algorithm.pdf";
import javaProgPDF from "../assets/certificates/Java_programming.pdf";
import resumePDF from "../assets/certificates/Rehan_Resume.pdf";
import citadelPDF from "../assets/certificates/Citadel.pdf";
import sihCertificateImg from "../assets/certificates/SIH.jpeg";

/* ==========================================================================
   DATA DEFINITIONS
   ========================================================================== */

const tabs = [
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "skills", label: "Tech Stack", icon: Layers },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "hackathons", label: "Hackathons", icon: Trophy },
  { id: "education", label: "Education", icon: GraduationCap },
];

const projects = [
  {
    id: "Hybrid-RAG Search Engine",
    title: "Hybrid-RAG Search Engine",
    tagline: "AI-Powered Technical Documentation Search Engine",
    media: hybrid,
    icon: <Search size={22} className="text-blue-400" />,
    badgeColor: "from-purple-500/20 to-cyan-500/20 border-cyan-400/30",
    gradient: "from-slate-950 via-purple-950/40 to-cyan-950/30",
    github: "https://github.com/Mystifying7/hybrid_rag_project",
    tags: ["Generative AI", "Information Retrieval", "FastAPI", "Python"],
    description:
      "A security application built for evidence integrity, chain of custody logging, and digital artifact preservation.",
  },
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
    id: "deepfake-shield",
    title: "FORENSIC_SHIELD",
    tagline: "Multimodal Deepfake & Voice Clone Detection • SIH 1st Prize Winner",
    media: deepfakeMedia,
    icon: <ShieldCheck size={22} className="text-emerald-400" />,
    badgeColor: "from-amber-500/20 to-emerald-500/20 border-amber-400/30",
    gradient: "from-slate-950 via-amber-950/20 to-emerald-950/20",
    github: "https://github.com/CY01-Hub/Paichan-Kaun",
    tags: [
      "SIH 1st Prize",
      "Computer Vision",
      "PyTorch",
      "ONNX Runtime (INT8)",
      "Librosa",
      "Flask",
      "React.js",
      "Digital Forensics",
    ],
    description:
      "1st Prize Winning offline multimodal forensic detection engine engineered for Smart India Hackathon (SIH 2026). Identifies frame-level video face-swaps, synthetic audio clones, and phoneme-viseme lip-sync misalignment using INT8 local CPU quantization, Mel-spectrograms, Grad-CAM visual heatmaps, and court-admissible SHA-256 PDF reports.",
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
    id: "ai-ml",
    title: "AI & Machine Learning",
    tagline: "Computer Vision • Deep Learning • Predictive Models",
    icon: <Brain size={22} />,
    badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/40",
    skills: [
      "PyTorch",
      "Scikit-Learn",
      "Computer Vision (OpenCV)",
      "MediaPipe Spatial",
      "ONNX Runtime (INT8)",
      "Librosa Audio Analysis",
      "RetinaFace",
      "NLP & TF-IDF",
      "Predictive Analytics",
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    tagline: "Core Software Engineering & Algorithmic Syntax",
    icon: <Code2 size={22} />,
    badgeColor: "bg-emerald-400/20 text-emerald-300 border-emerald-400/40",
    skills: [
      "Python 3.10+",
      "Java (OOP & Collections)",
      "C (Memory & Pointers)",
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL (PostgreSQL / MySQL)",
      "HTML5 & CSS3",
    ],
  },
  {
    id: "web-dev",
    title: "Full-Stack Development",
    tagline: "High-Performance Modern Web Systems & APIs",
    icon: <Server size={22} />,
    badgeColor: "bg-purple-400/20 text-purple-300 border-purple-400/40",
    skills: [
      "React.js",
      "FastAPI (Async Python)",
      "Flask",
      "Tailwind CSS",
      "Vite & Node.js",
      "WebSockets (Real-time)",
      "RESTful APIs",
      "React Router & Zod",
    ],
  },
  {
    id: "core-cs",
    title: "Core CS & Engineering Tools",
    tagline: "Algorithms • Forensics • Infrastructure",
    icon: <Wrench size={22} />,
    badgeColor: "bg-cyan-400/20 text-cyan-300 border-cyan-400/40",
    skills: [
      "Data Structures & Algorithms (400+)",
      "Digital Forensics & Evidence Preserv.",
      "Linux / Bash Scripting",
      "Git & GitHub Version Control",
      "Web Crypto API & SHA-256",
      "IndexedDB Storage",
      "Operating Systems & DBMS",
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
    id: "sih-2026",
    name: "Smart India Hackathon 2026",
    edition: "2nd Hackathon",
    level: "National Level (SIH)",
    status: "1st Prize Winner",
    isWinner: true,
    prize: "🥇 1st Prize Winner",
    teamId: "SIH 65",
    teamName: "Secret Society",
    team: "Secret Society (Team ID: SIH 65)",
    project: "FORENSIC_SHIELD",
    problemStatement: "AI - Driven Deepfake & Voice Clone Forensic Detection Engine",
    theme: "Cybersecurity & AI",
    category: "Software",
    date: "21st August 2026",
    duration: "Internal SIH Round • 1st Place",
    result: "1st Prize Winner • Zero Budget / 100% Self-Engineered",
    certificate: sihCertificateImg,
    fileType: "jpeg",
    isImage: true,
    issuer: "Ministry of Education, AICTE & Institution's Innovation Council (SVU Kolkata)",
    summary:
      "Achieved 1st Prize at Smart India Hackathon (SIH 2026) for engineering an offline multimodal deepfake & synthetic voice clone forensic engine with zero budget. Detects frame-level video face-swaps, synthetic audio clones, and phoneme-viseme lip-sync misalignment with INT8 local CPU quantization, Grad-CAM heatmaps, and tamper-proof SHA-256 encrypted court-admissible forensic PDF reports.",
    highlights: [
      "🏆 1st Prize Winner: Awarded 1st place in the Cybersecurity & AI software category with zero budget & complete self-engineered execution.",
      "🔬 Visual Forensics & Lip-Sync: Frame-by-frame blinking anomalies, facial jitter analysis, and Phoneme-Viseme cross-modal alignment checking mouth movements against spoken audio.",
      "🎙️ Audio Verification: Mel-Spectrogram and pitch fluctuation scanning to detect synthetic AI voice clones.",
      "⚡ 100% Offline INT8 Quantization: Runs locally on standard 8GB RAM CPU laptops with 0 cloud GPU dependency, guaranteeing 100% data privacy and 0 latency overhead.",
      "📑 Court-Admissible Output: Generates tamper-proof forensic PDF evidence documents with visual Grad-CAM heatmaps and cryptographic SHA-256 hashes.",
      "💻 Dual Control Interfaces: Interactive React.js Web UI for visual inspection + Python argparse Terminal CLI tool for batch scanning confiscated drives."
    ],
    stack: [
      "Python 3.10+",
      "PyTorch",
      "ONNX Runtime (INT8)",
      "OpenCV",
      "RetinaFace",
      "Librosa",
      "Flask",
      "Gunicorn",
      "React.js",
      "Tailwind CSS",
      "ReportLab",
      "SHA-256 Hashes",
      "argparse CLI",
    ],
    github: "https://github.com/CY01-Hub/Paichan-Kaun",
  },
  {
    id: "citadel-1",
    name: "Citadel 1.0",
    edition: "1st Hackathon",
    level: "National Level",
    status: "Participant",
    isWinner: false,
    prize: "National Security Finalist",
    teamId: "Citadel Team",
    teamName: "Team Kavacham",
    team: "Team of 4",
    project: "Kavacham",
    problemStatement: "Outbound Personal Data Exposure & APK Risk Inspection",
    theme: "Cyber Security & Privacy",
    category: "Software",
    summary:
      "Engineered an automated digital defense system to detect outbound personal-data exposure, inspect third-party APK risk, preserve encrypted forensic evidence, prepare data erasure requests, and organise reviewable escalation timelines.",
    date: "July 2026",
    duration: "30 Hours Hackathon",
    result: "Security Prototype",
    certificate: citadelPDF,
    fileType: "pdf",
    isImage: false,
    issuer: "National Cyber Security Hackathon • Project Kavacham",
    highlights: [
      "🛡️ Privacy Preservation: Outbound personal-data exposure detection and third-party APK risk analysis.",
      "🔐 Encrypted Evidence: Tamper-proof evidence preservation utilizing Web Crypto API and IndexedDB.",
      "⏱️ Rapid 30-Hour Build: Delivered high-integrity security prototype within tight hackathon timeline."
    ],
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
          className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-300 ${isDark
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
                onMouseEnter={(e) => e.currentTarget.play().catch(() => { })}
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
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  {project.icon}
                </div>
                <div>
                  <h3
                    className={`text-lg font-black tracking-tight ${isDark ? "text-white group-hover:text-cyan-300" : "text-slate-900 group-hover:text-cyan-700"
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
              className={`mt-3 text-xs leading-relaxed line-clamp-2 ${isDark ? "text-slate-300" : "text-slate-600"
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
                  className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${isDark
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
                className={`flex h-8 w-8 items-center justify-center rounded-lg border transition ${isDark
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

/* 2. Skills / Tech Stack View with Ultra-Smooth 3D Semi-Circle Arc Carousel */
function SkillsView({ isDark }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = skillCategories.length;
  const wheelLockRef = useRef(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalCards]);

  // Smooth Drag & Swipe Gesture
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -35 || info.velocity.x < -350) {
      handleNext();
    } else if (info.offset.x > 35 || info.velocity.x > 350) {
      handlePrev();
    }
  };

  // Smooth Mouse Wheel / Horizontal Trackpad Scroll
  const handleWheel = (e) => {
    if (wheelLockRef.current) return;
    if (Math.abs(e.deltaX) > 25 || (e.shiftKey && Math.abs(e.deltaY) > 25)) {
      wheelLockRef.current = true;
      if (e.deltaX > 0 || (e.shiftKey && e.deltaY > 0)) {
        handleNext();
      } else {
        handlePrev();
      }
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 350);
    }
  };

  return (
    <div
      onWheel={handleWheel}
      className="relative py-2 select-none"
    >
      {/* 3D Semi-Circle Arc Viewport for Vertical Portrait Cards */}
      <div
        className="relative flex items-center justify-center min-h-[500px] sm:min-h-[520px] overflow-hidden px-2 sm:px-4"
        style={{ perspective: "1200px" }}
      >
        <div className="relative w-full max-w-4xl h-[470px] sm:h-[490px] flex items-center justify-center">
          {skillCategories.map((category, index) => {
            // Calculate relative offset around the carousel
            let offset = index - activeIndex;
            if (offset < -Math.floor(totalCards / 2)) offset += totalCards;
            if (offset > Math.floor((totalCards - 1) / 2)) offset -= totalCards;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isVisible = Math.abs(offset) <= 1;

            // 3D Semi-Circle / Arc coordinate transform parameters for portrait cards
            let xOffset = "0%";
            let yOffset = "0px";
            let rotateY = 0;
            let rotateZ = 0;
            let scale = 1;
            let zIndex = 30;
            let opacity = 1;

            if (isCenter) {
              xOffset = "0%";
              yOffset = "0px";
              rotateY = 0;
              rotateZ = 0;
              scale = 1.03;
              zIndex = 30;
              opacity = 1;
            } else if (isLeft) {
              xOffset = "-74%";
              yOffset = "22px";
              rotateY = 32;
              rotateZ = -2;
              scale = 0.86;
              zIndex = 20;
              opacity = 0.52;
            } else if (isRight) {
              xOffset = "74%";
              yOffset = "22px";
              rotateY = -32;
              rotateZ = 2;
              scale = 0.86;
              zIndex = 20;
              opacity = 0.52;
            } else {
              xOffset = offset > 0 ? "130%" : "-130%";
              yOffset = "45px";
              rotateY = offset > 0 ? -50 : 50;
              scale = 0.65;
              zIndex = 10;
              opacity = 0;
            }

            return (
              <motion.div
                key={category.id || category.title}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={handleDragEnd}
                animate={{
                  x: xOffset,
                  y: yOffset,
                  rotateY: rotateY,
                  rotateZ: rotateZ,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{
                  duration: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => {
                  if (!isCenter) setActiveIndex(index);
                }}
                className={`absolute w-[310px] sm:w-[350px] md:w-[370px] min-h-[450px] sm:min-h-[470px] p-5 sm:p-6 rounded-3xl border flex flex-col justify-between transition-colors duration-300 ${!isCenter ? "cursor-pointer hover:opacity-85" : "cursor-grab active:cursor-grabbing"
                  } ${isCenter
                    ? isDark
                      ? "border-cyan-400/70 bg-gradient-to-b from-slate-950 via-slate-900/98 to-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.25)] ring-1 ring-cyan-400/30"
                      : "border-cyan-500/70 bg-gradient-to-b from-white via-cyan-50/40 to-white shadow-[0_15px_40px_rgba(6,182,212,0.22)] ring-1 ring-cyan-500/30"
                    : isDark
                      ? "border-white/10 bg-slate-950 shadow-2xl"
                      : "border-slate-300 bg-white shadow-xl"
                  }`}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                {/* Visual Arc Guidance Badges */}
                {isLeft && (
                  <div className="absolute -top-3.5 left-6 rounded-full bg-cyan-400/20 border border-cyan-400/40 px-3 py-0.5 text-[10px] font-black text-cyan-300 backdrop-blur-md">
                    ← Previous
                  </div>
                )}
                {isRight && (
                  <div className="absolute -top-3.5 right-6 rounded-full bg-cyan-400/20 border border-cyan-400/40 px-3 py-0.5 text-[10px] font-black text-cyan-300 backdrop-blur-md">
                    Upcoming →
                  </div>
                )}

                {/* Vertical Portrait Card Top Header */}
                <div>
                  {/* Top Bar: Card Number & Specialization Badge */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span
                      className={`rounded-lg px-2 py-0.5 text-[10px] font-black tracking-wider ${isDark ? "bg-slate-900 text-slate-400 border border-white/5" : "bg-slate-100 text-slate-600"
                        }`}
                    >
                      CARD 0{index + 1}/0{totalCards}
                    </span>
                    {category.badge && (
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[10px] font-black ${category.badgeColor || "bg-cyan-400/20 text-cyan-300 border-cyan-400/40"
                          }`}
                      >
                        {category.badge}
                      </span>
                    )}
                  </div>

                  {/* Icon & Category Title in Vertical Alignment */}
                  <div className="flex flex-col items-center text-center mt-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-300 ${isCenter
                          ? "bg-cyan-400/15 text-cyan-300 border-cyan-400/40 shadow-lg shadow-cyan-400/20 scale-105"
                          : "bg-slate-800 text-slate-400 border-white/10"
                        }`}
                    >
                      {category.icon}
                    </div>
                    <h3
                      className={`text-lg sm:text-xl font-black mt-3 leading-tight ${isDark ? "text-white" : "text-slate-900"
                        }`}
                    >
                      {category.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400 mt-1">
                      {category.tagline || `${category.skills.length} Mastered Technologies`}
                    </p>
                  </div>

                  <div className="my-3.5 border-t border-white/10" />

                  {/* Vertical Skills Chips Container */}
                  <div className="flex flex-wrap gap-2 justify-center max-h-[220px] overflow-y-auto pr-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-xl border px-3 py-1.5 text-xs font-bold transition-all duration-200 ${isCenter
                            ? isDark
                              ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200 hover:border-cyan-400 hover:bg-cyan-400/25 shadow-sm"
                              : "border-cyan-600/30 bg-cyan-50 text-cyan-900 hover:border-cyan-600 hover:bg-cyan-100 shadow-sm"
                            : isDark
                              ? "border-white/10 bg-slate-900/80 text-slate-300"
                              : "border-slate-200 bg-slate-100 text-slate-700"
                          }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Vertical Portrait Card Bottom Status Footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 font-semibold text-slate-400 text-[11px]">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>Verified Stack</span>
                  </span>
                  <span
                    className={`font-black uppercase tracking-wider text-[10px] ${isCenter ? "text-cyan-400 animate-pulse" : "text-slate-500"
                      }`}
                  >
                    {isCenter ? "● Active Focus" : "Click to View"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls Row (Previous Button, Dot Indicators, Next Button) */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          onClick={handlePrev}
          className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-200 cursor-pointer ${isDark
              ? "border-white/15 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:scale-110 shadow-lg shadow-black/40"
              : "border-slate-300 bg-white text-slate-700 hover:border-cyan-500 hover:text-cyan-600 hover:scale-110 shadow-md"
            }`}
          title="Previous Skill (Left Arrow)"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Indicator Dots */}
        <div className="flex items-center gap-2">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex
                  ? "w-8 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-md shadow-cyan-400/40"
                  : "w-2.5 bg-slate-600 hover:bg-slate-400"
                }`}
              title={`Jump to ${cat.title}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-200 cursor-pointer ${isDark
              ? "border-white/15 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:scale-110 shadow-lg shadow-black/40"
              : "border-slate-300 bg-white text-slate-700 hover:border-cyan-500 hover:text-cyan-600 hover:scale-110 shadow-md"
            }`}
          title="Next Skill (Right Arrow)"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p className="mt-2 text-center text-[11px] font-medium text-slate-400">
        Drag/Swipe, click side card, or use <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-white/10 text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-white/10 text-[10px]">→</kbd> arrow keys to navigate
      </p>
    </div>
  );
}

/* Interactive 3D Holographic Certificate Card */
function CertificateCard({ cert, isDark, onSelectCert, index }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -9;
    const rY = ((x - centerX) / centerX) * 9;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const isGold = cert.level === "GOLD";
  const isSilver = cert.level === "SILVER";

  const accentGlow = isGold
    ? "from-amber-500/20 via-yellow-400/10 to-amber-500/5 border-amber-400/40 shadow-amber-500/10"
    : isSilver
      ? "from-slate-200/20 via-sky-300/10 to-slate-400/5 border-slate-300/40 shadow-sky-500/10"
      : "from-cyan-500/20 via-sky-400/10 to-cyan-500/5 border-cyan-400/40 shadow-cyan-500/10";

  const badgeStyle = isGold
    ? isDark
      ? "bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-300 border-amber-400/50 shadow-sm shadow-amber-400/20"
      : "bg-amber-100 text-amber-900 border-amber-400 font-black shadow-sm"
    : isSilver
      ? isDark
        ? "bg-gradient-to-r from-slate-200/20 to-sky-300/20 text-slate-100 border-slate-300/50 shadow-sm shadow-slate-300/20"
        : "bg-sky-100 text-sky-900 border-sky-400 font-black shadow-sm"
      : isDark
        ? "bg-gradient-to-r from-cyan-400/20 to-teal-400/20 text-cyan-300 border-cyan-400/50 shadow-sm shadow-cyan-400/20"
        : "bg-cyan-100 text-cyan-900 border-cyan-400 font-black shadow-sm";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative group rounded-3xl border p-6 flex flex-col justify-between overflow-hidden transition-all duration-200 select-none ${isDark
          ? "bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950/95"
          : "bg-gradient-to-b from-white via-slate-50/80 to-white"
        } ${accentGlow} hover:shadow-2xl`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {/* Holographic Light Glare / Foil Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 70%)`,
        }}
      />

      {/* Decorative Subtle Background Watermark Stamp (Visible across Gold, Silver/DSA, and Certified) */}
      <div className={`pointer-events-none absolute -right-6 -bottom-6 group-hover:scale-110 transition-all duration-500 ${
        isDark ? "opacity-5 group-hover:opacity-10" : "opacity-15 group-hover:opacity-25"
      }`}>
        <Award
          size={180}
          className={
            isGold
              ? isDark ? "text-amber-400" : "text-amber-500"
              : isSilver
              ? isDark ? "text-slate-300" : "text-sky-600"
              : isDark ? "text-cyan-400" : "text-cyan-600"
          }
        />
      </div>

      <div>
        {/* Card Header: Level Medal Badge & Duration */}
        <div className={`flex items-center justify-between gap-2 pb-3.5 border-b ${
          isDark ? "border-white/10" : "border-slate-200"
        }`}>
          <span className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-wider ${badgeStyle}`}>
            <Sparkles size={12} className={isGold ? "text-amber-400 animate-pulse" : isSilver ? "text-sky-500" : "text-cyan-500"} />
            <span>{isGold ? "🥇 ELITE GOLD" : isSilver ? "🥈 ELITE + SILVER" : "🎖️ ELITE CERTIFIED"}</span>
          </span>
          <span className={`text-[11px] font-bold tracking-wide ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            {cert.duration}
          </span>
        </div>

        {/* Certificate Title & IIT Issuer */}
        <div className="mt-4">
          <h4 className={`text-xl font-black leading-snug transition-colors duration-200 ${
            isDark ? "text-white group-hover:text-cyan-300" : "text-slate-900 group-hover:text-cyan-700"
          }`}>
            {cert.title}
          </h4>
          <p className={`text-xs font-bold mt-1 flex items-center gap-1.5 ${
            isDark ? "text-cyan-400" : "text-cyan-700"
          }`}>
            <GraduationCap size={14} />
            <span>{cert.issuer}</span>
          </p>
        </div>

        {/* Verified Elite Achievement Box */}
        <div className={`mt-3.5 flex items-center gap-2 rounded-xl p-2.5 border text-xs font-semibold ${
          isGold
            ? isDark ? "bg-amber-400/10 border-amber-400/30 text-amber-300" : "bg-amber-50 border-amber-300 text-amber-900 font-bold"
            : isSilver
            ? isDark ? "bg-sky-400/10 border-sky-400/30 text-sky-200" : "bg-sky-50 border-sky-300 text-sky-900 font-bold"
            : isDark ? "bg-cyan-400/10 border-cyan-400/30 text-cyan-300" : "bg-cyan-50 border-cyan-300 text-cyan-900 font-bold"
        }`}>
          <ShieldCheck size={16} className="shrink-0" />
          <span>{cert.achievement}</span>
        </div>

        {/* Skills Tag Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {cert.skills.map((s) => (
            <span
              key={s}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-all duration-200 ${
                isDark
                  ? "bg-slate-900/80 text-slate-300 border border-white/10 group-hover:border-cyan-400/30"
                  : "bg-slate-100 text-slate-800 border border-slate-300 font-medium"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons: Preview & Direct PDF Download */}
      <div className={`mt-6 pt-4 border-t flex items-center gap-2 ${
        isDark ? "border-white/10" : "border-slate-200"
      }`}>
        <button
          onClick={() => onSelectCert && onSelectCert(cert)}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-black transition-all duration-200 cursor-pointer ${
            isDark
              ? "bg-gradient-to-r from-cyan-400/15 to-sky-500/15 border border-cyan-400/40 text-cyan-300 hover:from-cyan-400 hover:to-sky-500 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-[1.02]"
              : "bg-cyan-600 border border-cyan-600 text-white hover:bg-cyan-700 hover:shadow-md hover:scale-[1.02]"
          }`}
        >
          <Eye size={15} />
          <span>Preview Credential</span>
        </button>
        <a
          href={cert.pdf}
          download={`${cert.title.replace(/\s+/g, "_")}.pdf`}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-105 cursor-pointer ${
            isDark
              ? "border-white/15 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 shadow-md"
              : "border-slate-300 bg-white text-slate-700 hover:border-cyan-600 hover:text-cyan-700 shadow-sm"
          }`}
          title="Direct Download Certificate PDF"
        >
          <Download size={15} />
        </a>
      </div>
    </motion.div>
  );
}

/* 3. Certificates View */
function CertificatesView({ isDark, onSelectCert }) {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((cert, index) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            index={index}
            isDark={isDark}
            onSelectCert={onSelectCert}
          />
        ))}
      </div>
    </div>
  );
}

/* 4. Hackathons View with Compact Overlapping Sticky Stack Animation */
function HackathonsView({ isDark, onSelectHackathon }) {
  return (
    <div className="relative">
      {/* Top Stack Guidance Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            Compact Stacked Deck • Scroll to Stack
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <Trophy size={13} className="text-amber-400" />
          <span>{hackathons.length} Featured Hackathons</span>
        </div>
      </div>

      {/* Stacked Cards Container */}
      <div className="relative pb-4">
        {hackathons.map((hack, index) => {
          const stickyTopOffset = 75 + index * 24;

          return (
            <motion.div
              key={hack.id || hack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{
                top: `${stickyTopOffset}px`,
                zIndex: index + 10,
              }}
              className={`sticky mb-6 sm:mb-8 last:mb-0 overflow-hidden rounded-2xl border p-4 sm:p-5 backdrop-blur-2xl transition-all duration-300 ${hack.isWinner
                ? isDark
                  ? "border-amber-400/50 bg-slate-950/95 hover:border-amber-400/80 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] shadow-amber-500/10"
                  : "border-amber-400 bg-white/95 hover:border-amber-500 shadow-[0_-6px_20px_rgba(0,0,0,0.12)]"
                : isDark
                  ? "border-white/15 bg-slate-950/95 hover:border-cyan-400/50 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]"
                  : "border-slate-300 bg-white/95 hover:border-cyan-500/50 shadow-[0_-6px_20px_rgba(0,0,0,0.12)]"
                }`}
            >
              {/* Subtle Winner Glow Background Accent */}
              {hack.isWinner && (
                <div
                  className={`pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl ${isDark ? "bg-amber-400/15" : "bg-amber-300/25"
                    }`}
                />
              )}

              {/* Card Layer Tag & Status */}
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-md px-2 py-0.5 text-[10px] font-black tracking-wide ${hack.isWinner
                      ? "bg-amber-400/20 text-amber-300 border border-amber-400/40"
                      : "bg-cyan-400/15 text-cyan-300 border border-cyan-400/30"
                      }`}
                  >
                    CARD 0{index + 1}/0{hackathons.length}
                  </span>
                  <span className="text-xs font-bold text-slate-300 truncate max-w-[200px] sm:max-w-none">
                    {hack.name}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {hack.isWinner ? (
                    <span className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-2.5 py-0.5 text-[11px] font-black text-slate-950 shadow-sm">
                      {hack.prize}
                    </span>
                  ) : (
                    <span className="rounded-full border border-purple-400/40 bg-purple-500/20 px-2 py-0.5 text-[10px] font-bold text-purple-300">
                      {hack.level}
                    </span>
                  )}
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${isDark
                      ? "border-white/10 bg-slate-900 text-slate-300"
                      : "border-slate-200 bg-slate-100 text-slate-700"
                      }`}
                  >
                    {hack.edition}
                  </span>
                </div>
              </div>

              {/* 2-Column Responsive Layout for Compact Height */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Left Column (Core Info, Summary, & Actions) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Header with Trophy & Project Title */}
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${hack.isWinner
                          ? "bg-amber-400/20 text-amber-300 border-amber-400/40 shadow-md shadow-amber-400/15"
                          : "bg-purple-500/15 text-purple-400 border-purple-400/30"
                          }`}
                      >
                        <Trophy size={20} className={hack.isWinner ? "animate-pulse" : ""} />
                      </div>
                      <div>
                        <h3
                          className={`text-base sm:text-lg font-black leading-tight ${isDark ? "text-white" : "text-slate-900"
                            }`}
                        >
                          Project: {hack.project}
                        </h3>
                        {hack.problemStatement && (
                          <p className="mt-0.5 text-[11px] font-medium text-slate-400 line-clamp-1">
                            <span className="text-slate-500 font-semibold">PS: </span>
                            {hack.problemStatement}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Compact Meta Pills */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[11px]">
                      <span className="flex items-center gap-1 rounded-md bg-slate-900/60 border border-white/5 px-2 py-0.5 text-slate-300">
                        <CalendarDays size={11} className="text-cyan-400" />
                        {hack.date}
                      </span>
                      <span className="flex items-center gap-1 rounded-md bg-slate-900/60 border border-white/5 px-2 py-0.5 text-slate-300">
                        <Clock size={11} className="text-cyan-400" />
                        {hack.duration}
                      </span>
                      <span className="flex items-center gap-1 rounded-md bg-slate-900/60 border border-white/5 px-2 py-0.5 text-slate-300">
                        <Users size={11} className="text-cyan-400" />
                        {hack.team}
                      </span>
                      {hack.theme && (
                        <span className="rounded-md bg-cyan-400/10 border border-cyan-400/25 px-2 py-0.5 font-medium text-cyan-300">
                          {hack.theme}
                        </span>
                      )}
                    </div>

                    {/* Summary */}
                    <p
                      className={`mt-2.5 text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"
                        }`}
                    >
                      {hack.summary}
                    </p>
                  </div>

                  {/* Actions Row */}
                  <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {hack.certificate && (
                        <>
                          <button
                            onClick={() =>
                              onSelectHackathon &&
                              onSelectHackathon({
                                title: `${hack.name} Certificate`,
                                issuer: hack.issuer,
                                level: hack.prize || `${hack.level.toUpperCase()}`,
                                file: hack.certificate,
                                image: hack.certificate,
                                pdf: hack.certificate,
                                isImage: hack.isImage,
                                fileType: hack.fileType || (hack.isImage ? "jpeg" : "pdf"),
                                isWinner: hack.isWinner,
                              })
                            }
                            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition hover:shadow-md cursor-pointer ${hack.isWinner
                              ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 hover:brightness-110 shadow-amber-500/20"
                              : "bg-purple-500/15 border border-purple-400/30 text-purple-300 hover:bg-purple-500 hover:text-slate-950"
                              }`}
                          >
                            <Eye size={13} />
                            <span>Preview Certificate</span>
                          </button>

                          <a
                            href={hack.certificate}
                            download={`${hack.name.replace(/\s+/g, "_")}_Certificate.${hack.fileType || (hack.isImage ? "jpeg" : "pdf")
                              }`}
                            className={`flex h-8 w-8 items-center justify-center rounded-lg border transition ${hack.isWinner
                              ? "border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400 hover:text-slate-950"
                              : isDark
                                ? "border-white/10 bg-slate-900 text-slate-300 hover:border-purple-400 hover:text-purple-300"
                                : "border-slate-300 bg-slate-100 text-slate-700 hover:border-purple-500 hover:text-purple-700"
                              }`}
                            title="Direct Download Certificate"
                          >
                            <Download size={13} />
                          </a>
                        </>
                      )}
                    </div>

                    <a
                      href={hack.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/30 px-3 py-1.5 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                    >
                      <FaGithub size={13} />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>

                {/* Right Column (Key Highlights & Tech Stack) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
                  {/* Key Highlights */}
                  {hack.highlights && hack.highlights.length > 0 && (
                    <div className="space-y-1.5 rounded-xl border border-white/10 bg-slate-900/60 p-3">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                        <Sparkles size={12} className="text-cyan-400" />
                        Technical Highlights
                      </h4>
                      <div className="space-y-1 text-[11px]">
                        {hack.highlights.slice(0, 4).map((highlight, idx) => (
                          <div
                            key={idx}
                            className={`flex items-start gap-1.5 ${isDark ? "text-slate-300" : "text-slate-700"
                              }`}
                          >
                            <CheckCircle2
                              size={12}
                              className="mt-0.5 shrink-0 text-emerald-400"
                            />
                            <span className="line-clamp-2">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {hack.stack.map((item) => (
                        <span
                          key={item}
                          className={`rounded px-2 py-0.5 text-[10px] font-semibold ${isDark
                            ? "bg-slate-900/90 text-cyan-300 border border-cyan-400/20"
                            : "bg-cyan-50 text-cyan-700 border border-cyan-200"
                            }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
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
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 cursor-pointer min-h-[300px] flex flex-col justify-end p-6 ${isDark
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
        className={`absolute inset-0 transition-all duration-500 ${isHovered
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

        {/* Expanded Coursework & Details on Hover */}
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
          className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-2xl backdrop-blur-xl transition-all duration-300 ${isHovered
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
                className={`rounded-2xl border p-5 backdrop-blur-xl transition duration-300 flex flex-col justify-between ${isDark
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
                    className={`text-sm font-bold ${isDark ? "text-white" : "text-slate-900"
                      }`}
                  >
                    {m.title}
                  </h4>
                  <p
                    className={`mt-2 text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                  >
                    {m.desc}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${isDark
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
              className={`mt-2 text-xs sm:text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-600"
                }`}
            >
              Explore my interactive software projects, core tech stack, credentials, and Education journey.
            </p>
          </div>

          {/* Unified Tab Selector Bar */}
          <div className="flex justify-center mb-8">
            <div
              className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-2xl md:rounded-3xl border p-2 backdrop-blur-xl shadow-2xl transition duration-300 max-w-full overflow-x-auto ${isDark
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
                    className={`relative flex items-center gap-2 rounded-xl md:rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 select-none ${isActive
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
            className={`rounded-3xl border p-6 md:p-8 shadow-2xl backdrop-blur-xl transition duration-300 ${isDark
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
              className={`relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border p-6 shadow-2xl backdrop-blur-2xl ${isDark
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
                className={`mt-4 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"
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

      <DocModal doc={modalDoc} onClose={() => setModalDoc(null)} isDark={isDark} />
    </section>
  );
}

export default PortfolioShowcase;
