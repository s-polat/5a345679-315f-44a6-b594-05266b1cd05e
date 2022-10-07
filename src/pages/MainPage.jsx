import React from "react";
import { useContext } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { DataStore } from "../DataStore";

function MainPage() {
  const { events, setEvents, selectedEvent, setSelectedEvent } = useContext(DataStore);
 
  const clickHandle = (event) => {
      console.log(event);
    events.filter((ev) => ev._id === event._id && setSelectedEvent([...selectedEvent, event]))
   const newEvents =  events.filter((ev) => ev._id !== event._id  )
    setEvents(newEvents)
  };
  return (
    <div className="container">
      <Navbar />
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {events?.map((event) => {
          return (
            <div >
              <Card
                id={event._id}
                eventImg={event?.flyerFront}
                title={event.title}
                location={event.venue.direction}
                locationName={event.venue.name}
                startTime={event.startTime}
                endTime={event.endTime}
                onClick={()=>clickHandle(event)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
