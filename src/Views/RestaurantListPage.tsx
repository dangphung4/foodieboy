import { Box, Grid, Heading, Select } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/types/framer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useColorMode } from "@chakra-ui/react";
import { RestaurantCard } from "../components/RestaurantCard";
import { SetStateAction, useState, useEffect } from "react";
import axios from "axios";
import { Restaurant } from "../components/types/Restaurant";
/**
 * Restaurant list page
 * This is the page where the user can see a list of restaurants
 * @returns {React.ReactElement} The restaurant list page
 */

// TODO I will need to purge a lot of these fields bc honestly theres way too many
// TODO migrate this to db and postresql
// TODO add href to review page, review edit page and review create page
// TODO rename this to reviews, restaurant is not correct

const RestaurantListPage = () => {
  const { colorMode } = useColorMode();
  const linkColor = colorMode === "dark" ? "orange.300" : "blue.500";

  const [restaurants, setRestaurants] = useState<Restaurant[]>();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(
        "https://ystl4bvhi3.execute-api.us-east-1.amazonaws.com/dev/reviews"
      );
      console.log("response", response);
      setRestaurants(response.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };
  const handleCategoryChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedCategory(event.target.value);
  };


  const filteredRestaurants =
    selectedCategory === "All"
      ? restaurants ?? []
      : restaurants?.filter(
          (restaurant: { category: string }) =>
            restaurant.category === selectedCategory
        ) ?? [];

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

        {/* TODO I will need to purge a lot of these fields bc honestly theres way too many */}
        <Select
          placeholder="Select category"
          onChange={handleCategoryChange}
          mb={8}
        >
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Korean">Korean</option>
          <option value="Japanese">Japanese</option>
          <option value="Chinese">Chinese</option>
          <option value="Mexican">Mexican</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Thai">Thai</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
          <option value="Greek">Greek</option>
          <option value="Caribbean">Caribbean</option>
          <option value="African">African</option>
          <option value="Nepalese">Nepalese</option>
        </Select>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
          {filteredRestaurants.map((restaurant) => (
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
