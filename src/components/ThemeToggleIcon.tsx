import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("gray.800", "white");

  
  /** 
   * Theme toggle icon
   * This component displays a theme toggle icon
   * The point of this component is to toggle the theme, it will display a sun or moon icon depending on the current theme
   * @returns {React.ReactElement} The theme toggle icon
   */
  return (
    <IconButton
      aria-label="Toggle theme"
      variant="solid"
      color={iconColor}
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggleIcon;
