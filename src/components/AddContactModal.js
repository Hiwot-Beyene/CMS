import React, { useState, useEffect } from 'react';
import { Modal, Backdrop, Fade, IconButton, TextField, Button, Typography, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FlagIcon } from 'react-flag-kit';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const AddContactModal = ({ open, handleClose }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('+251'); // Set default country code to Ethiopia
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');

  const [chipData, setChipData] = useState([
    { key: 0, label: 'Aerospace & Defense' },
    { key: 1, label: 'Agriculture' },
    { key: 2, label: 'Automotive' },
    { key: 3, label: 'Banking & Financial Services' },
    { key: 4, label: 'Chemicals & Biotechnology' },
    { key: 5, label: 'Marketing' },
    { key: 6, label: 'Construction' },
    { key: 7, label: 'Consumer Goods & Services' },
    { key: 8, label: 'Education' },
    { key: 9, label: 'Energy' },
    { key: 10, label: 'Entertainment & Advertisement' },
    { key: 11, label: 'Food & Beverage' },
    { key: 12, label: 'Health Care' },
    { key: 13, label: 'Information Technology' },
    { key: 14, label: 'Insurance' },
    { key: 15, label: 'Manufacturing' },
    { key: 16, label: 'Media & Communications' },
    { key: 17, label: 'Mining & Metals' },
    { key: 18, label: 'Nonprofit' },
    { key: 19, label: 'Pharmaceuticals' },
    { key: 20, label: 'Furniture' },
    { key: 21, label: 'Real Estate' },
    { key: 22, label: 'Retailer' },
    { key: 23, label: 'Telecommunications' },
    { key: 24, label: 'Transportation' },
]);

  const [selectedChips, setSelectedChips] = useState([]);

  const handleChipClick = (chip) => {
    const isChipSelected = selectedChips.some((selectedChip) => selectedChip.key === chip.key);

    if (isChipSelected) {
      const newSelectedChips = selectedChips.filter((selectedChip) => selectedChip.key !== chip.key);
      setSelectedChips(newSelectedChips);
      setChipData((prevChipData) => [...prevChipData, chip]); // Add chip back to initial chip list
    } else {
      setSelectedChips((prevChips) => [...prevChips, chip]);
      setChipData((prevChipData) => prevChipData.filter((data) => data.key !== chip.key)); // Remove chip from initial chip list
    }
  };

  useEffect(() => {
    // Import the country data JSON file
    import('../CountryCodes.json')
      .then((data) => {
        setCountries(data.default);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

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
    <div style={{ backgroundColor: 'white', padding: '60px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '35px', width: '90%', maxWidth: '600px', maxHeight: '80%', overflow: 'auto' }}>
          <IconButton aria-label="close" onClick={handleClose} style={{ position: 'absolute', top: '5px', right: '5px' }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" gutterBottom>Add Contact</Typography>
          <TextField label="Name" fullWidth style={{ marginBottom: '20px' }} />
          <TextField label="Email Address" fullWidth style={{ marginBottom: '20px' }} />
          <div style={{ marginBottom: '20px' }}>
            <TextField
              select
              label="Country Code"
              fullWidth
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              style={{ marginRight: '10px', marginBottom: '10px', width: '45%' }}
            >
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.dial_code}>
                  <FlagIcon code={country.code} /> {country.dial_code}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Phone Number"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ width: '45%' }}
            />
          </div>
          <TextField label="Company Name" fullWidth style={{ marginBottom: '20px' }} value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          <TextField label="Company Website" fullWidth style={{ marginBottom: '20px' }} value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} />
          <Typography variant="subtitle1" style={{ marginTop: '10px', marginBottom: '20px' }}>Industry Title:</Typography>
          <Paper
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              listStyle: 'none',
              p: 0.5,
              m: 0,
              mb: 2,
              
            }}
            component="ul"
          >
            {selectedChips.map((data) => (
              <ListItem key={data.key}>
                <Chip
                  label={data.label}
                  onDelete={() => {
                    setSelectedChips((prevChips) => prevChips.filter((chip) => chip.key !== data.key));
                    setChipData((prevChipData) => [...prevChipData, data]); // Add chip back to initial chip list
                  }}
                />
              </ListItem>
            ))}
          </Paper>
          <Paper
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              listStyle: 'none',
              p: 0,
              m: 0,
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: 'none',
            }}
            component="ul"
          >
            {chipData.map((data) => (
              <ListItem key={data.key}>
                <Chip
                  label={data.label}
                  onClick={() => handleChipClick(data)}
                  sx={{
                    m: 0.5,
                  }}
                />
              </ListItem>
            ))}
          </Paper>
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
            Add Contact
          </Button>
          
        </div>
        
      </Fade>
    </Modal>
  );
};

export default AddContactModal;
