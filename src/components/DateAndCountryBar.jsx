import React, { useEffect, useState } from "react";
import { useContext } from "react";
import countries from "../assets/countries/countries";
import { DataStore } from "../DataStore";
import "../styles/navbarStyle/navbar.css";

function DateAndCountryBar() {
  const { country, setCountry } = useContext(DataStore);
  const [currentCountry, setCurrentCountry] = useState("");

  useEffect(() => {
    const newCountry = countries.filter(
      (country) => country.name.toLowerCase() === currentCountry.toLowerCase()
    );

    setCountry(newCountry);
  }, [currentCountry, setCountry]);

  return (
    <div className="container-fluid bg-light date-fixed">
      <div className="d-flex justify-content-center">
        <select
          className="form-select rounded-pill"
          aria-label="Default select example"
          style={{ width: "13rem" }}
          onChange={(e) => setCurrentCountry(e.target.value.toLowerCase())}
        >
          <option selected disabled value="default">
            United Kingdom
          </option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <img
          src={`https://flagcdn.com/w40/${
            country[0]?.code.toLowerCase() || "gb"
          }.jpg`}
          alt="flags"
          className="rounded-pill ms-2 "
        />
      </div>
    </div>
  );
}

export default DateAndCountryBar;
