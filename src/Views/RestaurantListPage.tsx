import React, { useState } from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
  Spacer,
  VStack,
  Link,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageVariants, pageTransition } from './framer';
import { foods } from './foodsTestData';
import StarRating from '../components/StarRating';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderSettings } from './SliderSettings';
import { useColorMode } from '@chakra-ui/react';
import { RestaurantCardProps } from '../components/types/RestaurantCardProps';

const fadeInOutVariants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  in: {
    opacity: 1,
    scale: 1
  },
  out: {
    opacity: 0,
    scale: 1.2
  },
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, linkColor }) => {
  const [showReview, setShowReview] = useState(false);

  return (
    <GridItem key={restaurant.id}>
      <Box borderWidth="1px" borderRadius="md" overflow="hidden">
        <AnimatePresence>
          {!showReview ? (
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={fadeInOutVariants}
              transition={{ duration: 0.5 }}
              key="photo"
              layoutId={`card-container-${restaurant.id}`}
            >
              <Slider {...sliderSettings}>
                {restaurant.images.map((image, index) => (
                  <div key={index} onClick={() => setShowReview(true)}>
                    <Image
                      src={image}
                      alt={`${restaurant.name} image ${index + 1}`}
                      h={200}
                      objectFit="cover"
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                ))}
              </Slider>
            </motion.div>
          ) : (
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              key="review"
              layoutId={`card-container-${restaurant.id}`}
              onClick={() => setShowReview(false)}
              style={{ cursor: 'pointer', padding: '1rem', textAlign: 'center' }}
            >
              <Text fontSize="lg">{restaurant.review}</Text>
            </motion.div>
          )}
        </AnimatePresence>
        <Box p={4}>
          <Heading as="h2" size="md" mb={2}>
            <Link href={`${restaurant.website}`} isExternal sx={{ color: linkColor }}>
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

const RestaurantListPage = () => {
  const { colorMode } = useColorMode();
  const linkColor = colorMode === 'dark' ? 'orange.300' : 'blue.500';

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Box p={2}>
        <Heading as="h1" size="xl" mb={4}>
          Restaurant Catalog
        </Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
          {foods.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} linkColor={linkColor} />
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default RestaurantListPage;
