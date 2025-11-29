import CountryCard from "./CountryCard";

function CountryGrid({ countriesList }) {
  return (
    <section aria-label="Country results">
      <div
        role="list"
        className="grid gap-8 md:gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-12 mx-auto"
      >
        {countriesList.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </section>
  );
}

export default CountryGrid;
