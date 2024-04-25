// CreateReviewPage.tsx
import { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Grid,
  GridItem,
  Image,
  Text,
  Link,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/types/framer";
import StarRating from "../components/StarRating";
import axios from "axios";

const CreateReviewPage = () => {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [ratingError, setRatingError] = useState(false);

  const toast = useToast();

  const handleImageChange = (e) => {
    const urls = e.target.value.split(",").map((url) => url.trim());
    setImages(urls);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating > 5) {
      setRatingError(true);
      return;
    }

    const reviewData = {
        name,
        website,
        description,
        images,
        rating,
        category,
        location,
        user_id: "your_user_id", // Replace with the actual user ID
      };
    
      try {
        await axios.post(
          "https://ystl4bvhi3.execute-api.us-east-1.amazonaws.com/dev/reviews/create/",
          reviewData
        );
        // Reset form fields after successful submission
        setName("");
        setWebsite("");
        setDescription("");
        setImages([]);
        setRating(0);
        setCategory("");
        setLocation("");
        setRatingError(false);
    
        // Show success toast notification
        toast({
          title: "Review submitted",
          description: "Your review has been successfully submitted.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error("Error creating review:", error);
        // Show error toast notification
        toast({
          title: "Submission failed",
          description: "An error occurred while submitting your review.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

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
          Create Review
        </Heading>
        <Grid templateColumns="1fr 1fr" gap={8}>
          <GridItem>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter the restaurant name"
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Website</FormLabel>
                  <Input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Enter the restaurant website"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter a description of the restaurant"
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Images (comma-separated URLs)</FormLabel>
                  <Input
                    type="text"
                    value={images.join(", ")}
                    onChange={handleImageChange}
                    placeholder="Enter comma-separated image URLs"
                  />
                </FormControl>
                <FormControl isInvalid={ratingError}>
                  <FormLabel>Rating</FormLabel>
                  <Input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      if (value >= 1 && value <= 5) {
                        setRating(value);
                        setRatingError(false);
                      } else {
                        setRatingError(true);
                      }
                    }}
                    placeholder="Enter a rating between 1 and 5"
                    required
                  />
                  {ratingError && (
                    <FormErrorMessage>
                      Rating must be a decimal number between 1 and 5.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel>Category</FormLabel>
                  <Input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter the restaurant category"
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter the restaurant location"
                    required
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue">
                  Submit Review
                </Button>
              </VStack>
            </form>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="md" p={4}>
              <Heading as="h2" size="md" mb={2}>
                {name}
              </Heading>
              <Text mb={2}>{description}</Text>
              <HStack spacing={4} mb={4}>
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Review Image ${index + 1}`}
                    boxSize="100px"
                    objectFit="cover"
                  />
                ))}
              </HStack>
              <StarRating rating={rating} />
              <Text mt={2}>Category: {category}</Text>
              <Text>Location: {location}</Text>
              {website && (
                <Link href={website} color="blue.400" isExternal mt={2}>
                  Visit Website
                </Link>
              )}
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default CreateReviewPage;
