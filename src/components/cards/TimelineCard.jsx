import React from "react";
import "../../assets/styles/components/cards/TimelineCard.css";
import { Box, Text } from "@chakra-ui/react";

const TimelineCard = ({ title, description, date, align }) => {
  return (
    <Box
      bg="white"
      p={4}
      boxShadow="lg"
      borderRadius="md"
      width="100%"
      textAlign={align}
    >
      <Text fontSize="xl" fontWeight="bold" color="black" mb={2}>
        {title}
      </Text>
      <Text fontSize="md" color="gray.500">
        {date}
      </Text>
      <Text fontSize="md" mt={2}>
        {description}
      </Text>
    </Box>
  );
};

export default TimelineCard;
