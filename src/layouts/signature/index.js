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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import { useState } from "react";
// Data
import authorsTableData from "layouts/signature/data/authorsTableData";

// react-router components
import { Navigate } from "react-router-dom";

function Tables() {
  const { columns, rows } = authorsTableData();
  const [state, setState] = useState(false);
  if (state) return <Navigate to="/nouvelle-signature" />;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-2}
                pt={1}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  LISTE DES CONTRATS
                </MDTypography>
                <MDBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="1.7rem"
                  height="1.7rem"
                  bgColor="white"
                  shadow="sm"
                  borderRadius="50%"
                  position="fixed"
                  top="133px"
                  right="60px"
                  color="white"
                  sx={{ cursor: "pointer" }}
                  onClick={() => setState(true)}
                >
                  <Icon fontSize="large" color="info">
                    add
                  </Icon>
                </MDBox>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
