import React from "react";
import { FiAward, FiMapPin } from "react-icons/fi";
import { SectionTitle } from "./About";
import { education } from "../data";

export const Education = () => (
  <section className="section" id="education">
    <div className="container">
      <SectionTitle kicker="Education" title="Academic foundation" />
      <div className="edu">
        {education.map((e, i) => (
          <div className="card edu__item" key={e.school} data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="exp__icon">
              <FiAward />
            </div>
            <div>
              <h3>{e.degree}</h3>
              <p className="exp__company">{e.school}</p>
              <p className="exp__meta">
                {e.period} · <FiMapPin /> {e.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
