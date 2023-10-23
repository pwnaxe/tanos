import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import SocialMedia from "./SocialMediagray";

const pages = [
  { title: 'O NAS', id: 'aboutUs' },
  { title: 'SKLEP', id: 'store' },
  { title: 'GALERIA', id: 'gallery' },
  { title: 'KONTAKT', id: 'contact' },
];

export default function Layout3() {
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
    toggleDrawer(false)({ type: '', key: '' });
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
    <nav>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FFD700",
          width: "100vw",
          height: "10vh",
          zIndex: 4,
        }}
      >
        <img src="/assets/logo_szare.png" alt="Tanos Motorsport" style={{ width: "20vw" }} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ fontSize: "3rem", color: "#3d3d3b", mr: 2 }}
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