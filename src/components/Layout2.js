import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import SocialMedia from "./SocialMedia";

const pages = [
  { title: 'O NAS', id: 'home' },
  { title: 'SKLEP', id: 'aboutUs' },
  { title: 'GALERIA', id: 'gallery' },
  { title: 'KONTAKT', id: 'contact' },
];

export default function Layout2() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleDrawer(false)(null);
  };

  const list = (
    <Box
      sx={{ width: 250, bgcolor: "black" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItemButton onClick={() => handleScroll(page.id)} key={page.id}>
            <ListItemText primary={page.title} sx={{ color: "white" }} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <nav sx={{ position: 'sticky' }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          backgroundColor: "#3D3D3B",
          width: "100vw",
          height: "7vh",
          zIndex: 4,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: '50%',
            left: '5%',
            transform: 'translateY(-50%)',
            zIndex: 5,
          }}
        >
          <img src="/assets/logo_białe.png" alt="Tanos Motorsport" style={{ height: "100%", width: "20vw", objectFit: 'cover' }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            position: "absolute",
            right: "5%",
            zIndex: 4,
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ fontSize: "3rem", color: "white" }}
          >
            <MenuIcon sx={{ fontSize: "3rem", fontWeight: "bold" }} />
          </IconButton>
          <SocialMedia />
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
              style: { backgroundColor: "transparent", height: "auto" },
            }}
          >
            {list}
          </Drawer>
        </Box>
      </Box>
    </nav>
  );
};