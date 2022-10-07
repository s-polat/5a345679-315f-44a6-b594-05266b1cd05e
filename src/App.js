import { useEffect, useState } from "react";
import { DataStore } from "./DataStore";
import MainPage from "./pages/MainPage";

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
        
        <MainPage/>
      </div>
    </DataStore.Provider>
  );
}

export default App;
