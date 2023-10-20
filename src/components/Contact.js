import React from "react";
import Layout3 from "./Layout3";
import { Box, Typography, Grid } from "@mui/material";
import ContactForm from "./Contactform";

export default function Contact() {
  return (
    <>
      <Layout3 />
      <div id="contact">
        <Box sx={{ padding: 15 }}>
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.9087180287324!2d21.024957876908175!3d52.35907866141947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec902d00f4a79%3A0xc92329bb2fd2768!2sTanos%20Motorsport!5e0!3m2!1spl!2spl!4v1697738765249!5m2!1spl!2spl" width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
          </Grid>
        </Box>
      </div >
    </>
  );
}
