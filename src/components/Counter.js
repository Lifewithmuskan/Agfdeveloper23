import React, { useEffect, useRef, useState } from "react";

export function Counter({ to, suffix = "", duration = 1.8, className = "" }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const holder = useRef({ raf: 0, start: 0 });

  useEffect(() => {
    const start = performance.now();
    holder.current.start = start;

    const step = (t) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setVal(Math.floor(eased * to));
      if (p < 1) holder.current.raf = requestAnimationFrame(step);
    };

    holder.current.raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(holder.current.raf);
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}
