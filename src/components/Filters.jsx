import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Button, Input } from '@chakra-ui/react'
import React from 'react'

export default function Filters() {
  return (
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
        <Box>
          <Input placeholder="Search" />
        </Box>
        </Flex>
      </Box>
  )
}
