import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Paper,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn,
  Star,
  SupportAgent,
  FlightTakeoff,
} from '@mui/icons-material';
import DestinationCard from '../components/destinations/DestinationCard';

const Home = () => {
  const [featuredDestinations] = useState([
    {
      id: 1,
      name: 'Bali, Indonesia',
      country: 'Indonesia',
      description: 'Tropical paradise with beautiful beaches and temples. Perfect for relaxation and adventure.',
      rating: 4.9,
      price_range: '$$',
      price: 899,
    },
    {
      id: 2,
      name: 'Paris, France',
      country: 'France',
      description: 'City of love with iconic Eiffel Tower. Rich culture, art, and cuisine.',
      rating: 4.7,
      price_range: '$$$',
      price: 1299,
    },
    {
      id: 3,
      name: 'Tokyo, Japan',
      country: 'Japan',
      description: 'Vibrant metropolis blending tradition and technology. Unique cultural experience.',
      rating: 4.8,
      price_range: '$$$',
      price: 1499,
    },
    {
      id: 4,
      name: 'New York, USA',
      country: 'USA',
      description: 'The city that never sleeps. Skyscrapers, Broadway, and endless energy.',
      rating: 4.6,
      price_range: '$$$$',
      price: 1599,
    },
  ]);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop')`,
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography
              component="h1"
              variant="h2"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                color: 'white',
              }}
            >
              Discover Your Next Adventure
            </Typography>
            <Typography variant="h5" sx={{ mb: 5, color: 'rgba(255, 255, 255, 0.9)' }}>
              Explore breathtaking destinations, plan your perfect trip, and create memories that last a lifetime.
            </Typography>
            
            {/* Search Bar */}
            <Paper
              component="form"
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                maxWidth: 600,
                mx: 'auto',
                mb: 4,
              }}
            >
              <TextField
                fullWidth
                placeholder="Search destinations..."
                variant="outlined"
                size="medium"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                sx={{ ml: 1, px: 3, py: 1.5 }}
              >
                Search
              </Button>
            </Paper>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={RouterLink}
                to="/destinations"
                variant="contained"
                size="large"
                startIcon={<FlightTakeoff />}
                sx={{ px: 4, py: 1.5 }}
              >
                Explore Destinations
              </Button>
              <Button
                component={RouterLink}
                to="/register"
                variant="outlined"
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
          Why Choose TravelEase?
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <Box sx={{ mb: 2 }}>
                <LocationOn sx={{ fontSize: 60, color: 'primary.main' }} />
              </Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                Curated Destinations
              </Typography>
              <Typography color="text.secondary">
                Handpicked locations verified by travel experts for quality experiences.
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <Box sx={{ mb: 2 }}>
                <Star sx={{ fontSize: 60, color: 'warning.main' }} />
              </Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                Best Price Guarantee
              </Typography>
              <Typography color="text.secondary">
                We ensure you get the best deals with our price match promise.
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <Box sx={{ mb: 2 }}>
                <SupportAgent sx={{ fontSize: 60, color: 'success.main' }} />
              </Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                24/7 Support
              </Typography>
              <Typography color="text.secondary">
                Our travel experts are available round the clock to assist you.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Destinations - UPDATED FOR 4 CARDS */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                Featured Destinations
              </Typography>
              <Typography color="text.secondary">
                Most popular places loved by travelers
              </Typography>
            </Box>
            <Button
              component={RouterLink}
              to="/destinations"
              variant="outlined"
              endIcon={<FlightTakeoff />}
            >
              View All
            </Button>
          </Box>
          
          {/* UPDATED: Changed grid to show 2 on mobile, 4 on desktop */}
          <Grid container spacing={4}>
            {featuredDestinations.map((destination) => (
              <Grid item key={destination.id} xs={12} sm={6} lg={3}>
                <DestinationCard destination={destination} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 10 
      }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Ready to Explore the World?
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, opacity: 0.9 }}>
            Join our community of happy travelers and start your journey today
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              size="large"
              sx={{ 
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100'
                }
              }}
            >
              Create Free Account
            </Button>
            <Button
              component={RouterLink}
              to="/destinations"
              variant="outlined"
              size="large"
              sx={{ 
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Browse Inspiration
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;