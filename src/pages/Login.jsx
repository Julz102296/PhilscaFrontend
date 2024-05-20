import React, { useState } from 'react';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Select, Text, Stack, useToast, Heading } from '@chakra-ui/react';

export default function Login() {
  const [formData, setFormData] = useState({
    role: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.role) newErrors.role = 'Role is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);

    const loginPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5; // Simulate success or failure
        isSuccess ? resolve(200) : reject(new Error('Login failed'));
      }, 2000);
    });

    toast.promise(loginPromise, {
      success: { title: 'Login successful', description: 'Welcome back!' },
      error: { title: 'Login failed', description: 'Please check your credentials and try again.' },
      loading: { title: 'Logging in', description: 'Please wait...' },
    }).finally(() => {
      setIsLoading(false);
    });

    loginPromise.then(() => {

      console.log('Login successful');

    }).catch((error) => {
      
      console.error(error.message);

    });
  };

  return (
    <Box
      height="100vh"
      position="relative"
      bg="purple.400"
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        position="absolute"
        top="20px"
        left="20px"
        color="purple.200"
      >
        Philsca
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="white"
        p="30px"
        rounded="20px"
        width="350px"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        shadow="2xl"
      >
        <Text fontSize="2xl" fontWeight="bold" mb="4" color="purple.500">Login</Text>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isInvalid={errors.role}>
              <Select name="role" placeholder='Select role' onChange={handleChange}>
                <option value='Student'>Student</option>
                <option value='Instructor'>Instructor</option>
                <option value='Staff'>Staff</option>
                <option value='Admin'>Admin</option>
              </Select>
              {errors.role && <FormHelperText color="red.500">{errors.role}</FormHelperText>}
            </FormControl>

            <FormControl isRequired isInvalid={errors.email}>
              <FormLabel color="purple.500">Email</FormLabel>
              <Input type="text" name="email" placeholder="admincocomartin@gmail.com" onChange={handleChange}/>
              {errors.email ? <FormHelperText color="red.500">{errors.email}</FormHelperText> : <FormHelperText>Input a valid email</FormHelperText>}
            </FormControl>

            <FormControl isRequired isInvalid={errors.password}>
              <FormLabel color="purple.500">Password</FormLabel>
              <Input type="password" name="password" onChange={handleChange} />
              {errors.password ? <FormHelperText color="red.500">{errors.password}</FormHelperText> : <FormHelperText>Use 8 characters or more for your password</FormHelperText>}
            </FormControl>

            <FormControl>
              <Button
                width="100%"
                bg="purple.400"
                textColor="white"
                mt="30px"
                isLoading={isLoading}
                type="submit"
              >
                Login
              </Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Box>
  )
}
