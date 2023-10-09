import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

const pages = [
  { title: 'O NAS', id: 'aboutUs' },
  { title: 'SKLEP', id: 'store' },
  { title: 'GALERIA', id: 'gallery' },
  { title: 'KONTAKT', id: 'contact' },
];

export default function Layout1() {
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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            flexDirection: "row",
            position: "absolute",
            top: 0,
            right: "15%",
            zIndex: 4,
            fontSize: "2rem",
            fontWeight: "500",
            "@media (max-width:1300px)": {
              right: "10%",
            },
          }}
        >
          <ul style={{ listStyleType: "none", display: "flex", flexDirection: "row", margin: 0 }}>
            {pages.map((page) => (
              <li className="nav-link" onClick={() => handleScroll(page.id)} key={page.id}>
                {page.title}
              </li>
            ))}
          </ul>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            position: "absolute",
            top: 50,
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