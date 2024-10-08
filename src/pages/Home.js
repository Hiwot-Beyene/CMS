import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import profilePicture from '../assets/profile.png';
import AddContactModal from '../components/AddContactModal';
import AddListModal from '../components/AddListModal';

import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
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
import EditIcon from '@mui/icons-material/Edit'
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, InputBase, Button } from '@mui/material';
const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'emailAddress', headerName: 'Email Address', width: 250 },
  { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
  { field: 'jobTitle', headerName: 'Job Title', width: 150 }, // New field
  { field: 'company', headerName: 'Company', width: 200 },
  { field: 'companyWebsite', headerName: 'Company Website', width: 250 },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    renderCell: (params) => (
      <Button
        style={{ background: 'none', border: 'none', padding: 0 }}
        onClick={() => handleEmailButtonClick(params.row.emailAddress)}
      >
        <EmailIcon style={{ color: '#000425' }} />
      </Button>
    ),
  },
  {
    field: 'details',
    headerName: 'Details',
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        style={{ backgroundColor: '#000425', color: '#FFFFFF',borderRadius: '20px'  }}
        onClick={() => handleDetailsButtonClick(params.row.details)}
      >
        Details
      </Button>
    ),
  },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    renderCell: (params) => (
      <Button
        style={{ background: 'none', border: 'none', padding: 0 }}
        onClick={() => handleEmailButtonClick(params.row.emailAddress)}
      >
        <EditIcon style={{ color: '#000425' }} />
      </Button>
    ),
  },
];
const rows = [
  { id: 1, emailAddress: 'hiwot@gmail.com', phoneNumber: '0988049229', jobTitle: 'Manager', company: 'HBGB Trading', companyWebsite: 'www.hbgb.com', details: 'Details about John' },
  { id: 2, emailAddress: 'jane@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: 'XYZ Corp.', companyWebsite: 'www.xyz.com', details: 'Details about Jane' },
  { id: 3, emailAddress: 'john@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: 'ABC Inc.', companyWebsite: 'www.abc.com', details: 'Details about John' },
  { id: 4, emailAddress: 'alex@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: 'DEF Corp.', companyWebsite: 'www.def.com', details: 'Details about Alex' },
  { id: 5, emailAddress: 'sarah@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: 'GHI Ltd.', companyWebsite: 'www.ghi.com', details: 'Details about Sarah' },
  { id: 6, emailAddress: 'sam@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: 'JKL Enterprises', companyWebsite: 'www.jkl.com', details: 'Details about Sam' },
  { id: 7, emailAddress: 'emily@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: 'MNO Group', companyWebsite: 'www.mno.com', details: 'Details about Emily' },
  { id: 8, emailAddress: 'david@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: 'PQR Corporation', companyWebsite: 'www.pqr.com', details: 'Details about David' },
  { id: 9, emailAddress: 'chris@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: 'STU Ltd.', companyWebsite: 'www.stu.com', details: 'Details about Chris' },
  { id: 10, emailAddress: 'olivia@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: 'VWX Inc.', companyWebsite: 'www.vwx.com', details: 'Details about Olivia' },
  { id: 11, emailAddress: 'adam@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: 'YZ Enterprises', companyWebsite: 'www.yz.com', details: 'Details about Adam' },
  { id: 12, emailAddress: 'rachel@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: '123 Corporation', companyWebsite: 'www.123.com', details: 'Details about Rachel' },
  { id: 13, emailAddress: 'michael@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: '456 Ltd.', companyWebsite: 'www.456.com', details: 'Details about Michael' },
  { id: 14, emailAddress: 'lisa@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: '789 Group', companyWebsite: 'www.789.com', details: 'Details about Lisa' },
  { id: 15, emailAddress: 'patrick@example.com', phoneNumber: '0987654321', jobTitle: 'Manager', company: '000 Corporation', companyWebsite: 'www.000.com', details: 'Details about Patrick' },
];


const handleEmailButtonClick = (emailAddress) => {
  // Handle email button click
};

const handleDetailsButtonClick = (details) => {
  // Handle details button click
};

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const [addContactModalOpen, setAddContactModalOpen] = useState(false);
  const [addListModalOpen, setAddListModalOpen] = useState(false);

  const handleAddContactModalOpen = () => {
    setAddContactModalOpen(true);
  };

  const handleAddContactModalClose = () => {
    setAddContactModalOpen(false);
  };

  const handleAddListModalOpen = () => {
    setAddListModalOpen(true);
  };

  const handleAddListModalClose = () => {
    setAddListModalOpen(false);
  };

  const drawer = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Toolbar>
        <img src={Logo} alt="Logo" style={{ width: '100%', height: 'auto' }} />
      </Toolbar>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        <ListItemButton 
        onClick={handleAddListModalOpen}
        sx={{
          '&:hover': {
            backgroundColor: '#535561',
          },
          '.MuiListItemText-primary, .MuiListItemText-secondary, .MuiListItemIcon-root': {
            color: '#AFB0B5',
          }
        }}>
          <ListItemText primary="List" />
          <IconButton edge="end" color="inherit">
            <AddBoxIcon style={{ color: '#AFB0B5' }} /> 
          </IconButton>
        </ListItemButton>
        <Divider />
        <ListItemButton sx={{
          '&:hover': {
            backgroundColor: '#535561'
          },
          '.MuiListItemText-primary, .MuiListItemText-secondary, .MuiListItemIcon-root': {
            color: '#AFB0B5',
          }
        }}>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText primary="All Contacts" secondary="10,000" />
        </ListItemButton>
        <ListItemButton sx={{
          '&:hover': {
            backgroundColor: '#535561'
          },
          '.MuiListItemText-primary, .MuiListItemText-secondary, .MuiListItemIcon-root': {
            color: '#AFB0B5',
          }
        }}>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText primary="Event Organisation" secondary="6,000" />
        </ListItemButton>
        <ListItemButton sx={{
          '&:hover': {
            backgroundColor: '#535561'
          },
          '.MuiListItemText-primary, .MuiListItemText-secondary, .MuiListItemIcon-root': {
            color: '#AFB0B5',
          }
        }}>
          <ListItemIcon>
            <DrawIcon />
          </ListItemIcon>
          <ListItemText primary="UI/UX Design" secondary="10,000" />
        </ListItemButton>
        <ListItemButton sx={{
          '&:hover': {
            backgroundColor: '#535561'
          },
          '.MuiListItemText-primary, .MuiListItemText-secondary, .MuiListItemIcon-root': {
            color: '#AFB0B5',
          }
        }}>
          <ListItemIcon>
            <DevicesIcon />
          </ListItemIcon>
          <ListItemText primary="IT" secondary="6,000" />
        </ListItemButton>
        <ListItemButton sx={{
          '&:hover': {
            backgroundColor: '#535561'
          },
          '.MuiListItemText-primary, .MuiListItemText-secondary, .MuiListItemIcon-root': {
            color: '#AFB0B5',
          }
        }}>
          <ListItemIcon>
            <ChairIcon />
          </ListItemIcon>
          <ListItemText primary="Interior Design" secondary="3,000" />
        </ListItemButton>

      </List>
      {/* Logout */}
      <List>
        <Divider />
        <ListItemButton sx={{
          '&:hover': {
            backgroundColor: '#535561'
          },
          '.MuiListItemText-primary, .MuiListItemText-secondary, .MuiListItemIcon-root': {
            color: '#AFB0B5',
          }
        }}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ 
      display: 'flex',
      height: '100vh',
      overflowY: 'auto', // Add vertical scroll if content exceeds viewport height
    }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: '#000425', // Set the background color here
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Avatar sx={{ ml: 'auto' }} alt="Profile Picture" src={profilePicture} />
        </Toolbar>
      </AppBar>
  
      <Box
        component="nav"
        sx={{ width: drawerWidth, flexShrink: 0 }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#000425' }, // Background color for mobile view
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#000425', // Sidebar background color
              color: '#AFB0B5', // Text and icon color
            },
            display: { xs: 'none', sm: 'block' },
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Box>
  
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        padding: 3,
        width: '100%', // Take full width initially
        maxWidth: `calc(100% - ${drawerWidth}px)`, // Adjust maximum width based on drawerWidth
        marginLeft: 'auto', // Center the content if needed
        marginRight: 'auto', // Center the content if needed
      }}>
                <Toolbar />
        <Typography variant="h4"><b>Event Organisation</b></Typography>
        <div style={{ marginBottom: '20px' }}></div> {/* Add space between heading and button */}
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
          {/* Search Bar */}
          <Grid item xs={12} sm={6} md={4} lg={3} sx={{ pl: 1 }}>
            <div style={{ position: 'relative', backgroundColor: '#D9D9D9', borderRadius: '20px', width: '100%' }}>
              <InputBase
                placeholder="Search..."
                fullWidth
                startAdornment={<SearchIcon sx={{ pl: 1 }} />}
                style={{ paddingRight: '30px' }}
              />
            </div>
          </Grid>
  
          {/* Add Button */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#000425',
                  color: 'white',
                  borderRadius: '20px',
                  padding: '8px 12px', // Adjust padding for different screen sizes
                  fontSize: '0.75rem', // Adjust font size for different screen sizes
                }}
                endIcon={<AddBoxIcon />}
                onClick={handleAddContactModalOpen}
              >
                Add new
              </Button>
            </div>
          </Grid>
        </Grid>
  
        <div style={{ marginBottom: '20px' }}></div> {/* Add space between heading and table */}
        <div style={{ height: 'calc(100% - 64px)', width: '100%', overflowX: 'auto' }}>
          <div style={{ minWidth: 800 }}> 
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={7}
              checkboxSelection
              headerClassName="boldHeader"
            />
          </div>
        </div>
        <AddContactModal open={addContactModalOpen} handleClose={handleAddContactModalClose} />
        <AddListModal open={addListModalOpen} handleClose={handleAddListModalClose} />
      </Box>
    </Box>
  );
  
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;