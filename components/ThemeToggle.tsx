"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");

    if (saved === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;

    setDark(next);

    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      type="button"
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}
