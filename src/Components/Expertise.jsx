import React from "react";
import { FiCpu, FiTrendingUp } from "react-icons/fi";
import { SectionTitle } from "./About";
import { disciplines } from "../data";

const icons = { tech: FiCpu, gtm: FiTrendingUp };

export const Expertise = () => {
  const [view, setView] = React.useState("both");

  return (
    <section className="section section--alt" id="expertise">
      <div className="container">
        <SectionTitle
          index="02" kicker="Expertise"
          title="Two disciplines. One focus: growth."
          center
        />

        <div className="segmented segmented--center" role="group" aria-label="Show expertise" data-aos="fade-up">
          {[
            { id: "both", label: "Both" },
            { id: "tech", label: "Build" },
            { id: "gtm", label: "Grow" },
          ].map((o) => (
            <button
              key={o.id}
              className={view === o.id ? "is-active" : ""}
              aria-pressed={view === o.id}
              onClick={() => setView(o.id)}
            >
              {o.label}
            </button>
          ))}
        </div>

        <div className={`disciplines disciplines--${view}`}>
          {disciplines
            .filter((d) => view === "both" || d.id === view)
            .map((d, i) => {
              const Icon = icons[d.id];
              return (
                <article
                  className={`tile discipline discipline--${d.id}`}
                  key={d.id}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="discipline__icon">
                    <Icon />
                  </div>
                  <span className="discipline__eyebrow">{d.eyebrow}</span>
                  <h3>{d.title}</h3>
                  <p className="discipline__text">{d.text}</p>
                  <div className="discipline__groups">
                    {d.groups.map((g) => (
                      <div key={g.title}>
                        <h4>{g.title}</h4>
                        <ul>
                          {g.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
};
