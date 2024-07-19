import { motion } from "framer-motion";
import "../styles/component/PartnerCard.css";

// eslint-disable-next-line react/prop-types
const PartnerCard = ({ partner }) => {
  return (
    <motion.div
      className="partner-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
    >
      <img src={partner.logo} alt={partner.name} className="partner-logo" />
      <h3 className="partner-name">{partner.name}</h3>
    </motion.div>
  );
};

export default PartnerCard;
