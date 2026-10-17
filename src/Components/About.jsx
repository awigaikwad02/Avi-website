import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { about, lookingFor } from "../data";

export const About = () => (
  <section className="section" id="about">
    <div className="container">
      <SectionTitle kicker="About" title="Where business strategy meets data & AI" />
      <div className="about">
        <div className="about__text" data-aos="fade-up">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <div className="about__stats">
            {about.highlights.map((h) => (
              <div key={h.label}>
                <strong>{h.value}</strong>
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card about__strengths" data-aos="fade-up" data-aos-delay="150">
          <h3>What I bring</h3>
          <ul>
            {about.strengths.map((s) => (
              <li key={s}>
                <FiCheckCircle /> {s}
              </li>
            ))}
          </ul>
          <h4>Open to roles in</h4>
          <div className="tags">
            {lookingFor.map((r) => (
              <span className="tag" key={r}>
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const SectionTitle = ({ kicker, title }) => (
  <div className="section__head" data-aos="fade-up">
    <span className="section__kicker">{kicker}</span>
    <h2>{title}</h2>
  </div>
);
