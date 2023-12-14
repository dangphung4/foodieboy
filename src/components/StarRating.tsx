import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { StarRatingProps } from "./types/StarRatingProps";

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;

  return (
    <Flex>
      {[...Array(totalStars)].map((_, i) => (
        <Icon
          key={i}
          as={i < rating ? FaStar : FaRegStar}
          color={i < rating ? "yellow.400" : "gray.300"}
        />
      ))}
    </Flex>
  );
};

export default StarRating;
