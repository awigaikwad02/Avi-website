import React from "react";
import { FiBriefcase, FiChevronDown, FiMapPin } from "react-icons/fi";
import { SectionTitle } from "./About";
import { experience } from "../data";

export const Experience = () => {
  const [activeId, setActiveId] = React.useState(experience[0].id);
  const [openGroup, setOpenGroup] = React.useState(0);
  const job = experience.find((e) => e.id === activeId);

  const select = (id) => {
    setActiveId(id);
    setOpenGroup(0);
  };

  // Arrow keys move between tabs.
  const onKeyDown = (e) => {
    const i = experience.findIndex((x) => x.id === activeId);
    const delta = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!delta) return;
    e.preventDefault();
    const next = experience[(i + delta + experience.length) % experience.length];
    select(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle kicker="Experience" title="Where I've made an impact" />
        <div className="exp" data-aos="fade-up">
          <div className="exp__tabs" role="tablist" aria-label="Experience" onKeyDown={onKeyDown}>
            {experience.map((e) => (
              <button
                key={e.id}
                id={`tab-${e.id}`}
                role="tab"
                aria-selected={e.id === activeId}
                tabIndex={e.id === activeId ? 0 : -1}
                className={`exp__tab ${e.id === activeId ? "is-active" : ""}`}
                onClick={() => select(e.id)}
              >
                <span className="exp__tab-company">{e.short}</span>
                <span className="exp__tab-period">{e.period}</span>
              </button>
            ))}
          </div>

          <div className="card exp__panel" role="tabpanel" key={job.id}>
            <div className="exp__head">
              <div className="exp__icon">
                <FiBriefcase />
              </div>
              <div>
                <h3>{job.role}</h3>
                <p className="exp__company">{job.company}</p>
                <p className="exp__meta">
                  {job.period} · <FiMapPin /> {job.location}
                </p>
              </div>
            </div>
            <p className="exp__summary">{job.summary}</p>

            <div className="exp__groups">
              {job.groups.map((g, i) => {
                const open = job.groups.length === 1 || openGroup === i;
                return (
                  <div className={`accordion ${open ? "is-open" : ""}`} key={g.title}>
                    {job.groups.length > 1 ? (
                      <button
                        className="accordion__head"
                        onClick={() => setOpenGroup(open ? -1 : i)}
                        aria-expanded={open}
                      >
                        {g.title}
                        <FiChevronDown />
                      </button>
                    ) : null}
                    <div className="accordion__body">
                      <ul>
                        {g.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="tags">
              {job.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
