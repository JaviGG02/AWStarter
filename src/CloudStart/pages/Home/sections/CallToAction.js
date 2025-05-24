import React from "react";
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function CallToAction() {
  return (
    <MKBox component="section" py={3}>
      <Grid container spacing={2}>
        <Grid item>
          <MKButton
            variant="gradient"
            color="info"
            size="large"
            component={Link}
            to="/CloudStart/blog"
          >
            Explore Articles
          </MKButton>
        </Grid>
        <Grid item>
          <MKButton
            variant="outlined"
            color="info"
            size="large"
            component={Link}
            to="/CloudStart/author"
          >
            About Me
          </MKButton>
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default CallToAction;