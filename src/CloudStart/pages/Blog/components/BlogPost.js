import React from "react";
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function BlogPost({ title, date, excerpt, image, link }) {
  return (
    <Card sx={{ mb: 3, overflow: "hidden" }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <MKBox
            component="img"
            src={image}
            alt={title}
            width="100%"
            height="100%"
            sx={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <MKBox p={3}>
            <MKTypography variant="h4" mb={1}>
              {title}
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              {date}
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={2}>
              {excerpt}
            </MKTypography>
            <MKButton variant="text" color="info" component="a" href={link}>
              Read More
            </MKButton>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the BlogPost
BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogPost;