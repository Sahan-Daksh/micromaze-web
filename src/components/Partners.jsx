import { motion } from "framer-motion";
import PartnerCard from "../component/PartnerCard";
import "../styles/components/Partners.css"; // Import the CSS file
import { partners } from "../data/partners";

const Partners = () => {
  return (
    <div className="partners-container">
      <div className="flex flex-col items-center mb-10">
        <motion.p
          className="partners-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Official Partners
        </motion.p>
      </div>
      <motion.div
        className="partners-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="partner-card-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PartnerCard partner={partner} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
