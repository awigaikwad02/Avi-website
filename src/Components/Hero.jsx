import React from "react";
import Typewriter from "typewriter-effect";
import { FiArrowDown, FiCalendar, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { DataField } from "./DataField";
import { profile } from "../data";
import profilePic from "../assets/Photo_fw14_056.png";

export const Hero = () => (
  <section className="hero" id="top">
    <DataField />
    <div className="container hero__inner">
      <div className="hero__text">
        <p className="hero__status" data-aos="fade-up">
          <span className="pulse" /> {profile.title} · {profile.company}
        </p>
        <h1 data-aos="fade-up" data-aos-delay="100">
          Hi, I'm <span className="gradient-text">{profile.firstName}</span>.
        </h1>
        <div className="hero__type" data-aos="fade-up" data-aos-delay="200">
          <Typewriter
            options={{
              strings: profile.roles,
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              delay: 50,
            }}
          />
        </div>
        <p className="hero__tagline" data-aos="fade-up" data-aos-delay="300">
          {profile.tagline}
        </p>
        <div className="hero__cta" data-aos="fade-up" data-aos-delay="400">
          <a href="#experience" className="btn">
            View my work
          </a>
          <a
            href={profile.calendly}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            <FiCalendar /> Book a call
          </a>
        </div>
        <div className="hero__meta" data-aos="fade-up" data-aos-delay="500">
          <span>
            <FiMapPin /> {profile.location}
          </span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="hero__photo" data-aos="zoom-in" data-aos-delay="200">
        <div className="hero__ring" />
        <img src={profilePic} alt={profile.name} />
        <div className="hero__chip hero__chip--a">$100M+ pipeline</div>
        <div className="hero__chip hero__chip--b">10K+ projects</div>
      </div>
    </div>
    <a href="#about" className="hero__scroll" aria-label="Scroll to about">
      <FiArrowDown />
    </a>
  </section>
);
