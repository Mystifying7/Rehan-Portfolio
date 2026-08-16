import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Monitor, Cpu, Trophy, GraduationCap, Radio, HelpCircle } from "lucide-react";

export function AIRoomCanvas({ onSelectStation, activeStation }) {
  const mountRef = useRef(null);
  const [hoveredStation, setHoveredStation] = useState(null);
  const [showGuideTip, setShowGuideTip] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);
    scene.fog = new THREE.FogExp2(0x020617, 0.035);

    // Camera - Orthographic for clean isometric projection
    const aspect = width / height;
    const d = 10;
    const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
    camera.position.set(18, 16, 18);
    camera.lookAt(0, 1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.5);
    scene.add(ambientLight);

    const mainDirectional = new THREE.DirectionalLight(0x38bdf8, 1.8);
    mainDirectional.position.set(15, 25, 10);
    mainDirectional.castShadow = true;
    mainDirectional.shadow.mapSize.width = 1024;
    mainDirectional.shadow.mapSize.height = 1024;
    scene.add(mainDirectional);

    const cyanPoint = new THREE.PointLight(0x22d3ee, 3, 20);
    cyanPoint.position.set(-2, 4, -2);
    scene.add(cyanPoint);

    const bluePoint = new THREE.PointLight(0x3b82f6, 3, 20);
    bluePoint.position.set(4, 3, 3);
    scene.add(bluePoint);

    const amberPoint = new THREE.PointLight(0xf59e0b, 2.5, 15);
    amberPoint.position.set(5, 4, -4);
    scene.add(amberPoint);

    // Room Base & Grid
    const roomGroup = new THREE.Group();
    scene.add(roomGroup);

    // Floor
    const floorGeo = new THREE.BoxGeometry(16, 0.6, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.3,
      metalness: 0.8,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -0.3;
    floor.receiveShadow = true;
    roomGroup.add(floor);

    // Grid Overlay on Floor
    const gridHelper = new THREE.GridHelper(15.8, 16, 0x22d3ee, 0x1e293b);
    gridHelper.position.y = 0.01;
    roomGroup.add(gridHelper);

    // Back Left Wall
    const wall1Geo = new THREE.BoxGeometry(0.5, 10, 16);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x0b1329,
      roughness: 0.4,
      metalness: 0.6,
    });
    const wall1 = new THREE.Mesh(wall1Geo, wallMat);
    wall1.position.set(-8.25, 5, 0);
    wall1.receiveShadow = true;
    roomGroup.add(wall1);

    // Back Right Wall
    const wall2Geo = new THREE.BoxGeometry(16, 10, 0.5);
    const wall2 = new THREE.Mesh(wall2Geo, wallMat);
    wall2.position.set(0, 5, -8.25);
    wall2.receiveShadow = true;
    roomGroup.add(wall2);

    // Cyan Wall Trims
    const trimMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const trim1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 16), trimMat);
    trim1.position.set(-8, 9.8, 0);
    roomGroup.add(trim1);

    const trim2 = new THREE.Mesh(new THREE.BoxGeometry(16, 0.1, 0.1), trimMat);
    trim2.position.set(0, 9.8, -8);
    roomGroup.add(trim2);

    // STATIONS OBJECT INTERACTION REPO
    const interactiveObjects = [];

    // --- STATION 1: WORKSTATION (Projects) ---
    const deskGroup = new THREE.Group();
    deskGroup.userData = { stationId: "projects", name: "Featured Projects" };
    deskGroup.position.set(-4, 0, -4);

    // Desk Table
    const deskMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7, roughness: 0.2 });
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(5.5, 0.3, 3), deskMat);
    deskTop.position.y = 2.2;
    deskTop.castShadow = true;
    deskGroup.add(deskTop);

    const legGeo = new THREE.BoxGeometry(0.3, 2.2, 0.3);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x0f172a });
    [[-2.4, 1.1, -1.2], [-2.4, 1.1, 1.2], [2.4, 1.1, -1.2], [2.4, 1.1, 1.2]].forEach((pos) => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(...pos);
      deskGroup.add(leg);
    });

    // Dual Monitors
    const screenGeo = new THREE.BoxGeometry(2.4, 1.4, 0.1);
    const screenGlowMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const monitor1 = new THREE.Mesh(screenGeo, screenGlowMat);
    monitor1.position.set(-1.1, 3.2, -0.4);
    monitor1.rotation.y = 0.2;
    deskGroup.add(monitor1);

    const monitor2 = new THREE.Mesh(screenGeo, screenGlowMat);
    monitor2.position.set(1.1, 3.2, -0.4);
    monitor2.rotation.y = -0.2;
    deskGroup.add(monitor2);

    // Glow Ring Base
    const ringGeo = new THREE.RingGeometry(2.8, 3.2, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, side: THREE.DoubleSide });
    const deskRing = new THREE.Mesh(ringGeo, ringMat);
    deskRing.rotation.x = Math.PI / 2;
    deskRing.position.y = 0.02;
    deskGroup.add(deskRing);

    roomGroup.add(deskGroup);
    interactiveObjects.push(deskGroup);

    // --- STATION 2: AI SERVER CORE (Skills & AI Stack) ---
    const serverGroup = new THREE.Group();
    serverGroup.userData = { stationId: "skills", name: "AI Core & Skills" };
    serverGroup.position.set(-6, 0, 3);

    const rackMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.2, metalness: 0.9 });
    const rackFrame = new THREE.Mesh(new THREE.BoxGeometry(2.4, 6.5, 2), rackMat);
    rackFrame.position.y = 3.25;
    rackFrame.castShadow = true;
    serverGroup.add(rackFrame);

    // Server LED Blades
    const ledGlowMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const leds = [];
    for (let i = 0; i < 6; i++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.6, 1.8), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
      blade.position.set(0, 1.2 + i * 0.9, 0.1);
      serverGroup.add(blade);

      const ledLine = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.08, 0.05), ledGlowMat);
      ledLine.position.set(0, 1.2 + i * 0.9, 1.01);
      serverGroup.add(ledLine);
      leds.push(ledLine);
    }

    const serverRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide }));
    serverRing.rotation.x = Math.PI / 2;
    serverRing.position.y = 0.02;
    serverGroup.add(serverRing);

    roomGroup.add(serverGroup);
    interactiveObjects.push(serverGroup);

    // --- STATION 3: TROPHY WALL & CERTIFICATES ---
    const trophyGroup = new THREE.Group();
    trophyGroup.userData = { stationId: "certifications", name: "Certifications & Hackathons" };
    trophyGroup.position.set(3, 0, -6);

    const shelfMat = new THREE.MeshStandardMaterial({ color: 0x334155 });
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(5, 0.2, 1.2), shelfMat);
    shelf.position.set(0, 3.5, 0);
    shelf.castShadow = true;
    trophyGroup.add(shelf);

    // Glowing Trophies
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.1 });
    const silverMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.1 });

    const cup1 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.2, 1, 16), goldMat);
    cup1.position.set(-1.5, 4.2, 0);
    trophyGroup.add(cup1);

    const cup2 = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.2, 0.8, 16), silverMat);
    cup2.position.set(1.5, 4.1, 0);
    trophyGroup.add(cup2);

    // Certificate Frames on Wall
    const certFrameGeo = new THREE.BoxGeometry(1.6, 1.2, 0.08);
    const certMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const frame1 = new THREE.Mesh(certFrameGeo, certMat);
    frame1.position.set(-1.2, 5.8, -1.8);
    trophyGroup.add(frame1);

    const frame2 = new THREE.Mesh(certFrameGeo, certMat);
    frame2.position.set(1.2, 5.8, -1.8);
    trophyGroup.add(frame2);

    const trophyRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide }));
    trophyRing.rotation.x = Math.PI / 2;
    trophyRing.position.y = 0.02;
    trophyGroup.add(trophyRing);

    roomGroup.add(trophyGroup);
    interactiveObjects.push(trophyGroup);

    // --- STATION 4: ACADEMIC POD & JOURNEY ---
    const eduGroup = new THREE.Group();
    eduGroup.userData = { stationId: "education", name: "Education & Journey" };
    eduGroup.position.set(5, 0, 1);

    // Holotable Pod Base
    const podBase = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.2, 1, 32), new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8 }));
    podBase.position.y = 0.5;
    podBase.castShadow = true;
    eduGroup.add(podBase);

    // Hologram Beam Cylinder
    const holoGeo = new THREE.CylinderGeometry(1.4, 1.4, 2.5, 32, 1, true);
    const holoMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25, side: THREE.DoubleSide });
    const holoBeam = new THREE.Mesh(holoGeo, holoMat);
    holoBeam.position.y = 2.25;
    eduGroup.add(holoBeam);

    const eduRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x60a5fa, side: THREE.DoubleSide }));
    eduRing.rotation.x = Math.PI / 2;
    eduRing.position.y = 0.02;
    eduGroup.add(eduRing);

    roomGroup.add(eduGroup);
    interactiveObjects.push(eduGroup);

    // --- STATION 5: COMMS CONSOLE (Contact) ---
    const commsGroup = new THREE.Group();
    commsGroup.userData = { stationId: "contact", name: "Comms & Contact" };
    commsGroup.position.set(0, 0, 5);

    const commsDesk = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.8, 1.6), new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 }));
    commsDesk.position.y = 0.9;
    commsDesk.castShadow = true;
    commsGroup.add(commsDesk);

    const dishGeo = new THREE.SphereGeometry(0.8, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const dishMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, metalness: 0.9 });
    const dish = new THREE.Mesh(dishGeo, dishMat);
    dish.rotation.x = -Math.PI / 3;
    dish.position.set(0, 2.4, 0);
    commsGroup.add(dish);

    const commsRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x06b6d4, side: THREE.DoubleSide }));
    commsRing.rotation.x = Math.PI / 2;
    commsRing.position.y = 0.02;
    commsGroup.add(commsRing);

    roomGroup.add(commsGroup);
    interactiveObjects.push(commsGroup);

    // FLOATING AI BOT (Hover Assistant)
    const botGroup = new THREE.Group();
    botGroup.position.set(0, 5, 0);

    const botCore = new THREE.Mesh(new THREE.SphereGeometry(0.6, 32, 32), new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.9, roughness: 0.1 }));
    botGroup.add(botCore);

    const botEye = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
    botEye.position.set(0, 0, 0.5);
    botGroup.add(botEye);

    scene.add(botGroup);

    // RAYCASTING & MOUSE INTERACTION
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const getIntersectedStation = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects, true);

      if (intersects.length > 0) {
        let obj = intersects[0].object;
        while (obj.parent && !obj.userData?.stationId) {
          obj = obj.parent;
        }
        if (obj.userData?.stationId) return obj.userData;
      }
      return null;
    };

    const handlePointerMove = (e) => {
      const station = getIntersectedStation(e);
      setHoveredStation(station);
      container.style.cursor = station ? "pointer" : "default";

      // Subtle parallax camera shift
      const rect = container.getBoundingClientRect();
      const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
      const yRatio = (e.clientY - rect.top) / rect.height - 0.5;

      camera.position.x = 18 + xRatio * 2;
      camera.position.z = 18 + yRatio * 2;
      camera.lookAt(0, 1, 0);
    };

    const handleClick = (e) => {
      const station = getIntersectedStation(e);
      if (station) {
        onSelectStation(station.stationId);
      }
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("click", handleClick);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Bot float animation
      botGroup.position.y = 5 + Math.sin(elapsedTime * 2) * 0.3;
      botGroup.rotation.y = elapsedTime * 0.8;

      // Hologram pulse
      holoBeam.rotation.y = elapsedTime * 0.5;

      // Server LED blink
      leds.forEach((led, idx) => {
        led.material.opacity = 0.4 + Math.sin(elapsedTime * 4 + idx) * 0.6;
        led.material.transparent = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const newAspect = w / h;

      camera.left = -d * newAspect;
      camera.right = d * newAspect;
      camera.top = d;
      camera.bottom = -d;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onSelectStation]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="h-full w-full" />

      {/* Hovered Station Tooltip */}
      <AnimatePresence>
        {hoveredStation && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 transform rounded-2xl border border-cyan-400/40 bg-slate-950/90 px-6 py-3 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-cyan-400 animate-ping" />
              <p className="text-sm font-semibold text-white">
                Inspect <span className="text-cyan-400">{hoveredStation.name}</span>
              </p>
              <span className="rounded-full bg-cyan-400/20 px-2 py-0.5 text-[11px] font-bold text-cyan-300">
                Click to Enter
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating AI Guide Banner */}
      {showGuideTip && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute left-6 top-24 max-w-sm rounded-2xl border border-cyan-400/30 bg-slate-950/80 p-4 shadow-xl shadow-cyan-500/10 backdrop-blur-xl sm:left-8"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                AI Lab Virtual Tour
              </h4>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Welcome to Rehan's 3D AI Research Lab! Click any interactive station in the room (Desk, Server Core, Trophy Cabinet, Comms Desk) to inspect items.
              </p>
            </div>
            <button
              onClick={() => setShowGuideTip(false)}
              className="text-slate-400 hover:text-white"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}

      {/* Quick Station Legend Bar (Bottom Left) */}
      <div className="absolute bottom-6 left-6 hidden items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/80 p-2 backdrop-blur-xl md:flex">
        {[
          { id: "projects", label: "Workstation", icon: <Monitor size={15} /> },
          { id: "skills", label: "AI Core", icon: <Cpu size={15} /> },
          { id: "certifications", label: "Trophy Cabinet", icon: <Trophy size={15} /> },
          { id: "education", label: "Academic Pod", icon: <GraduationCap size={15} /> },
          { id: "contact", label: "Comms", icon: <Radio size={15} /> },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectStation(item.id)}
            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition ${
              activeStation === item.id
                ? "bg-cyan-400 text-slate-950"
                : "text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-400"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AIRoomCanvas;
