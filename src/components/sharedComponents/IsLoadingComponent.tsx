import React from "react";
import { Spinner, Box, Flex } from "@chakra-ui/react";

const IsLoadingComponent = ( {isLoading}) => {
  if (!isLoading) {
    return null; // Don't render the loading component if isLoading is false
  }

  return (
    <Flex
      align="center"
      justify="center"
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex="999" // Ensure it's above other content
      bg="transparent" // Transparent background
    >
      <Box
        width="100px" // Adjust size as needed
        height="100px"
        bg="white"
        rounded="full"
        p={5} // Padding to center the Spinner
        shadow="md" // Add shadow for a subtle effect
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200" // Transparent color
          color="white" // White color for the spinner
          size="xl" // Adjust size as needed
        />
      </Box>
    </Flex>
  );
};

export default IsLoadingComponent;
