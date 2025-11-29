import "./index.css";
import data from '/data.json';
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import RegionFilter from "./components/RegionFilter.jsx";
import CountryGrid from "./components/CountryGrid.jsx";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  const filteredData = data.filter((country)=>{
    const matchesRegion = region ? country.region === region : true;
    const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());
    return matchesRegion && matchesSearch;  
  });

  return (
    <div className="bg-bg flex flex-col gap-12 min-h-screen items-center">
      <Header />

      <main className="px-4 flex flex-col max-w-[1280px] w-full mx-auto">
        <section className="flex flex-col md:flex-row justify-between gap-12">
          <SearchBar search={search} setSearch={setSearch}/>
          <RegionFilter region={region} setRegion={setRegion} />
        </section>

        <CountryGrid countriesList={filteredData}/>
      </main>
    </div>
  );
}


export default App;
