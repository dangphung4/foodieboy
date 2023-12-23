import { Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import { pageVariants, pageTransition } from "../components/types/framer";
import Papa from "papaparse";
import * as RestaurantDataCSV from "../data/RestaurantDataCSV.csv";

const CsvLandingPage = () => {
  const handleDownloadClick = () => {
    const csvData = Papa.unparse(RestaurantDataCSV as any);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "restaurant_data.csv");
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Flex
        w="100%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        p={8}
      >
        <VStack spacing={6} textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="extrabold">
            For the curious and creative
          </Heading>
          <Text color="slate" fontSize="lg" px={6}>
            A csv file spanning our collective NOVA restaurant data.
          </Text>
          <Button
            size="lg"
            colorScheme="red"
            px={8}
            py={6}
            borderRadius="md"
            onClick={handleDownloadClick}
          >
            Download CSV
          </Button>
        </VStack>
      </Flex>
    </motion.div>
  );
};

export default CsvLandingPage;
