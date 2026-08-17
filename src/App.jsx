import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PortfolioShowcase from "./components/PortfolioShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Stats from "./components/Stats";
import LoadingScreen from "./components/LoadingScreen";
import CursorGlow from "./components/CursorGlow";
import Background3D from "./components/Background3D";
import AboutMarquee from "./components/AboutMarquee";


function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "dark";
  });

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio_theme", nextTheme);
  };

  const isDark = theme === "dark";

  return (
    <main
      className={`relative min-h-screen font-sans selection:bg-cyan-400 selection:text-slate-950 transition-colors duration-500 ${
        isDark ? "bg-[#060f1e] text-white" : "bg-[#f0f4ff] text-slate-900"
      }`}
    >
      {/* Interactive AI Loading Screen */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Global Interactive 3D WebGL Neural Background */}
      <Background3D theme={theme} />

      {/* Main Portfolio Content */}
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero theme={theme} />
        <Stats theme={theme} />
        <AboutMarquee theme={theme} />
        <About theme={theme} />
        <PortfolioShowcase theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
        <BackToTop theme={theme} />
        <CursorGlow theme={theme} />
      </div>
    </main>
  );
}

export default App;