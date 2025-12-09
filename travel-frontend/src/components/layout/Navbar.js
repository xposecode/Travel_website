import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FiGlobe, FiUser, FiLogOut, FiLogIn } from 'react-icons/fi';
import { AppBar, Toolbar, Container, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  color: theme.palette.text.primary,
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}));

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FiGlobe style={{ fontSize: '1.8rem', color: '#1976d2', marginRight: '8px' }} />
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                fontWeight: 'bold',
                color: '#2d3436',
                textDecoration: 'none',
                '&:hover': {
                  color: '#1976d2',
                },
              }}
            >
              TravelEase
            </Typography>
          </Box>

          {/* Navigation Links - Center */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mx: 'auto' }}>
            <NavButton
              component={Link}
              to="/"
              color="inherit"
            >
              Home
            </NavButton>
            <NavButton
              component={Link}
              to="/destinations"
              color="inherit"
            >
              Destinations
            </NavButton>
            <NavButton
              component={Link}
              to="/about"
              color="inherit"
            >
              About
            </NavButton>
            <NavButton
              component={Link}
              to="/contact"
              color="inherit"
            >
              Contact
            </NavButton>
          </Box>

          {/* Auth Buttons - Right Side */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {isAuthenticated ? (
              <>
                <Button
                  component={Link}
                  to="/profile"
                  startIcon={<FiUser />}
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {user?.username || 'Profile'}
                </Button>
                <Button
                  onClick={handleLogout}
                  startIcon={<FiLogOut />}
                  sx={{
                    color: 'error.main',
                    borderColor: 'error.main',
                    '&:hover': {
                      backgroundColor: 'error.light',
                      color: 'error.dark',
                    },
                  }}
                  variant="outlined"
                  size="small"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  startIcon={<FiLogIn />}
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      backgroundColor: 'primary.light',
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  sx={{
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                    ml: 1,
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;