import React, { useState } from 'react';
import { Box, Button, Card, CardBody, CardFooter, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import ReusableModal from './ReusableModal';
import MissingForm from './MissingForm';
import FoundForm from './FoundForm';
import VerifyAccount from './VerifyAccount';
import MessageForm from './MessageForm';

export default function UserDashboard() {

  const [missingIdModalOpen, setMissingIdModalOpen] = useState(false);
  const [foundIdModalOpen, setFoundIdModalOpen] = useState(false);
  const [verifyAccountModalOpen, setVerifyAccountModalOpen] = useState(false);
  const [otherConcernsModalOpen, setOtherConcernsModalOpen] = useState(false);

  const handleMissingIdModalOpen = () => setMissingIdModalOpen(true);
  const handleMissingIdModalClose = () => setMissingIdModalOpen(false);
  const handleFoundIdModalOpen = () => setFoundIdModalOpen(true);
  const handleFoundIdModalClose = () => setFoundIdModalOpen(false);
  const handleVerifyAccountModalOpen = () => setVerifyAccountModalOpen(true);
  const handleVerifyAccountModalClose = () => setVerifyAccountModalOpen(false);
  const handleOtherConcernsModalOpen = () => setOtherConcernsModalOpen(true);
  const handleOtherConcernsModalClose = () => setOtherConcernsModalOpen(false);

  return (
    <SimpleGrid columns={1} spacing={5}>
      <Box rounded="lg">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='images/found.jpg'
          />
          <Stack>
            <CardBody>
              <Heading size='md'>Lost and Found</Heading>
              <Text py='2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, voluptatibus!
              </Text>
            </CardBody>
            <CardFooter gap={2}>
              <Button variant='solid' colorScheme='purple' onClick={handleMissingIdModalOpen}>
                Report Missing ID
              </Button>
              <Button variant='solid' colorScheme='purple' onClick={handleFoundIdModalOpen}>
                Report Found ID
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>

      <Box rounded="lg">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='images/verify.jpg'
          />
          <Stack>
            <CardBody>
              <Heading size='md'>Verify as account</Heading>
              <Text py='2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, nobis!
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='purple' onClick={handleVerifyAccountModalOpen}>
                Verify Now
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>

      <Box rounded="lg">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='images/message.jpg'
          />
          <Stack>
            <CardBody>
              <Heading size='md'>Other Concerns</Heading>
              <Text py='2'>
                Caffè latte is a coffee beverage of Italian origin made with espresso
                and steamed milk.
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='purple' onClick={handleOtherConcernsModalOpen}>
                Create a message
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>

      {/* Modals */}
      <ReusableModal
        isOpen={missingIdModalOpen}
        onClose={handleMissingIdModalClose}
        title="Report Missing ID"
      >
        <MissingForm />
      </ReusableModal>

      <ReusableModal
        isOpen={foundIdModalOpen}
        onClose={handleFoundIdModalClose}
        title="Report Found ID"
      >
        <FoundForm />
      </ReusableModal>

      <ReusableModal
        isOpen={verifyAccountModalOpen}
        onClose={handleVerifyAccountModalClose}
        title="Verify Account"
      >
        <VerifyAccount />
      </ReusableModal>

      <ReusableModal
        isOpen={otherConcernsModalOpen}
        onClose={handleOtherConcernsModalClose}
        title="Other Concerns"
      >
        <MessageForm />
      </ReusableModal>
    </SimpleGrid>
  )
}
