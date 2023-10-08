import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import SocialMedia from './SocialMedia';

const Layout2 = ({ children }) => {
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

  const list = (
    <Box
      sx={{ width: 250, bgcolor: "black" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/AboutUs" className="linkdec">
          <ListItemButton className="linkdec1">
            <ListItemText primary="O NAS" className="linkdec2" sx={{ color: "white" }} />
          </ListItemButton>
        </Link>
        <Link to="/Store" className="linkdec">
          <ListItemButton className="linkdec1">
            <ListItemText primary="SKLEP" className="linkdec2" sx={{ color: "white" }} />
          </ListItemButton>
        </Link>
        <Link to="/Gallery" className="linkdec">
          <ListItemButton className="linkdec1">
            <ListItemText primary="GALERIA" className="linkdec2" sx={{ color: "white" }} />
          </ListItemButton>
        </Link>
        <Link to="/Contact" className="linkdec">
          <ListItemButton className="linkdec1">
            <ListItemText primary="KONTAKT" className="linkdec2" sx={{ color: "white" }} />
          </ListItemButton>
        </Link></List>
    </Box>
  );

  return (
    <div>
      <nav>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            backgroundColor: "#3D3D3B",
            width: "100vw",
            height: "7vh",
            top: 0,
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
              top: 0,
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
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout2;