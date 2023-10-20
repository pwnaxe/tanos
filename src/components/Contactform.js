import React from 'react';
import { Button, TextField, Grid, Box, Typography, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    warning: {
      main: '#adb5bd',
    },
  },
});

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
    <ThemeProvider theme={theme}>
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
              color="warning"
              focused
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="warning" />
                  </InputAdornment>
                ),
              }}
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
              color="warning"
              focused
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="warning" />
                  </InputAdornment>
                ),
              }}
              error={false}
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
              placeholder="Wpisz swoją wiadomość tutaj..."
              autoComplete="message"
              color="warning"
              focused
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon color="warning" />
                  </InputAdornment>
                ),
              }}
              error={false}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#FFD700',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#E6C200',
                }
              }}
            >
              Wyślij
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
