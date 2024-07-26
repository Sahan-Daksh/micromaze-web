import { useState } from "react";
import "../styles/components/FAQ.css"; // Import the CSS file
import { faqs } from "../data/faqs.jsx";
import AnimatedBackground from "./AnimatedBackground.jsx";

export default function FAQ() {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <AnimatedBackground>
      <div className="faq-container">
        <div className="faq-heading-container">
          <h2 className="faq-heading">Frequently Asked Questions (FAQ)</h2>
        </div>
        <div className="faq-content-container">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div
                  className={`faq-question ${
                    selected === index ? "faq-question-active" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <span>{selected === index ? "−" : "+"}</span>
                </div>
                {selected === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
