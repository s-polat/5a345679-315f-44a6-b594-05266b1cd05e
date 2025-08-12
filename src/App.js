/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { DataStore } from "./DataStore";
import MainPage from "./pages/MainPage";
import MyEventsPage from "./pages/MyEventsPage";
import CountryBar from "./components/CountryBar";

function App() {
  const apiKey = "6UazPanKfbd28FBWsT7Eq70JQGyTlY1S";
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [searchState, setSearchState] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState([
    { name: "United Kingdom", code: "UK", city: "london" },
  ]);

  const getEvents = async () => {
    try {
      setIsLoading(true);
      const countryCode = country[0]?.code.toLowerCase() === "de" ? "de" : "uk";
      const URL = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&city=${country[0].city}&apikey=${apiKey}`;
      const result = await fetch(URL)
        .then((data) => data.json())
        .then((data) => data._embedded.events);
          
      setEvents(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const searchedEvents = events.filter(
    (ev) => ev.name.toLowerCase().indexOf(searchState.toLowerCase()) !== -1
  );
  useEffect(() => {
    getEvents();
  }, [country]);

  return (
    <DataStore.Provider
      value={{
        events,
        setEvents,
        selectedEvent,
        setSelectedEvent,
        searchState,
        setSearchState,
        searchedEvents,
        country,
        setCountry,
        isLoading,
      }}
    >
      <div>
        <Navbar />
        <CountryBar />
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/events" exact element={<MyEventsPage />} />
        </Routes>
      </div>
    </DataStore.Provider>
  );
}

export default App;
