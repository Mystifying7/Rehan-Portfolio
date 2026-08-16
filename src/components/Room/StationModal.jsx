import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor, Cpu, Trophy, GraduationCap, Radio } from "lucide-react";
import Projects from "../Projects";
import Skills from "../Skills";
import Certifications from "../Certifications";
import Education from "../Education";
import Experience from "../Experience";
import Contact from "../Contact";
import Hackathons from "../Hackathons";

const STATIONS = [
  { id: "projects", title: "Featured Projects Workstation", icon: <Monitor size={18} /> },
  { id: "skills", title: "AI Neural Core & Skills", icon: <Cpu size={18} /> },
  { id: "certifications", title: "Certifications & Hackathons", icon: <Trophy size={18} /> },
  { id: "education", title: "Academic Journey & Pod", icon: <GraduationCap size={18} /> },
  { id: "contact", title: "Comms & Contact Station", icon: <Radio size={18} /> },
];

export function StationModal({ activeStation, onClose, onSelectStation }) {
  if (!activeStation) return null;

  const currentStation = STATIONS.find((s) => s.id === activeStation) || STATIONS[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-cyan-400/40 bg-slate-950/95 shadow-2xl shadow-cyan-500/20 backdrop-blur-2xl"
        >
          {/* Hologram Top Bar */}
          <div className="flex items-center justify-between border-b border-cyan-400/20 bg-cyan-500/5 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300">
                {currentStation.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                  AI Lab Terminal
                </span>
                <h3 className="text-lg font-bold text-white">
                  {currentStation.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Station Tabs inside modal */}
          <div className="flex overflow-x-auto border-b border-white/10 bg-slate-900/50 px-4 py-2">
            {STATIONS.map((st) => (
              <button
                key={st.id}
                onClick={() => onSelectStation(st.id)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition ${
                  activeStation === st.id
                    ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
                    : "text-slate-400 hover:text-cyan-300"
                }`}
              >
                {st.icon}
                {st.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="overflow-y-auto p-4 sm:p-6 md:p-8">
            {activeStation === "projects" && <Projects />}
            {activeStation === "skills" && <Skills />}
            {activeStation === "certifications" && (
              <div className="space-y-10">
                <Certifications />
                <Hackathons />
              </div>
            )}
            {activeStation === "education" && (
              <div className="space-y-10">
                <Education />
                <Experience />
              </div>
            )}
            {activeStation === "contact" && <Contact />}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default StationModal;
