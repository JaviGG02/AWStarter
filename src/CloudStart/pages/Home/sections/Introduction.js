import React from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Introduction() {
  return (
    <MKBox component="section" py={3}>
      <Grid item xs={22} lg={6}>
        <MKTypography variant="h3" mb={3}>
          Welcome to CloudStart Tech Hub
        </MKTypography>
        <MKTypography variant="body1" color="text" mb={4}>
          This is my personal project — a space where I share my journey, experiences, and insights as a cloud enthusiast and Amazon team member. Here, I post blogs about cloud computing, AWS services, tips for landing a job at Amazon, and what life is really like inside one of the world's leading tech companies. Whether you're starting out or already deep in your tech career, I invite you to explore, learn, and grow with me.
        </MKTypography>
      </Grid>
    </MKBox>
  );
}

export default Introduction;