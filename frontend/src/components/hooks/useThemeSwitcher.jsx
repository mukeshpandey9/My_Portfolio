import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState("");

  const preferDarkQuery = "(prefers-color-scheme: dark)";

  useEffect(() => {
    const userPreference = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPreference) {
        let check = userPreference === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark" || window.matchMedia(preferDarkQuery).matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
  }, []);

  useEffect(() => {
    if (mode === "dark" || window.matchMedia(preferDarkQuery).matches) {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
