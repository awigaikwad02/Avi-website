import React from "react";
import {
  FiCalendar,
  FiCheck,
  FiChevronRight,
  FiCopy,
  FiLinkedin,
  FiPhone,
} from "react-icons/fi";
import { profile } from "../data";

export const Contact = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const links = [
    { icon: FiLinkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: FiCalendar, label: "Book a call", href: profile.calendly },
    { icon: FiPhone, label: profile.phone, href: profile.phoneHref },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <span className="section__kicker" data-aos="fade-up">
          <span className="mono">08</span> Contact
        </span>
        <h2 className="contact__title" data-aos="fade-up">
          Let's talk <span className="hl">growth.</span>
        </h2>
        <p className="contact__text" data-aos="fade-up">
          Open to roles across data & analytics engineering, applied AI,
          commercial analytics and go-to-market strategy - or just a good
          conversation.
        </p>
        <div className="contact__cta" data-aos="fade-up">
          <a href={`mailto:${profile.email}`} className="btn btn--large">
            Email me
          </a>
          <button type="button" className="link-arrow" onClick={copyEmail}>
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? "Copied to clipboard" : profile.email}
          </button>
        </div>
        <div className="contact__links" data-aos="fade-up">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="tile contact__link"
            >
              <Icon />
              <span>{label}</span>
              <FiChevronRight className="contact__chev" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
