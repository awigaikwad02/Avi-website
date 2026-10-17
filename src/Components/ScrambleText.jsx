import React from "react";
import { prefersReducedMotion } from "../hooks/useInView";

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=<>/";

// Cycles through `words`, "decoding" each one from random characters.
export const ScrambleText = ({ words, hold = 2200 }) => {
  const [text, setText] = React.useState(words[0]);

  React.useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let index = 0;
    let frame;
    let timer;

    const decode = (target) => {
      const start = performance.now();
      const duration = 700;
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const revealed = Math.floor(p * target.length);
        let out = target.slice(0, revealed);
        for (let i = revealed; i < target.length; i++) {
          out += target[i] === " " ? " " : glyphs[Math.floor(Math.random() * glyphs.length)];
        }
        setText(out);
        if (p < 1) frame = requestAnimationFrame(tick);
        else timer = setTimeout(next, hold);
      };
      frame = requestAnimationFrame(tick);
    };
    const next = () => {
      index = (index + 1) % words.length;
      decode(words[index]);
    };

    timer = setTimeout(next, hold);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [words, hold]);

  return (
    <span className="scramble" aria-live="off">
      {text}
    </span>
  );
};
