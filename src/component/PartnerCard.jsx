// PartnerCard.jsx
import React from "react";
import "../styles/component/PartnerCard.css";

const PartnerCard = ({ partner }) => {
  return (
    <div className="partner-card">
      <img
        src={partner.logo}
        alt={partner.alt}
        className="partner-card-image"
      />
    </div>
  );
};

export default PartnerCard;
