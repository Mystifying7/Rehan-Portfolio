import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const links = ["Home", "About", "Skills", "Projects", "Education", "Certifications"];

  return (
    <footer className="px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg shadow-cyan-500/5 backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-black text-white">
                REHAN <span className="text-cyan-400">ALAM</span>
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                AI • Machine Learning • Software Development
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="my-5 h-px bg-white/10" />

          <div className="flex flex-col items-center justify-center gap-2 text-xs text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} Rehan Alam. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;