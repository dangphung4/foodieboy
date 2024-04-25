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
import CategoryDropdown from "../components/CategoryDropdown";
import axios from "axios";
import ReactMarkdown from "react-markdown";

/**
 * Create review page
 * This is the page where the user can create a review
 * TODO have a lot of stuff i need to make this good
 * @returns {React.ReactElement} The create review page
 * @constructor
 * @returns {*}
 *
 * @returns {*}
 */
const CreateReviewPage = () => {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [review, setReview] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [ratingError, setRatingError] = useState(false);

  const toast = useToast();

  const handleImageChange = (e: { target: { value: string } }) => {
    const urls = e.target.value.split(",").map((url) => url.trim());
    setImages(urls);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (rating !== null && rating > 5) {
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
      review,
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
      setReview("");
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
  const customComponents = {
    h1: ({ children }: any) => (
      <Heading as="h1" size="2xl">
        {children}
      </Heading>
    ),
    h2: ({ children }: any) => (
      <Heading as="h2" size="xl">
        {children}
      </Heading>
    ),
    h3: ({ children }: any) => (
      <Heading as="h3" size="lg">
        {children}
      </Heading>
    ),
    h4: ({ children }: any) => (
      <Heading as="h4" size="md">
        {children}
      </Heading>
    ),
    h5: ({ children }: any) => (
      <Heading as="h5" size="sm">
        {children}
      </Heading>
    ),
    h6: ({ children }: any) => (
      <Heading as="h6" size="xs">
        {children}
      </Heading>
    ),
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
                {/* MAKE THIS MARKDOWN COMPATITBLE */}
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter a description of the restaurant"
                    required
                  />
                </FormControl>
                {/* MAKE THIS MARKDOWN COMPATITBLE */}
                <FormControl>
                  <FormLabel>Review</FormLabel>
                  <Textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Enter a review of the restaurant"
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
                    value={rating ?? ""}
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
                  <CategoryDropdown
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
              <ReactMarkdown components={customComponents}>
                {description}
              </ReactMarkdown>
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
              <StarRating rating={rating || 0} />
              <Text mt={2}>Category: {category}</Text>
              <Text>Location: {location}</Text>
              {website && (
                <Link href={website} color="blue.400" isExternal mt={2}>
                  Visit Website
                </Link>
              )}
              <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                  Review
                </Heading>
                <Box borderWidth="1px" borderRadius="md" p={2}>
                  <ReactMarkdown components={customComponents}>
                    {review}
                  </ReactMarkdown>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default CreateReviewPage;
