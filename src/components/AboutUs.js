import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Layout2 from "./Layout2";

export default function AboutUs() {
  return (
    <div id='aboutUs'>
      <Layout2 />
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row'
        },
        position: 'relative'
      }}>
        <Box sx={{
          flex: 1,
          display: { xs: 'none', sm: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: "url('/assets/tanos-037.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        </Box>

        <Box
          sx={{
            flex: 1,
            backgroundColor: "rgba(28, 28, 28, 0.9)",
            padding: '0rem 3rem 0rem 3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="h4" sx={{ color: "white", textAlign: "center", mt: 15, mb: 5 }}>
            O NAS
          </Typography>
          <Typography sx={{
            color: "white",
            lineHeight: 1.6,
            paragraphSpacing: 3,
            mx: 2,
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.95rem', lg: '1rem', xl: '1.1rem' },
            flexGrow: 1,
            mt: 2,
            mb: 2
          }}>
            <strong>W Tanos Motorsport</strong> zajmujemy się dostarczaniem i montowaniem najwyższej jakości produktów, aby poprawić zarówno osiągi jak i niezawodność w sportach motorowych i na drogach. Ponadto podejmujemy się kompleksowych modyfikacji aut. Każdego klienta traktujemy indywidualnie, a każdy projekt wyceniamy opierając się na oczekiwaniach klienta, wybranych lub sugerowanych częściach i stopniu modyfikacji.
            <br /><br />
            Dzięki latom doświadczeń zdobytych w firmach zajmujących się produkcją części i budową samochodów sportowych, dostarczamy naszym klienton najnowsze i najlepsze rozwiązania i produkty od wielu lat. Nasza pasja, oddanie i dokładność pozwalają cieszyć nam się zaufaniem i renomą w branży.
            <br /><br />
            Zapraszamy na naszą <em>stronę na Facebooku</em>, gdzie możecie Państwo śledzić nasze poczynania na bierząco. Korzystając z najnowszych technologi maszyn CNC i skanowania 3D, budujemy samochody spełniając marzenia naszych klientów i rozbudowując nasz własny park maszynowy.
            <br /><br />
            Pracujemy i żyjemy według zasady <strong>“Sky is the limit”</strong>, wszystko możemy osiągnąć, zbudować i zrobić, wyobraźnia klienta jest jedynym naszym ograniczeniem.
            <br /><br /> <strong>Pozdrawiamy, Paweł Gołębiewski i Maciej Kamiński</strong>
          </Typography>
        </Box>
        <Box sx={{
          flex: 1,
          display: { xs: 'none', sm: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: "url('/assets/tanos-049.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        </Box>
      </Box>
    </div>
  );
}