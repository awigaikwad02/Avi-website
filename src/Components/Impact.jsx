import React from "react";
import { SectionTitle } from "./About";
import { impact } from "../data";
import { useInView, prefersReducedMotion } from "../hooks/useInView";

const format = (n) => n.toLocaleString("en-US");

const Counter = ({ value, start }) => {
  const [n, setN] = React.useState(0);

  React.useEffect(() => {
    if (!start) return undefined;
    if (prefersReducedMotion()) {
      setN(value);
      return undefined;
    }
    const duration = 1800;
    const t0 = performance.now();
    let frame;
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return <>{format(n)}</>;
};

export const Impact = () => {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section className="section" id="impact">
      <div className="container">
        <SectionTitle kicker="Impact" title="Results that move the business." />
        <div className="bento" ref={ref}>
          {impact.map((m, i) => (
            <div
              className={`tile bento__item ${m.size === "wide" ? "bento__item--wide" : ""}`}
              key={m.label}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 80}
            >
              <div className="bento__label">{m.label}</div>
              <div className="bento__value">
                {m.prefix}
                <Counter value={m.value} start={inView} />
                {m.suffix}
              </div>
              <p>{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
