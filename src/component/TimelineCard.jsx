import React from "react";
import "../styles/component/TimelineCard.css";
import { MdTour } from "react-icons/md";

const TimelineCard = () => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <MdTour size={50} />
            <strong>Hover Me</strong>
          </div>
        </div>
        <div className="front">
          <div className="front-content">
            <small className="badge">Ellora</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>4 Days Trip</strong>
                </p>
              </div>
              <p class="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
