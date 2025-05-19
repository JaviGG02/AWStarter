import React from "react";
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function FeaturedPost({ title, date, excerpt, image, link, author, tags, featured = false, compact = false }) {
  return (
    <Card 
      sx={{ 
        overflow: "hidden", 
        height: compact ? "auto" : "100%",
        position: "relative",
        "&:hover": {
          "& .overlay": {
            opacity: 0.8,
          },
        },
      }}
    >
      <MKBox
        position="relative"
        height={compact ? "140px" : featured ? "300px" : "200px"}
        width="100%"
      >
        <MKBox
          component="img"
          src={image}
          alt={title}
          width="100%"
          height="100%"
          sx={{ objectFit: "cover" }}
        />
        <MKBox
          className="overlay"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          sx={{
            background: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
            transition: "opacity 0.3s ease",
            opacity: 0.6,
          }}
        />
        <MKBox
          position="absolute"
          bottom={0}
          left={0}
          width="100%"
          p={2}
          zIndex={2}
        >
          <MKTypography
            variant={compact ? "h6" : featured ? "h4" : "h5"}
            color="white"
            mb={compact ? 0 : 1}
            sx={{
              textShadow: "0px 1px 3px rgba(0,0,0,0.6)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: compact ? 1 : 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </MKTypography>
          {!compact && (
            <MKTypography variant="body2" color="white" fontWeight="light">
              {date} {author && `• ${author}`}
            </MKTypography>
          )}
        </MKBox>
      </MKBox>
      {!compact && (
        <MKBox p={2}>
          <MKTypography variant="body2" color="text" mb={2}>
            {excerpt}
          </MKTypography>
          <MKBox display="flex" justifyContent="space-between" alignItems="center">
            <MKButton variant="text" color="info" component="a" href={link}>
              Read More
            </MKButton>
            {tags && tags.length > 0 && (
              <MKBox>
                {tags.slice(0, 2).map((tag, index) => (
                  <MKBox
                    key={index}
                    component="span"
                    py={0.5}
                    px={1}
                    mx={0.5}
                    borderRadius="sm"
                    bgColor="light"
                    color="dark"
                    typography="caption"
                    fontWeight="medium"
                  >
                    {tag}
                  </MKBox>
                ))}
              </MKBox>
            )}
          </MKBox>
        </MKBox>
      )}
      {compact && (
        <MKBox
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          component="a"
          href={link}
          sx={{ 
            cursor: "pointer",
            textDecoration: "none",
            zIndex: 1
          }}
        />
      )}
    </Card>
  );
}

// Typechecking props for the FeaturedPost
FeaturedPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  author: PropTypes.string,
  tags: PropTypes.array,
  featured: PropTypes.bool,
  compact: PropTypes.bool,
};

export default FeaturedPost;