import React from "react";
import { Button } from "@chakra-ui/react";
import { FoodButtonProps } from "./types/FoodButtonProps";

const FoodButton: React.FC<FoodButtonProps> = ({ label, onClick }) => {
  return (
    <Button onClick={onClick} colorScheme="whatsapp">
      {label}
    </Button>
  );
};

export default FoodButton;
