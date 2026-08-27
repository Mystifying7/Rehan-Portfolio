import { motion, AnimatePresence } from "framer-motion";
import { Trophy, FileText, Download, ExternalLink, X } from "lucide-react";

/* Document & Certificate Modal supporting both PDFs and Images */
function DocModal({ doc, onClose, isDark }) {
  return (
    <AnimatePresence>
      {doc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative flex flex-col h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-2xl ${doc.isWinner
                ? isDark
                  ? "border-amber-400/40 bg-slate-950 text-white shadow-amber-500/20"
                  : "border-amber-400 bg-white text-slate-900 shadow-2xl"
                : isDark
                  ? "border-cyan-400/40 bg-slate-950 text-white shadow-cyan-500/20"
                  : "border-slate-300 bg-white text-slate-900 shadow-2xl"
              }`}
          >
            {/* Modal Top Bar */}
            <div className={`flex items-center justify-between border-b px-5 py-4 shrink-0 ${
              isDark ? "border-white/10 bg-slate-900/90 text-white" : "border-slate-200 bg-slate-50 text-slate-900"
            }`}>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                    doc.isWinner
                      ? isDark
                        ? "bg-amber-400/15 text-amber-300 border-amber-400/40"
                        : "bg-amber-100 text-amber-800 border-amber-300 shadow-sm"
                      : isDark
                      ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/30"
                      : "bg-cyan-100 text-cyan-800 border-cyan-300 shadow-sm"
                  }`}
                >
                  {doc.isWinner ? <Trophy size={20} /> : <FileText size={20} />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className={`text-base sm:text-lg font-black ${isDark ? "text-white" : "text-slate-900"}`}>{doc.title}</h3>
                    {doc.level && (
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-black ${
                          doc.isWinner
                            ? isDark
                              ? "bg-amber-400/20 text-amber-300 border-amber-400/40"
                              : "bg-amber-100 text-amber-900 border-amber-300"
                            : isDark
                            ? "bg-cyan-400/20 border-cyan-400/40 text-cyan-300"
                            : "bg-cyan-100 border-cyan-300 text-cyan-900"
                        }`}
                      >
                        {doc.level}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs font-semibold ${isDark ? "text-cyan-400" : "text-cyan-700"}`}>
                    {doc.issuer || doc.achievement}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Download Button */}
                <a
                  href={doc.file || doc.pdf || doc.image}
                  download={`${doc.title.replace(/\s+/g, "_")}.${
                    doc.fileType || (doc.isImage ? "jpeg" : "pdf")
                  }`}
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition cursor-pointer ${
                    doc.isWinner
                      ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 hover:brightness-110 shadow-md shadow-amber-400/20"
                      : isDark
                      ? "border border-cyan-400/40 bg-cyan-400/15 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
                      : "bg-cyan-600 border border-cyan-600 text-white hover:bg-cyan-700 shadow-sm"
                  }`}
                  title="Download File"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </a>

                {/* Open in New Window Button */}
                <a
                  href={doc.file || doc.pdf || doc.image}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border transition ${
                    isDark
                      ? "border-white/15 bg-slate-900/80 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"
                      : "border-slate-300 bg-white text-slate-700 hover:border-cyan-600 hover:text-cyan-700 shadow-sm"
                  }`}
                  title="Open in Full Tab"
                >
                  <ExternalLink size={15} />
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border transition cursor-pointer ${
                    isDark
                      ? "border-white/15 bg-slate-900/80 text-slate-300 hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-400"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-300 shadow-sm"
                  }`}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Content View: Handles both Images and PDFs */}
            <div className="relative flex-1 w-full bg-slate-950/90 overflow-hidden flex items-center justify-center p-2 sm:p-4">
              {doc.isImage || doc.fileType === "jpeg" || doc.fileType === "jpg" || doc.fileType === "png" ? (
                <div className="h-full w-full flex items-center justify-center p-1 overflow-hidden">
                  <img
                    src={doc.file || doc.image || doc.pdf}
                    alt={doc.title}
                    className="max-h-[calc(90vh-100px)] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                  />
                </div>
              ) : (
                <iframe
                  src={`${doc.file || doc.pdf}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-0 rounded-b-2xl"
                  title={doc.title}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DocModal;
