import React from "react";
import data from "/data.json";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import CountryDetails from "../components/CountryDetails";
import { FiArrowLeft } from "react-icons/fi";

const CountryPage = () => {
  const { countryName } = useParams();
  console.log(countryName);
  const countrySelected = data.find((item) => item.name === countryName);
  console.log(countrySelected);
  return (
    <div className="bg-bg flex flex-col min-h-screen items-center">
      <Header />
      <CountryDetails country={countrySelected} />
    </div>
  );
};

export default CountryPage;
