import React from 'react'
import Hero from '../components/Hero';
import { Box, Typography, Container, Button } from '@mui/material';
import {  Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import { Chip, Stack } from '@mui/material';

const techStack = ['React', 'Node.js', 'Firebase', 'AWS', 'Docker', 'MongoDB'];
const services = [
  { icon: <CodeIcon fontSize="large" />, title: 'Web Development' },
  { icon: <CloudIcon fontSize="large" />, title: 'Cloud Solutions' },
  { icon: <MobileFriendlyIcon fontSize="large" />, title: 'Mobile Apps' },
];

const Home = () => {
  return (
    <>
    <Hero />
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Who We Are
        </Typography>
        <Typography variant="body1" paragraph>
          MyCompany is a results-driven software and IT consulting firm. We design, develop, and deploy intelligent tech solutions that empower businesses to innovate and scale.
        </Typography>
        <Button variant="contained" color="primary" href="/aboutus">
          Learn More
        </Button>
      </Container>
    </Box>
    <Box sx={{ py: 8, bgcolor: 'grey.100' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Our Core Services
        </Typography>
        <Grid container spacing={4} mt={2}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {service.icon}
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {service.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Our Technology Stack
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          justifyContent="center"
          flexWrap="wrap"
          mt={3}
        >
          {techStack.map((tech, i) => (
            <Chip label={tech} key={i} color="primary" variant="outlined" />
          ))}
        </Stack>
      </Container>
    </Box>
    <Box
      sx={{
        py: 6,
        bgcolor: 'secondary.main',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom>
          Ready to build something amazing?
        </Typography>
        <Typography variant="body1" paragraph>
          Let’s talk about how we can help your business scale through tech.
        </Typography>
        <Button variant="contained" color="inherit" size="large" href="/contact">
          Contact Us
        </Button>
      </Container>
    </Box>
    </>
  )
}

export default Home