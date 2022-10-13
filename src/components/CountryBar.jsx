import React from "react";
import { useContext } from "react";
import countries from "../assets/countries/countries";
import { DataStore } from "../DataStore";
import "../styles/navbarStyle/navbar.css";

function CountryBar() {
  const { country, setCountry } = useContext(DataStore);
  const handleCountry = (e) => {
    const newCountry = e.target.value;
    const countryObj = countries.filter(
      (c) => c.city.toLowerCase() === newCountry.toLowerCase()
    );
    setCountry(countryObj);
  };

  return (
    <div className="container-fluid bg-light date-fixed" id="observe-root-item">
      <div className="d-flex justify-content-center">
        <select
          className="form-select rounded-pill"
          aria-label="Default select example"
          defaultValue={'DEFAULT'}
          style={{ width: "13rem" }}
          onChange={handleCountry}
        >
          <option disabled value="DEFAULT">
            Select City...
          </option>
          {countries.map((country) => (
            <option key={country.name} value={country.city}>
              {country.city}
            </option>
          ))}
        </select>
        <img
          src={`https://flagcdn.com/w40/${
            country[0]?.code.toLowerCase() === "de" ? "de" : "gb"
          }.jpg`}
          alt="flags"
          className="rounded-pill ms-2 "
        />
      </div>
    </div>
  );
}

export default CountryBar;
