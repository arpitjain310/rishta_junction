
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    request: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Placeholder for backend API call
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Support request submitted successfully!');
        setFormData({ name: '', mobileNumber: '', email: '', request: '' });
      } else {
        alert('Failed to submit support request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting support request:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Support Request
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Request (max 100 words)"
            name="request"
            value={formData.request}
            onChange={handleChange}
            required
            margin="normal"
            multiline
            rows={4}
            inputProps={{ maxLength: 500 }}
            helperText={`${formData.request.split(/\s+/).length}/100 words`}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              textTransform: 'uppercase',
              boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Submit Request
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Support;
