import { useEffect, useRef } from "react";

export function CustomCursor() {
  const trailingRef = useRef<HTMLDivElement>(null);
  const leadingRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const trailingPos = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (leadingRef.current) {
        leadingRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    let animationFrameId: number;
    
    // Smooth trailing effect using linear interpolation (lerp)
    const render = () => {
      const dx = mousePos.current.x - trailingPos.current.x;
      const dy = mousePos.current.y - trailingPos.current.y;
      
      trailingPos.current.x += dx * 0.15;
      trailingPos.current.y += dy * 0.15;

      if (trailingRef.current) {
        trailingRef.current.style.transform = `translate3d(${trailingPos.current.x - 12}px, ${trailingPos.current.y - 12}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Global style to hide default cursor */}
      <style>{`
        @media (pointer: fine) {
          body, a, button, [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>
      
      {/* Trailing circle */}
      <div 
        ref={trailingRef}
        className="hidden md:block fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-[9998] mix-blend-screen"
        style={{ willChange: 'transform' }}
      />
      
      {/* Leading circle */}
      <div 
        ref={leadingRef}
        className="hidden md:block fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
