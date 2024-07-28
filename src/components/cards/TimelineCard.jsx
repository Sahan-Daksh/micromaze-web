import React from "react";
import "../../assets/styles/components/cards/TimelineCard.css";

const TimelineCard = ({ title, description, date, align }) => {
  const textAlign = align === "right" ? "left" : "right";
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <div className="front-content">
            <div className="description">
              <div className="title" style={{ textAlign }}>
                <p className="title">
                  <strong>{title}</strong>
                </p>
              </div>
              <p className="card-footer" style={{ textAlign }}>
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
