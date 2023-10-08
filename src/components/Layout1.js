import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

const Layout1 = ({ children }) => {
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
        <Link to="/" className="linkdec">
          <ListItemButton className="linkdec1">
            <ListItemText primary="STRONA GŁÓWNA" className="linkdec2" sx={{ color: "white" }} />
          </ListItemButton>
        </Link>
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
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              position: "absolute",
              top: 50,
              right: "15%",
              zIndex: 4,
              fontSize: "2rem",
              fontWeight: "500",
              "@media (max-width:1300px)": {
                right: "10%",
              },
            }}
          >
            <li style={{ listStyleType: "none" }}>
              <Link to="/" className="nav-link">
                STRONA GŁÓWNA
              </Link>
              <Link to="/AboutUs" className="nav-link">
                O NAS
              </Link>
              <Link to="/Store" className="nav-link">
                SKLEP
              </Link>
              <Link to="/Gallery" className="nav-link">
                GALERIA
              </Link>
              <Link to="/Contact" className="nav-link">
                KONTAKT
              </Link>
            </li>
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
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout1;