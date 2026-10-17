import React from "react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiDatabase,
  FiMapPin,
} from "react-icons/fi";
import {
  SiPowerbi,
  SiPython,
  SiSnowflake,
  SiSalesforce,
  SiOpenai,
  SiTableau,
  SiMicrosoftexcel,
} from "react-icons/si";
import { profile, skillCategories } from "../data";
import { prefersReducedMotion } from "../hooks/useInView";
import profilePic from "../assets/profile.jpg";

const marquee = skillCategories.flatMap((c) => c.skills.map((s) => s.name));

const tools = [
  { Icon: SiPowerbi, label: "Power BI" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiSnowflake, label: "Snowflake" },
  { Icon: SiSalesforce, label: "Salesforce" },
  { Icon: SiOpenai, label: "OpenAI" },
  { Icon: SiTableau, label: "Tableau" },
  { Icon: FiDatabase, label: "SQL" },
  { Icon: SiMicrosoftexcel, label: "Excel" },
];

// Cycles through the role titles with a gentle fade.
const RotatingRole = ({ words }) => {
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="rotator" key={i}>
      {words[i]}
    </span>
  );
};

export const Hero = () => (
  <section className="hero" id="top">
    <div className="container hero__inner">
      <div className="hero__photo" data-aos="fade-up">
        <img
          src={profilePic}
          alt={profile.name}
          width="820"
          height="820"
          decoding="async"
        />
      </div>

      <p className="hero__status" data-aos="fade-up">
        <span className="pulse" /> {profile.title} @ Honeywell
        <span className="hero__sep" />
        <FiMapPin /> {profile.location}
      </p>
      <h1 className="hero__title" data-aos="fade-up" data-aos-delay="60">
        Avishkar <span className="hl">Gaikwad</span>
      </h1>
      <p className="hero__role" data-aos="fade-up" data-aos-delay="120">
        Data & AI <span className="hero__dot">·</span>{" "}
        <RotatingRole words={profile.roles} />
      </p>
      <p className="hero__tagline" data-aos="fade-up" data-aos-delay="180">
        {profile.tagline}
      </p>
      <div className="hero__cta" data-aos="fade-up" data-aos-delay="240">
        <a href="#contact" className="btn">
          Get in touch <FiArrowUpRight />
        </a>
        <a href="#experience" className="btn btn--ghost">
          See my work <FiArrowDownRight />
        </a>
      </div>

      <ul className="toolbelt" aria-label="Core tools" data-aos="fade-up" data-aos-delay="300">
        {tools.map(({ Icon, label }) => (
          <li key={label} className="toolbelt__item" tabIndex={0}>
            <Icon aria-hidden="true" />
            <span className="toolbelt__label">{label}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...marquee, ...marquee].map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  </section>
);
