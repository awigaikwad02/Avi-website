import React from "react";
import { about } from "../data";
import { useScrollProgress } from "../hooks/useScrollProgress";

// Words light up one by one as the statement scrolls through the viewport.
const ScrollStatement = ({ text }) => {
  const [ref, p] = useScrollProgress({ start: 0.9, end: 0.25 });
  const words = text.split(" ");
  const lit = p * words.length;

  return (
    <p className="statement" ref={ref}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{ opacity: Math.min(1, Math.max(0.18, lit - i + 0.18)) }}
        >
          {w}{" "}
        </span>
      ))}
    </p>
  );
};

export const About = () => (
  <section className="section" id="about">
    <div className="container">
      <SectionTitle index="01" kicker="About" title="Where data, AI and commercial strategy meet." />
      <ScrollStatement text={about.differentiator} />
      <div className="about">
        <div className="about__text" data-aos="fade-up">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="about__stats" data-aos="fade-up" data-aos-delay="120">
          {about.highlights.map((h) => (
            <div key={h.label}>
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const SectionTitle = ({ index, kicker, title, center }) => (
  <div className={`section__head ${center ? "section__head--center" : ""}`} data-aos="fade-up">
    <span className="section__kicker">
      <span className="mono">{index}</span> {kicker}
    </span>
    <h2>{title}</h2>
  </div>
);
