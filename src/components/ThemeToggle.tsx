"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 group"
      aria-label="Alternar tema"
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Moon className="h-6 w-6 text-gray-700 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}