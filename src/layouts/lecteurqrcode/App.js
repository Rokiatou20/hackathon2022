import React from "react";
import "./styles.css";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import Camera from "./Camera";

function LecteurQR() {
  return (
    <CoverLayout image={bgImage}>
      <Card sx={{ p: 2, mt: 2, ml: -20, minWidth: 600, backgroundColor: "#247dea" }}>
        <Camera />
      </Card>
    </CoverLayout>
  );
}
export default LecteurQR;
