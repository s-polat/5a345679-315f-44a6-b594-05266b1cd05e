import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { DataStore } from "./DataStore";
import MainPage from "./pages/MainPage";
import MyEventsPage from "./pages/MyEventsPage";

function App() {

  const [ events, setEvents ] = useState([]);
  const [ selectedEvent, setSelectedEvent ] = useState([]);


  const getEvents = async () => {
 const result = await fetch(
    `https://tlv-events-app.herokuapp.com/events/uk/london`
  ).then((data) => data.json());
  setEvents(result);}


  useEffect(() => {
    getEvents();
  }, []);
  return (
    <DataStore.Provider value={{events, setEvents, selectedEvent, setSelectedEvent}} >
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<MainPage/>} />
          <Route path="/events" exact element={<MyEventsPage/>} />
        </Routes>
      </div>
    </DataStore.Provider>
  );
}

export default App;
