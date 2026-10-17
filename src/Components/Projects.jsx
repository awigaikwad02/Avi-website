import React from "react";
import { FiArrowUpRight, FiCheck, FiGithub } from "react-icons/fi";
import { SectionTitle } from "./About";
import { projects } from "../data";

const img = (name, theme) => `${process.env.PUBLIC_URL}/projects/img/${name}-${theme}.jpg`;

// Feature rows: a framed screenshot (matching the site theme) beside the project story.
export const Projects = () => (
  <section className="section" id="projects">
    <div className="container">
      <SectionTitle index="05" kicker="Featured Projects" title={<>Things I've <span className="hl">built.</span></>} />

      <div className="projects">
        {projects.map((p, i) => (
          <article key={p.id} className={`project ${i % 2 ? "project--flip" : ""}`} data-aos="fade-up">
            <a className="project__shot tile" href={p.demo} target="_blank" rel="noreferrer" aria-label={`Open the ${p.name} live demo`}>
              <span className="project__chrome" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>{p.demo}</span>
              </span>
              <img className="project__img project__img--dark" src={img(p.image, "dark")} alt={`${p.name} screenshot`} loading="lazy" width="1280" height="800" />
              <img className="project__img project__img--light" src={img(p.image, "light")} alt="" loading="lazy" width="1280" height="800" />
            </a>

            <div className="project__body">
              <p className="project__eyebrow">
                {p.eyebrow} <span className="project__badge">{p.badge}</span>
              </p>
              <h3 className="project__name">{p.name}</h3>
              <p className="project__tagline">{p.tagline}</p>
              <p className="project__desc">{p.description}</p>
              <ul className="project__features">
                {p.features.map((f) => (
                  <li key={f}>
                    <FiCheck /> {f}
                  </li>
                ))}
              </ul>
              <div className="tags">
                {p.tech.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project__cta">
                <a className="btn btn--small" href={p.demo} target="_blank" rel="noreferrer">
                  Live demo <FiArrowUpRight />
                </a>
                <a className="btn btn--small btn--ghost" href={p.github} target="_blank" rel="noreferrer">
                  <FiGithub /> Source code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
