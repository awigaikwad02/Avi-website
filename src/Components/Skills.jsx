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
  FiDollarSign,
  FiGitMerge,
  FiGlobe,
  FiLink,
  FiSearch,
  FiServer,
  FiShuffle,
  FiSliders,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { SectionTitle } from "./About";
import { skillCategories, focus } from "../data";

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
  market: FiGlobe,
  partner: FiUsers,
  pricing: FiDollarSign,
  target: FiTarget,
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
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle index="06" kicker="Skills" title={<>The <span className="hl">toolkit.</span></>} />

        <div className="skills__controls" data-aos="fade-up">
          <div className="segmented" role="group" aria-label="Filter skills">
            {[all, ...skillCategories].map((c) => (
              <button
                key={c.id}
                className={filter === c.id ? "is-active" : ""}
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
              placeholder="Search"
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
              <div className="tile skill" key={`${s.category}-${s.name}`} tabIndex={0}>
                <Icon className="skill__icon" />
                <h3>{s.name}</h3>
                <p>{s.detail}</p>
              </div>
            );
          })}
          {skills.length === 0 && (
            <p className="skills__empty">No skills match "{query}".</p>
          )}
        </div>

        <div className="focus">
          <h3 className="focus__title" data-aos="fade-up">
            What I'm looking for next
          </h3>
          <div className="focus__grid">
            {focus.map((f, i) => (
              <div className="tile focus__item" key={f.title} data-aos="fade-up" data-aos-delay={i * 100}>
                <h4>{f.title}</h4>
                <div className="tags">
                  {f.items.map((it) => (
                    <span className="tag" key={it}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
