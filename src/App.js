import { useState } from "react";
import { DataStore } from "./DataStore";

function App() {

  const [ events, setEvents ] = useState([]);


  const getEvents = async () => {
 const result = await fetch(
    `https://tlv-events-app.herokuapp.com/events/uk/london`
  ).then((data) => data.json());
  setEvents(result);}
  return (
    <DataStore.Provider>
      <div>
        <h1>Events</h1>
        <button onClick={getEvents}>Get Events</button>
        <ul>
          {events?.map((event) => (
            <li key={event.id}>
              <a href={event.venue.direction}>
              {`${event.venue.name} - ${event.artists[0]?.name}`}
              </a>
              </li>
          ))}
        </ul>
      </div>
    </DataStore.Provider>
  );
}

export default App;
