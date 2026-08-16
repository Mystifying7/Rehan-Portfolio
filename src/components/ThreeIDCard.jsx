import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import profile from "../assets/images/profile.png";
import LogoSVG from "./LogoSVG";

export function ThreeIDCard() {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Motion values for drag physics
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Dynamic pendulum rotation based on drag X velocity
  const dragRotate = useTransform(dragX, [-150, 150], [-25, 25]);
  const smoothDragRotate = useSpring(dragRotate, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    if (isDragging || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY - height / 2) / (height / 2)) * -14;
    const rY = ((mouseX - width / 2) / (width / 2)) * 14;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setRotateX(0);
      setRotateY(0);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-2 [perspective:1000px] select-none">
      {/* 1. Long Lanyard Fabric Strap extending to Top */}
      <div className="relative flex flex-col items-center">
        <div className="h-28 w-6 bg-slate-950 border-x border-cyan-400/30 flex flex-col items-center justify-around shadow-xl">
          {/* Lanyard Logo Accents */}
          <div className="flex flex-col items-center gap-1 opacity-80">
            <LogoSVG className="w-3.5 h-3.5" />
            <span className="text-[7px] font-black uppercase tracking-tighter text-cyan-300 rotate-90 my-1">
              REHAN
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-80">
            <LogoSVG className="w-3.5 h-3.5" />
            <span className="text-[7px] font-black uppercase tracking-tighter text-cyan-300 rotate-90 my-1">
              AI LABS
            </span>
          </div>
        </div>

        {/* 2. Metallic Carabiner Hook & Clip Mechanism */}
        <div className="relative -mt-1 z-20 flex flex-col items-center">
          {/* Top Ring */}
          <div className="h-5 w-7 rounded-md border-2 border-slate-700 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-900 shadow-md" />
          {/* Carabiner Metallic Clip */}
          <div className="h-9 w-3.5 rounded-b-md border border-slate-600 bg-gradient-to-b from-slate-700 via-slate-500 to-slate-950 shadow-lg" />
        </div>
      </div>

      {/* 3. Interactive Draggable ID Badge */}
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 100 }}
        dragElastic={0.35}
        dragSnapToOrigin={true}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false);
          setRotateX(0);
          setRotateY(0);
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          x: dragX,
          y: dragY,
          rotateZ: smoothDragRotate,
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative -mt-3.5 cursor-grab active:cursor-grabbing w-80 sm:w-84 h-[440px] overflow-hidden rounded-3xl border-2 border-slate-800 bg-slate-950 shadow-2xl shadow-cyan-500/20"
      >
        {/* Top Punch Hole Clip Mount */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-3.5 w-6 rounded-full border border-slate-700 bg-slate-900 shadow-inner" />

        {/* Card Body Split: Left Photo Panel (Cyan Glow) & Right Typography Panel (Black) */}
        <div className="relative h-full w-full grid grid-cols-12 overflow-hidden">
          {/* LEFT PANEL: Photo & Cyan Glow */}
          <div className="col-span-7 relative h-full bg-gradient-to-b from-cyan-950 via-slate-950 to-slate-950 p-4 flex flex-col justify-between">
            {/* Top Brand Logo */}
            <div className="flex items-center gap-2 pt-3 z-10">
              <LogoSVG className="w-6 h-6" />
              <div className="leading-none">
                <span className="block text-[10px] font-black tracking-wider text-white">
                  REHAN
                </span>
                <span className="block text-[8px] font-bold text-cyan-400">
                  AI LABS
                </span>
              </div>
            </div>

            {/* Rehan Portrait Photo */}
            <div className="absolute inset-0 top-12 flex items-center justify-center overflow-hidden">
              <img
                src={profile}
                alt="Md Rehan Alam"
                className="h-full w-full object-cover object-top filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* RIGHT PANEL: Bold Vertical "REHAN" Typography */}
          <div className="col-span-5 relative h-full bg-slate-950 flex items-center justify-center border-l border-white/10">
            <div className="rotate-90 transform whitespace-nowrap text-5xl font-black uppercase tracking-widest text-white opacity-95">
              REHAN
            </div>
          </div>
        </div>

        {/* 4. Bottom Nameplate Badge (Matching Reference Layout) */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col items-center">
          <div className="w-full rounded-2xl bg-white p-3 shadow-2xl text-center border border-slate-200">
            <h4 className="text-sm font-black uppercase tracking-wide text-slate-950">
              MD REHAN ALAM
            </h4>
            <div className="mt-1 inline-block rounded-full bg-slate-950 px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-white">
              AI & ML ENGINEER
            </div>
          </div>

          {/* Decorative Cyan Accent Flares (Bottom Corners) */}
          <div className="absolute -bottom-2 -right-2 -z-10 h-14 w-14 rounded-full bg-cyan-400/30 blur-md" />
        </div>

        {/* Drag Touch Hint Badge */}
        <div className="absolute top-4 right-3 z-30 rounded-full border border-cyan-400/30 bg-slate-950/80 px-2 py-0.5 text-[8px] font-bold text-cyan-300 backdrop-blur-md">
          {isDragging ? "SWINGING" : "DRAG ME"}
        </div>
      </motion.div>

      {/* Physics Hint */}
      <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
        👆 Click & drag badge to swing with 3D physics
      </p>
    </div>
  );
}

export default ThreeIDCard;
