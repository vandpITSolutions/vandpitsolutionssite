import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 10,
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Empowering Your Digital Future
        </Typography>

        <Typography variant="h6" paragraph>
          Scalable IT and software solutions for startups and enterprises. We help
          you innovate, automate, and grow with cutting-edge technology.
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 3 }}
        >
          Get a Free Consultation
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
