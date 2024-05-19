import { useState } from 'react';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Select, SimpleGrid, Text, useToast } from "@chakra-ui/react";

export default function Create() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const toast = useToast();

  const validateForm = () => {
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {

      showtoast();
    }
  };

  const showtoast = () => {
    toast({
      title: 'Wow Grape',
      description: 'Created new account successfully',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'bottom'
    });
  };

  return (
    <SimpleGrid>
      <Box maxW="500px">
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.fullName}>
            <FormLabel>Full Name</FormLabel>
            <Input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <FormHelperText>{errors.fullName}</FormHelperText>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email address</FormLabel>
            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormHelperText>{errors.email}</FormHelperText>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <FormHelperText>{errors.password}</FormHelperText>
          </FormControl>

          <Button colorScheme='green' mt="20px" size='lg' type="submit">
            Create User
          </Button>
        </form>
      </Box>
    </SimpleGrid>
  );
}
