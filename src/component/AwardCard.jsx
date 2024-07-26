import React from "react";
import "../styles/component/AwardCard.css";

// eslint-disable-next-line react/prop-types
const AwardCard = ({ title, image, prize, className }) => {
  return (
    <div className={`award-card ${className}`}>
      <div className="award-card-container">
        <img src={image} alt={title} className="award-card-image" />
        <div className="award-card-content">
          <h2 className="award-card-title">{title}</h2>
          {prize && <p className="award-card-prize">Cash Prize: {prize}</p>}
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
