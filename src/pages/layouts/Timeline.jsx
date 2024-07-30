import {
  Box,
  chakra,
  Container,
  HStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import TimelineCard from "../../components/cards/TimelineCard";
import "../../assets/styles/pages/layouts/Timeline.css";

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
    <div className="timeline-container">
      <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
        <chakra.h3
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
          fontWeight="bold"
          mb={18}
          textAlign="center"
          color="white"
          as={motion.h3}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="timeline-header"
        >
          Timeline
        </chakra.h3>
        {milestones.map((milestone, index) => (
          <Flex key={milestone.id} mb="10px">
            {isDesktop && index % 2 === 0 && (
              <>
                <EmptyCard />
                <LineWithDot isFinal={index === milestones.length - 1} />
                <CardX {...milestone} align="right" />
              </>
            )}

            {isMobile && (
              <>
                <LineWithDot isFinal={index === milestones.length - 1} />
                <CardX {...milestone} align="center" />
              </>
            )}

            {isDesktop && index % 2 !== 0 && (
              <>
                <CardX {...milestone} align="left" />
                <LineWithDot isFinal={index === milestones.length - 1} />
                <EmptyCard />
              </>
            )}
          </Flex>
        ))}
      </Container>
      {/* Adding stars and floating elements */}
      <div className="star star1"></div>
      <div className="star star2"></div>
      <div className="star star3"></div>
      <div className="floating-element floating1"></div>
      <div className="floating-element floating2"></div>
      <div className="floating-element floating3"></div>
    </div>
  );
};

const CardX = ({ id, title, description, date, align }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const alignValue = isMobile ? "center" : align;

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg="transparent"
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      as={motion.div}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      width={{ base: "100%", md: "70%" }}
    >
      <TimelineCard
        title={title}
        description={description}
        date={date}
        align={alignValue}
      />
    </HStack>
  );
};

const LineWithDot = ({ isFinal }) => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height={isFinal ? "75px" : "calc(100% + 10px)"}
        border="1px solid"
        borderColor={useColorModeValue("#D9D9D9")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="25px">
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
          bg={useColorModeValue("#D9D9D9")}
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
