// PartnerCard.jsx
import React from "react";
import "../styles/component/PartnerCard.css";

const PartnerCard = ({ partner }) => {
  return (
    <div className="partner-card">
      <img
        style={{ borderRadius: 10 }}
        src={partner.logo}
        alt={partner.alt}
        className="partner-card-image"
      />
    </div>
  );
};

export default PartnerCard;
