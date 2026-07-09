import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Hackathons",
    "Education",
    "Certifications",
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      const allSections = [...links.map((link) => link.toLowerCase()), "contact"];

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

  return (
    <nav className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:px-6">
        <a
          href="#home"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 font-bold text-slate-950"
        >
          R
        </a>

        <div className="hidden items-center gap-4 md:flex">
          {links.map((link) => {
            const id = link.toLowerCase();

            return (
              <a
                key={link}
                href={`#${id}`}
                className={`text-[13px] font-medium transition ${
                  active === id
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className={`hidden rounded-lg px-4 py-2 text-[13px] font-semibold transition md:block ${
            active === "contact"
              ? "bg-cyan-300 text-slate-950"
              : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
          }`}
        >
          Contact
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-cyan-300 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-xl shadow-cyan-500/10 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {[...links, "Contact"].map((link) => {
              const id = link.toLowerCase();

              return (
                <a
                  key={link}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-2 text-sm transition ${
                    active === id
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
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