"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import * as THREE from "three";
import { Link, useNavigate } from "@tanstack/react-router";
import projectThumbnail from "@/assets/Homepage.jpeg";

function RotatingShape({
  setHoverState,
}: {
  setHoverState: (hovered: boolean, x: number, y: number) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHoverState(true, e.clientX, e.clientY);
      }}
      onPointerMove={(e) => {
        e.stopPropagation();
        setHoverState(true, e.clientX, e.clientY);
      }}
      onPointerOut={(e) => {
        setHoverState(false, 0, 0);
      }}
    >
      <torusKnotGeometry args={[10, 3, 200, 32]} />
      <meshStandardMaterial color="#a3a3a3" />
    </mesh>
  );
}

export function AsciiCanvas({ variant = "hero" }: { variant?: "hero" | "interactive" }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Smoothly interpolate the tooltip position
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!hovered) return;
    let animationFrameId: number;
    const updateTooltip = () => {
      setTooltipPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        // Smooth easing towards target (lerp)
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTooltip);
    };
    animationFrameId = requestAnimationFrame(updateTooltip);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hovered, mousePos]);

  // Set initial tooltip position when hovered starts
  const handleSetHoverState = (isHovered: boolean, x: number, y: number) => {
    setMousePos({ x, y });
    if (isHovered && !hovered) {
      setTooltipPos({ x, y });
    }
    setHovered(isHovered);
  };

  // Center the tooltip exactly on the cursor
  const boxX = tooltipPos.x;
  const boxY = tooltipPos.y;

  return (
    <div className="absolute inset-0 h-full w-full bg-black overflow-hidden z-0">
      <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
        <color attach="background" args={["black"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <spotLight position={[-10, -10, -10]} intensity={2} color="#737373" />
        
        <RotatingShape setHoverState={handleSetHoverState} />
        
        <AsciiRenderer
          fgColor="#ffffff"
          bgColor="black"
          characters=" .:-+*=%@#"
          invert={false}
          resolution={0.15}
        />
      </Canvas>
      {/* Gradient Overlay for ASCII text colorization */}
      <div className={`absolute inset-0 pointer-events-none mix-blend-multiply bg-gradient-to-br z-0 ${
        variant === "interactive" 
          ? "from-indigo-800 via-[#5a22d4] to-violet-950" 
          : "from-amber-500 via-indigo-500 to-blue-900"
      }`} />

      {/* Hover Web & Floating Boxes */}
      {variant === "interactive" && (
        <div 
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
        >
        <svg className="absolute inset-0 h-full w-full pointer-events-none">
          {/* Crosshair Lines */}
          <line x1={mousePos.x} y1={0} x2={mousePos.x} y2="100%" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
          <line x1={0} y1={mousePos.y} x2="100%" y2={mousePos.y} stroke="#ffffff" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
          
          {/* Connecting Web Lines to the Fixed Boxes */}
          {/* Work Box Center: 30% left, 30% top */}
          <line x1={mousePos.x} y1={mousePos.y} x2="30%" y2="30%" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
          {/* Studio Box Center: 70% left, 40% top */}
          <line x1={mousePos.x} y1={mousePos.y} x2="70%" y2="40%" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
          {/* Contact Box Center: 40% left, 70% top */}
          <line x1={mousePos.x} y1={mousePos.y} x2="40%" y2="70%" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
        </svg>
        
        {/* Work Box */}
        <div 
          className="pointer-events-auto absolute"
          style={{
            left: '30%',
            top: '30%',
            transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0.8})`,
            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <Link to="/work" className="block border border-[#ffffff]/40 bg-black/80 backdrop-blur-md p-2 shadow-xl hover:bg-[#ffffff]/20 transition-all cursor-pointer">
            <img src={projectThumbnail} alt="Work" className="w-32 h-20 object-cover mb-2 opacity-80" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#ffffff] text-center">Work</p>
          </Link>
        </div>

        {/* Studio Box */}
        <div 
          className="pointer-events-auto absolute"
          style={{
            left: '70%',
            top: '40%',
            transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0.8})`,
            transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <Link to="/studio" className="block border border-[#ffffff]/40 bg-black/80 backdrop-blur-md p-2 shadow-xl hover:bg-[#ffffff]/20 transition-all cursor-pointer">
            <img src={projectThumbnail} alt="Studio" className="w-40 h-28 object-cover mb-2 opacity-80" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#ffffff] text-center">Studio</p>
          </Link>
        </div>

        {/* Contact Box */}
        <div 
          className="pointer-events-auto absolute"
          style={{
            left: '40%',
            top: '70%',
            transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0.8})`,
            transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <Link to="/contact" className="block border border-[#ffffff]/40 bg-black/80 backdrop-blur-md p-2 shadow-xl hover:bg-[#ffffff]/20 transition-all cursor-pointer">
            <div className="w-24 h-16 bg-white/5 mb-2 flex items-center justify-center border border-[#ffffff]/20">
               <span className="text-[#ffffff] text-xs">@</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#ffffff] text-center">Contact</p>
          </Link>
        </div>
      </div>
      )}
    </div>
  );
}
