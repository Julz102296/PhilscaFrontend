import { CalendarIcon, EditIcon, HamburgerIcon, InfoOutlineIcon, SettingsIcon, StarIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/prelist">
          <ListIcon as={HamburgerIcon} />
          Pre List
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/studentidlist">
          <ListIcon as={StarIcon} />
          Student ID List
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/graphsandanalytics">
          <ListIcon as={InfoOutlineIcon} />
          Grphs & Anlytcs
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <ListIcon as={EditIcon} />
          Create USer
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/adminsettings">
          <ListIcon as={SettingsIcon} />
          Admin Settings
        </NavLink>
      </ListItem>
    </List>
  )
}
