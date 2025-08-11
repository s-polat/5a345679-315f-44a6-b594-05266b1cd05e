import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Card from "../components/Card";
import { DataStore } from "../DataStore";
import dog from "../assets/images/dog.jpg";
import "../styles/mainPageStyle/mainPage.css";
import Loader from "../components/Loader";

function MainPage() {
  const {
    events,
    setEvents,
    selectedEvent,
    setSelectedEvent,
    searchedEvents,
    isLoading,
  } = useContext(DataStore);
  const [stickyDate, setStickyDate] = useState("");

  const clickHandle = (event) => {
    events.filter(
      (ev) =>
        ev.id === event.id && setSelectedEvent([...selectedEvent, event])
    );
    const newEvents = events.filter((ev) => ev.id !== event.id);
    setEvents(newEvents);
  };
  let date;

 useEffect(() => {
  let threshold = 1;
  let options = { threshold };
  let targets = document?.querySelectorAll(".observe-item");
  
  let observer;
  if (searchedEvents.length > 0) {
    let callback = (entries) => {
      // Sadece ekranda görünen (isIntersecting) ilk entry'yi bul
      const visibleEntry = entries.find(entry => entry.isIntersecting);
      if (visibleEntry) {
        const dateAttr = visibleEntry.target.getAttribute("date");
        if (dateAttr) {
          setStickyDate(new Date(dateAttr.split("T")[0]).toDateString());
        }
      }
    };
    observer = new IntersectionObserver(callback, options);
    Array.from(targets)
      .reverse()
      .forEach((item) => observer.observe(item));
  }
  return () => {
    targets.forEach((item) => observer.unobserve(item));
  };
}, [searchedEvents]);
  return (
    <div className="container">
      {isLoading ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <>
          <div className="sticky-date">
            {searchedEvents.length > 0 && stickyDate}
          </div>
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="search-page">
              {searchedEvents?.length === 0 ? (
                <div className="container row-12  d-flex align-items-center justify-content-center shadow">
                  <div className="col-lg-3">
                    <img src={dog} className="dog" alt="dog" />
                  </div>
                  <div className="col-5 dogText">
                    <h2>
                      Ooo what a pity... <br /> The event was not found
                    </h2>
                  </div>
                </div>
              ) : (
                <div className="container d-flex flex-row flex-wrap justify-content-center">
                  {searchedEvents?.map((event) => {
                    
                    return (
                      <div
                        key={event.id}
                        className={date !== event.dates.start.localDate ? "observe-item" : ""}
                        date={event.dates.start.localDate}
                      >
                        <script>
                          if( date !== event.dates.start.localDate) {(date = event.dates.start.localDate)}
                        </script>
                        <Card
                          id={event.id}
                          eventImg={event?.images[0]?.url}
                          title={event.name}
                          ticketUrl={event.url}
                          address={`${event._embedded.venues[0].address.line1} / ${event._embedded.venues[0].city.name}`}
                          locationName={event._embedded.venues[0].name}
                          startTime={event.dates.start.localTime}
                          startDate={event.dates.start.localDate}
                          onClick={() => clickHandle(event)}
                          buttonSymbol={<FontAwesomeIcon icon={faPlus} />}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MainPage;
