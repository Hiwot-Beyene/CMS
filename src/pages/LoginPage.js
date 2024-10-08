import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Link } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import icons for password visibility toggle
import LoginImage from '../assets/login-image.png';
import Input from '../components/input'; // Corrected import path for Input component
import { IconButton } from '@mui/material';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with username:", username, "and password:", password);
  };

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    console.log("LoginPage is rendering"),
    <Grid container sx={{
      height: '100vh',
      backgroundColor: '#000425',
      alignItems: 'center',
      justifyContent: 'center',
      spacing: { xs: 3, sm: 4, md: 5 }
    }}>
      <Grid item xs={12} sm={5} md={4} lg={3} sx={{
        backgroundImage: `url(${LoginImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
      }} />
      <Grid item xs={false} sm={1} md={2} lg={1} />
      <Grid item xs={12} sm={5} md={4} lg={3} sx={{
        backgroundColor: '#fff',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 3,
        borderRadius: { xs: '24px 24px 0 0', sm: '8px' }, // Adjusted borderRadius for different screen sizes
        maxWidth: { sm: '320px', md: '360px' },
      }}>
        <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', textAlign: "center", mb: 2 }}>
          Welcome Back!
        </Typography>
        <Box sx={{ width: '100%', height: '1px', backgroundColor: '#000', mb: 3 }} />
        <Input
          label="Username"
          value={username}
          setValue={setUsername}
          autoComplete="username"
          autoFocus
        />
        <Input
          label="Password"
          value={password}
          setValue={setPassword}
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          showPasswordToggle // Pass the showPasswordToggle prop to enable password toggle
          endAdornment={
            <IconButton
              onClick={handlePasswordVisibilityToggle}
              edge="end"
              aria-label="toggle password visibility"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
        />
        <Grid container spacing={2} sx={{ width: '100%', mt: 2, display: 'flex', alignItems: 'center' }}>
          <Grid item xs={6}>
            <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={handleLogin}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
