import React from "react";
import { chakra } from "@chakra-ui/react";

const Header = ({ text, ...props }) => {
  return (
    <chakra.h3
      fontSize={{ base: "2xl", md: "9xl" }}
      fontWeight="bold"
      mb={18}
      textAlign="center"
      color="white"
      {...props}
    >
      {text}
    </chakra.h3>
  );
};

export default Header;
