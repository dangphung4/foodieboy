import React from "react";
import { Button } from "@chakra-ui/react";

export type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const FoodButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <Button onClick={onClick} colorScheme="whatsapp">
      {label}
    </Button>
  );
};

export default FoodButton;
