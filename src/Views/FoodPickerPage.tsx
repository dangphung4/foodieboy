import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import FoodButton from '../components/FoodButton';
import { pageVariants, pageTransition } from "./framer";
import { motion } from "framer-motion";

const FoodPickerPage: React.FC = () => {
    return (
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        >
        <Box>
            <Heading as="h1" size="xl">Food Picker Page</Heading>
            <FoodButton label='CLICK ME NOW'/>
        </Box>
        </motion.div>
    );
};

export default FoodPickerPage;
