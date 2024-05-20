import { CalendarIcon, EditIcon, HamburgerIcon, InfoOutlineIcon, SettingsIcon, StarIcon } from '@chakra-ui/icons'
import { Divider, List, ListIcon, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
        {/* Admin sidebar end******************************************/}
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
        <NavLink to="/profilesettings">
          <ListIcon as={SettingsIcon} />
          Admin Settings
        </NavLink>
      </ListItem>
        {/* Admin sidebar end******************************************/}

        <Divider borderColor="gray.400" />

        {/* Student ***************************************************/}
        <ListItem>
          <NavLink to="/userdashboard">
            {/* <ListIcon as={SettingsIcon} /> */}
            Student Dashboard
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/profilesettings">
            {/* <ListIcon as={SettingsIcon} /> */}
            Profile Setting
          </NavLink>
        </ListItem>
        {/* Student ***************************************************/}

        <Divider borderColor="gray.400" />

         {/* Instructor ************************************************/}
        <ListItem>
          <NavLink to="/userdashboard">
            {/* <ListIcon as={SettingsIcon} /> */}
            Instructor Dashboard
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/table">
            {/* <ListIcon as={SettingsIcon} /> */}
            Students
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/profilesettings">
            {/* <ListIcon as={SettingsIcon} /> */}
            Profile Setting
          </NavLink>
        </ListItem>
        {/* Instructor *************************************************/}

        <Divider borderColor="gray.400" />

        {/* Staff ******************************************************/} 
  
        <ListItem>
          <NavLink to="/userdashboard">
            {/* <ListIcon as={SettingsIcon} /> */}
            Staff Dashboard
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/profilesettings">
            {/* <ListIcon as={SettingsIcon} /> */}
            Profile Setting
          </NavLink>
        </ListItem>
        {/* Staff ******************************************************/} 
    </List>
  )
}
