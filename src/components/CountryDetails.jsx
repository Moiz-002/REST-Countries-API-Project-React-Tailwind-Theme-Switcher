import React from "react";
import { Link } from "react-router-dom";
import data from "/data.json";
import { FiArrowLeft } from "react-icons/fi";

const CountryDetails = ({ country }) => {
  const borderCountries = country.borders?.map((code) =>
    data.find((item) => item.alpha3Code === code)
  );

  return (
    <article
      aria-label={`Details about ${country.name}`}
      className="min-h-screen text-text px-6 lg:px-20 py-10"
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-12">

        <Link
          to="/"
          className="flex items-center gap-2 shadow-md w-fit px-6 py-2 rounded-md bg-elements text-text hover:opacity-80 transition"
          aria-label="Go back to home"
        >
          <FiArrowLeft size={18} aria-hidden="true" />
          Back
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-center gap-16">

          <img
            src={country.flags?.svg || country.flags?.png}
            alt={`Flag of ${country.name}`}
            className="w-full max-w-[600px] rounded-md shadow-md"
          />

          <div className="flex flex-col gap-10 w-full">
            <h1 className="font-extrabold text-3xl lg:text-4xl">{country.name}</h1>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
              {/* column 1 */}
              <div className="flex flex-col gap-2">
                <p><span className="font-semibold">Native Name:</span> {country.nativeName}</p>
                <p><span className="font-semibold">Population:</span> {country.population?.toLocaleString()}</p>
                <p><span className="font-semibold">Region:</span> {country.region}</p>
                <p><span className="font-semibold">Sub Region:</span> {country.subregion}</p>
                <p><span className="font-semibold">Capital:</span> {country.capital}</p>
              </div>

              {/* column 2 */}
              <div className="flex flex-col gap-2">
                <p><span className="font-semibold">Top Level Domain:</span> {country.topLevelDomain?.join(", ")}</p>
                <p><span className="font-semibold">Currencies:</span> {country.currencies?.map((c) => c.name).join(", ")}</p>
                <p><span className="font-semibold">Languages:</span> {country.languages?.map((l) => l.name).join(", ")}</p>
              </div>
            </div>

            {/* Border Countries */}
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Border Countries:</p>
              <div className="flex flex-wrap gap-3">
                {borderCountries?.length ? (
                  borderCountries.map(
                    (ct) =>
                      ct && (
                        <Link
                          key={ct.alpha3Code}
                          to={`/country/${ct.name}`}
                          aria-label={`View details about ${ct.name}`}
                          className="px-4 py-1 shadow-md rounded-md bg-elements text-sm hover:opacity-80 transition"
                        >
                          {ct.name}
                        </Link>
                      )
                  )
                ) : (
                  <span className="opacity-70">None</span>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
};

export default CountryDetails;
