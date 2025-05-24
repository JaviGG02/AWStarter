import React from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Mission() {
  return (
    <MKBox component="section" py={3}>
      <Grid item xs={22} lg={6}>
        <MKTypography variant="h4" mb={2}>
          My Mission
        </MKTypography>
        <MKTypography variant="body1" color="text" mb={4}>
          To build a vibrant, open, and inclusive community of tech enthusiasts who are passionate about cloud technology. Through detailed tutorials, real-world experiences, and honest reflections on working at Amazon, I aim to empower others to advance their skills and careers. This platform is not just my voice but yours too — together, we share, collaborate, and inspire.
        </MKTypography>
      </Grid>
    </MKBox>
  );
}

export default Mission;