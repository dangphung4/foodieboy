import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { StarRatingProps } from "./types/StarRatingProps";

/**
 * Star rating
 * This component displays a star rating including partial stars for decimal ratings
 * @param {StarRatingProps} props - The properties of the star rating
 * @returns {React.ReactElement} The star rating
 */
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = (rating % 1) >= 0.5 ? 1 : 0;
  const emptyStars = totalStars - fullStars - halfStar;

  return (
    <Flex>
      {[...Array(fullStars)].map((_, i) => (
        <Icon
          key={`full-${i}`}
          as={FaStar}
          color="yellow.400"
        />
      ))}
      {halfStar === 1 && (
        <Icon
          as={FaStarHalfAlt}
          color="yellow.400"
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon
          key={`empty-${i}`}
          as={FaRegStar}
          color="gray.300"
        />
      ))}
    </Flex>
  );
};

export default StarRating;
