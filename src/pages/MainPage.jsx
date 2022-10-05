import React from "react";
import { useContext } from "react";
import { DataStore } from "../DataStore";

function MainPage() {
  const { events, setEvents } = useContext(DataStore);
  return (
    <div>
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
  );
}

export default MainPage;
