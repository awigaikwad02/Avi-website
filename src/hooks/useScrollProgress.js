import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "./useInView";

// Progress (0 → 1) of an element travelling through the viewport.
// `start`/`end` are viewport fractions for where the element's top sits at 0 and 1.
export const useScrollProgress = ({ start = 1, end = 0.3 } = {}) => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(prefersReducedMotion() ? 1 : 0);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let frame;
    const update = () => {
      frame = null;
      const node = ref.current;
      if (!node) return;
      const top = node.getBoundingClientRect().top;
      const vh = window.innerHeight;
      const p = (vh * start - top) / (vh * (start - end));
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [start, end]);

  return [ref, progress];
};
