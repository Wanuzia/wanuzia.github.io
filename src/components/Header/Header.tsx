import React from 'react';
import { Box } from '@mui/material';
import AppBar from '../AppBar/AppBar';

const Header = () => {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'primary.main', color: 'text.primary', padding: '10px' }}>
      <AppBar />
    </Box>
  );
};

export default Header;
