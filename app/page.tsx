import React from "react";
import Top from "./components/Top";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Top />
    </Box>
  );
}
