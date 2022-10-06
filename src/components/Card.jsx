import React from "react";
import './card.css';
import defaultEventImg from "./../assets/images/default_event_img.jpg";
import profileFoto from "./../assets/images/profile_foto.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Card({key, title, eventImg, location, locationName, startTime, endTime } ) {
  const pureStartDate = startTime?.split("T")[0];
  const pureStartTime = startTime?.split("T")[1].split(".")[0];
  const pureEndDate = endTime?.split("T")[0];
  const pureEndTime = endTime?.split("T")[1].split(".")[0];
  return (
    <div key={key} className="card m-3 shadow d-flex align-items-center" style={{"width": "18rem"}}>
        <div className="d-flex ps-2 pt-2 w-100 img_wrap" style={{ height: "4rem"}}>
            
          <img  src={profileFoto} className="rounded-circle" alt="user" style={{height:"48px", width:"48px"}} />
          <p className="ps-2 pb-2 pe-2 mb-0 w-100 align-self-center text-truncate fw-bold" style={{height:"37px"}}>{title}</p>
          <div class="overflow-auto img_description">{title}</div>
         
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
          {`Starts: ${ pureStartDate +"," || ""} ${pureStartTime || "Not specified"}`}
        </p>
        <p >
          {`Ends: ${ pureEndDate +"," || ""}  ${pureEndTime || "Not specified"}`}
        </p>
        <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-primary rounded-circle">+</button>
        </div>
       
      </div>
    </div>
  );
}

export default Card;
