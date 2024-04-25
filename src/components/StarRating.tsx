import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { StarRatingProps } from "./types/StarRatingProps";

/**
 * Star component
 * This component displays a star
 * The point of this component is to display a star with a fill percentage
 * The max value of the fill is 1
 * @param {StarRatingProps} param0 - The properties of the star
 * @returns {React.ReactElement} The star
 * @see https://chakra-ui.com/docs/layout/flex
 */
const Star = ({ fill }: { fill: number }) => {
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

/**
 * Star rating
 * This component displays a star rating
 * The point of this component is to display a rating in stars
 * The rating is a number between 0 and 5
 * @param {StarRatingProps} param0 - The properties of the star rating
 * @returns {React.ReactElement} The star rating
 * @see https://chakra-ui.com/docs/layout/flex
 */
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, i) => {
    const fill = Math.max(0, Math.min(1, rating - i));
    return <Star key={i} fill={fill} />;
  });

  return <Flex>{stars}</Flex>;
};

export default StarRating;
