/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataStore } from "../DataStore";
import '../styles/navbarStyle/navbar.css'
import {  faCalendarDays } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const [currentSearch, setCurrentSearch] = useState("");
  const { selectedEvent, searchState, setSearchState, } = useContext(DataStore);
  const navigate = useNavigate();
  const submitHandle = (e) => {
    console.log('searchState',searchState)
    e.preventDefault();
    setSearchState(currentSearch)
    setCurrentSearch("")
    navigate('/search')
    } 


  return (
    <div>
      <nav className="navbar navbar-expand bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/" preventScrollReset={true}>
            My Events
          </Link>

          <form className="d-flex"  onSubmit={submitHandle} >
            <input
              className="form-control me-2 rounded-pill border-0 shadow-sm px-4"
              value={currentSearch}
              placeholder="Search"
              aria-label="Search"
              onChange={(e) =>{ setCurrentSearch(e.target.value) }}
            />
            
            <button className="btn btn-outline-success rounded-pill" type="submit">
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
