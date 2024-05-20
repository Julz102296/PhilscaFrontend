import React from 'react'
import Studenttable from '../tables/Studenttable'
import { List, ListItem } from '@chakra-ui/react'

export default function Table() {
  return (
      <List>
        <ListItem>
          <Studenttable />
        </ListItem>
      </List>
  )
}
