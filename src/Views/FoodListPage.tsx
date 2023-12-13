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
} from "@chakra-ui/react";

const FoodListPage = () => {
  const foods = [
    {
      id: 1,
      name: "Pizza",
      description: "Delicious pizza with various toppings",
      image: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    },
    {
      id: 2,
      name: "Burger",
      description: "Juicy burger with cheese and veggies",
      image: "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg",
    },
    // Add more food items here
  ];

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Food Catalog
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
        {foods.map((food) => (
          <GridItem key={food.id}>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden">
              <Image
                src={food.image}
                alt={food.name}
                h={200}
                objectFit="cover"
              />
              <Box p={4}>
                <Heading as="h2" size="md" mb={2}>
                  {food.name}
                </Heading>
                <Text>{food.description}</Text>
              </Box>
              <Flex p={4}>
                <Spacer />
                <VStack spacing={2}>{/* Add buttons or actions here */}</VStack>
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default FoodListPage;
