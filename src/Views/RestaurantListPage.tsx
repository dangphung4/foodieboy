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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./framer";
import { foods } from "./foodsTestData";
import StarRating from "../components/StarRating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from "./SliderSettings";
import { useColorMode } from '@chakra-ui/react';


//TODO add hyper link to restaurant card, allowing user to access restaurant page
//TODO Functionality to click on card and display review description
//TODO add field for category and filter by category
//TODO add field for price and filter by price
//TODO add field for location


const RestaurantListPage = () => {
  const { colorMode } = useColorMode();
  const linkColor = colorMode === 'dark' ? 'orange.300' : 'blue.500'; // Replace with your desired colors

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
            <GridItem key={restaurant.id}>
              <Box borderWidth="1px" borderRadius="md" overflow="hidden">
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
                    {/* Add buttons or actions here */}
                  </VStack>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default RestaurantListPage;
