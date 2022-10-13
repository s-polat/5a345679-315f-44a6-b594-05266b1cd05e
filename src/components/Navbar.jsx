/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataStore } from "../DataStore";
import "../styles/navbarStyle/navbar.css";
import { faCalendarDays, faHouse } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { selectedEvent, setSearchState } = useContext(DataStore);
  const [currentSearch, setCurrentSearch] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    navigate("/");
    e.preventDefault();
    setSearchState(currentSearch);
    setCurrentSearch("");
  };

  const clickHandle = (e) => {
    setCurrentSearch("");
    setSearchState(currentSearch);
  };

  return (
    <div>
      <nav className="navbar navbar-expand bg-light fixed">
        <div className="container ">
          <Link className="navbar-brand" to="/" onClick={clickHandle}>
            <FontAwesomeIcon className="home-icon" icon={faHouse} />
          </Link>

          <form className="d-flex" onSubmit={submitHandle}>
            <input
              className="form-control me-2 rounded-pill border-0 shadow-sm px-4"
              value={currentSearch}
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setCurrentSearch(e.target.value);
              }}
            />
            <button className="src-btn rounded-pill" type="submit">
              Search
            </button>
          </form>

          <Link
            className="nav-link cart"
            to="/events"
            preventScrollReset={true}
          >
            <FontAwesomeIcon className="event-icon" icon={faCalendarDays} />
            <span>
              {selectedEvent.length > 0 ? (
                <span className="badge rounded-pill bg-primary bdg">
                  {selectedEvent.length}
                </span>
              ) : null}
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
