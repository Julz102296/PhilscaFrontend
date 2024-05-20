import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, useToast } from '@chakra-ui/react';

export default function MissingForm({ isOpen, onClose }) {
  const [fullname, setFullname] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleSubmit = () => {
    if (!fullname || !photo) {
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
          <FormLabel>Full Name</FormLabel>
          <Input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Upload Affidavit of Loss</FormLabel>
          <Input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
        </FormControl>

        <Button onClick={handleSubmit} colorScheme="purple" isLoading={isLoading}>Submit</Button>
      </Stack>
    </Box>
  );
}
