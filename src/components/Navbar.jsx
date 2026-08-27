import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";
import LogoSVG from "./LogoSVG";

const NAV_LINKS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects", tab: "projects" },
  { name: "Skills", href: "#skills", id: "skills", tab: "skills" },
  { name: "Certificates", href: "#certificates", id: "certificates", tab: "certificates" },
  { name: "Hackathons", href: "#hackathons", id: "hackathons", tab: "hackathons" },
  { name: "Education", href: "#education", id: "education", tab: "education" },
];

function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Framer Motion smooth scroll progress tracker
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Scroll spy to highlight active section and showcase tabs
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      const sections = ["home", "about", "showcase", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 220;
          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      // If in showcase, check hash or default to active showcase tab
      if (current === "showcase") {
        const hash = window.location.hash.replace("#", "").toLowerCase();
        if (
          ["projects", "skills", "certificates", "hackathons", "education"].includes(
            hash
          )
        ) {
          setActive(hash);
          return;
        } else {
          // Default to projects if in showcase section without specific hash
          setActive("projects");
          return;
        }
      }

      setActive(current);
    };

    const handleCustomTab = (e) => {
      if (e.detail) {
        setActive(e.detail);
      }
    };

    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (
        ["home", "about", "projects", "skills", "certificates", "hackathons", "education", "contact"].includes(
          hash
        )
      ) {
        setActive(hash);
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("portfolio-tab-active", handleCustomTab);
    window.addEventListener("hashchange", handleHash);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("portfolio-tab-active", handleCustomTab);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const handleNavClick = (link) => {
    setOpen(false);
    if (link.tab) {
      window.location.hash = link.tab;
      setActive(link.tab);
      window.dispatchEvent(
        new CustomEvent("portfolio-tab-active", { detail: link.tab })
      );
      const showcase = document.getElementById("showcase");
      if (showcase) {
        showcase.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setActive(link.id || link.name.toLowerCase());
    }
  };

  const isDark = theme === "dark";

  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2 w-[95%] max-w-5xl">
      <div
        className={`relative flex items-center justify-between gap-3 rounded-2xl md:rounded-full border px-4 py-2.5 shadow-2xl backdrop-blur-2xl transition-all duration-300 overflow-hidden ${
          isDark
            ? "border-cyan-400/30 bg-slate-950/85 shadow-cyan-500/10"
            : "border-slate-300 bg-white/90 shadow-slate-300/40"
        }`}
      >
        {/* Left: Brand Logo & Title */}
        <a
          href="#home"
          onClick={() => setActive("home")}
          className="flex items-center gap-2.5 transition hover:scale-105 shrink-0"
          title="Md Rehan Alam | Portfolio"
        >
          <LogoSVG className="h-8 w-8 sm:h-9 sm:w-9" />
          <div className="hidden sm:flex flex-col text-left leading-none">
            <span
              className={`text-xs font-black tracking-wider uppercase ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Rehan<span className="text-cyan-400">.ai</span>
            </span>
            <span className="text-[9px] font-bold text-cyan-400 mt-0.5">
              AI / ML Engineer
            </span>
          </div>
        </a>

        {/* Center: Full Navigation Links with Active Glowing State */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              active === link.name.toLowerCase() ||
              active === link.id ||
              (link.tab && active === link.tab);

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link)}
                className={`relative rounded-full px-3 py-1.5 text-xs font-black transition-all duration-300 ${
                  isActive
                    ? isDark
                      ? "bg-cyan-400 text-slate-950 shadow-[0_0_16px_rgba(0,242,254,0.9),0_0_30px_rgba(0,242,254,0.5)] scale-105"
                      : "bg-cyan-500 text-white shadow-md shadow-cyan-500/40 scale-105"
                    : isDark
                    ? "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right: Theme Toggle, Social Icons & Contact CTA */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border transition hover:scale-105 ${
              isDark
                ? "border-cyan-400/30 bg-slate-900 text-cyan-400 hover:bg-cyan-400/15"
                : "border-slate-300 bg-slate-100 text-amber-500 hover:bg-slate-200"
            }`}
            title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/mystifying7"
            target="_blank"
            rel="noreferrer"
            className={`hidden sm:flex h-8 w-8 items-center justify-center rounded-full border transition ${
              isDark
                ? "border-white/10 bg-slate-900/80 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
                : "border-slate-300 bg-slate-100 text-slate-700 hover:border-cyan-500 hover:text-cyan-700"
            }`}
            title="GitHub Profile"
          >
            <FaGithub size={14} />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/rehanalam07/"
            target="_blank"
            rel="noreferrer"
            className={`hidden sm:flex h-8 w-8 items-center justify-center rounded-full border transition ${
              isDark
                ? "border-white/10 bg-slate-900/80 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
                : "border-slate-300 bg-slate-100 text-slate-700 hover:border-cyan-500 hover:text-cyan-700"
            }`}
            title="LinkedIn Profile"
          >
            <FaLinkedin size={14} />
          </a>

          {/* Contact CTA Button */}
          <a
            href="#contact"
            onClick={() => setActive("contact")}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black transition-all duration-300 ${
              active === "contact"
                ? isDark
                  ? "bg-cyan-400 text-slate-950 shadow-[0_0_16px_rgba(0,242,254,0.9)] scale-105"
                  : "bg-cyan-600 text-white shadow-lg"
                : "bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 shadow-md shadow-cyan-400/25 hover:brightness-110 hover:shadow-cyan-400/40"
            }`}
          >
            <span>Contact</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden flex h-8 w-8 items-center justify-center rounded-lg border ${
              isDark
                ? "border-white/15 bg-slate-900 text-cyan-300"
                : "border-slate-300 bg-slate-100 text-slate-700"
            }`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Dynamic Glowing Cyber Scroll Progress Line along the bottom of the Navbar */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[3px] ${
            isDark ? "bg-cyan-950/40" : "bg-slate-200/80"
          }`}
        >
          <motion.div
            style={{ scaleX, transformOrigin: "left" }}
            className={`h-full w-full ${
              isDark
                ? "bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 shadow-[0_0_12px_#22d3ee,0_0_24px_rgba(6,182,212,0.8)]"
                : "bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 shadow-[0_0_10px_#0891b2]"
            }`}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className={`mt-2.5 rounded-2xl border p-4 shadow-2xl backdrop-blur-2xl lg:hidden ${
            isDark
              ? "border-cyan-400/30 bg-slate-950/95"
              : "border-slate-300 bg-white/95"
          }`}
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                active === link.name.toLowerCase() ||
                active === link.id ||
                (link.tab && active === link.tab);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                    isActive
                      ? isDark
                        ? "bg-cyan-400 text-slate-950 font-black shadow-[0_0_12px_rgba(0,242,254,0.8)]"
                        : "bg-cyan-500 text-white font-black"
                      : isDark
                      ? "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                      : "text-slate-700 hover:bg-slate-100 hover:text-cyan-700"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-around">
              <a
                href="https://github.com/mystifying7"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-cyan-400"
              >
                <FaGithub size={14} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rehanalam07/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-cyan-400"
              >
                <FaLinkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;