import { useState, useRef, useEffect } from "react";
import { Terminal, Send, CornerDownLeft, Sparkles, CheckCircle2 } from "lucide-react";

const INITIAL_LOGS = [
  { type: "system", text: "Md Rehan Alam AI Terminal [Version 2.4.0]" },
  { type: "system", text: "Initializing Scikit-Learn & MediaPipe Inference Engine..." },
  { type: "success", text: "Status: Neural Engine Online (Latency: 12ms)" },
  { type: "info", text: "Type 'help' or click a command below to explore." },
];

const COMMAND_HELP = [
  { cmd: "whoami", desc: "Display developer bio & focus" },
  { cmd: "skills", desc: "List core AI, ML & Web stack" },
  { cmd: "projects", desc: "Showcase featured AI/ML applications" },
  { cmd: "contact", desc: "Get email, GitHub & LinkedIn links" },
  { cmd: "clear", desc: "Clear terminal console" },
];

export function InteractiveTerminal() {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  const handleRunCommand = (commandStr) => {
    const cmd = commandStr.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...logs, { type: "user", text: `$ ${cmd}` }];

    switch (cmd) {
      case "help":
        newLogs.push({
          type: "output",
          text: "Available commands:\n" + COMMAND_HELP.map((c) => `  • ${c.cmd.padEnd(10)} - ${c.desc}`).join("\n"),
        });
        break;

      case "whoami":
        newLogs.push({
          type: "output",
          text: "Md Rehan Alam | Computer Science Student (B.Tech CSE)\nFocus: Artificial Intelligence, Machine Learning, Computer Vision & Full-Stack Development.\nLocation: Kolkata, India",
        });
        break;

      case "skills":
        newLogs.push({
          type: "output",
          text: "Technical Stack:\n  • Languages: Python, Java, C, JavaScript, HTML5/CSS3\n  • AI / ML: Machine Learning, Computer Vision (OpenCV, MediaPipe), Scikit-Learn, NLP\n  • Web: React.js, Flask, FastAPI, Tailwind CSS\n  • Tools: Git, GitHub, Linux",
        });
        break;

      case "projects":
        newLogs.push({
          type: "output",
          text: "Featured Projects:\n  1. Kavacham (Cyber Security & Evidence Preservation)\n  2. PROP_ENGINE.ai (Real Estate ML Valuations)\n  3. Virtual Steering Wheel (Hand-Tracking CV Utility)\n  4. Air-Cursor (WebSocket Spatial Gesture Control)\n  5. CineMind AI (NLP Content Recommendation)",
        });
        break;

      case "contact":
        newLogs.push({
          type: "output",
          text: "Contact & Links:\n  • Email: rehanalam700000@gmail.com\n  • GitHub: https://github.com/mystifying7\n  • LinkedIn: https://www.linkedin.com/in/rehanalam07/",
        });
        break;

      case "clear":
        setLogs(INITIAL_LOGS);
        setInput("");
        return;

      default:
        newLogs.push({
          type: "error",
          text: `Command not recognized: '${cmd}'. Type 'help' for available commands.`,
        });
        break;
    }

    setLogs(newLogs);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRunCommand(input);
  };

  return (
    <div className="group relative w-full max-w-lg overflow-hidden rounded-3xl border border-cyan-400/40 bg-slate-950/95 shadow-2xl shadow-cyan-500/20 backdrop-blur-2xl">
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between border-b border-cyan-400/20 bg-slate-900/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 flex items-center gap-1.5 text-xs font-bold text-cyan-300">
            <Terminal size={14} className="text-cyan-400" />
            ai-cli@rehan-alam:~
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
          <CheckCircle2 size={12} />
          ONLINE
        </div>
      </div>

      {/* Quick Command Buttons Bar */}
      <div className="flex flex-wrap gap-1.5 border-b border-white/10 bg-slate-900/40 px-3 py-2">
        {["whoami", "skills", "projects", "contact", "clear"].map((c) => (
          <button
            key={c}
            onClick={() => handleRunCommand(c)}
            className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-bold text-cyan-300 transition hover:bg-cyan-400/20 hover:text-white"
          >
            ${c}
          </button>
        ))}
      </div>

      {/* Terminal Output Logs */}
      <div className="h-64 overflow-y-auto p-4 font-mono text-xs text-slate-300 space-y-2">
        {logs.map((log, idx) => (
          <div key={idx} className="leading-relaxed">
            {log.type === "system" && <span className="text-slate-400">{log.text}</span>}
            {log.type === "success" && <span className="text-emerald-400 font-semibold">{log.text}</span>}
            {log.type === "info" && <span className="text-cyan-300">{log.text}</span>}
            {log.type === "user" && <span className="font-bold text-cyan-400">{log.text}</span>}
            {log.type === "output" && (
              <pre className="mt-1 rounded-lg bg-slate-900/60 p-2.5 text-slate-200 whitespace-pre-wrap font-mono text-[11px] border border-white/5">
                {log.text}
              </pre>
            )}
            {log.type === "error" && <span className="text-rose-400 font-semibold">{log.text}</span>}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Console */}
      <form onSubmit={handleSubmit} className="flex items-center border-t border-white/10 bg-slate-900/90 px-3 py-2">
        <span className="mr-2 font-mono text-xs font-bold text-cyan-400">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command (e.g. skills, projects)..."
          className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-none"
        />
        <button
          type="submit"
          className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400 text-slate-950 transition hover:bg-cyan-300"
        >
          <CornerDownLeft size={14} />
        </button>
      </form>
    </div>
  );
}

export default InteractiveTerminal;
