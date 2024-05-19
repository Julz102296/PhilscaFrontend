import { Box, List, ListItem, Menu, MenuButton, MenuItem, MenuList, Tab, TabList, TabPanel, TabPanels, Tabs, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Stafftable from '../tables/Stafftable'
import Instructortable from '../tables/Instructortable'
import Studenttable from '../tables/Studenttable'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function PreList() {
  return (
    <>
    <Box>
      <Flex gap={5}>
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Sort
            </MenuButton>
            <MenuList>
              <MenuItem>ASC ID</MenuItem>
              <MenuItem>DESC ID</MenuItem>
              <MenuItem>ASC NAME</MenuItem>
              <MenuItem>DESC NAME</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Action
            </MenuButton>
            <MenuList>
              <MenuItem>Print</MenuItem>
              <MenuItem>Download</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        </Flex>
      </Box>
      
    <Tabs mt="10px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'purple.400'}}>
            Students
        </Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400'}}>
            Instructor
        </Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400'}}>
            Staff
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List>
            <ListItem>
              <Studenttable />
            </ListItem>
          </List>
        </TabPanel>


        <TabPanel>
          <List>
            <ListItem>
              <Instructortable />
            </ListItem>
          </List>
        </TabPanel>


        <TabPanel>
          <List>
            <ListItem>
              <Stafftable />
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </>
  )
}
