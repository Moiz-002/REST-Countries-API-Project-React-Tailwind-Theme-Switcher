import React from "react";
import { FiMoon } from "react-icons/fi";
import { useThemeStore } from "../../themeStore";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="bg-elements px-4 py-8 text-text shadow-md w-full">
      <div className="flex justify-between items-center w-full max-w-[1240px] mx-auto">
        <h1 className="font-black text-xl" aria-label="Website Title">
          Where in the world?
        </h1>

        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          aria-pressed={theme === "dark"}
          className="flex items-center gap-3 font-semibold"
        >
          <FiMoon
            size={24}
            aria-hidden="true"
            className={theme === "dark" ? "text-white" : "text-black"}
          />
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
