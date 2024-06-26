import { Flex, Heading, Box, Text, Button, Spacer, HStack, useToast, WrapItem, Avatar } from "@chakra-ui/react"

export default function Navbar() {

  const toast = useToast();

  const showtoast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top'
    })
  }

  return (
    <Flex as="nav" marginBottom="40px" p="10px" alignItems="center">
      <Heading as="h1" color="purple.500">Philsca</Heading>
      <Spacer />

      <HStack spacing="20px"> 
      <WrapItem>
        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
      </WrapItem>
        <Text>philsca@gmail.dev</Text>
        <Button colorScheme="purple" onClick={showtoast}>Logout</Button>
      </HStack>
    </Flex>

    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap={2}>
    //   <Box w="150px" h="50px" bg="red">1</Box>
    //   <Box w="150px" h="50px" bg="blue">2</Box>
    //   <Box w="150px" flexGrow="1" h="50px" bg="green">3</Box>
    //   <Box w="150px" flexGrow="2" h="50px" bg="yellow">4</Box>
    // </Flex>
  )
}
