import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import anime from 'animejs/lib/anime.es.js';

const Page = () => {
  const animateNames = () => {
    anime({
      targets: '.name',
      opacity: [0, 1],
      duration: 2000,
      delay: (el, i) => i * 100,
      easing: 'easeInOutSine'
    });
  };
  
  useEffect(() => {
    animateNames();
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'background.default' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1" className="name" sx={{ color: 'text.primary' }}>Javascript</Typography>
      </Box>
    </Box>
  );
};

export default Page;
