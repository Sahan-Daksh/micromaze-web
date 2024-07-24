import { motion } from "framer-motion";
import "../styles/components/Footer.css";
const socialMediaLinks = [
  {
    href: "https://twitter.com",
    icon: () => (
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.97 13.97 0 0 1 1.671 3.149 4.93 4.93 0 0 0 3.195 9.72a4.916 4.916 0 0 1-2.229-.616v.061a4.923 4.923 0 0 0 3.95 4.827 4.935 4.935 0 0 1-2.224.085 4.928 4.928 0 0 0 4.604 3.417A9.866 9.866 0 0 1 0 19.54a13.978 13.978 0 0 0 7.548 2.213c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.637A9.936 9.936 0 0 0 24 4.557z" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com",
    icon: () => (
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M22.676 0H1.325C.595 0 0 .593 0 1.326v21.349C0 23.407.594 24 1.325 24H12.82v-9.339H9.692v-3.643h3.128V8.413c0-3.097 1.888-4.785 4.64-4.785 1.321 0 2.456.098 2.784.142v3.23H17.5c-1.438 0-1.717.684-1.717 1.688v2.213h3.438l-.448 3.643h-2.99V24h5.863c.73 0 1.324-.593 1.324-1.325V1.325C24 .594 23.407 0 22.676 0" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com",
    icon: () => (
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.31 3.608.635a7.148 7.148 0 0 1 2.62 1.698 7.148 7.148 0 0 1 1.698 2.62c.326.975.573 2.242.635 3.608.059 1.265.071 1.645.071 4.849 0 3.204-.012 3.584-.07 4.849-.062 1.366-.31 2.633-.635 3.608a7.148 7.148 0 0 1-1.698 2.62 7.148 7.148 0 0 1-2.62 1.698c-.975.326-2.242.573-3.608.635-1.265.059-1.645.071-4.849.071-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.31-3.608-.635a7.148 7.148 0 0 1-2.62-1.698 7.148 7.148 0 0 1-1.698-2.62c-.326-.975-.573-2.242-.635-3.608C2.175 15.584 2.163 15.204 2.163 12c0-3.204.012-3.584.07-4.849.062-1.366.31-2.633.635-3.608a7.148 7.148 0 0 1 1.698-2.62A7.148 7.148 0 0 1 6.816 2.858c.975-.326 2.242-.573 3.608-.635C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.346.015 7.052.072 5.759.129 4.469.329 3.298.724a9.869 9.869 0 0 0-3.584 2.29A9.869 9.869 0 0 0 .724 6.7C.33 7.869.13 9.159.072 10.452.015 11.745 0 12.154 0 15.292s.015 3.546.072 4.84c.057 1.293.258 2.583.652 3.754a9.869 9.869 0 0 0 2.29 3.584 9.869 9.869 0 0 0 3.584 2.29c1.171.395 2.461.595 3.754.652C8.346 23.985 8.756 24 12 24s3.654-.015 4.948-.072c1.293-.057 2.583-.258 3.754-.652a9.869 9.869 0 0 0 3.584-2.29 9.869 9.869 0 0 0 2.29-3.584c.395-1.171.595-2.461.652-3.754.057-1.294.072-1.704.072-4.94s-.015-3.646-.072-4.94c-.057-1.293-.258-2.583-.652-3.754a9.869 9.869 0 0 0-2.29-3.584 9.869 9.869 0 0 0-3.584-2.29c-1.171-.395-2.461-.595-3.754-.652C15.654.015 15.244 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.323 6.162 6.162 0 0 0 0-12.323zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1 0-2.881 1.44 1.44 0 0 1 0 2.881z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    icon: () => (
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M22.225 0H1.771C.792 0 0 .783 0 1.749v20.501C0 23.217.792 24 1.771 24h20.451c.979 0 1.771-.783 1.771-1.75V1.749C23.996.783 23.204 0 22.225 0zM7.112 20.451H3.586V9.014h3.526v11.437zm-1.76-12.88h-.025c-1.186 0-1.954-.8-1.954-1.796 0-1.02.795-1.796 2.006-1.796s1.954.775 1.979 1.796c0 .997-.769 1.796-2.006 1.796zm13.85 12.88h-3.524V14.91c0-1.318-.471-2.22-1.646-2.22-.897 0-1.431.605-1.666 1.188-.085.211-.106.507-.106.805v5.769h-3.525s.046-9.37 0-10.437h3.525v1.479c.465-.724 1.296-1.758 3.158-1.758 2.303 0 4.028 1.501 4.028 4.722v6.014z" />
      </svg>
    ),
  },
];

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
          <div className="social-media-icons">
            {socialMediaLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="social-media-link"
              >
                {link.icon()}
              </motion.a>
            ))}
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
        <p>
          Designed by{" "}
          <a href="https://example.com" className="designer-link">
            Your Name
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
