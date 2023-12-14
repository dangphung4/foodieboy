import React, { useState } from "react";
import { Box, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import FoodButton from "../components/FoodButton";
import { pageVariants, pageTransition } from "./framer";
import { motion } from "framer-motion";
import { foods } from "./foodsTestData";
import { Restaurant } from "../components/types/Restaurant";

const FoodPickerPage: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  const handleFoodButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * foods.length);
    console.log(randomIndex);
    setSelectedRestaurant(foods[randomIndex]);
  };

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
            <FoodButton label="Foodie me!" onClick={handleFoodButtonClick}/>
          </Box>
          {selectedRestaurant && (
            <Box>
              <Heading as="h2" size="lg">
                {selectedRestaurant.name}
              </Heading>
              <Text>{selectedRestaurant.description}</Text>
              <Image
                src={selectedRestaurant.images[0]}
                alt={selectedRestaurant.name}
              />
              {/* Add more details as needed */}
            </Box>
          )}
        </VStack>
      </Flex>
    </motion.div>
  );
};

export default FoodPickerPage;
