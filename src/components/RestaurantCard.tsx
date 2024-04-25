import {
  Box,
  GridItem,
  Heading,
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
import ReactMarkdown from "react-markdown";

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

  const customComponents = {
    h1: ({ children }: any) => (
      <Heading as="h1" size="2xl">
        {children}
      </Heading>
    ),
    h2: ({ children }: any) => (
      <Heading as="h2" size="xl">
        {children}
      </Heading>
    ),
    h3: ({ children }: any) => (
      <Heading as="h3" size="lg">
        {children}
      </Heading>
    ),
    h4: ({ children }: any) => (
      <Heading as="h4" size="md">
        {children}
      </Heading>
    ),
    h5: ({ children }: any) => (
      <Heading as="h5" size="sm">
        {children}
      </Heading>
    ),
    h6: ({ children }: any) => (
      <Heading as="h6" size="xs">
        {children}
      </Heading>
    ),
  };

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
                      <Box width="100%" paddingTop="56.25%" position="relative">
                        <Image
                          src={image}
                          alt={`${restaurant.name} image ${index + 1}`}
                          objectFit="cover"
                          position="absolute"
                          top={0}
                          left={0}
                          right={0}
                          bottom={0}
                        />
                      </Box>
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
              style={{
                cursor: "pointer",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <ReactMarkdown components={customComponents}>
                {restaurant.description}
              </ReactMarkdown>
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
          <ReactMarkdown components={customComponents}>
            {restaurant.review}
          </ReactMarkdown>
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
