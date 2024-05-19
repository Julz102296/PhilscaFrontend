import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReusableModal from '../components/ReusableModal';

export default function Stafftable() {
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


  const handleView = (staff) => {
    setModalContent({
      title: 'View Staff',
      body: (
        <div>
          <p><strong>Name:</strong> {staff.name}</p>
          <p><strong>Position:</strong> {staff.position}</p>
          <p><strong>Address:</strong> {staff.address}</p>
          <p><strong>Contact Number:</strong> {staff.contact}</p>
          <p><strong>Birthdate:</strong> {staff.birthdate}</p>
          <p><strong>Gender:</strong> {staff.gender}</p>
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

  const handleEdit = (staff) => {
    setModalContent({
      title: 'Edit Staff',
      body: (
        <div>
          <p><strong>Name : </strong><input type="text" placeholder={staff.name}/></p>
          <p><strong>Position : </strong><input type="text" placeholder={staff.position}/></p>
          <p><strong>Address : </strong><input type="text" placeholder={staff.address}/></p>
          <p><strong>Contact Number : </strong><input type="text" placeholder={staff.contact}/></p>
          <p><strong>Birthdate : </strong><input type="text" placeholder={staff.birthdate}/></p>
          <p><strong>Gender : </strong><input type="text" placeholder={staff.gender}/></p>
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

  const handleDelete = (staff) => {
    setModalContent({
      title: 'Delete Staff',
      body: (
        <p>Are you sure you want to delete {staff.name}?</p>
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

  const staffList = [
    {
      id: '123',
      name: 'Mikay Toro',
      position: 'Janitress',
      address: 'Pasay City',
      contact: '09748254926',
      birthdate: 'January 1, 1999',
      gender: 'F'
    },
    {
      id: '456',
      name: 'Celine Domingo',
      position: 'Technician',
      address: 'Taguig City',
      contact: '09749251759',
      birthdate: 'May 6, 1995',
      gender: 'F'
    }

  ];

  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Staff List 2024</TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric>StaffId</Th>
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
            {staffList.map((staff) => (
              <Tr key={staff.id}>
                <Td isNumeric>{staff.id}</Td>
                <Td>{staff.name}</Td>
                <Td>{staff.position}</Td>
                <Td>{staff.address}</Td>
                <Td isNumeric>{staff.contact}</Td>
                <Td>{staff.birthdate}</Td>
                <Td>{staff.gender}</Td>
                <Td>
                  <Button variant="ghost" leftIcon={<ViewIcon />} onClick={() => handleView(staff)}></Button>
                  <Button variant="ghost" leftIcon={<EditIcon />} onClick={() => handleEdit(staff)}></Button>
                  <Button variant="ghost" leftIcon={<DeleteIcon />} onClick={() => handleDelete(staff)}></Button>
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
