import React from "react";
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TopicBox({ title, icon, onClick }) {
  return (
    <Card
      sx={{
        p: 2,
        textAlign: "center",
        cursor: "pointer",
        height: "100%",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 20px -10px rgba(0,0,0,0.2)",
        },
      }}
      onClick={onClick}
    >
      <MKBox
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="60px"
          height="60px"
          borderRadius="xl"
          bgColor="info"
          color="white"
          shadow="md"
          mb={2}
        >
          <Icon fontSize="medium">{icon}</Icon>
        </MKBox>
        <MKTypography variant="body2" fontWeight="bold">
          {title}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the TopicBox
TopicBox.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TopicBox;