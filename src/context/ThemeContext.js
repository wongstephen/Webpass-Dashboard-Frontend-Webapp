import React, { createContext, useState } from "react";

export const ThemeContext = createContext("");

export const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  if (isLight) {
    document.querySelector("html").classList.remove("dark");
    localStorage.setItem("theme", "light".toString());
  } else {
    document.querySelector("html").classList.add("dark");
    localStorage.setItem("theme", "dark".toString());
  }

  return (
    <ThemeContext.Provider value={{ isLight, setIsLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
