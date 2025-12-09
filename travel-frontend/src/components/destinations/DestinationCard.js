import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Rating,
} from '@mui/material';
import { LocationOn, Star } from '@mui/icons-material';

// Map destination names to image filenames
const getDestinationImage = (name) => {
  const imageMap = {
    'Bali, Indonesia': 'bali-indonesia.jpg',
    'New York, USA': 'new-york-usa.jpg', 
    'Paris, France': 'paris-france.jpg',
    'Tokyo, Japan': 'tokyo-japan.jpg',
  };
  
  // Convert any variation of the name to match
  const key = Object.keys(imageMap).find(key => 
    name.toLowerCase().includes(key.toLowerCase().split(',')[0])
  );
  
  return imageMap[key] || 'bali-indonesia.jpg';
};

// Placeholder images as fallback
const placeholderImages = {
  'Bali, Indonesia': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
  'New York, USA': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
  'Paris, France': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
  'Tokyo, Japan': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
};

const DestinationCard = ({ destination }) => {
  const imageName = getDestinationImage(destination.name);
  const imageUrl = `/assets/images/destinations/${imageName}`;
  
  // Extract country from destination name or use country property
  const country = destination.country || destination.name.split(', ')[1] || '';
  
  // Format price range display
  const renderPriceRange = (range) => {
    if (!range) return '';
    const dollarCount = range.length;
    return '$'.repeat(dollarCount);
  };

  // Handle image loading errors
  const handleImageError = (e) => {
    const key = Object.keys(placeholderImages).find(key => 
      destination.name.toLowerCase().includes(key.toLowerCase().split(',')[0])
    );
    
    if (key) {
      e.target.src = placeholderImages[key];
    } else {
      e.target.src = placeholderImages['Bali, Indonesia'];
    }
  };

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      borderRadius: 2,
      overflow: 'hidden',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
      }
    }}>
      {/* Image Section */}
      <Box sx={{ position: 'relative', height: 200 }}>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={destination.name}
          onError={handleImageError}
          sx={{ 
            objectFit: 'cover',
            transition: 'transform 0.5s',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
        />
        {/* Rating Badge */}
        <Chip
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Star sx={{ fontSize: 16, mr: 0.5, color: '#FFD700' }} />
              <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white' }}>
                {destination.rating}
              </Typography>
            </Box>
          }
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            backdropFilter: 'blur(4px)',
          }}
        />
        {/* Price Range */}
        <Chip
          label={renderPriceRange(destination.price_range)}
          sx={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            backgroundColor: 'primary.main',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '0.875rem',
          }}
        />
      </Box>

      {/* Content Section */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Destination Name */}
        <Typography 
          variant="h6" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            minHeight: '64px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {destination.name}
        </Typography>
        
        {/* Country/Location */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocationOn sx={{ fontSize: 18, color: 'text.secondary', mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            @{country}
          </Typography>
        </Box>
        
        {/* Description */}
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '60px',
          }}
        >
          {destination.description}
        </Typography>
        
        {/* Price Display */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mr: 1 }}>
            ${destination.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            per person
          </Typography>
        </Box>
        
        {/* Rating with number */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating 
              value={destination.rating} 
              precision={0.1} 
              readOnly 
              size="small"
              sx={{ mr: 1 }}
            />
            <Typography variant="body2" color="text.secondary">
              {destination.rating}/5
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {renderPriceRange(destination.price_range)}
          </Typography>
        </Box>
      </CardContent>

      {/* Action Buttons */}
      <CardActions sx={{ p: 3, pt: 0 }}>
        <Button
          component={RouterLink}
          to={`/destinations/${destination.id}`}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            },
            transition: 'all 0.3s',
          }}
        >
          Explore Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default DestinationCard;