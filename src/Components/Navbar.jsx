import React from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { ThemeContext } from "../Context/theme";

const links = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section occupies the middle of the viewport.
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    [...links, { id: "contact" }].forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__bar">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark">AG</span>
        </a>

        <nav className="nav__links">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggeltheme}
            aria-label="Toggle theme"
          >
            {themename === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href="#contact"
            className={`btn btn--small nav__cta ${active === "contact" ? "is-active" : ""}`}
            onClick={() => setOpen(false)}
          >
            Get in touch
          </a>
          <button
            type="button"
            className="icon-btn nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};
