import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/components/Timeline.css";
import { timeLineBackgroundImages } from "../data/imgs/timeLineBackgroundImgs.jsx";
import { timelineData } from "../data/timeline.jsx";

const getRandomBackground = () => {
  return timeLineBackgroundImages[
    Math.floor(Math.random() * timeLineBackgroundImages.length)
  ];
};

const Timeline = () => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    setBackground(getRandomBackground());

    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("loaded");
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="timeline" style={{ backgroundImage: `url(${background})` }}>
      <div className="timeline-container">
        <motion.div
          className="timeline-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="timeline-heading">Timeline</p>
          <motion.ul
            className="timeline-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {timelineData.map((event, index) => (
              <motion.li
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className={`timeline-text ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <p className="event-title">{event.title}</p>
                  <p className="event-date">{event.date}</p>
                </div>
                <div className="timeline-dot-container">
                  <div className="timeline-dot"></div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
