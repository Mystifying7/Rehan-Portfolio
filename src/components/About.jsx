import { useState, lazy, Suspense } from "react";
import SectionReveal from "./SectionReveal";
import {
  Brain,
  Code2,
  Rocket,
  ArrowDown,
  Download,
  Eye,
  FileText,
  X,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resumePDF from "../assets/certificates/Rehan_Resume.pdf";

const InteractiveRobot = lazy(() => import("./InteractiveRobot"));

function About({ theme = "dark" }) {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const isDark = theme === "dark";

  return (
    <section id="about" className="px-4 sm:px-6 py-8 sm:py-10">
      <SectionReveal>
        <div
          className={`mx-auto max-w-6xl rounded-3xl border p-5 sm:p-6 shadow-2xl backdrop-blur-xl transition duration-300 transform-gpu ${
            isDark
              ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
              : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
          }`}
        >
          {/* Side-by-Side Layout: Left Robot Companion & Right Content */}
          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Left Column: Interactive 3D AI Robot Companion */}
            <div className="flex justify-center lg:col-span-5 border-b border-white/10 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
              <Suspense
                fallback={
                  <div className="flex h-72 w-full items-center justify-center">
                    <div className="h-9 w-9 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
                  </div>
                }
              >
                <InteractiveRobot theme={theme} />
              </Suspense>
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
                    isDark
                      ? "border-white/10 bg-slate-950/60"
                      : "border-slate-200 bg-slate-50"
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
                    isDark
                      ? "border-white/10 bg-slate-950/60"
                      : "border-slate-200 bg-slate-50"
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
                    isDark
                      ? "border-white/10 bg-slate-950/60"
                      : "border-slate-200 bg-slate-50"
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

              {/* Prominent Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start w-full">
                {/* Explore Projects Button */}
                <a
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-xl shadow-cyan-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-cyan-400/50 cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ArrowDown size={17} />
                </a>

                {/* In-App Resume Preview Button */}
                <button
                  onClick={() => setShowResumeModal(true)}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3 text-sm font-extrabold backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${
                    isDark
                      ? "border-cyan-400/40 bg-slate-900/90 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/15 shadow-lg shadow-cyan-500/15"
                      : "border-cyan-400 bg-white text-cyan-700 hover:bg-cyan-50 shadow-md"
                  }`}
                >
                  <Eye size={17} />
                  <span>Preview Resume</span>
                </button>

                {/* Direct Download Resume Button */}
                <a
                  href={resumePDF}
                  download="Md_Rehan_Alam_Resume.pdf"
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-extrabold backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${
                    isDark
                      ? "border-white/15 bg-slate-950/70 text-slate-300 hover:border-white/30 hover:text-white"
                      : "border-slate-300 bg-slate-100 text-slate-700 hover:border-slate-400 hover:text-slate-900"
                  }`}
                  title="Direct Download Resume"
                >
                  <Download size={17} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* In-App Fullscreen Resume Preview Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md"
            onClick={() => setShowResumeModal(false)}
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
                    <h3 className="text-base sm:text-lg font-black">
                      Md Rehan Alam - Resume
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400">
                      AI & Machine Learning Engineer
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Download Button */}
                  <a
                    href={resumePDF}
                    download="Md_Rehan_Alam_Resume.pdf"
                    className="flex items-center gap-1.5 rounded-xl border border-cyan-400/40 bg-cyan-400/15 px-3 py-2 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 cursor-pointer"
                    title="Download PDF"
                  >
                    <Download size={14} />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  {/* Open in New Window Button */}
                  <a
                    href={resumePDF}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-slate-900/80 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                    title="Open in Full Tab"
                  >
                    <ExternalLink size={15} />
                  </a>

                  {/* Close Button */}
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-slate-900/80 text-slate-300 transition hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-400 cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal PDF Frame View */}
              <div className="relative flex-1 w-full bg-slate-900/90 overflow-hidden">
                <iframe
                  src={`${resumePDF}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-0"
                  title="Md Rehan Alam Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;