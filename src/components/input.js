import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Input = ({ label, value, setValue, type = "text", showPasswordToggle = false }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      fullWidth
      label={label}
      type={showPassword ? "text" : type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        endAdornment: showPasswordToggle && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleTogglePasswordVisibility}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      InputLabelProps={{ shrink: true }} // Added to prevent label from moving when text is entered
      variant="outlined"
      margin="normal"
      required
    />
  );
};

export default Input;
