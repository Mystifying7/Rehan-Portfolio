import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Check, Send, Sparkles, MessageSquare, ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionReveal from "./SectionReveal";

function Contact({ theme = "dark" }) {
  const [activeTab, setActiveTab] = useState("cards");
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const isDark = theme === "dark";
  const email = "rehanalam700000@gmail.com";

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    triggerToast("Email address copied to clipboard!");
    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSent(true);
    triggerToast(`Thanks ${formData.name}! Message sent to Md Rehan Alam.`);

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormSent(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative px-6 py-10">
      {/* Floating Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className={`fixed top-24 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-2 rounded-full border px-5 py-2.5 shadow-2xl backdrop-blur-2xl ${isDark
                ? "border-cyan-400/50 bg-slate-950/90 text-white shadow-cyan-500/30"
                : "border-cyan-500/50 bg-white/95 text-slate-900 shadow-slate-300/60"
              }`}
          >
            <Check size={16} className="text-cyan-500" />
            <span className="text-xs font-bold">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <SectionReveal>
        <div
          className={`mx-auto max-w-4xl rounded-3xl border p-6 text-center shadow-2xl backdrop-blur-xl transition duration-300 ${isDark
              ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
              : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
            }`}
        >
          {/* Header */}
          <p
            className={`text-xs font-bold uppercase tracking-[0.35em] ${isDark ? "text-cyan-400" : "text-cyan-600"
              }`}
          >
            Contact
          </p>
          <h2
            className={`mt-2 text-3xl font-extrabold ${isDark ? "text-white" : "text-slate-900"
              }`}
          >
            Let&apos;s Connect & Collaborate
          </h2>
          <p
            className={`mx-auto mt-2 max-w-md text-sm ${isDark ? "text-slate-400" : "text-slate-600"
              }`}
          >
            Open for AI/ML engineering roles, internships, and research projects.
          </p>

          {/* Mode Selector */}
          <div
            className={`mt-6 inline-flex items-center rounded-xl border p-1 shadow-lg backdrop-blur-xl ${isDark ? "border-cyan-400/30 bg-slate-950/80" : "border-slate-300 bg-slate-100"
              }`}
          >
            <button
              onClick={() => setActiveTab("cards")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${activeTab === "cards"
                  ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
                  : isDark
                    ? "text-slate-400 hover:text-cyan-300"
                    : "text-slate-600 hover:text-cyan-600"
                }`}
            >
              <Sparkles size={14} />
              Quick Connect Cards
            </button>

            <button
              onClick={() => setActiveTab("form")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${activeTab === "form"
                  ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
                  : isDark
                    ? "text-slate-400 hover:text-cyan-300"
                    : "text-slate-600 hover:text-cyan-600"
                }`}
            >
              <MessageSquare size={14} />
              Interactive Message Form
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "cards" ? (
              <div
                className={`rounded-2xl border p-4 backdrop-blur-xl ${isDark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-slate-50"
                  }`}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={copyEmail}
                    className={`group flex items-center gap-3 rounded-xl border p-4 text-left transition duration-300 ${isDark
                        ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                        : "border-slate-200 bg-white hover:border-cyan-500/50 hover:bg-cyan-50"
                      }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-500">
                      {copied ? <Check size={18} /> : <Mail size={18} />}
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"
                          }`}
                      >
                        {copied ? "Email Copied!" : "Email"}
                      </p>
                      <p
                        className={`text-xs truncate ${isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                      >
                        {email}
                      </p>
                    </div>
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    href="https://maps.google.com/?q=Kolkata,India"
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center gap-3 rounded-xl border p-4 text-left transition duration-300 ${isDark
                        ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                        : "border-slate-200 bg-white hover:border-cyan-500/50 hover:bg-cyan-50"
                      }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-500">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p
                        className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"
                          }`}
                      >
                        Location
                      </p>
                      <p
                        className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                      >
                        Kolkata, India
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    href="https://github.com/mystifying7"
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center gap-3 rounded-xl border p-4 text-left transition duration-300 ${isDark
                        ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                        : "border-slate-200 bg-white hover:border-cyan-500/50 hover:bg-cyan-50"
                      }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-500">
                      <FaGithub size={18} />
                    </div>
                    <div>
                      <p
                        className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"
                          }`}
                      >
                        GitHub
                      </p>
                      <p
                        className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                      >
                        mystifying7
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    href="https://www.linkedin.com/in/rehanalam07/"
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center gap-3 rounded-xl border p-4 text-left transition duration-300 ${isDark
                        ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                        : "border-slate-200 bg-white hover:border-cyan-500/50 hover:bg-cyan-50"
                      }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-500">
                      <FaLinkedin size={18} />
                    </div>
                    <div>
                      <p
                        className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"
                          }`}
                      >
                        LinkedIn
                      </p>
                      <p
                        className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                      >
                        rehanalam07
                      </p>
                    </div>
                  </motion.a>
                </div>
              </div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleFormSubmit}
                className={`rounded-2xl border p-5 text-left backdrop-blur-xl space-y-4 ${isDark
                    ? "border-cyan-400/30 bg-slate-950/80"
                    : "border-slate-300 bg-white"
                  }`}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className={`block text-xs font-bold mb-1 ${isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full rounded-xl border px-3.5 py-2.5 text-xs focus:border-cyan-400 focus:outline-none ${isDark
                          ? "border-white/10 bg-slate-900/90 text-white placeholder-slate-500"
                          : "border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400"
                        }`}
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-bold mb-1 ${isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full rounded-xl border px-3.5 py-2.5 text-xs focus:border-cyan-400 focus:outline-none ${isDark
                          ? "border-white/10 bg-slate-900/90 text-white placeholder-slate-500"
                          : "border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400"
                        }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-xs font-bold mb-1 ${isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                  >
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Rehan, I saw your portfolio and would like to discuss an opportunity..."
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-xs focus:border-cyan-400 focus:outline-none ${isDark
                        ? "border-white/10 bg-slate-900/90 text-white placeholder-slate-500"
                        : "border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400"
                      }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSent}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:brightness-110"
                >
                  {formSent ? (
                    <>
                      <ShieldCheck size={16} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default Contact;