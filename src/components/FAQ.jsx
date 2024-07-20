import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/components/FAQ.css"; // Import the CSS file
import { faqs } from "../data/faqs.jsx";

export default function FAQ() {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="container mx-auto px-5">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: selected === index ? "#6b46c1" : "#2d3748",
                }}
                className={`faq-question ${
                  selected === index ? "faq-question-active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
              </motion.div>
              <AnimatePresence>
                {selected === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer overflow-hidden"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
