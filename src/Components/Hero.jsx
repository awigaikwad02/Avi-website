import React from "react";
import { FiArrowDownRight, FiArrowUpRight, FiDatabase, FiMapPin } from "react-icons/fi";
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
import { Magnetic } from "./Magnetic";
import { ScrambleText } from "./ScrambleText";
import profilePic from "../assets/profile.jpg";

const marquee = skillCategories.flatMap((c) => c.skills.map((s) => s.name));

const orbit = [
  { Icon: SiPowerbi, label: "Power BI" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiSnowflake, label: "Snowflake" },
  { Icon: SiSalesforce, label: "Salesforce" },
  { Icon: SiOpenai, label: "OpenAI" },
  { Icon: SiTableau, label: "Tableau" },
  { Icon: FiDatabase, label: "SQL" },
  { Icon: SiMicrosoftexcel, label: "Excel" },
];

export const Hero = () => (
  <section className="hero" id="top">
    <div className="hero__grid" aria-hidden="true" />
    <div className="container hero__inner">
      <div className="hero__visual" data-aos="zoom-in">
        <div className="orbit" aria-hidden="true">
          {orbit.map(({ Icon, label }, i) => (
            <span
              className="orbit__item"
              key={label}
              style={{ "--angle": `${(360 / orbit.length) * i}deg` }}
            >
              <span className="orbit__icon">
                <Icon />
                <em>{label}</em>
              </span>
            </span>
          ))}
        </div>
        <div className="hero__photo">
          <img src={profilePic} alt={profile.name} />
        </div>
      </div>

      <p className="hero__status" data-aos="fade-up">
        <span className="pulse" /> {profile.title} @ Honeywell ·{" "}
        <FiMapPin /> {profile.location}
      </p>
      <h1 className="hero__title" data-aos="fade-up" data-aos-delay="80">
        {profile.name}
      </h1>
      <p className="hero__role" data-aos="fade-up" data-aos-delay="140">
        <span className="metal">Data & AI</span> ×{" "}
        <ScrambleText words={profile.roles} />
      </p>
      <p className="hero__tagline" data-aos="fade-up" data-aos-delay="200">
        {profile.tagline}
      </p>
      <div className="hero__cta" data-aos="fade-up" data-aos-delay="260">
        <Magnetic>
          <a href="#contact" className="btn">
            Get in touch <FiArrowUpRight />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#experience" className="btn btn--ghost">
            See my work <FiArrowDownRight />
          </a>
        </Magnetic>
      </div>
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
