import React from "react";
import { SectionTitle } from "./About";
import { education } from "../data";

export const Education = () => (
  <section className="section section--alt" id="education">
    <div className="container">
      <SectionTitle index="06" kicker="Education" title={<span className="hl">Foundations.</span>} />
      <div className="edu">
        {education.map((e, i) => (
          <article className="tile edu__item" key={e.school} data-aos="fade-up" data-aos-delay={i * 100}>
            <p className="exp__period">{e.period}</p>
            <h3>{e.degree}</h3>
            <p className="edu__school">{e.school}</p>
            <p className="edu__loc">{e.location}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
