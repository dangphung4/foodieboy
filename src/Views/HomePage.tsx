import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/types/framer";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/food");
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Flex
        w="100%"
        minH="100vh"
        direction="column"
        p={[4, 8]}
        align="center"
        justify="center"
      >
        <Box textAlign="center" mb={6} width={["90%", "80%", "70%"]} mx="auto">
          <Heading as="h1" size="2xl" fontWeight="extrabold" mb={4}>
            mmmmm cheesecake...
          </Heading>
          <Text fontSize="xl" px={6}>
            <strong>
              Hello! This is my website of food spots that I like to go to. The
              plan is to revamp this website bc honestly its pretty bad, and if
              i feel like it i can add blogs.
            </strong>
          </Text>
        </Box>
        {/* About Me Section */}
        <Flex
          direction={["column", "row"]}
          alignItems="center"
          justifyContent={["center", "flex-start"]}
          width={["90%", "80%"]}
          mb={6}
          textAlign={["center", "left"]}
          mx="auto"
        >
          <Image
            src="bigdang.jpg"
            alt="Profile"
            boxSize={["400px", "400px"]}
            borderRadius="full"
            mr={[0, 8]}
            mb={[4, 0]}
          />
          <Box textAlign={["center", "left"]} flex="1">
            <Heading as="h2" size="xl" mb={4}>
              About Me
            </Heading>
            <Text fontSize="lg">
              <strong>
                I have big heart, and an even bigger stomach. If I remember to
                update this website, you'll see places that I've been to.
              </strong>
            </Text>
          </Box>
        </Flex>
        
        {/* Favorite Restaurants Section */}
        <Box width="100%" textAlign="center" mb={12}>
          <Heading as="h2" size="xl" mb={6}>
            My Favorite Restaurants
          </Heading>
          <VStack spacing={8} alignItems="stretch">
            {/* Restaurant 1 */}
            <Box borderRadius="md" boxShadow="md" p={6}>
              <Flex direction={["column", "row"]} alignItems="center" mb={4}>
                <Image
                  src="mickyd.jpg"
                  alt="Restaurant 1"
                  boxSize={["100px", "200px"]}
                  objectFit="cover"
                  mb={[4, 0]} // Add bottom margin on mobile only
                  mr={[0, 6]} // Add right margin on desktop only
                  borderRadius="md"
                />
                <Box flex="1" textAlign={["center", "left"]}>
                  <Heading as="h3" size="lg" mb={4}>
                    McDonalds
                  </Heading>
                  <Text fontSize={["sm", "lg"]} mb={2}>
                    <strong>
                      I love mcdonalds. This is one of the most exquisite places
                      one could go to. From the fries to the burgers, everything
                      is just perfect. The customer service is also top-notch.
                      One thing to keep in mind is that the place is always
                      crowded, so make sure to book a table in advance.{" "}
                    </strong>{" "}
                  </Text>
                  <Text fontSize="md" color="blue.500" mb={2}>
                    <a
                      href="https://www.mcdonalds.com/us/en-us.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </Text>
                  <Text fontSize="md" fontWeight="bold">
                    <strong>My Rating: 4.5/5</strong>
                  </Text>
                </Box>
              </Flex>
            </Box>

            

            {/* Restaurant 2 */}
            <Box borderRadius="md" boxShadow="md" p={6}>
              <Flex direction={["column", "row"]} alignItems="center" mb={4}>
                <Image
                  src="cmchicken.jpg"
                  alt="CM Chicken"
                  boxSize={["100px", "200px"]}
                  objectFit="cover"
                  mb={[4, 0]} // Add bottom margin on mobile only
                  mr={[0, 6]} // Add right margin on desktop only
                  borderRadius="md"
                />
                <Box flex="1" textAlign={["center", "left"]}>
                  <Heading as="h3" size="lg" mb={4}>
                  CM Chicken
                  </Heading>
                  <Text fontSize={["sm", "lg"]} mb={2}>
                    <strong>
                    I love fried chicken. If you can get tikkudak which is
                      them smoking the chicken after deep frying it twice....
                      its wraps. PACK IT UP
                    </strong>
                  </Text>
                  <Text fontSize="md" color="blue.500" mb={2}>
                    <a
                      href="https://www.cmchicken.us/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </Text>
                  <Text fontSize="md" fontWeight="bold">
                    <strong>My Rating: 5/5</strong>
                  </Text>
                </Box>
              </Flex>
            </Box>

            {/* Add more restaurant boxes as needed */}
          </VStack>
        </Box>
        {/* Explore Button */}
        <Flex justifyContent="center">
          <Button
            size="lg"
            fontWeight="bold"
            px={8}
            py={6}
            borderRadius="lg"
            colorScheme="purple"
            onClick={handleExploreClick}
          >
            Explore Now
          </Button>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default HomePage;
