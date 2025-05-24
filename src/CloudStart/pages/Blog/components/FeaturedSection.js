import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import FeaturedPost from "./FeaturedPost";

function FeaturedSection({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <MKBox mb={4}>
      <MKTypography variant="h4" mb={2}>
        Featured Posts
      </MKTypography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FeaturedPost {...posts[0]} featured={true} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {posts.slice(1, 3).map((post, index) => (
              <Grid item xs={12} key={index}>
                <FeaturedPost {...post} compact={true} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </MKBox>
  );
}

FeaturedSection.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      image: PropTypes.string,
      link: PropTypes.string.isRequired,
      author: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default FeaturedSection;