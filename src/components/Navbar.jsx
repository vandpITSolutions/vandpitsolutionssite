import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Button,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BusinessIcon from '@mui/icons-material/Business'; // Company logo icon

const Navbar = () => {
    return (
        <AppBar position="static" color="primary" elevation={3}>
            <Toolbar>
                {/* Navigation Links */}
                <Box sx={{ display: 'flex', flexGrow: 1, gap: 2 }}>
                    <Button color="inherit" startIcon={<HomeIcon />} component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" startIcon={<BuildIcon />} component={Link} to="/services">
                        Services
                    </Button>
                    <Button color="inherit" startIcon={<InfoIcon />} component={Link} to="/aboutus">
                        About Us
                    </Button>
                    <Button color="inherit" startIcon={<ContactMailIcon />} component={Link} to="/contact">
                        Contact
                    </Button>
                </Box>

                {/* Company Logo on Right */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h6" component="div">
                        V&P IT SOLUTIONS
                    </Typography>
                    <IconButton color="inherit">
                        <BusinessIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
