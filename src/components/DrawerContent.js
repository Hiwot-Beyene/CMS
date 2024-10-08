import React from 'react';
import PropTypes from 'prop-types';

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';

import {
  Menu as MenuIcon,
  Devices as DevicesIcon,
  Draw as DrawIcon,
  CalendarMonth as CalendarMonthIcon,
  Chair as ChairIcon,
  Contacts as ContactsIcon,
  Logout as LogoutIcon,
  AddBox as AddBoxIcon,
} from '@mui/icons-material';
import Logo from '../assets/LOGO.png';

const DrawerContent = ({ handleAddListModalOpen }) => {
  const drawerItems = [
    { primary: 'List', onClick: handleAddListModalOpen, icon: <AddBoxIcon /> },
    { primary: 'All Contacts', secondary: '10,000', icon: <ContactsIcon /> },
    { primary: 'Event Organisation', secondary: '6,000', icon: <CalendarMonthIcon /> },
    { primary: 'UI/UX Design', secondary: '10,000', icon: <DrawIcon /> },
    { primary: 'IT', secondary: '6,000', icon: <DevicesIcon /> },
    { primary: 'Interior Design', secondary: '3,000', icon: <ChairIcon /> },
  ];

  const logoutItem = { primary: 'Logout', icon: <LogoutIcon /> };

  return (
    <Drawer variant="permanent">
      <List>
        <ListItemButton>
          <img src={Logo} alt="Logo" style={{ width: '100%', height: 'auto' }} />
        </ListItemButton>
        <Divider />
        {drawerItems.map(({ primary, secondary, icon, onClick }, index) => (
          <ListItemButton key={index} onClick={onClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={primary} secondary={secondary} />
            <IconButton edge="end" color="inherit">
              {icon}
            </IconButton>
          </ListItemButton>
        ))}
        <Divider />
        <ListItemButton>
          <ListItemIcon>{logoutItem.icon}</ListItemIcon>
          <ListItemText primary={logoutItem.primary} />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

DrawerContent.propTypes = {
  handleAddListModalOpen: PropTypes.func.isRequired,
};

export default DrawerContent;
