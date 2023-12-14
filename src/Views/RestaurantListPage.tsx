import { Box, Grid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./framer";
import { foods } from "./foodsTestData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useColorMode } from "@chakra-ui/react";
import { RestaurantCard } from "../components/RestaurantCard";

const RestaurantListPage = () => {
  const { colorMode } = useColorMode();
  const linkColor = colorMode === "dark" ? "orange.300" : "blue.500";

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
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              linkColor={linkColor}
            />
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default RestaurantListPage;
