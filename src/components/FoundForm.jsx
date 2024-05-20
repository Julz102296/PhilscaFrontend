import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, useToast } from '@chakra-ui/react';

export default function FoundForm({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [datefound, setDateFound] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = () => {
    if (!name || !datefound || !photo) {
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

      onClose();
    }, 2000);
  };

  return (
    <Box p="20px">
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Date Found</FormLabel>
          <Input type="date" value={datefound} onChange={(e) => setDateFound(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Upload Image of ID Found</FormLabel>
          <Input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
        </FormControl>

        <Button onClick={handleSubmit} colorScheme="purple" isLoading={isLoading}>Submit</Button>
      </Stack>
    </Box>
  );
}
