import React from 'react';
import { Modal, Backdrop, Fade, IconButton, TextField, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddListModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div style={{ backgroundColor: 'white', padding: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '30px', maxWidth: '600px' }}>
          <IconButton aria-label="close" onClick={handleClose} style={{ position: 'absolute', top: '5px', right: '5px' }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" gutterBottom>Add List</Typography>
          <TextField label="List Name" fullWidth style={{ marginBottom: '20px' }} />
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
              borderRadius: '20px',
              backgroundColor: '#000425',
              marginLeft: 'auto',
              display: 'block',
              marginTop: '20px'
            }}
            onClick={handleClose}
          >
            Add List
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default AddListModal;
