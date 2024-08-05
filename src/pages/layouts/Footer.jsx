import { motion } from "framer-motion";
import "../../assets/styles/pages/layouts/Footer.css"; // Import the CSS file

// Define social media links
const socialMediaLinks = [
  {
    href: "https://www.facebook.com/ieeerasiit?mibextid=LQQJ4d",
    icon: () => <i className="fab fa-facebook-f"></i>,
  },
  {
    href: "https://www.linkedin.com/company/ieee-robotics-and-automation-society-of-iit/",
    icon: () => <i className="fab fa-linkedin-in"></i>,
  },
  {
    href: "https://www.instagram.com/ieeeras_iit?igsh=M2E3eTA4em1tcm9w",
    icon: () => <i className="fab fa-instagram"></i>,
  },
  // { href: "https://tiktok.com", icon: () => <i className="fab fa-tiktok"></i> },
];

const FooterExport = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-content container mx-auto px-5 py-6">
        <div className="footer-sections">
          <motion.div
            className="footer-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="footer-title">MicroMaze</h2>
            <p className="footer-description">
              MicroMaze is an inter-university competition designed to challenge
              participants in developing a micro mouse capable of solving a maze
              within a specified timeframe. The main challenge is to design a
              micro mouse capable of solving a maze within a specified time
              frame.  
            </p>
          </motion.div>
          <motion.div
            className="footer-connect"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="footer-title">Follow Us on</h2>
            <div className="social-media">
              {socialMediaLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-media-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {link.icon()}
                </motion.a>
              ))}
            </div>
            <p className="footer-email" href="ieeeras@iit.ac.lk">@ieeeras@iit.ac.lk</p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="footer-credits"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>&copy; {new Date().getFullYear()} - MicroMaze</p>
      </motion.div>
    </motion.footer>
  );
};

export default FooterExport;
