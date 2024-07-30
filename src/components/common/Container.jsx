import React from "react";
import { Container as ChakraContainer } from "@chakra-ui/react";

const Container = ({ children, ...props }) => {
  return (
    <ChakraContainer maxWidth="7xl" p={{ base: 2, sm: 10 }} {...props}>
      {children}
    </ChakraContainer>
  );
};

export default Container;
