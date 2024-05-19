import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReusableModal from '../components/ReusableModal';


export default function Studenttable() {
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

  const handleView = (student) => {
    setModalContent({
      title: 'View Student',
      body: (
        <div>
          <p><strong>Name : </strong> {student.name}</p>
          <p><strong>Course : </strong> {student.course}</p>
          <p><strong>Year : </strong> {student.year}</p>
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

  const handleEdit = (student) => {
    setModalContent({
      title: 'Edit Student',
      body: (
        <div>
          <p><strong>Name : </strong><input type="text" placeholder={student.name}/></p>
          <p><strong>Year : </strong><input type="text" placeholder={student.year}/></p>
          <p><strong>Semester : </strong><input type="text" placeholder={student.semester}/></p>
          <p><strong>Address : </strong><input type="text" placeholder={student.address}/></p>
          <p><strong>Contact : </strong><input type="text" placeholder={student.contact}/></p>
          <p><strong>Birthdate : </strong><input type="text" placeholder={student.birthdate}/></p>
          <p><strong>Gender : </strong><input type="text" placeholder={student.gender}/></p>
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

  const handleDelete = (student) => {
    setModalContent({
      title: 'Delete Student',
      body: (
        <p>Are you sure you want to delete {student.name}?</p>
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

  const students = [
    {
      id: '001',
      name: 'Francel P. Foldosino',
      course: 'BSAIT',
      year: '3rd',
      schoolYear: '2024-2025',
      semester: '1st Sem/2nd Sem',
      address: 'Pasay City',
      contact: '09691097759',
      birthdate: 'Oct 30, 2002',
      gender: 'F'
    }

  ];

  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Student List 2024</TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric>StudentId</Th>
              <Th>Name</Th>
              <Th>Course</Th>
              <Th>Year</Th>
              <Th isNumeric>SchoolYear</Th>
              <Th>Semester Type</Th>
              <Th>Address</Th>
              <Th isNumeric>Contact</Th>
              <Th>Birthdate</Th>
              <Th>Gender</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student) => (
              <Tr key={student.id}>
                <Td isNumeric>{student.id}</Td>
                <Td>{student.name}</Td>
                <Td>{student.course}</Td>
                <Td>{student.year}</Td>
                <Td isNumeric>{student.schoolYear}</Td>
                <Td>{student.semester}</Td>
                <Td>{student.address}</Td>
                <Td isNumeric>{student.contact}</Td>
                <Td>{student.birthdate}</Td>
                <Td>{student.gender}</Td>
                <Td>
                  <Button variant="ghost" leftIcon={<ViewIcon />} onClick={() => handleView(student)}></Button>
                  <Button variant="ghost" leftIcon={<EditIcon />} onClick={() => handleEdit(student)}></Button>
                  <Button variant="ghost" leftIcon={<DeleteIcon />} onClick={() => handleDelete(student)}></Button>
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
