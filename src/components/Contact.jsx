import { Mail, MapPin, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import SectionReveal from "./SectionReveal";

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "rehanalam700000@gmail.com";
  const subject = "Portfolio Contact";
  const body = "Hi Rehan,%0D%0A%0D%0AI saw your portfolio and wanted to connect.";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <section id="contact" className="px-6 py-12">
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
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Let&apos;s Build Something
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400">
            I&apos;m open to internships, collaborations, AI projects, and
            learning opportunities.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg shadow-cyan-500/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:shadow-cyan-400/10">
            <div className="grid gap-4 md:grid-cols-2">
              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 p-4 text-left transition hover:border-cyan-400/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  {copied ? <Check size={18} /> : <Mail size={18} />}
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {copied ? "Email Copied" : "Email"}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{email}</p>
                </div>
              </button>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 p-4 text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">Location</p>
                  <p className="mt-1 text-xs text-slate-400">Kolkata, India</p>
                </div>
              </div>

              <a
                href="https://github.com/mystifying7"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 p-4 text-left transition hover:border-cyan-400/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <FaGithub size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">GitHub</p>
                  <p className="mt-1 text-xs text-slate-400">mystifying7</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rehanalam07/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 p-4 text-left transition hover:border-cyan-400/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <FaLinkedin size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">LinkedIn</p>
                  <p className="mt-1 text-xs text-slate-400">rehanalam07</p>
                </div>
              </a>
            </div>

            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                "Portfolio Contact"
              )}&body=${encodeURIComponent(
                "Hi Rehan,\n\nI visited your portfolio and would like to connect."
              )}`}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              <Mail size={16} />
              Send Email
            </a>
          </div>
        </div>
      </SectionReveal>
      </div>
    </section>
  );
}

export default Contact;