import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const p = (n: number) => String(n).padStart(2, "0");
      setTime(`${p(d.getHours())} ${p(d.getMinutes())} ${p(d.getSeconds())}`);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return <span className="font-mono text-[11px] text-muted-foreground">{time ?? "-- -- --"}</span>;
}