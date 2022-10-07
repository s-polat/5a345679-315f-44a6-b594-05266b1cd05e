/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "../DataStore";
import '../styles/navbarStyle/navbar.css'
import { faLight, faCalendarDays } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const { events, setEvents, selectedEvent, setSelectedEvent } =
    useContext(DataStore);

  return (
    <div>
      <nav class="navbar navbar-expand bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            My Events
          </a>

          <form class="d-flex" role="search">
            <input
              class="form-control me-2 rounded-pill border-0 shadow-sm px-4"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success rounded-pill" type="submit">
              Search
            </button>
          </form>

          <a className="nav-link cart" href="#">
                <FontAwesomeIcon className="eventicon" icon={ faCalendarDays} />
            <span>
              {selectedEvent.length > 0 ? (
                  <span className="badge rounded-pill bg-success bdg">
                  {selectedEvent.length}
                </span>
              ) : null}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
