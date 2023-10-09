import React from "react";
import Layout2 from "./Layout2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Slider from "./Slider";

export default function Store() {
  return (
    <>
      <Layout2 />
      <Box id="store" sx={{ height: "100vh", backgroundColor: "#808080" }}>
        <Box sx={{ width: "90%", height: "100%", backgroundColor: "#606060", ml: 'auto', mr: 'auto' }}>
          <Typography variant="h3" sx={{ color: "white", textAlign: "center", pt: 15, pr: 55, }}>
            SKLEP
          </Typography>
          <Typography variant="h6" sx={{ color: "white", textAlign: "center", pt: 5, pr: 5, pl: 5 }}>
            Zapraszamy do naszego sklepu pod adresem sklep.tanosmotorsport.pl. Specjalizujemy się w motorsporcie,
            oferując kompleksowe usługi, od budowy klatek bezpieczeństwa po różne inne modyfikacje.
            Jesteśmy tutaj, aby spełnić Twoje marzenia o niesamowitym, bezpiecznym i szybkim pojeździe.
          </Typography>
          <Slider />
        </Box>
      </Box>
    </>
  );
}
