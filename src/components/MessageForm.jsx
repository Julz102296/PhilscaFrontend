import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';

export default function MessageForm() {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleSubmit = () => {

    if (!name || !email || !message) {
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
        description: "Message sent successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <Box p="20px">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Message</FormLabel>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </FormControl>
      <Button mt={4} w="100%" onClick={handleSubmit} colorScheme="purple" isLoading={isLoading}>
        Submit
      </Button>
    </Box>
  );
}
