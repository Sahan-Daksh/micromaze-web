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
import TimelineCard from "../component/TimelineCard";
import "../styles/components/Timeline.css";

const milestones = [
  {
    id: 1,
    date: "20th July, 2024",
    title: "Registrations Open",
    description: ``,
  },
  {
    id: 2,
    date: "18th July, 2024",
    title: "Awareness Session",
    description: ``,
  },
  {
    id: 3,
    date: "18th July, 2024",
    title: "Registrations Close",
    description: ``,
  },
  { id: 4, date: "24th July, 2024", title: "Online Session", description: `` },
  {
    id: 5,
    date: "10th August, 2024",
    title: "Qualifier Round",
    description: ``,
  },
  { id: 6, date: "11th August, 2024", title: "The Finale", description: `` },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <div
      style={{
        backgroundImage: "url('/timeline/tl-bg1.png')",
      }}
    >
      <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
        <chakra.h3
          fontSize="9xl"
          fontWeight="bold"
          mb={18}
          textAlign="center"
          style={{ color: "white" }}
        >
          Timeline
        </chakra.h3>
        {milestones.map((milestone) => (
          <Flex key={milestone.id} mb="10px">
            {/* Desktop view(left card) */}
            {isDesktop && milestone.id % 2 === 0 && (
              <>
                <EmptyCard />
                <LineWithDot />
                <CardX {...milestone} />
              </>
            )}

            {/* Mobile view */}
            {isMobile && (
              <>
                <LineWithDot />
                <CardX {...milestone} />
              </>
            )}

            {/* Desktop view(right card) */}
            {isDesktop && milestone.id % 2 !== 0 && (
              <>
                <CardX {...milestone} />
                <LineWithDot />
                <EmptyCard />
              </>
            )}
          </Flex>
        ))}
      </Container>
    </div>
  );
};

const CardX = ({ id, title, description, date }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? "0" : "0";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg="transparent"
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
    >
      <TimelineCard title={title} description={description} date={date} />
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.400", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Milestones;
