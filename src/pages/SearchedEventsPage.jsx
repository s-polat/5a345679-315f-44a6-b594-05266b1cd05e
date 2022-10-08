import React from 'react'
import Navbar from '../components/Navbar'
import dog from '../assets/images/dog.jpg'
import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { DataStore } from '../DataStore'
import '../styles/searchedEventsPageStyle/searchedEvents.css'

function SearchedEventsPage() {
  const{events, setEvents, selectedEvent, setSelectedEvent, searchedEvents} = useContext(DataStore)

  console.log("searchedEvents", searchedEvents);
  const clickHandle = (event) => {
    events.filter(
      (ev) =>
        ev._id === event._id && setSelectedEvent([...selectedEvent, event])
    );
    const newEvents = events.filter((ev) => ev._id !== event._id);
    setEvents(newEvents);
  };
  return (
    <div>
      <div>
        {searchedEvents?.length === 0 ? (
          <div className="container row-12  d-flex align-items-center justify-content-center shadow my-5" >
            <div className="col-lg-3"><img src={dog} className="dog" alt="dog" /></div>
            <div className="col-5 dogText"><h2 >Ooo what a pity... <br /> The event was not found</h2></div>
          </div>
        ) : (
          <div className="container d-flex flex-row flex-wrap justify-content-center">
            {searchedEvents?.map((event) => {
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
            )}
          )}
        </div>
      )}
      </div>
    </div>
  )
}

export default SearchedEventsPage