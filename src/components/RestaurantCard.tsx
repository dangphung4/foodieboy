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
import { sliderSettings } from "../Views/SliderSettings";

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
              style={{
                cursor: "pointer",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <Text fontSize="lg">{restaurant.review}</Text>
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
          <Text>{restaurant.description}</Text>
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
