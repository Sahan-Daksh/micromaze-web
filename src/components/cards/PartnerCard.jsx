import React from "react";
import "../../assets/styles/components/cards/PartnerCard.css";

const PartnerCard = ({ partner }) => {
  return (
    <div className="partner-card">
      <img
        src={partner.logo}
        alt={partner.alt}
        className="partner-card-image"
      />
      <div className="partner-card-overlay">
        <p className="partner-card-title">{partner.title}</p>
      </div>
    </div>
  );
};

export default PartnerCard;
