import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Card from "../components/Card";
import { DataStore } from "../DataStore";
import '../styles/myEventsPageStyle/myEvent.css'

function MyEventsPage() {
  const { events, setEvents, selectedEvent, setSelectedEvent } =
    useContext(DataStore);

    const clickHandle = (event) => {
        selectedEvent.filter((ev) => ev._id === event._id && setEvents([...events, event]));
        const newSelectedEvent = selectedEvent.filter((ev) => ev._id !== event._id);
        setSelectedEvent(newSelectedEvent);
    };


  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {selectedEvent.length > 0 ? selectedEvent.map((event) => {
        return (
          <div key={event._id}>
            <Card
              
              id={event._id}
              eventImg={event?.flyerFront}
              title={event.title}
              location={event.venue.direction}
              locationName={event.venue.name}
              startTime={event.startTime}
              endTime={event.endTime}
              onClick={() => clickHandle(event)}
              buttonSymbol={<FontAwesomeIcon icon={faMinus} />}
            />
          </div>
        );
      } ) : 
        <div className="d-flex justify-content-center align-items-center no-content">
            <h1>There is no event in your list</h1>
        </div>
      }
    </div>
  );
}

export default MyEventsPage;
