import React from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';

const Contact = () => {
  return (
    <>
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography variant="h4" gutterBottom textAlign="center">
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          paragraph
          textAlign="center"
          maxWidth="md"
          mx="auto"
        >
          Let’s collaborate to build your next big idea. Reach out to us for
          consulting, development, or any inquiries — we’re always happy to help.
        </Typography>

        {/* Two-Column Grid */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Left Column: Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Send a Message
              </Typography>
              <form>
                <TextField fullWidth label="Name" margin="normal" required />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={5}
                  margin="normal"
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Right Column: CTA + Info + Map */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              {/* CTA */}
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h6" gutterBottom color="primary">
                  Have a Question?
                </Typography>
                <Typography variant="body2" paragraph>
                  We’re here to help you transform your vision into reality.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  href="mailto:vandpitsolutions@gmail.com"
                  size="large"
                >
                  Email Us
                </Button>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* Contact Info */}
              <Typography variant="subtitle1" gutterBottom>
                <strong>Our Office</strong>
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
              >
                <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                Lucknow, Uttar Pradesh, India
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
              >
                <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                +91 7524979500
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <EmailIcon fontSize="small" sx={{ mr: 1 }} />
                vandpitsolutions@gmail.com
              </Typography>

              {/* Map */}
              <Box sx={{ mt: 3 }}>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56940.57672656501!2d80.93249467148654!3d26.87853792659275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740376911874!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  )
}

export default Contact