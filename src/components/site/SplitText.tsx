const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%$&/*";

export function SplitText({
  text,
  delay = 0,
  step = 26,
  className,
}: {
  text: string;
  delay?: number;
  step?: number;
  className?: string;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span key={`${char}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span
            aria-hidden="true"
            className="vz-char inline-block"
            style={{ animationDelay: `${delay + i * step}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}

export { CHARS };
