import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Check,
  Send,
  Sparkles,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionReveal from "./SectionReveal";

function Contact({ theme = "dark" }) {
  const [activeTab, setActiveTab] = useState("cards");
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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
    <section id="contact" className="relative px-6 py-14 scroll-mt-20">
      {/* Floating Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className={`fixed top-24 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-2 rounded-full border px-5 py-2.5 shadow-2xl backdrop-blur-2xl ${
              isDark
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
        <div className="mx-auto max-w-4xl">
          {/* Main Title Matching the Cyber 3D Showcase Style */}
          <div className="mb-8 text-center flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider">
              <span
                className={
                  isDark ? "marquee-text-cyan-dark" : "marquee-text-cyan-light"
                }
              >
                LET'S
              </span>{" "}
              <span
                className={
                  isDark ? "marquee-text-white-dark" : "marquee-text-white-light"
                }
              >
                CONNECT
              </span>
            </h2>
            <p
              className={`mt-2 text-xs sm:text-sm font-medium ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Open for AI/ML engineering roles, internships, and research projects.
            </p>
          </div>

          {/* Unified Floating Pill Tab Selector Bar */}
          <div className="flex justify-center mb-8">
            <div
              className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-2xl md:rounded-3xl border p-2 backdrop-blur-xl shadow-2xl transition duration-300 max-w-full overflow-x-auto ${
                isDark
                  ? "border-white/10 bg-slate-900/70 shadow-cyan-500/5"
                  : "border-slate-300 bg-white/90 shadow-slate-300/40"
              }`}
            >
              <button
                onClick={() => setActiveTab("cards")}
                className={`relative flex items-center gap-2 rounded-xl md:rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 select-none ${
                  activeTab === "cards"
                    ? isDark
                      ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_16px_rgba(34,211,238,0.3)]"
                      : "bg-cyan-500 text-white shadow-md shadow-cyan-500/30"
                    : isDark
                    ? "text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
                }`}
              >
                <Sparkles
                  size={16}
                  className={activeTab === "cards" ? "animate-pulse" : ""}
                />
                <span>Quick Connect Cards</span>
              </button>

              <button
                onClick={() => setActiveTab("form")}
                className={`relative flex items-center gap-2 rounded-xl md:rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 select-none ${
                  activeTab === "form"
                    ? isDark
                      ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_16px_rgba(34,211,238,0.3)]"
                      : "bg-cyan-500 text-white shadow-md shadow-cyan-500/30"
                    : isDark
                    ? "text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
                }`}
              >
                <MessageSquare
                  size={16}
                  className={activeTab === "form" ? "animate-pulse" : ""}
                />
                <span>Interactive Message Form</span>
              </button>
            </div>
          </div>

          {/* Contact Content Container Card */}
          <div
            className={`rounded-3xl border p-6 md:p-8 shadow-2xl backdrop-blur-xl transition duration-300 ${
              isDark
                ? "border-white/10 bg-slate-900/50 hover:border-cyan-400/40"
                : "border-slate-200 bg-white/80 hover:border-cyan-500/40 shadow-slate-300/40"
            }`}
          >
            <AnimatePresence mode="wait">
              {activeTab === "cards" ? (
                <motion.div
                  key="cards"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Copy Email Card */}
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      onClick={copyEmail}
                      className={`group flex items-center gap-3.5 rounded-2xl border p-4 text-left transition duration-300 ${
                        isDark
                          ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                          : "border-slate-200 bg-white hover:border-cyan-500/50 hover:bg-cyan-50"
                      }`}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                        {copied ? <Check size={20} /> : <Mail size={20} />}
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`text-sm font-bold ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {copied ? "Email Copied!" : "Email"}
                        </p>
                        <p
                          className={`text-xs truncate ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {email}
                        </p>
                      </div>
                    </motion.button>

                    {/* Location Card */}
                    <motion.a
                      whileHover={{ scale: 1.02, y: -2 }}
                      href="https://maps.google.com/?q=Kolkata,India"
                      target="_blank"
                      rel="noreferrer"
                      className={`group flex items-center gap-3.5 rounded-2xl border p-4 text-left transition duration-300 ${
                        isDark
                          ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                          : "border-slate-200 bg-white hover:border-cyan-500/50 hover:bg-cyan-50"
                      }`}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p
                          className={`text-sm font-bold ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          Location
                        </p>
                        <p
                          className={`text-xs ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          Kolkata, India
                        </p>
                      </div>
                    </motion.a>

                    {/* GitHub Card */}
                    <motion.a
                      whileHover={{ scale: 1.02, y: -2 }}
                      href="https://github.com/mystifying7"
                      target="_blank"
                      rel="noreferrer"
                      className={`group flex items-center gap-3.5 rounded-2xl border p-4 text-left transition duration-300 ${
                        isDark
                          ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                          : "border-slate-200 bg-white hover:border-cyan-500/50 hover:bg-cyan-50"
                      }`}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                        <FaGithub size={20} />
                      </div>
                      <div>
                        <p
                          className={`text-sm font-bold ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          GitHub
                        </p>
                        <p
                          className={`text-xs ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          mystifying7
                        </p>
                      </div>
                    </motion.a>

                    {/* LinkedIn Card */}
                    <motion.a
                      whileHover={{ scale: 1.02, y: -2 }}
                      href="https://www.linkedin.com/in/rehanalam07/"
                      target="_blank"
                      rel="noreferrer"
                      className={`group flex items-center gap-3.5 rounded-2xl border p-4 text-left transition duration-300 ${
                        isDark
                          ? "border-white/10 bg-slate-950/70 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                          : "border-slate-200 bg-white hover:border-cyan-500/50 hover:bg-cyan-50"
                      }`}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                        <FaLinkedin size={20} />
                      </div>
                      <div>
                        <p
                          className={`text-sm font-bold ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          LinkedIn
                        </p>
                        <p
                          className={`text-xs ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          rehanalam07
                        </p>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-4 text-left"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        className={`block text-xs font-bold mb-1.5 ${
                          isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Johnson"
                        className={`w-full rounded-xl border px-4 py-3 text-xs focus:border-cyan-400 focus:outline-none transition ${
                          isDark
                            ? "border-white/10 bg-slate-950/90 text-white placeholder-slate-500"
                            : "border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400"
                        }`}
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-xs font-bold mb-1.5 ${
                          isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className={`w-full rounded-xl border px-4 py-3 text-xs focus:border-cyan-400 focus:outline-none transition ${
                          isDark
                            ? "border-white/10 bg-slate-950/90 text-white placeholder-slate-500"
                            : "border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400"
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-bold mb-1.5 ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Rehan, I saw your portfolio and would like to discuss an opportunity..."
                      className={`w-full rounded-xl border px-4 py-3 text-xs focus:border-cyan-400 focus:outline-none transition ${
                        isDark
                          ? "border-white/10 bg-slate-950/90 text-white placeholder-slate-500"
                          : "border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400"
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formSent}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-3.5 text-xs font-extrabold text-slate-950 shadow-xl shadow-cyan-400/25 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 cursor-pointer"
                  >
                    {formSent ? (
                      <>
                        <ShieldCheck size={17} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default Contact;