import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import FoodButton from "../components/FoodButton";
import { pageVariants, pageTransition } from "./framer";
import { motion } from "framer-motion";
import { foods } from "./foodsTestData";
import { Restaurant } from "../components/types/Restaurant";
import StarRating from "../components/StarRating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FoodPickerPage: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleFoodButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * foods.length);
    setSelectedRestaurant(foods[randomIndex]);
  };
console.log(selectedRestaurant);
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
            <Text>Where should I eat today?</Text>
            <FoodButton label="Foodie me!" onClick={handleFoodButtonClick} />
          </Box>
          {selectedRestaurant && (
            <Box borderWidth="1px" borderRadius="md" overflow="hidden" mt={4}>
              <Image
                src={selectedRestaurant.images[0]}
                alt={`${selectedRestaurant.name} image`}
                h={200}
                objectFit="cover"
              />
              <Box p={4}>
                <Heading as="h2" size="md" mb={2}>
                  {selectedRestaurant.name}
                </Heading>
                <Text>{selectedRestaurant.description}</Text>
                <StarRating rating={selectedRestaurant.rating} />
              </Box>
            </Box>
          )}
        </VStack>
      </Flex>
    </motion.div>
  );
};

export default FoodPickerPage;
