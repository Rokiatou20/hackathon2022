/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Authentication layout components

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import MDTypography from "components/MDTypography";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <BasicLayout image={bgImage}>
        <MDTypography variant="h6" color="white">
          LISTE DES CONTRATS
        </MDTypography>
      </BasicLayout>
    </DashboardLayout>
  );
}

export default Dashboard;
