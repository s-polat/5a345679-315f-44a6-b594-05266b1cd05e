/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { json, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { DataStore } from "./DataStore";
import MainPage from "./pages/MainPage";
import MyEventsPage from "./pages/MyEventsPage";
import SearchedEventsPage from "./pages/SearchedEventsPage";
import countries from "./assets/countries/countries";
import DateAndCountryBar from "./components/DateAndCountryBar";
function App() {
  const [ events, setEvents ] = useState([]);
  const [ selectedEvent, setSelectedEvent ] = useState([]);
  const [ searchState, setSearchState ] = useState("");
  const [ country, setCountry ] = useState([{"name":"United Kingdom","code":"GB", "city":"london"}]);
  const [countryCode, setCountryCode] = useState("uk");




  function custom_sort(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }

  const getEvents = async () => {
    setCountryCode(country[0].code === "GB" ? "UK" : country[0].code);
      const URL =  `https://tlv-events-app.herokuapp.com/events/${countryCode.toLowerCase()}/${country[0].city.toLowerCase()}`
      const result = await fetch( URL )
      .then((data) => data.json())
      .then((data) => data.sort(custom_sort));

    setEvents(result);
  };

  const searchedEvents = events.filter(
    (ev) => ev.title.toLowerCase().indexOf(searchState.toLowerCase()) !== -1
  );
  console.log(searchedEvents);

  useEffect(() => {
    getEvents();
  }, [country, countryCode]);

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
        setCountry
      }}
    >
      <div>
        <Navbar />
        <DateAndCountryBar/>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/events" exact element={<MyEventsPage />} />
          <Route path="/search" exact element={<SearchedEventsPage />} />
        </Routes>
      </div>
    </DataStore.Provider>
  );
}

export default App;
