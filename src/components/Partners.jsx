import { motion } from "framer-motion";
import PartnerCard from "../component/PartnerCard";
import "../styles/components/Partners.css"; // Import the CSS file
import { partners } from "../data/partners";
import AnimatedBackground from "./AnimatedBackground";

const Partners = () => {
  return (
    <AnimatedBackground>
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

        {/* Infinite Scroll Wrapper */}
        <div className="partners-scroll-wrapper">
          <div className="partners-scroll-content">
            {/* Duplicate the partner list for seamless scrolling */}
            {[...partners, ...partners].map((partner, index) => (
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
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default Partners;
