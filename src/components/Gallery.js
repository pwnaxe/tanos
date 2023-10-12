import React from "react";
import Layout2 from "./Layout2";
import { Typography } from "@mui/material";
import Slider from "./Slider"

export default function Gallery() {
  return (
    <>
      <Layout2 />
      <div id="gallery" style={{ height: "100vh", backgroundColor: "white" }}>
        <Typography variant="h4" sx={{ mt: 15, }}>
          NASZA GALERIA
        </Typography>
        <Typography variant="h6" sx={{ m: 5, }}>
          Odkryj naszą pasję do motorsportu poprzez unikalne ujęcia naszych prac. <br /> Prezentujemy wysokiej jakości komponenty, od zaawansowanych systemów zawieszenia po precyzyjnie wykonane hamulce ręczne i klatki bezpieczeństwa. <br /><strong> Każdy element jest wynikiem naszego zaangażowania, doświadczenia i ciągłego dążenia do perfekcji.</strong>
        </Typography>
        <Slider />
      </div>
    </>
  );
}
