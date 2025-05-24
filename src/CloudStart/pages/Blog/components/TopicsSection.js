import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TopicBox from "./TopicBox";

function TopicsSection({ onTopicFilter }) {
  return (
    <MKBox mb={4}>
      <MKTypography variant="h4" mb={2}>
        Topics
      </MKTypography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={4} md={2}>
          <TopicBox 
            title="All Posts" 
            icon="article" 
            onClick={() => onTopicFilter("all")} 
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <TopicBox 
            title="AWS" 
            icon="storage" 
            onClick={() => onTopicFilter("aws")} 
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <TopicBox 
            title="Career" 
            icon="work" 
            onClick={() => onTopicFilter("career")} 
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <TopicBox 
            title="Containers" 
            icon="view_in_ar" 
            onClick={() => onTopicFilter("containers")} 
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <TopicBox 
            title="Serverless" 
            icon="cloud" 
            onClick={() => onTopicFilter("serverless")} 
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <TopicBox 
            title="Development" 
            icon="code" 
            onClick={() => onTopicFilter("development")} 
          />
        </Grid>
      </Grid>
    </MKBox>
  );
}

TopicsSection.propTypes = {
  onTopicFilter: PropTypes.func.isRequired,
};

export default TopicsSection;