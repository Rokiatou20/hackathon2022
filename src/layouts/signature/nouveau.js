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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import React from 'react';
import axios from 'axios';

const Web3 = require('web3')

let web3 = new Web3('http://localhost')

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function NewSignature() {
  const [ state, setState ] = React.useState({ 
    selectedFile: null
  }) ; 
  const onFileChange = event => { 
    // Update the state 
    setState({ selectedFile: event.target.files[0] }); 
  }; 

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const onFileUpload = (e) => {
    e.preventDefault() 
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
    formData.append( 
      "myFile", 
      state.selectedFile, 
      state.selectedFile.name 
    ); 
   
    // Details of the uploaded file 
    console.log(state.selectedFile); 
    
    
    var file = state.selectedFile;
    getBase64(file).then(
      data => {
        axios.post("http://localhost:4500/qr/createQr", data).then(console.log);
      }
    );
    //axios.post("http://localhost:8000/api/v1/", formData); 
  }; 


  return (
    <BasicLayout image={bgImage}>
      <Card sx={{ p: 2, mt: 8 }}>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-5}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Chargez votre document
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              
                  <MDInput onChange={onFileChange} autofocus name="file" type="file" label="Document" fullWidth />
                  
            </MDBox>
            <MDBox mt={4}>
              <MDButton variant="gradient" onClick={onFileUpload} color="info" fullWidth>
                Chargement
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default NewSignature;
