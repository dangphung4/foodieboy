import {
  Box,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
  Spacer,
  VStack,
  Link,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { fadeVariants } from "./types/FadeVariant";
import StarRating from "../components/StarRating";
import { RestaurantCardProps } from "../components/types/RestaurantCardProps";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sliderSettings } from "./types/SliderSettings";

/**
 * Restaurant card
 * This is a card that displays a restaurant and its information
 * TODO will probably change out resturaunt into review, as naming is not correct here
 * @see https://chakra-ui.com/docs/layout/grid
 * @param {RestaurantCardProps} props - The properties of the restaurant card
 * @returns {React.ReactElement} The restaurant card
 */
export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  linkColor,
}) => {
  const [showReview, setShowReview] = useState(false);

  return (
    <GridItem key={restaurant.id}>
      <Box borderWidth="1px" borderRadius="md" overflow="hidden">
        <AnimatePresence mode="wait">
          {!showReview ? (
            <motion.div
              key="photo"
              initial="initial"
              animate="visible"
              exit="exit"
              variants={fadeVariants}
              layoutId={`card-container-${restaurant.id}`}
              onClick={() => setShowReview(true)}
              style={{ cursor: "pointer" }}
            >
              {restaurant.images && restaurant.images.length > 0 ? (
                <Slider {...sliderSettings}>
                  {restaurant.images.map((image, index) => (
                    <div key={index}>
                      <Image
                        src={image}
                        alt={`${restaurant.name} image ${index + 1}`}
                        h={200}
                        objectFit="cover"
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <Box h={200} bg="gray.100" />
              )}
            </motion.div>
          ) : (
            <motion.div
              key="review"
              initial="initial"
              animate="visible"
              exit="exit"
              variants={fadeVariants}
              layoutId={`card-container-${restaurant.id}`}
              onClick={() => setShowReview(false)}
              style={{ cursor: "pointer", padding: "1rem", textAlign: "center" }}
            >
              <Text fontSize="lg">{restaurant.description}</Text>
            </motion.div>
          )}
        </AnimatePresence>
        <Box p={4}>
          <Heading as="h2" size="md" mb={2}>
            <Link
              href={`${restaurant.website}`}
              isExternal
              sx={{ color: linkColor }}
            >
              {restaurant.name}
            </Link>
          </Heading>
          <Text>{restaurant.review}</Text>
        </Box>
        <Flex p={4}>
          <Spacer />
          <VStack spacing={2}>
            <StarRating rating={restaurant.rating} />
          </VStack>
        </Flex>
      </Box>
    </GridItem>
  );
};
