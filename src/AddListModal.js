import React from 'react';
import { Modal, Backdrop, Box, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TextField, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
  },
  input: {
    borderRadius: 8,
    backgroundColor: '#E2E2E2',
  },
}));

const AddContactModal = ({ open, onClose }) => {
  const classes = useStyles();
  const [listName, setListName] = React.useState('');

  const handleChange = (event) => {
    setListName(event.target.value);
  };

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
          <Typography variant="h6" gutterBottom>
            Add List
          </Typography>
          <div className={classes.root}>
            <Typography variant="subtitle1">List Name</Typography>
            <TextField
              className={classes.input}
              variant="outlined"
              value={listName}
              onChange={handleChange}
            />
          </div>
        </Paper>
      </Box>
    </Modal>
  );
};

export default AddContactModal;
