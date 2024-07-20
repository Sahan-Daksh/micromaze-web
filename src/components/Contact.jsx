import { motion } from "framer-motion";
import "../styles/components/Contact.css";
import { contacts } from "../data/contacts";

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-title-container">
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Get in touch with our team for any inquiries
        </motion.p>
        <motion.div
          className="contact-list-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className="contact-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
            >
              <h2 className="contact-card-title">{contact.title}</h2>
              <p className="contact-card-name">{contact.name}</p>
              <p className="contact-card-detail">
                Email:
                <a
                  href={`mailto:${contact.email}`}
                  className="contact-card-email"
                >
                  {contact.email}
                </a>
              </p>
              <p className="contact-card-detail">Phone: {contact.phone}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
