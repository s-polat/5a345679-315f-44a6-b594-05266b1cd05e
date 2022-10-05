import { useEffect, useState } from "react";
import { DataStore } from "./DataStore";
import MainPage from "./pages/MainPage";

function App() {

  const [ events, setEvents ] = useState([]);


  const getEvents = async () => {
 const result = await fetch(
    `https://tlv-events-app.herokuapp.com/events/uk/london`
  ).then((data) => data.json());
  setEvents(result);}


  useEffect(() => {
    getEvents();
  }, []);
  return (
    <DataStore.Provider value={{events, setEvents}} >
      <div>
        <h1>Events</h1>
        <MainPage/>
      </div>
    </DataStore.Provider>
  );
}

export default App;
