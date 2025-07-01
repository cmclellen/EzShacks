"use client";

import { FaMoon, FaSun } from "react-icons/fa6";
import { useDarkMode } from "../_contexts/DarkModeContext";

type DarkModeProps = {};

function DarkMode(_props: DarkModeProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      className="text-xl grid"
      onClick={toggleDarkMode}
      suppressHydrationWarning
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default DarkMode;
