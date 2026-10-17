import React from "react";
import { prefersReducedMotion } from "../hooks/useInView";

// Custom cursor (dot + trailing ring) plus a soft page glow that follows the mouse.
// Only on devices with a fine pointer; touch devices keep the native behaviour.
export const Cursor = () => {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  const [enabled] = React.useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(pointer: fine)").matches &&
      !prefersReducedMotion()
  );

  React.useEffect(() => {
    if (!enabled) return undefined;
    document.documentElement.classList.add("has-cursor");
    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let frame;

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      document.documentElement.style.setProperty("--cx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cy", `${e.clientY}px`);
      // Spotlight on whichever tile is under the cursor.
      const tile = e.target.closest(".tile");
      if (tile) {
        const r = tile.getBoundingClientRect();
        tile.style.setProperty("--mx", `${e.clientX - r.left}px`);
        tile.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      const hot = e.target.closest("a, button, input, [tabindex='0']");
      ringRef.current.classList.toggle("is-hover", Boolean(hot));
    };
    const onDown = () => ringRef.current.classList.add("is-down");
    const onUp = () => ringRef.current.classList.remove("is-down");

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      frame = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div className="page-glow" aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true">
        <span />
      </div>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true">
        <span />
      </div>
    </>
  );
};
