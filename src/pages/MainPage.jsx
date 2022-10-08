import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import Card from "../components/Card";
import { DataStore } from "../DataStore";

function MainPage() {
  const { events, setEvents, selectedEvent, setSelectedEvent } =
    useContext(DataStore);

  const clickHandle = (event) => {
    events.filter(
      (ev) =>
        ev._id === event._id && setSelectedEvent([...selectedEvent, event])
    );
    const newEvents = events.filter((ev) => ev._id !== event._id);
    setEvents(newEvents);
  };
  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {events?.map((event) => {
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
                buttonSymbol={<FontAwesomeIcon icon={faPlus} />}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
