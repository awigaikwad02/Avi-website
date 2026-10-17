import React from "react";
import Typewriter from "typewriter-effect";
import { FiArrowDownRight, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { profile, skillCategories } from "../data";
import { prefersReducedMotion } from "../hooks/useInView";
import profilePic from "../assets/profile.jpg";

const marquee = skillCategories.flatMap((c) => c.skills.map((s) => s.name));

export const Hero = () => {
  const cardRef = React.useRef(null);

  // Photo card tilts toward the cursor.
  const onMove = (e) => {
    if (prefersReducedMotion()) return;
    const el = cardRef.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${-y * 8}deg`);
    el.style.setProperty("--ry", `${x * 10}deg`);
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = cardRef.current;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__status" data-aos="fade-up">
            <span className="pulse" /> {profile.title} @ Honeywell
          </p>
          <h1 className="hero__title" data-aos="fade-up" data-aos-delay="80">
            Data & AI,
            <br />
            <span className="metal">built for growth.</span>
          </h1>
          <div className="hero__type" data-aos="fade-up" data-aos-delay="160">
            <span className="mono">&gt;</span>
            <Typewriter
              options={{
                strings: profile.roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 55,
              }}
            />
          </div>
          <p className="hero__tagline" data-aos="fade-up" data-aos-delay="240">
            {profile.tagline}
          </p>
          <div className="hero__cta" data-aos="fade-up" data-aos-delay="320">
            <a href="#contact" className="btn">
              Get in touch <FiArrowUpRight />
            </a>
            <a href="#experience" className="btn btn--ghost">
              See my work <FiArrowDownRight />
            </a>
          </div>
        </div>

        <div
          className="hero__card"
          ref={cardRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={profilePic} alt={profile.name} />
          <div className="hero__glare" />
          <div className="hero__card-foot">
            <div>
              <strong>{profile.name}</strong>
              <span>{profile.company}</span>
            </div>
            <span className="hero__loc">
              <FiMapPin /> {profile.location}
            </span>
          </div>
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
};
