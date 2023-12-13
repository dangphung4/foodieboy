import { Box, Heading, Text } from "@chakra-ui/react";

const HomePage = () => {
    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4}>
                Welcome to FoodieBoy!
            </Heading>
            <Text fontSize="lg">
                Start exploring delicious food options and satisfy your cravings.
            </Text>
        </Box>
    );
};

export default HomePage;
