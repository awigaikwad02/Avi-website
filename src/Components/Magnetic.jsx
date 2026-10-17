import React from "react";
import { prefersReducedMotion } from "../hooks/useInView";

// Wraps a child so it drifts toward the cursor while hovered.
export const Magnetic = ({ children, strength = 0.3 }) => {
  const ref = React.useRef(null);

  const onMove = (e) => {
    if (prefersReducedMotion()) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    ref.current.style.transform = "";
  };

  return (
    <span className="magnetic" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </span>
  );
};
