import { Box, Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./framer";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/food");
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Flex
        w="100%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        p={8}
      >
        <VStack spacing={6} textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="extrabold">
            Welcome to FoodieBoy!
          </Heading>
          <Text color="slate" fontSize="lg" px={6}>
            A website documenting all the food spots we've gone to.
          </Text>
          <Button
            size="lg"
            colorScheme="red"
            px={8}
            py={6}
            borderRadius="md"
            onClick={handleExploreClick}
          >
            Explore Now
          </Button>
        </VStack>
      </Flex>
    </motion.div>
  );
};

export default HomePage;
