import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Textarea, VStack, Text, useToast } from "@chakra-ui/react";
import { FaHandsHelping } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [charities, setCharities] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [charityMessage, setCharityMessage] = useState("");
  const [volunteerMessage, setVolunteerMessage] = useState("");
  const toast = useToast();

  const handleCharitySubmit = () => {
    if (!charityMessage) return;
    setCharities([...charities, charityMessage]);
    setCharityMessage("");
    toast({
      title: "Opportunity Posted",
      description: "Your volunteering opportunity has been posted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleVolunteerSubmit = () => {
    if (!volunteerMessage) return;
    setVolunteers([...volunteers, volunteerMessage]);
    setVolunteerMessage("");
    toast({
      title: "Availability Posted",
      description: "Your availability as a volunteer has been posted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          Volunteer Match <FaHandsHelping />
        </Heading>

        <Stack direction={["column", "row"]} spacing={4} width="100%">
          <Box width={["100%", "50%"]} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md" mb={4} textAlign="center">
              Charities
            </Heading>
            <FormControl isRequired>
              <FormLabel>Opportunity Details</FormLabel>
              <Textarea placeholder="Describe the volunteering opportunity..." value={charityMessage} onChange={(e) => setCharityMessage(e.target.value)} />
            </FormControl>
            <Button mt={4} colorScheme="blue" onClick={handleCharitySubmit}>
              Post Opportunity
            </Button>
            <Flex direction="column" mt={4}>
              {charities.map((msg, index) => (
                <Text key={index} mt={2} bg="gray.100" p={2} borderRadius="md">
                  {msg}
                </Text>
              ))}
            </Flex>
          </Box>

          <Box width={["100%", "50%"]} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md" mb={4} textAlign="center">
              Volunteers
            </Heading>
            <FormControl isRequired>
              <FormLabel>Availability Message</FormLabel>
              <Textarea placeholder="Let charities know you're available to volunteer..." value={volunteerMessage} onChange={(e) => setVolunteerMessage(e.target.value)} />
            </FormControl>
            <Button mt={4} colorScheme="green" onClick={handleVolunteerSubmit}>
              Post Availability
            </Button>
            <Flex direction="column" mt={4}>
              {volunteers.map((msg, index) => (
                <Text key={index} mt={2} bg="gray.100" p={2} borderRadius="md">
                  {msg}
                </Text>
              ))}
            </Flex>
          </Box>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
