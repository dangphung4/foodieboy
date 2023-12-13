import React from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import FoodButton from "../components/FoodButton";
import { pageVariants, pageTransition } from "./framer";
import { motion } from "framer-motion";

const FoodPickerPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        <VStack spacing={6} textAlign="center">
          <Box>
            <Heading as="h1" size="xl">
              Food Picker Page
            </Heading>
          </Box>
          <Box>
            <Text>Where should I eat today?</Text>
            <FoodButton label="Foodie me!" />
          </Box>
        </VStack>
      </Flex>
    </motion.div>
  );
};

export default FoodPickerPage;
