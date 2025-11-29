import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <article
      role="listitem"
      aria-label={`Country card for ${country.name}`}
      className="bg-elements text-text shadow-md rounded-lg overflow-hidden max-w-96"
    >
      <img
        src={country.flags?.svg}
        alt={`Flag of ${country.name}`}
        className="w-full h-40 object-cover"
      />

      <div className="p-6 flex flex-col gap-4">
        <Link
          to={`/country/${country.name}`}
          className="font-extrabold text-lg hover:underline focus:underline"
        >
          {country.name}
        </Link>

        <div className="flex flex-col gap-1 text-sm">
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {country.population?.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital || "N/A"}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CountryCard;
