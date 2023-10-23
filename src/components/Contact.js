import React from "react";
import Layout3 from "./Layout3";
import { Box, Typography, Grid } from "@mui/material";
import ContactForm from "./Contactform";

export default function Contact() {
  return (
    <>
      <Layout3 />
      <div id="contact">
        <Box sx={{ padding: 10 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ color: '#FFD700' }}>
                DANE FIRMY
              </Typography>
              <Typography variant="body1">
                Tanos Sp.z o.o.
              </Typography>
              <Typography variant="body1">
                NIP: 524-291-58-46
              </Typography>
              <Typography variant="body1">
                ul. Płochocińska 175a
              </Typography>
              <Typography variant="body1">
                Warszawa 03-044
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <div>
                <iframe
                  title="Mapa Google"
                  src="https://www.google.com/maps/embed/v1/view?key=AIzaSyB8WoROze97etvZtXpwTrkd6Eh03osTOCg&center=52.2692,20.9982&zoom=16"
                  width="100%" height="100%" loading="lazy" allowFullScreen=""></iframe>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div >
    </>
  );
}
