import React from "react";
import {
  SiTableau,
  SiMicrosoftexcel,
  SiPowerbi,
  SiAlteryx,
  SiSnowflake,
  SiMicrosoftsqlserver,
  SiSalesforce,
  SiPython,
  SiR,
  SiOpenai,
  SiMicrosoftazure,
  SiGit,
  SiJira,
  SiMicrosoftoffice,
  SiMysql,
} from "react-icons/si";
import {
  FiCpu,
  FiDatabase,
  FiGitMerge,
  FiLink,
  FiSearch,
  FiServer,
  FiShuffle,
  FiSliders,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { SectionTitle } from "./About";
import { skillCategories, expertise } from "../data";
import { trackSpotlight } from "../hooks/useInView";

const icons = {
  powerbi: SiPowerbi,
  tableau: SiTableau,
  excel: SiMicrosoftexcel,
  alteryx: SiAlteryx,
  sql: SiMysql,
  snowflake: SiSnowflake,
  sqlserver: SiMicrosoftsqlserver,
  salesforce: SiSalesforce,
  etl: FiShuffle,
  model: FiDatabase,
  python: SiPython,
  r: SiR,
  predict: FiTrendingUp,
  rules: FiGitMerge,
  openai: SiOpenai,
  chain: FiLink,
  local: FiServer,
  rag: FiSearch,
  tune: FiSliders,
  agent: FiZap,
  azure: SiMicrosoftazure,
  git: SiGit,
  jira: SiJira,
  m365: SiMicrosoftoffice,
};

const all = { id: "all", name: "All" };

export const Skills = () => {
  const [filter, setFilter] = React.useState("all");
  const [query, setQuery] = React.useState("");

  const q = query.trim().toLowerCase();
  const skills = skillCategories
    .filter((c) => filter === "all" || c.id === filter)
    .flatMap((c) => c.skills.map((s) => ({ ...s, category: c.name })))
    .filter(
      (s) =>
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.detail.toLowerCase().includes(q)
    );

  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionTitle kicker="Skills" title="Toolkit" />

        <div className="skills__controls" data-aos="fade-up">
          <div className="chips" role="group" aria-label="Filter skills">
            {[all, ...skillCategories].map((c) => (
              <button
                key={c.id}
                className={`chip ${filter === c.id ? "is-active" : ""}`}
                onClick={() => setFilter(c.id)}
                aria-pressed={filter === c.id}
              >
                {c.name}
              </button>
            ))}
          </div>
          <label className="search">
            <FiSearch />
            <input
              type="search"
              placeholder="Search skills…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search skills"
            />
          </label>
        </div>

        <div className="skills__grid">
          {skills.map((s) => {
            const Icon = icons[s.icon] || FiCpu;
            return (
              <div
                className="card skill spotlight"
                key={s.name}
                onMouseMove={trackSpotlight}
                tabIndex={0}
              >
                <div className="skill__top">
                  <Icon className="skill__icon" />
                  <div>
                    <h3>{s.name}</h3>
                    <span className="skill__cat">{s.category}</span>
                  </div>
                </div>
                <p>{s.detail}</p>
              </div>
            );
          })}
          {skills.length === 0 && (
            <p className="skills__empty">No skills match "{query}".</p>
          )}
        </div>

        <h3 className="subhead" data-aos="fade-up">
          Domain expertise
        </h3>
        <div className="expertise">
          {expertise.map((e, i) => (
            <div
              className="card expertise__item spotlight"
              key={e.title}
              onMouseMove={trackSpotlight}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 80}
            >
              <span className="expertise__num">{String(i + 1).padStart(2, "0")}</span>
              <h4>{e.title}</h4>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
