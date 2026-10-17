import React from "react";
import { SectionTitle } from "./About";
import { impact } from "../data";
import { useInView, prefersReducedMotion, trackSpotlight } from "../hooks/useInView";

const format = (n) => n.toLocaleString("en-US");

const Counter = ({ value, start }) => {
  const [n, setN] = React.useState(0);

  React.useEffect(() => {
    if (!start) return undefined;
    if (prefersReducedMotion()) {
      setN(value);
      return undefined;
    }
    const duration = 1600;
    const t0 = performance.now();
    let frame;
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return <>{format(n)}</>;
};

export const Impact = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="section section--alt" id="impact">
      <div className="container">
        <SectionTitle kicker="Impact" title="Results in numbers" />
        <div className="impact" ref={ref}>
          {impact.map((m, i) => (
            <div
              className="card impact__item spotlight"
              key={m.label}
              onMouseMove={trackSpotlight}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 80}
            >
              <div className="impact__value">
                {m.prefix}
                <Counter value={m.value} start={inView} />
                {m.suffix}
              </div>
              <div className="impact__label">{m.label}</div>
              <p>{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
