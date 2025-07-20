import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container, Avatar } from '@mui/material';

const clientLogos = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Corporate_Logo.png' },
];

const ClientsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'grey.100' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Trusted by Industry Leaders
        </Typography>
        <Slider {...settings}>
          {clientLogos.map((client, index) => (
            <Box
              key={index}
              sx={{ p: 2, textAlign: 'center' }}
            >
              <Avatar
                src={client.logo}
                alt={client.name}
                variant="square"
                sx={{ width: 100, height: 100, mx: 'auto', mb: 1 }}
              />
              <Typography variant="subtitle1">{client.name}</Typography>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default ClientsCarousel;
