import { useEffect, useRef, useState } from "react";

export function ScrambleCarousel({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(words[0]);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    let currentWord = words[index];

    const startScramble = (nextWord: string, prevWord: string) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplay(nextWord);
        return;
      }
      
      let tick = 0;
      const maxLength = Math.max(nextWord.length, prevWord.length);
      
      const run = () => {
        const progress = tick / 2; // Fast speed
        
        setDisplay(
          Array.from({ length: maxLength })
            .map((_, i) => {
              if (i < progress) {
                return i < nextWord.length ? nextWord[i] : ""; // no space padding
              }
              return i < prevWord.length ? prevWord[i] : ""; // no space padding
            })
            .join(""),
        );
        
        tick += 1;
        if (progress < maxLength) {
          frame.current = requestAnimationFrame(run);
        } else {
          setDisplay(nextWord);
          frame.current = null;
        }
      };
      
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(run);
    };

    const interval = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % words.length;
        startScramble(words[nextIndex], words[prev]);
        return nextIndex;
      });
    }, 1500);

    return () => {
      clearInterval(interval);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [words]);

  return (
    <span className={className} aria-label={words[index]}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
