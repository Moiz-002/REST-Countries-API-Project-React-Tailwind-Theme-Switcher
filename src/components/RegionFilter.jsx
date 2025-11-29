import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const RegionFilter = ({ region, setRegion }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative max-w-64" aria-label="Filter by region">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="region-list"
        className="bg-elements text-text shadow-md rounded-md px-6 py-4 flex items-center justify-between gap-12 font-medium"
      >
        <span>{region || "Filter by Region"}</span>
        <FiChevronDown
          size={20}
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          id="region-list"
          role="listbox"
          className="absolute mt-2 w-full bg-elements text-text shadow-md rounded-md py-4 z-20"
        >
          {regions.map((reg) => (
            <li
              key={reg}
              role="option"
              aria-selected={region === reg}
              tabIndex={0}
              className="cursor-pointer hover:opacity-70 px-6 py-1"
              onClick={() => setRegion(reg)}
              onKeyDown={(e) => e.key === "Enter" && setRegion(reg)}
            >
              {reg}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default RegionFilter;
