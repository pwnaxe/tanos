import React from "react";
import Box from "@mui/material/Box";
import SocialMedia from "./SocialMedia";

export default function Page() {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 3,
        }}
      ></Box>
      <video
        autoPlay
        muted
        loop
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          minWidth: "100%",
          minHeight: "100%",
          height: "100vh",
          objectFit: "fill",
        }}
      >
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "10%",
          height: "98vh",
          transition: "width 0.5s ease-in-out",
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          "@media (max-width:1300px)": {
            width: "15%",
          },
          "@media (max-width:1000px)": {
            width: "20%",
          },
          "@media (max-width:700px)": {
            width: "25%",
          },
        }}
      >
        <img
          src="/assets/Logo Tanos.png"
          alt="Tanos Motorsport"
          style={{
            height: "100%",
            width: "100%",
            objectFit: 'contain',
            zIndex: 5
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 37, xl: "auto" },
          top: { xs: "auto", xl: 37 },
          right: 50,
          zIndex: 5,
        }}
      >
        <SocialMedia />
      </Box>
    </>
  );
}
