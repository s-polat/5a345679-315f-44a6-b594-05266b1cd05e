import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { DataStore } from "./DataStore";
import MainPage from "./pages/MainPage";
import MyEventsPage from "./pages/MyEventsPage";
import SearchedEventsPage from "./pages/SearchedEventsPage";

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [searchState, setSearchState] = useState("");
 const [newSearchState, setNewSearchState] = useState("")

 function custom_sort(a, b) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

  const getEvents = async () => {
    const result = await fetch(
      `https://tlv-events-app.herokuapp.com/events/uk/london`
    ).then((data) => data.json()).then((data) => data.sort(custom_sort)); 
    
    setEvents(result);
  };
 





  const searchedEvents = events.filter(
    (ev) => ev.title.toLowerCase().indexOf(newSearchState.toLowerCase()) !== -1
  );
  console.log(searchedEvents);

  useEffect(() => {
    getEvents();
  }, []);



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
        newSearchState,
        setNewSearchState
      }}
    >
      <div>
        <Navbar />
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
