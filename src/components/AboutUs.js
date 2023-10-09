import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Layout2 from "./Layout2";

export default function AboutUs() {
  return (
    <div id='aboutUs'>
      <Layout2 />
      <Box sx={{ position: 'relative', height: '100vh' }}>
        <img src="/assets/tanos-037.jpg" alt="aboutUs" style={{
          position: 'absolute',
          transform: 'translateX(15%)',
          width: "50%",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          width: '100%',
          bottom: 0,
          zIndex: 13
        }}>
          <Box sx={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '1rem',
            textAlign: 'center'
          }}>
            Maciej <br /> Kamiński
          </Box>
          <Box sx={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '1rem 2rem 1rem 1rem',
            textAlign: 'center'
          }}>
            Paweł <br /> Gołębiewski
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: '50%',
            transform: 'translateX(-50%)',
            width: "60%",
            height: "100vh",
            backgroundColor: "rgba(28, 28, 28, 0.7)",
            zIndex: 3,
            padding: '0rem 2rem 0rem 2rem'
          }}
        >
          <Typography variant="h3" sx={{ color: "white", textAlign: "center", mt: 10 }}>
            O NAS
          </Typography>
          <Typography variant="h6" sx={{ color: "white", lineHeight: 1.6, paragraphSpacing: 3, mx: 2 }}>
            <strong>W Tanos Motorsport</strong> zajmujemy się dostarczaniem i montowaniem najwyższej jakości produktów, aby poprawić zarówno osiągi jak i niezawodność w sportach motorowych i na drogach. Ponadto podejmujemy się kompleksowych modyfikacji aut. Każdego klienta traktujemy indywidualnie, a każdy projekt wyceniamy opierając się na oczekiwaniach klienta, wybranych lub sugerowanych częściach i stopniu modyfikacji.
            <br /><br />
            Dzięki latom doświadczeń zdobytych w firmach zajmujących się produkcją części i budową samochodów sportowych, dostarczamy naszym klienton najnowsze i najlepsze rozwiązania i produkty od wielu lat. Nasza pasja, oddanie i dokładność pozwalają cieszyć nam się zaufaniem i renomą w branży.
            <br /><br />
            Zapraszamy na naszą <em>stronę na Facebooku</em>, gdzie możecie Państwo śledzić nasze poczynania na bierząco. Korzystając z najnowszych technologi maszyn CNC i skanowania 3D, budujemy samochody spełniając marzenia naszych klientów i rozbudowując nasz własny park maszynowy.
            <br /><br />
            Pracujemy i żyjemy według zasady <strong>“Sky is the limit”</strong>, wszystko możemy osiągnąć, zbudować i zrobić, wyobraźnia klienta jest jedynym naszym ograniczeniem.
          </Typography>
        </Box>
        <img src="/assets/tanos-049.jpg" alt="aboutUs" style={{
          position: 'absolute',
          left: 0,
          width: "60%",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }} />
      </Box >
    </div >
  );
}
