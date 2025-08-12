import React from "react";
import "../styles/cardStyle/card.css";
import defaultEventImg from "./../assets/images/default_event_img.jpg";
import profileFoto from "./../assets/images/profile_foto.jpeg";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({
  id,
  title,
  eventImg,
  ticketUrl,
  address,
  startTime,
  startDate,
  onClick,
  buttonSymbol,
}) {
  
  const pureStartTime = startTime
    ?.split("T")[0]
    ?.split("-")
    .reverse()
    .join(".");
  const pureStartDate = startDate

  return (
    <div
      key={id}
      className="card m-3 d-flex align-items-center card-style"
      style={{ width: "18rem" }}
    >
      <div
        className="d-flex ps-2 pt-2 w-100 img_wrap"
        style={{ height: "4rem" }}
      >
        <img
          src={profileFoto}
          className="rounded-circle"
          alt="user"
          style={{ height: "48px", width: "48px" }}
        />
        <p
          className="ps-2 pb-2 pe-2 mb-0 w-100 align-self-center text-truncate fw-bold"
          style={{ height: "37px" }}
        >
          {title}
        </p>
        <div className="overflow-auto img_description fw-bold">{title}</div>
      </div>
      <img
        src={eventImg || defaultEventImg}
        className="img-fluid"
        style={{ height: "17rem", width: "100%" }}
        alt="eventImage"
      />
      <div className="card-body" style={{ width: "100%" }}>
        <div className="mb-3">
          <a
            href={ticketUrl}
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faStore} />
            <span className="ms-2">Ticket</span>
          </a>
        </div>
       <p className="address" style={{ cursor: address && address.length > 25 ? "pointer" : "default"
  }}
  title={address}
>
  {`Address: ${address ? (address.length > 20 ? address.slice(0, 20) + "..." : address) : "No Info"}`}
</p>
        <p>
          {`Date: ${pureStartDate ? pureStartDate : ""}`}
        </p>
        <p>
          {`Time: ${pureStartTime ? pureStartTime : ""} `}
        </p>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            onClick={onClick}
            className="btn btn-primary rounded-circle card-btn"
          >
            {buttonSymbol}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
