import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import FoodButton from '../components/FoodButton';

const FoodPickerPage: React.FC = () => {
    return (
        <Box>
            <Heading as="h1" size="xl">Food Picker Page</Heading>
            <FoodButton label='CLICK ME NOW'/>
        </Box>
    );
};

export default FoodPickerPage;
