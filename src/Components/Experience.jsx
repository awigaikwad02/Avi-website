import React from "react";
import { FiMapPin, FiPlus } from "react-icons/fi";
import { SectionTitle } from "./About";
import { experience } from "../data";
import { useScrollProgress } from "../hooks/useScrollProgress";

// Vertical timeline: the line fills as you scroll, each role expands on click.
export const Experience = () => {
  const [open, setOpen] = React.useState(experience[0].id);
  const [ref, p] = useScrollProgress({ start: 0.7, end: -1.2 });

  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionTitle index="04" kicker="Experience" title="Where I've made an impact." />

        <ol className="timeline" ref={ref}>
          <span className="timeline__line" aria-hidden="true">
            <span style={{ transform: `scaleY(${p})` }} />
          </span>
          {experience.map((job) => {
            const isOpen = open === job.id;
            const hasDetail = job.points.length > 0;
            return (
              <li
                key={job.id}
                className={`timeline__item ${isOpen ? "is-open" : ""}`}
                data-aos="fade-up"
              >
                <span className="timeline__dot" aria-hidden="true" />
                <button
                  className="tile timeline__card"
                  onClick={() => setOpen(isOpen ? "" : job.id)}
                  aria-expanded={isOpen}
                >
                  <div className="timeline__head">
                    <div>
                      <p className="exp__period">{job.period}</p>
                      <h3>{job.role}</h3>
                      <p className="exp__company">
                        {job.company} · <FiMapPin /> {job.location}
                      </p>
                    </div>
                    <span className="timeline__toggle">
                      <FiPlus />
                    </span>
                  </div>
                  <div className="timeline__body">
                    <div>
                      <p className="exp__summary">{job.summary}</p>
                      {hasDetail && (
                        <ul className="exp__points">
                          {job.points.map((pt) => (
                            <li key={pt}>{pt}</li>
                          ))}
                        </ul>
                      )}
                      <div className="tags">
                        {job.tags.map((t) => (
                          <span className="tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
