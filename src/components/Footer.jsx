import { motion } from "framer-motion";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <motion.div
      className="footer-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-5 py-10 footer-content">
        <div className="footer-info">
          <motion.h2
            className="footer-heading"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            MicroMaze
          </motion.h2>
          <motion.p
            className="footer-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are a dynamic team dedicated to bringing innovative solutions to
            our community. Join us in our mission to make a difference.
          </motion.p>
        </div>
        <div className="footer-connect">
          <motion.h2
            className="footer-heading"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            Connect with Us
          </motion.h2>
          <div className="footer-social-links">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="social-icon"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.97 13.97 0 0 1 1.671 3.149 4.93 4.93 0 0 0 3.195 9.72a4.916 4.916 0 0 1-2.229-.616v.061a4.923 4.923 0 0 0 3.95 4.827 4.935 4.935 0 0 1-2.224.085 4.928 4.928 0 0 0 4.604 3.417A9.866 9.866 0 0 1 0 19.54a13.978 13.978 0 0 0 7.548 2.213c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.637A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="social-icon"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.31 3.608.635a7.148 7.148 0 0 1 2.62 1.698 7.148 7.148 0 0 1 1.698 2.62c.326.975.573 2.242.635 3.608.059 1.265.071 1.645.071 4.849 0 3.204-.012 3.584-.07 4.849-.062 1.366-.31 2.633-.635 3.608a7.148 7.148 0 0 1-1.698 2.62 7.148 7.148 0 0 1-2.62 1.698c-.975.326-2.242.573-3.608.635-1.265.059-1.645.071-4.849.071-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.31-3.608-.635a7.148 7.148 0 0 1-2.62-1.698 7.148 7.148 0 0 1-1.698-2.62c-.326-.975-.573-2.242-.635-3.608C2.175 15.584 2.163 15.204 2.163 12c0-3.204.012-3.584.07-4.849.062-1.366.31-2.633.635-3.608a7.148 7.148 0 0 1 1.698-2.62A7.148 7.148 0 0 1 6.816 2.858c.975-.326 2.242-.573 3.608-.635C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.346.015 7.052.072 5.759.129 4.469.329 3.298.724a9.869 9.869 0 0 0-3.584 2.29A9.869 9.869 0 0 0 .724 6.7C.33 7.869.13 9.159.072 10.452.015 11.745 0 12.154 0 15.292s.015 3.546.072 4.84c.057 1.293.258 2.583.652 3.754a9.869 9.869 0 0 0 2.29 3.584 9.869 9.869 0 0 0 3.584 2.29c1.171.395 2.461.595 3.754.652C8.346 23.985 8.756 24 12 24s3.654-.015 4.948-.072c1.293-.057 2.583-.258 3.754-.652a9.869 9.869 0 0 0 3.584-2.29 9.869 9.869 0 0 0 2.29-3.584c.395-1.171.595-2.461.652-3.754.057-1.293.072-1.703.072-4.84s-.015-3.547-.072-4.84c-.057-1.293-.258-2.583-.652-3.754a9.869 9.869 0 0 0-2.29-3.584 9.869 9.869 0 0 0-3.584-2.29C16.731.33 15.441.129 14.148.072 13.154.015 12.765 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.999 3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>&copy; {new Date().getFullYear()} MicroMaze. All rights reserved.</p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
