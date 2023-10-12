import React from 'react';
import { Button, TextField, Grid, Box, Typography } from '@mui/material';

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ mt: 1 }}>
      <Typography variant="h6" gutterBottom>
        Formularz kontaktowy
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="name"
            label="Imię i nazwisko"
            name="name"
            autoComplete="name"
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="email"
            label="Adres e-mail"
            name="email"
            autoComplete="email"
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="message"
            label="Wiadomość"
            name="message"
            multiline
            rows={4}
            autoComplete="message"
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#FFD700', color: 'black' }}>
            Wyślij
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
