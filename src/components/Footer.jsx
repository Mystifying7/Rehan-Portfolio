import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import LogoSVG from "./LogoSVG";

function Footer({ theme = "dark" }) {
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t py-8 px-6 backdrop-blur-xl transition duration-300 ${
        isDark
          ? "border-white/10 bg-slate-950/80 text-slate-400"
          : "border-slate-300 bg-white/90 text-slate-600"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Left Brand */}
        <div className="flex items-center gap-2">
          <LogoSVG className="h-6 w-6" />
          <span
            className={`text-xs font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Md Rehan Alam
          </span>
        </div>

        {/* Center Copyright */}
        <p className="text-xs font-medium">
          © {new Date().getFullYear()} Md Rehan Alam. All rights are reserved.
        </p>

        {/* Right Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mystifying7"
            target="_blank"
            rel="noreferrer"
            className={`transition ${
              isDark ? "hover:text-cyan-400" : "hover:text-cyan-600"
            }`}
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/rehanalam07/"
            target="_blank"
            rel="noreferrer"
            className={`transition ${
              isDark ? "hover:text-cyan-400" : "hover:text-cyan-600"
            }`}
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="mailto:rehanalam700000@gmail.com"
            className={`transition ${
              isDark ? "hover:text-cyan-400" : "hover:text-cyan-600"
            }`}
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;