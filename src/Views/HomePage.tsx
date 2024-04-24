import { Box, Flex, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/types/framer";

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
            mmmmm cheesecake...
          </Heading>
          <Text fontSize="xl" px={6}>
            <strong>Hello! This is my website of food spots that I like to go to. The plan is to revamp this website bc honestly its pretty bad, and if i feel like it i can add blogs.</strong>
          </Text>
        </Box>

        {/* About Me Section */}
        <Flex alignItems="center" mb={12}>
          <Image src="bigdang.jpg" alt="Profile" boxSize="300px" borderRadius="full" mr={8} />
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              About Me
            </Heading>
            <Text fontSize="lg">
              {/* Add your about me content here */}
              <strong>I have big heart, and an even bigger stomach. If I remember to update this website you'll see places that I've been to.</strong>
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
        McDonalds
      </Heading>
      <Flex alignItems="center" mb={4}>
        <Image src="mickyd.jpg" alt="Restaurant 1" boxSize="200px" objectFit="cover" mr={6} borderRadius="md" />
        <Box>
          <Text fontSize="lg" mb={2}>
            {/* Add a brief description of why you like this restaurant */}
            <strong>I love mcdonalds. This is one of the most exquisite places one could go to. From the fries to the burgers, everything is just perfect. The customer service is also top-notch.
              One thing to keep in mind is that the place is always crowded, so make sure to book a table in advance.
            </strong>
          </Text>
          <Text fontSize="md" color="blue.500" mb={2}>
            {/* Add the restaurant's website link */}
            <a href="https://www.mcdonalds.com/us/en-us.html" target="_blank" rel="noopener noreferrer">
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
        CM Chicken
      </Heading>
      <Flex alignItems="center" mb={4}>
        <Image src="cmchicken.jpg" alt="Restaurant 2" boxSize="200px" objectFit="cover" mr={6} borderRadius="md" />
        <Box>
          <Text fontSize="lg" mb={2}>
            {/* Add a brief description of why you like this restaurant */}
            <strong>I love fried chicken. If you can get tikkudak which is them smoking the chicken after deep frying it twice.... its wraps. PACK IT UP</strong>
          </Text>
          <Text fontSize="md" color="blue.500" mb={2}>
            {/* Add the restaurant's website link */}
            <a href="https://www.cmchicken.us/" target="_blank" rel="noopener noreferrer">
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