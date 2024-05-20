import React, { useState } from 'react';
import Filters from '../components/Filters';
import {
  Box,
  Button,
  Card,
  Divider,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
// import { MdCheckCircle } from 'react-icons/md';
// import { ViewIcon } from '@chakra-ui/icons';
import IdModal from '../components/IdModal';

const studentData = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Bob Smith' },
  { id: 5, name: 'Emily Davis' },
  { id: 6, name: 'Michael Wilson' },
  { id: 7, name: 'Sophia Brown' },
  { id: 8, name: 'William Taylor' },
  { id: 9, name: 'Olivia Martinez' },
  { id: 10, name: 'James Anderson' },
];

export default function StudentIdList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleViewClick = (student) => {
    setSelectedStudent(student);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <>
      <Filters />
      <SimpleGrid minChildWidth="120px" spacing="10px" mt="20px">
        {studentData.map((student) => (
          <Card
            key={student.id}
            bg="purple.200"
            height="80px"
            rounded="lg"
            shadow="lg"
            p="10px"
            position="relative"
          >
            <List spacing={3}>
              <ListItem>
                <Text color="purple.800" fontSize={12}>{student.name}</Text>
              </ListItem>
            </List>
            <Divider borderColor="gray.400" />
            <Button
              position="absolute"
              size="xs"
              colorScheme="purple"
              textColor="white"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              onClick={() => handleViewClick(student)}
            >
              View
            </Button>
          </Card>
        ))}
      </SimpleGrid>
      <IdModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        studentName={selectedStudent?.name}
      />
    </>
  );
}
