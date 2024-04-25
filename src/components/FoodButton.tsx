import React from "react";
import { Button } from "@chakra-ui/react";
import { FoodButtonProps } from "./types/FoodButtonProps";

/**
 * Food button
 * Currently just a button, tbh im not sure why this is a component
 * This is a button that is used to display food items
 * @param {FoodButtonProps} props - The properties of the food button
 * @returns {React.ReactElement} The food button
 */
const FoodButton: React.FC<FoodButtonProps> = ({ label, onClick }) => {
  return (
    <Button onClick={onClick} colorScheme="whatsapp">
      {label}
    </Button>
  );
};

export default FoodButton;
