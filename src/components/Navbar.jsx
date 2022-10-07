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
          <Link class="navbar-brand" to="/" preventScrollReset={true}>
            My Events
          </Link>

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

          <Link className="nav-link cart" to="/events" preventScrollReset={true}>
                <FontAwesomeIcon className="eventicon" icon={ faCalendarDays} />
            <span>
              {selectedEvent.length > 0 ? (
                  <span className="badge rounded-pill bg-success bdg">
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
