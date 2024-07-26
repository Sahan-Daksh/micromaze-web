import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import "../styles/components/Timeline.css";

// Background images
const backgroundImages = [
  "/timeline/tl-bg1.png",
  "/timeline/tl-bg2.png",
  "/timeline/tl-bg3.png",
];

// Timeline events data
const timelineEvents = [
  {
    title: "Registrations Open",
    date: "20th July, 2024",
    iconStyle: { background: "#757575", color: "#fff" },
  },
  {
    title: "Awareness Session",
    date: "18th July, 2024",
    iconStyle: { background: "#757575", color: "#fff" },
  },
  {
    title: "Registrations Close",
    date: "18th July, 2024",
    iconStyle: { background: "#757575", color: "#fff" },
  },
  {
    title: "Online Session",
    date: "24th July, 2024",
    iconStyle: { background: "#757575", color: "#fff" },
  },
  {
    title: "Qualifier Round",
    date: "10th August, 2024",
    iconStyle: { background: "#757575", color: "#fff" },
  },
  {
    title: "The Finale",
    date: "11th August, 2024",
    iconStyle: { background: "#757575", color: "#fff" },
  },
];

const Timeline = () => {
  return (
    <div
      className="timeline-container"
      style={{
        position: "relative",
        padding: "40px 20px",
        color: "white",
        background: `url(${backgroundImages[0]}) no-repeat center center`,
        backgroundSize: "cover",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Blur Effect */}
      <div
        className="background-blur"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `url(${backgroundImages[0]}) no-repeat center center`,
          backgroundSize: "cover",
          filter: "blur(8px)",
          zIndex: -1,
        }}
      />

      {/* Title */}
      <Typography
        variant="h2"
        component="h1"
        className="timeline-title"
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontFamily: "Carbon, Arial, sans-serif",
          color: "#fff",
          zIndex: 1,
          position: "relative",
        }}
      >
        Event Timeline
      </Typography>

      <VerticalTimeline>
        {timelineEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              color: "#fff",
              backdropFilter: "none",
              boxShadow: "none",
              borderRadius: "10px",
            }}
            contentArrowStyle={{ borderRight: "7px solid transparent" }}
            iconStyle={{
              ...event.iconStyle,
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
            }}
            icon={
              <motion.div
                className="icon-container"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.2 }}
              >
                <div
                  style={{
                    background: "#757575",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />
              </motion.div>
            }
            style={{
              marginBottom: "60px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <motion.div
              className="timeline-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
                textAlign: index % 2 === 0 ? "left" : "right",
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                style={{
                  fontFamily: "Carbon, Arial, sans-serif",
                  color: "#fff",
                }}
              >
                {event.title}
              </Typography>
              <Typography
                variant="h5"
                component="h4"
                style={{
                  fontFamily: "Carbon, Arial, sans-serif",
                  color: "#fff",
                }}
              >
                {event.date}
              </Typography>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
