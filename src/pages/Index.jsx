import { useState } from "react";
import { Box, Button, Flex, Heading, Input, Stack, Switch, Text, useToast, VStack } from "@chakra-ui/react";
import { FaUpload, FaSearch } from "react-icons/fa";

const Index = () => {
  const [useChatGPT, setUseChatGPT] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast();

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      // Simulate file processing and categorization
      toast({
        title: "Processing Files",
        description: "Files are being categorized and stored.",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleSearch = () => {
    // Simulate search functionality
    toast({
      title: "Searching",
      description: `Searching for documents related to: ${searchTerm}`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={8} p={5}>
      <Heading>Document Library</Heading>
      <Flex align="center" justify="space-between" w="full">
        <Text>Use ChatGPT for categorization:</Text>
        <Switch isChecked={useChatGPT} onChange={() => setUseChatGPT(!useChatGPT)} />
      </Flex>
      <Box>
        <Input type="file" multiple onChange={handleFileUpload} />
        <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleFileUpload}>
          Upload Documents
        </Button>
      </Box>
      <Stack direction="row" spacing={4}>
        <Input placeholder="Search by Pro #" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
    </VStack>
  );
};

export default Index;
