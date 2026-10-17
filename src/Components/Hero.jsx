import React from "react";
import Typewriter from "typewriter-effect";
import { FiChevronRight, FiMapPin } from "react-icons/fi";
import { profile } from "../data";
import { useScrollProgress } from "../hooks/useScrollProgress";
import profilePic from "../assets/profile.jpg";

export const Hero = () => {
  // Photo grows to full size as it scrolls into view, Apple product-page style.
  const [photoRef, p] = useScrollProgress({ start: 1, end: 0.35 });

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <p className="hero__eyebrow" data-aos="fade-up">
          {profile.name}
        </p>
        <h1 className="hero__title" data-aos="fade-up" data-aos-delay="80">
          {profile.headline}
        </h1>
        <div className="hero__type" data-aos="fade-up" data-aos-delay="160">
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
            Get in touch
          </a>
          <a href="#experience" className="link-arrow">
            See my work <FiChevronRight />
          </a>
        </div>
      </div>

      <div className="container">
        <figure
          className="hero__photo"
          ref={photoRef}
          style={{
            transform: `scale(${0.86 + 0.14 * p})`,
            borderRadius: `${40 - 12 * p}px`,
          }}
        >
          <img src={profilePic} alt={profile.name} />
          <figcaption className="hero__badge">
            <span className="pulse" />
            <span>
              <strong>{profile.title}</strong>
              <br />
              {profile.company}
            </span>
          </figcaption>
          <span className="hero__loc">
            <FiMapPin /> {profile.location}
          </span>
        </figure>
      </div>
    </section>
  );
};
