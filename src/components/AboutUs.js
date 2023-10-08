import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <>
      <Box className="background-image1"></Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: "60%",
          height: "100vh",
          backgroundColor: "rgba(28, 28, 28, 0.9)",
          zIndex: 3,
        }}
      >
        <Typography variant="h3" sx={{ color: "white", textAlign: "center", paddingTop: "10vh" }}>
          O NAS
        </Typography>
        <Typography variant="h6" sx={{ color: "white", textAlign: "center", paddingTop: "10vh" }}>
          W Tanos Motorsport zajmujemy się dostarczaniem i montowaniem najwyższej jakości produktów, aby poprawić zarówno osiągi jak i niezawodność w sportach motorowych i na drogach. Ponadto podejmujemy się kompleksowych modyfikacji aut. Każdego klienta traktujemy indywidualnie, a każdy projekt wyceniamy opierając się na oczekiwaniach klienta, wybranych lub sugerowanych częściach i stopniu modyfikacji.

          Dzięki latom doświadczeń zdobytych w firmach zajmujących się produkcją części i budową samochodów sportowych, dostarczamy naszym klienton najnowsze i najlepsze rozwiązania i produkty od wielu lat. Nasza pasja, oddanie i dokładność pozwalają cieszyć nam się zaufaniem i renomą w branży, zapraszamy na naszą stronę na Facebooku, gdzie możecie Państwo śledzić nasze poczynania na bierząco Korzystając z najnowszych technologi maszyn CNC i skanowania 3D, budujemy samochody spełniając marzenia naszych klientów i rozbudowując nasz własny park maszynowy.
          Pracujemy i żyjemy według zasady “Sky is the limit”, wszystko możemy osiągnąć, zbudować i zrobić, wyobraźnia klienta jest jedynym naszym ograniczeniem.
        </Typography>
      </Box>
      <Box className="background-image2"></Box>
    </>
  );
}
