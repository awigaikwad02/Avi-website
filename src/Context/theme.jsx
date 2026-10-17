import React from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

// public/index.html applies the same logic before React loads, so there is no flash.
const getInitialTheme = () => {
  const preset = document.documentElement.dataset.theme;
  if (preset === "light" || preset === "dark") return preset;
  try {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {
    // storage unavailable; fall back to the system preference
  }
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = React.useState(getInitialTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = themename;
  }, [themename]);

  const toggeltheme = () => {
    const next = themename === "light" ? "dark" : "light";
    // Enable colour transitions only while switching, so hovers stay snappy.
    const root = document.documentElement;
    root.classList.add("theme-switching");
    window.setTimeout(() => root.classList.remove("theme-switching"), 220);
    try {
      window.localStorage.setItem("theme", next);
    } catch (e) {
      // ignore
    }
    setthemename(next);
  };

  return (
    <ThemeContext.Provider value={[{ themename, toggeltheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
