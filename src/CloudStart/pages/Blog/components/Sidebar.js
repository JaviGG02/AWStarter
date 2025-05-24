import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Sidebar({ tags, posts, onTagClick }) {
  return (
    <>
      <Card sx={{ p: 3, mb: 3 }}>
        <MKTypography variant="h5" mb={2}>
          Categories
        </MKTypography>
        <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
          {tags.map((tag, index) => (
            <MKBox component="li" mb={index < tags.length - 1 ? 1 : 0} key={index}>
              <MKTypography
                component="a"
                href="#"
                variant="button"
                color="info"
                fontWeight="regular"
                onClick={(e) => {
                  e.preventDefault();
                  onTagClick(tag);
                }}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, ' ')}
              </MKTypography>
            </MKBox>
          ))}
        </MKBox>
      </Card>
      {/* <Card sx={{ p: 3 }}>
        <MKTypography variant="h5" mb={2}>
          Recent Posts
        </MKTypography>
        <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
          {posts.map((post, index) => (
            <MKBox key={index} component="li" mb={index < posts.length - 1 ? 2 : 0}>
              <MKTypography
                component="a"
                href={post.link}
                variant="button"
                color="info"
                fontWeight="regular"
              >
                {post.title}
              </MKTypography>
              <MKTypography variant="caption" color="text" display="block">
                {post.date}
              </MKTypography>
            </MKBox>
          ))}
        </MKBox>
      </Card> */}
    </>
  );
}

Sidebar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  onTagClick: PropTypes.func.isRequired,
};

export default Sidebar;