import { useEffect, useRef, useState } from "react";
import { CHARS } from "./SplitText";

export function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const frame = useRef<number | null>(null);

  useEffect(() => () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
  }, []);

  const start = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tick = 0;
    const run = () => {
      const progress = tick / 3;
      setDisplay(
        text
          .split("")
          .map((char, i) =>
            char === " " || i < progress
              ? char
              : CHARS[Math.floor(Math.random() * CHARS.length)],
          )
          .join(""),
      );
      tick += 1;
      if (progress < text.length) {
        frame.current = requestAnimationFrame(run);
      } else {
        setDisplay(text);
        frame.current = null;
      }
    };
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(run);
  };

  return (
    <span className={className} onMouseEnter={start} onFocus={start} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
