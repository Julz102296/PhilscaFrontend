import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, useToast, Center } from '@chakra-ui/react';
import { IoMdQrScanner } from "react-icons/io";

export default function VerifyAccount() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleSubmit = () => {
    if (!fullName || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      toast({
        title: "Success",
        description: "Form submitted successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 2000);
  };


  const openCamera = () => {

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {

        console.log("Camera opened successfully!");
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  };

  return (
    <Box p={{ base: "10px", md: "20px" }}>
      <Stack spacing={6}>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
      </Stack>
      <Center mt={6}>
        <FormLabel>Face Recognition</FormLabel>
        <Button onClick={openCamera} colorScheme="purple" isLoading={isLoading}>
          <IoMdQrScanner/>
        </Button>
      </Center>
      <Center mt={4}>
        <Button w="100%" onClick={handleSubmit} colorScheme="purple" isLoading={isLoading}>
          Submit
        </Button>
      </Center>
    </Box>
  );
}
