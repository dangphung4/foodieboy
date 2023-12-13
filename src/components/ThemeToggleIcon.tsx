// ThemeToggleIcon.js
import React from 'react';
import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa'; 

const ThemeToggleIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("gray.800", "white"); 
  
  return (
    <IconButton
      aria-label='Toggle theme'
      variant='solid'
      color={iconColor} 
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggleIcon;
