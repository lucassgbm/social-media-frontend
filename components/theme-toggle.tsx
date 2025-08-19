"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SunIcon from "./icons/sun";
import MoonIcon from "./icons/moon";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita erro de hidratação
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:opacity-80 transition cursor-pointer"
    >
      {theme === "dark" ? <SunIcon className="dark:text-white" /> : <MoonIcon />}
    </button>
  );
}
