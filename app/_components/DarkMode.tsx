'use client';

import { FaMoon, FaSun } from "react-icons/fa6";
import { useDarkMode } from "../_contexts/DarkModeContext";

function DarkMode() {
  const {isDarkMode, toggleDarkMode} = useDarkMode();
  return (
    <button className="text-xl" onClick={toggleDarkMode}>
      {isDarkMode?<FaSun />:<FaMoon />}
    </button>
  );
}

export default DarkMode;
