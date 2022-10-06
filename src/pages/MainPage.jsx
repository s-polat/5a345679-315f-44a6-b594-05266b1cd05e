import React from "react";
import { useContext } from "react";
import Card from "../components/Card";
import { DataStore } from "../DataStore";

function MainPage() {
  const { events, setEvents } = useContext(DataStore);
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      
        {events?.map((event) => {
          return(
            <div>

                <Card  
                key={event._id}
                eventImg={event?.flyerFront}
                title={event.title}
                location={event.venue.direction}
                locationName={event.venue.name}
                startTime={event.startTime}
                endTime={event.endTime}/>
            </div>

          )}
            
           
        )}
    </div>
  );
}

export default MainPage;
