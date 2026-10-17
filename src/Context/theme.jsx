import React from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

const getInitialTheme = () => {
  try {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {
    // storage unavailable; fall back to the default dark theme
  }
  return "dark";
};

const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = React.useState(getInitialTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = themename;
    try {
      window.localStorage.setItem("theme", themename);
    } catch (e) {
      // ignore
    }
  }, [themename]);

  const toggeltheme = () =>
    setthemename((t) => (t === "light" ? "dark" : "light"));

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
