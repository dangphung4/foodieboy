import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { StarRatingProps } from "./types/StarRatingProps";

// Single Star Component with adjustable fill
const Star = ({ fill }) => {
  return (
    <Box position="relative" display="inline-block" width="1em" height="1em">
      <Icon as={FaStar} color="gray.300" boxSize="1em" />
      <Box
        position="absolute"
        top="0"
        left="0"
        width={`${fill * 100}%`}
        height="100%"
        overflow="hidden"
        color="yellow.400"
      >
        <Icon as={FaStar} boxSize="1em" />
      </Box>
    </Box>
  );
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, i) => {
    const fill = Math.max(0, Math.min(1, rating - i));
    return <Star key={i} fill={fill} />;
  });

  return <Flex>{stars}</Flex>;
};

export default StarRating;
