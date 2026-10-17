import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data";

export const Footer = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container footer__inner">
          <span>
            Copyright © {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </span>
          <span>
            {profile.title} · {profile.company} · {profile.location}
          </span>
        </div>
      </footer>
      <a
        href="#top"
        className={`to-top ${show ? "is-visible" : ""}`}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </a>
    </>
  );
};
