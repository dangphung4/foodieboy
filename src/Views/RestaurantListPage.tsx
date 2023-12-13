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

//TODO add hyper link to restaurant card, allowing user to access restaurant page
//TODO Functionality to click on card and display review description

const RestaurantListPage = () => {
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
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  h={200}
                  objectFit="cover"
                />
                <Box p={4}>
                  <Heading as="h2" size="md" mb={2}>
                    {restaurant.name}
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
