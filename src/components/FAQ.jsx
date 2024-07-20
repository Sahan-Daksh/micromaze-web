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
      <div className="faq-heading-container">
        <h2 className="faq-heading">Frequently Asked Questions (FAQ)</h2>
      </div>
      <div className="faq-content-container">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: selected === index ? "#6b46c1" : "#2d3748",
                  color:
                    selected === index
                      ? "#ffffff"
                      : "#e2e8f0" /* Adjust color */,
                }}
                className={`faq-question ${
                  selected === index ? "faq-question-active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                {/* Optional: Add an icon for expanded/collapsed state */}
                <span>{selected === index ? "−" : "+"}</span>
              </motion.div>
              <AnimatePresence>
                {selected === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer"
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
