import React from "react";
import {
  Box,
  chakra,
  Container,
  HStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <div style={{ backgroundImage: "url('./timeline/TL-bg1.png')" }}>
    <chakra.h3
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          fontWeight="bold"
          mb={18}
          textAlign="center"
          color="white"
          as={motion.h3}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Timeline
        </chakra.h3>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      
      >
        <h3 className="vertical-timeline-element-title">Registration Open</h3>
        <h4 className="vertical-timeline-element-subtitle">1st July, 2024</h4>
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        
      >
        <h3 className="vertical-timeline-element-title">Awareness Session</h3>
        <h4 className="vertical-timeline-element-subtitle">14th July, 2024</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        
      >
        <h3 className="vertical-timeline-element-title">Registration Close</h3>
        <h4 className="vertical-timeline-element-subtitle">17th July, 2024</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        
      >
        <h3 className="vertical-timeline-element-title">Online Workshop</h3>
        <h4 className="vertical-timeline-element-subtitle">20th July, 2024</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        
      >
        <h3 className="vertical-timeline-element-title">Qualifier Round</h3>
        <h4 className="vertical-timeline-element-subtitle">10th August, 2024</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        
      >
        <h3 className="vertical-timeline-element-title">The Finale</h3>
        <h4 className="vertical-timeline-element-subtitle">11th August, 2024</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
};

export default Timeline;
