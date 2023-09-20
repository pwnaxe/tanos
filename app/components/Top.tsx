"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import SocialMedia from "./Socialmedia";
import { NextRouter } from "next/router";

export default function Top({
  setActiveComponent,
}: {
  setActiveComponent: Function;
}) {
  const handleNavigation = (componentName: string) => {
    setActiveComponent(componentName);
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      const e = event as unknown as KeyboardEvent & MouseEvent;
      if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
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
      {["O NAS", "SKLEP", "GALERIA", "KONTAKT"].map((text, index) => {
        const componentNames = ["AboutUs", "Store", "Gallery", "Contact"];
        return (
          <ListItemButton
            key={text}
            onClick={() => handleNavigation(componentNames[index])}
          >
            <ListItemText
              primary={<span style={{ color: "white" }}>{text}</span>}
            />
          </ListItemButton>
        );
      })}
    </Box>
  );

  return (
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
      <>
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
            <a href="#O nas" className="nav-link">
              O NAS
            </a>
            <a href="#Sklep" className="nav-link">
              SKLEP
            </a>
            <a href="#Galeria" className="nav-link">
              GALERIA
            </a>
            <a href="#Kontakt" className="nav-link">
              KONTAKT
            </a>
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
              style: { backgroundColor: "transparent", height: "25vh" },
            }}
          >
            {list}
          </Drawer>
        </Box>
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
            height: "100vh",
            transition: "width 0.5s ease-in-out",
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
          <Image
            src="/assets/Logo Tanos.png"
            alt="Tanos Motorsport"
            layout="fill"
            objectFit="cover"
            style={{ zIndex: 5 }}
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
    </Box>
  );
}
