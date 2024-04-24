import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Button,
  HStack,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import FoodButton from "../components/FoodButton";
import { pageVariants, pageTransition } from "../components/types/framer";
import { motion } from "framer-motion";
import { foods } from "./foodsTestData";
import { Restaurant } from "../components/types/Restaurant";
import StarRating from "../components/StarRating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FoodPickerPage: React.FC = () => {
  const { colorMode } = useColorMode();
  const linkColor = colorMode === "dark" ? "orange.300" : "blue.500";

  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleFoodButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * foods.length);
    setSelectedRestaurant(foods[randomIndex]);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      selectedRestaurant
        ? (prevIndex + 1) % selectedRestaurant.images.length
        : 0
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      selectedRestaurant
        ? (prevIndex - 1 + selectedRestaurant.images.length) %
          selectedRestaurant.images.length
        : 0
    );
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
            <Text>Where should I eat today?</Text>
            <FoodButton label="Foodie me!" onClick={handleFoodButtonClick} />
          </Box>
          {selectedRestaurant && (
            <Box borderWidth="1px" borderRadius="md" overflow="hidden" mt={4}>
              <Box
                borderRadius="md"
                overflow="hidden"
                mt={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="400px"
              >
                <Image
                  src={selectedRestaurant.images[currentImageIndex]}
                  alt={`${selectedRestaurant.name} image ${
                    currentImageIndex + 1
                  }`}
                  maxWidth="100%"
                  maxHeight="100%"
                  objectFit="contain"
                />
              </Box>
              <HStack justifyContent="center" p={2}>
                <Button size="sm" onClick={prevImage}>
                  Previous
                </Button>
                <Button size="sm" onClick={nextImage}>
                  Next
                </Button>
              </HStack>
              <Box p={4}>
                <Heading as="h2" size="md" mb={2}>
                  <Link
                    href={`${selectedRestaurant.website}`}
                    isExternal
                    sx={{ color: linkColor }}
                  >
                    {selectedRestaurant.name}
                  </Link>
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
