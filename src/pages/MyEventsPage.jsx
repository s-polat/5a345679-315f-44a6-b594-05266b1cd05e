import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Card from "../components/Card";
import { DataStore } from "../DataStore";
import "../styles/myEventsPageStyle/myEvent.css";

function MyEventsPage() {
  const { events, setEvents, selectedEvent, setSelectedEvent } =
    useContext(DataStore);

  const clickHandle = (event) => {
    selectedEvent.filter(
      (ev) => ev.id === event.id && setEvents([...events, event])
    );
    const newSelectedEvent = selectedEvent.filter((ev) => ev.id !== event.id);
    setSelectedEvent(newSelectedEvent);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center my-event">
      {selectedEvent.length > 0 ? (
        selectedEvent.map((event) => {
          return (
            <div key={event.id}>
              <Card
                id={event.id}
                          eventImg={event?.images[0]?.url}
                          title={event.name}
                          ticketUrl={event.url}
                          address={event._embedded.venues[0].address.line1}
                          locationName={event._embedded.venues[0].name}
                          startTime={event.dates.start.localTime}
                          startDate={event.dates.start.localDate}
                onClick={() => clickHandle(event)}
                buttonSymbol={<FontAwesomeIcon icon={faMinus} />}
              />
            </div>
          );
        })
      ) : (
        <div className="d-flex justify-content-center align-items-center shadow no-content">
          <h1>There is no event in your list</h1>
        </div>
      )}
    </div>
  );
}

export default MyEventsPage;
