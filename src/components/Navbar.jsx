import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import LogoSVG from "./LogoSVG";

const LINKS = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Hackathons",
  "Education",
  "Journey",
  "Certifications",
];

function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      const allSections = [...LINKS.map((link) => link.toLowerCase()), "contact"];

      allSections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const sectionTop = section.offsetTop - 160;

          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <nav className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <div
        className={`flex items-center gap-3 rounded-2xl border px-4 py-2.5 shadow-2xl backdrop-blur-xl transition-colors duration-300 md:gap-5 md:px-6 ${
          isDark
            ? "border-cyan-400/30 bg-slate-950/85 shadow-cyan-500/10"
            : "border-slate-300 bg-white/90 shadow-slate-300/40"
        }`}
      >
        {/* SVG Logo Brand Link */}
        <a
          href="#home"
          className="flex items-center transition hover:scale-105"
          title="Md Rehan Alam | AI & ML Portfolio"
        >
          <LogoSVG className="h-9 w-9" />
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-4 md:flex">
          {LINKS.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;

            return (
              <a
                key={link}
                href={`#${id}`}
                className={`text-[13px] font-bold transition ${
                  isActive
                    ? isDark
                      ? "text-cyan-400"
                      : "text-cyan-600"
                    : isDark
                    ? "text-slate-300 hover:text-cyan-400"
                    : "text-slate-600 hover:text-cyan-600"
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`flex h-9 w-9 items-center justify-center rounded-xl border transition ${
            isDark
              ? "border-cyan-400/30 bg-slate-900/90 text-cyan-400 hover:bg-cyan-400/10"
              : "border-slate-300 bg-slate-100 text-amber-500 hover:bg-slate-200"
          }`}
          title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
        >
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        {/* Contact CTA */}
        <a
          href="#contact"
          className={`hidden rounded-xl px-4 py-2 text-[13px] font-bold transition md:block ${
            active === "contact"
              ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
              : isDark
              ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
              : "bg-cyan-500 text-white hover:bg-cyan-600"
          }`}
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${isDark ? "text-cyan-300" : "text-cyan-600"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className={`mt-3 rounded-2xl border p-4 shadow-xl backdrop-blur-xl md:hidden ${
            isDark
              ? "border-cyan-400/30 bg-slate-950/95"
              : "border-slate-300 bg-white/95"
          }`}
        >
          <div className="flex flex-col gap-3">
            {[...LINKS, "Contact"].map((link) => {
              const id = link.toLowerCase();

              return (
                <a
                  key={link}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                    active === id
                      ? isDark
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "bg-cyan-50 text-cyan-600"
                      : isDark
                      ? "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                      : "text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
                  }`}
                >
                  {link}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;