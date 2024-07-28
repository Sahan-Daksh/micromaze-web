import React from "react";
import "../../assets/styles/components/cards/PartnerCard.css";

const PartnerCard = ({ partner }) => {
  return (
    <>
      <div className="partner-card">
      <img
        src={partner.logo}
        alt={partner.alt}
        className="partner-card-image"
      />
    </div>
    <div className="partner-title-card">
      <p className="partner-name">{partner.title}</p>
    </div>
    </>
    
    
  );
};

export default PartnerCard;
