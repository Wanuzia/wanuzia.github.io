import React from 'react';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Page from '../components/Page';

const Home = () => {
  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'background.default' }}>
      <Typography variant="h1" sx={{ color: 'text.primary' }}>Wanuzia Braga</Typography>
    </Box>
    <Page />
    </>
  );
};

export default Home;
