// import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'
// import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Studenttable from '../tables/Studenttable'

export default function StudentIdList() {
  return (
    <Studenttable />
      
  )
}

{/* <TableContainer>
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
      <Tr>
        <Td isNumeric>001</Td>
        <Td>Francel P. Foldosino</Td>
        <Td>BSAIT</Td>
        <Td>3rd</Td>
        <Td isNumeric>2024-2025</Td>
        <Td>1st Sem/2nd Sem</Td>
        <Td>Pasay City</Td>
        <Td isNumeric>09691097759</Td>
        <Td isNumeric>Oct 30,2002</Td>
        <Td>F</Td>
        <Td>
          <Button variant="ghost" leftIcon={<ViewIcon />}></Button>
          <Button variant="ghost" leftIcon={<EditIcon />}></Button>
          <Button variant="ghost" leftIcon={<DeleteIcon />}></Button>
        </Td>
      </Tr>
      <Tr>
      <Td isNumeric>002</Td>
        <Td>Casandra Denise O. Dizon</Td>
        <Td>BSAIT</Td>
        <Td>3rd</Td>
        <Td isNumeric>2024-2025</Td>
        <Td>1st Sem/2nd Sem</Td>
        <Td>Pasay City</Td>
        <Td isNumeric>09260949090</Td>
        <Td isNumeric>May 29,2003</Td>
        <Td>F</Td>
        <Td>
          <Button variant="ghost" leftIcon={<ViewIcon />}></Button>
          <Button variant="ghost" leftIcon={<EditIcon />}></Button>
          <Button variant="ghost" leftIcon={<DeleteIcon />}></Button>
        </Td>
      </Tr>
      <Tr>
      <Td isNumeric>003</Td>
        <Td>Anton Van F. Domingo</Td>
        <Td>BSAIT</Td>
        <Td>3rd</Td>
        <Td isNumeric>2024-2025</Td>
        <Td>1st Sem/2nd Sem</Td>
        <Td>Taguig City</Td>
        <Td isNumeric>09091469100</Td>
        <Td isNumeric>Apr 7, 2001</Td>
        <Td>M</Td>
        <Td>
          <Button variant="ghost" leftIcon={<ViewIcon />}></Button>
          <Button variant="ghost" leftIcon={<EditIcon />}></Button>
          <Button variant="ghost" leftIcon={<DeleteIcon />}></Button>
        </Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Lorem, ipsum.</Th>
        <Th>Lorem.</Th>
        <Th isNumeric>Lorem, ipsum.</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer> */}
