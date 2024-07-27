import React from "react";
import "../styles/component/TimelineCard.css";

const TimelineCard = ({ title, description, date }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <div className="front-content">
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{title}</strong>
                </p>
              </div>
              <p className="card-footer">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
