import React from "react";
import defaultEventImg from "./../assets/images/default_event_img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Card({key, userImg, title,eventImg, location, locationName, startTime, endTime } ) {
  return (
    <div key={key} className="card m-3 shadow d-flex align-items-center" style={{"width": "18rem"}}>
        <div className="d-flex" style={{ height: "5rem"}}>
            <div>
                <img  src={userImg} className="rounded-circle" alt="user" />
            </div>
            <p>{title}</p>

        </div>
      <img src={eventImg || defaultEventImg } className="img-fluid" style={{ height: "17rem", width:"100%" }} alt="eventImage" />
      <div className="card-body" style={{ width:"100%"}}>
        <div className="mb-3">
            <a href={location} className="text-decoration-none" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="ms-2">{locationName}</span>
            </a>
        </div>
        <p >
          {`Starts: ${startTime || "Not specified"}`}
        </p>
        <p >
          {`Ends: ${endTime || "Not specified"}`}
        </p>
        <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-primary rounded-circle">+</button>
        </div>
       
      </div>
    </div>
  );
}

export default Card;
