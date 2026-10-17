import React from "react";
import {
  FiCalendar,
  FiCheck,
  FiCopy,
  FiFileText,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { SectionTitle } from "./About";
import { profile } from "../data";
import { trackSpotlight } from "../hooks/useInView";

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

  const cards = [
    { icon: FiLinkedin, label: "LinkedIn", value: "Connect with me", href: profile.linkedin },
    { icon: FiPhone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: FiCalendar, label: "Calendly", value: "Book an intro call", href: profile.calendly },
    { icon: FiFileText, label: "Resume", value: "View PDF", href: profile.resume },
  ];

  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <SectionTitle kicker="Contact" title="Let's build something with data" />
        <div className="contact">
          <div className="card contact__main spotlight" onMouseMove={trackSpotlight} data-aos="fade-up">
            <p>
              Whether it's a role, a project, or just a conversation about
              analytics and AI, my inbox is open.
            </p>
            <div className="contact__email">
              <a href={`mailto:${profile.email}`} className="btn">
                <FiMail /> Say hello
              </a>
              <button type="button" className="btn btn--ghost" onClick={copyEmail}>
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? "Copied!" : profile.email}
              </button>
            </div>
          </div>
          <div className="contact__grid">
            {cards.map(({ icon: Icon, label, value, href }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card contact__card spotlight"
                onMouseMove={trackSpotlight}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <Icon />
                <span className="contact__label">{label}</span>
                <span>{value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
