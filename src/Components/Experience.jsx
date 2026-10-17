import React from "react";
import { FiMapPin } from "react-icons/fi";
import { SectionTitle } from "./About";
import { experience } from "../data";

export const Experience = () => {
  const [activeId, setActiveId] = React.useState(experience[0].id);
  const job = experience.find((e) => e.id === activeId);

  // Arrow keys move between tabs.
  const onKeyDown = (e) => {
    const i = experience.findIndex((x) => x.id === activeId);
    const delta = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!delta) return;
    e.preventDefault();
    const next = experience[(i + delta + experience.length) % experience.length];
    setActiveId(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionTitle index="04" kicker="Experience" title="Where I've made an impact." />

        <div className="exp">
        <div className="exp__tabs" role="tablist" aria-label="Experience" onKeyDown={onKeyDown} data-aos="fade-up">
          {experience.map((e) => (
            <button
              key={e.id}
              id={`tab-${e.id}`}
              role="tab"
              aria-selected={e.id === activeId}
              tabIndex={e.id === activeId ? 0 : -1}
              className={e.id === activeId ? "is-active" : ""}
              onClick={() => setActiveId(e.id)}
            >
              <span className="exp__tab-name">{e.short}</span>
              <span className="exp__tab-role">{e.role}</span>
              <span className="mono exp__tab-year">{e.period.match(/\d{4}/)[0]}</span>
            </button>
          ))}
        </div>

        <article className="tile exp__panel" role="tabpanel" key={job.id}>
          <div className="exp__head">
            <div>
              <p className="exp__period">{job.period}</p>
              <h3>{job.role}</h3>
              <p className="exp__company">
                {job.company} · <FiMapPin /> {job.location}
              </p>
            </div>
          </div>
          <p className="exp__summary">{job.summary}</p>
          {job.points.length > 0 && (
          <ul className="exp__points">
            {job.points.map((p, i) => (
              <li key={p} style={{ animationDelay: `${i * 60}ms` }}>
                {p}
              </li>
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
        </article>
        </div>
      </div>
    </section>
  );
};
