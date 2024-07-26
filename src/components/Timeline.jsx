import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Typography } from "@mui/material";

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
      style={{
        position: "relative",
        padding: "40px 20px",
        color: "white",
        background: `url(${backgroundImages[0]}) no-repeat center center`,
        backgroundSize: "cover",
        minHeight: "100vh", // Ensure the section covers full height
        overflow: "hidden", // Hide overflow caused by pseudo-element
      }}
    >
      {/* Background Blur Effect */}
      <div
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
        variant="h2" // Adjust the size as needed
        component="h1"
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
              background: "transparent", // Remove black blur
              color: "#fff",
              backdropFilter: "none", // Remove blur effect
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid transparent" }} // Remove arrow color
            iconStyle={{
              ...event.iconStyle,
              width: "60px", // Increase size
              height: "60px", // Increase size
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
            }}
            icon={
              <div
                style={{
                  background: "#757575",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            }
            style={{
              marginBottom: "60px", // Add more space before and after intersection
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: index % 2 === 0 ? "flex-start" : "flex-end", // Align text based on the side
                textAlign: index % 2 === 0 ? "left" : "right", // Align text based on the side
              }}
            >
              <Typography
                variant="h4" // Increase font size
                component="h3"
                style={{
                  fontFamily: "Carbon, Arial, sans-serif",
                  color: "#fff",
                }}
              >
                {event.title}
              </Typography>
              <Typography
                variant="h5" // Increase font size
                component="h4"
                style={{
                  fontFamily: "Carbon, Arial, sans-serif",
                  color: "#fff",
                }}
              >
                {event.date}
              </Typography>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
