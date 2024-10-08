import React from 'react';
import { Modal, Backdrop, Box, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const AddContactModal = ({ open, onClose }) => {
    return (
      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={(props) => (
          <Backdrop {...props} style={{ backdropFilter: 'blur(2px)' }} onClick={onClose} />
        )}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Paper
            sx={{
              backgroundColor: 'white',
              borderRadius: 4,
              boxShadow: 24,
              padding: 2,
              width: 400,
              maxHeight: '80vh',
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: 'absolute',
                top: 5,
                right: 5,
              }}
            >
              <CloseIcon />
            </IconButton>
            <h2>Add Contact</h2>
          </Paper>
        </Box>
      </Modal>
    );
  };
  
  export default AddContactModal;
  