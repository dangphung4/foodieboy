import { Box, Flex, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./framer";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/food");
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <Flex w="100%" minH="100vh" direction="column" p={8}>
        {/* Introduction Section */}
        <Box textAlign="center" mb={12}>
          <Heading as="h1" size="2xl" fontWeight="extrabold" mb={6}>
            Welcome to FoodieBoy!
          </Heading>
          <Text fontSize="xl" px={6}>
            <strong>Hello! This is my website of food spots that I like to go to. I will have photos of my food that I will import, photos of me, photos of my favorite foods, and descriptions about my favorite spots to eat, and so forth.</strong>
          </Text>
        </Box>

        {/* About Me Section */}
        <Flex alignItems="center" mb={12}>
          <Image src="profile.jpg" alt="Profile" boxSize="200px" borderRadius="full" mr={8} />
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              About Me
            </Heading>
            <Text fontSize="lg">
              {/* Add your about me content here */}
              <strong>I'm a passionate food enthusiast who loves exploring new restaurants and cuisines. Join me on my culinary adventures as I share my experiences and recommendations!</strong>
            </Text>
          </Box>
        </Flex>

        {/* Favorite Restaurants Section */}
<Box mb={12}>
  <Heading as="h2" size="xl" mb={6}>
    My Favorite Restaurants
  </Heading>
  <VStack spacing={8} alignItems="stretch">
    {/* Restaurant 1 */}
    <Box borderRadius="md" boxShadow="md" p={6}>
      <Heading as="h3" size="lg" mb={4}>
        Restaurant 1
      </Heading>
      <Flex alignItems="center" mb={4}>
        <Image src="restaurant1.jpg" alt="Restaurant 1" boxSize="200px" objectFit="cover" mr={6} borderRadius="md" />
        <Box>
          <Text fontSize="lg" mb={2}>
            {/* Add a brief description of why you like this restaurant */}
            <strong>I love the cozy ambiance and the delicious pasta dishes at this Italian restaurant. The staff is always friendly and attentive.</strong>
          </Text>
          <Text fontSize="md" color="blue.500" mb={2}>
            {/* Add the restaurant's website link */}
            <a href="https://www.restaurant1.com" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </Text>
          <Text fontSize="md" fontWeight="bold">
            {/* Add your review or rating */}
            <strong>My Rating: 4.5/5</strong>
          </Text>
        </Box>
      </Flex>
    </Box>

    {/* Restaurant 2 */}
    <Box borderRadius="md" boxShadow="md" p={6}>
      <Heading as="h3" size="lg" mb={4}>
        Restaurant 2
      </Heading>
      <Flex alignItems="center" mb={4}>
        <Image src="restaurant2.jpg" alt="Restaurant 2" boxSize="200px" objectFit="cover" mr={6} borderRadius="md" />
        <Box>
          <Text fontSize="lg" mb={2}>
            {/* Add a brief description of why you like this restaurant */}
            <strong>This sushi place offers the freshest and most creative rolls in town. The chef's special is a must-try!</strong>
          </Text>
          <Text fontSize="md" color="blue.500" mb={2}>
            {/* Add the restaurant's website link */}
            <a href="https://www.restaurant2.com" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </Text>
          <Text fontSize="md" fontWeight="bold">
            {/* Add your review or rating */}
            My Rating: 5/5
          </Text>
        </Box>
      </Flex>
    </Box>

    {/* Add more restaurant boxes as needed */}
  </VStack>
</Box>

        {/* Explore Button */}
        <Flex justifyContent="center">
        <Button size="lg" fontWeight="bold" px={8} py={6} borderRadius="lg" colorScheme="purple" onClick={handleExploreClick}>
            Explore Now
          </Button>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default HomePage;