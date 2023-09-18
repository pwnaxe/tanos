"use client";

import React, { useState } from "react";
import Top from "./components/Top";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import AboutUs from "./components/Aboutus";
import Store from "./components/Store";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function Page() {
  const [activeComponent, setActiveComponent] = useState("AboutUs");

  return (
    <div>
      <Top setActiveComponent={setActiveComponent} />
      {activeComponent === "AboutUs" && <AboutUs />}
      {activeComponent === "Store" && <Store />}
      {activeComponent === "Gallery" && <Gallery />}
      {activeComponent === "Contact" && <Contact />}
    </div>
  );
}
