import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReusableModal from '../components/ReusableModal';

export default function Instructortable() {
  const [modalContent, setModalContent] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const showuptoast = () => {
    toast({
      title: 'Updated',
      description: 'Updated details successfully',
      duration: 5000,
      isClosable: true,
      status: 'warning',
      position: 'top'
    })
  }

  const showdeltoast = () => {
    toast({
      title: 'Deleted',
      description: 'Deleted successfully',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top'
    })
  }

  const handleView = (instructor) => {
    setModalContent({
      title: 'View Instructor',
      body: (
        <div>
          <p><strong>Name:</strong> {instructor.name}</p>
          <p><strong>Position:</strong> {instructor.position}</p>
          <p><strong>Address:</strong> {instructor.address}</p>
          <p><strong>Contact Number:</strong> {instructor.contact}</p>
          <p><strong>Birthdate:</strong> {instructor.birthdate}</p>
          <p><strong>Gender:</strong> {instructor.gender}</p>
        </div>
      ),
      footer: (
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      )
    });
    onOpen();
  };

  const handleEdit = (instructor) => {
    setModalContent({
      title: 'Edit Instructor',
      body: (
        <div>
          <p><strong>Name : </strong><input type="text" placeholder={instructor.name}/></p>
          <p><strong>Position : </strong><input type="text" placeholder={instructor.position}/></p>
          <p><strong>Address : </strong><input type="text" placeholder={instructor.address}/></p>
          <p><strong>Contact Number : </strong><input type="text" placeholder={instructor.contact}/></p>
          <p><strong>Birthdate : </strong><input type="text" placeholder={instructor.birthdate}/></p>
          <p><strong>Gender : </strong><input type="text" placeholder={instructor.gender}/></p>
        </div>
      ),
      footer: (
        <Button colorScheme="green" mr={3} onClick={() => { 
          
          showuptoast();
          
          onClose();
        }}>
          Save
        </Button>
      )
    });
    onOpen();
  };

  const handleDelete = (instructor) => {
    setModalContent({
      title: 'Delete Instructor',
      body: (
        <p>Are you sure you want to delete {instructor.name}?</p>
      ),
      footer: (
        <Button colorScheme="red" mr={3} onClick={() => { 

          showdeltoast();

          onClose();
        }}>
          Delete
        </Button>
      )
    });
    onOpen();
  };

  const instructors = [
    {
      id: '123',
      name: 'Darwin Catalan',
      position: 'Academic Adviser',
      address: 'Dasmarinas Cavite',
      contact: '09649629379',
      birthdate: 'Feb 7, 1980',
      gender: 'M'
    },
    {
      id: '124',
      name: 'Aaron Alojado',
      position: 'Academic Coordinator',
      address: 'Taguig City',
      contact: '09642639470',
      birthdate: 'March 10, 1985',
      gender: 'M'
    }

  ];

  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Instructor List 2024</TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric>FacultyId</Th>
              <Th>Name</Th>
              <Th>Position</Th>
              <Th>Address</Th>
              <Th isNumeric>ContactNumber</Th>
              <Th>Birthdate</Th>
              <Th>Gender</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {instructors.map((instructor) => (
              <Tr key={instructor.id}>
                <Td isNumeric>{instructor.id}</Td>
                <Td>{instructor.name}</Td>
                <Td>{instructor.position}</Td>
                <Td>{instructor.address}</Td>
                <Td isNumeric>{instructor.contact}</Td>
                <Td>{instructor.birthdate}</Td>
                <Td>{instructor.gender}</Td>
                <Td>
                  <Button variant="ghost" leftIcon={<ViewIcon />} onClick={() => handleView(instructor)}></Button>
                  <Button variant="ghost" leftIcon={<EditIcon />} onClick={() => handleEdit(instructor)}></Button>
                  <Button variant="ghost" leftIcon={<DeleteIcon />} onClick={() => handleDelete(instructor)}></Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Lorem, ipsum.</Th>
              <Th>Lorem.</Th>
              <Th isNumeric>Lorem, ipsum.</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      {modalContent && (
        <ReusableModal
          isOpen={isOpen}
          onClose={onClose}
          title={modalContent.title}
          footer={modalContent.footer}
        >
          {modalContent.body}
        </ReusableModal>
      )}
    </>
  );
}
