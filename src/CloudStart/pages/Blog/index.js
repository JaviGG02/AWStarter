import React, { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import MKNavbar from "components/MKNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "CloudStart/routes";
import footerRoutes from "CloudStart/footer.routes";

// Images
import bgImage from "assets/images/containarization.png";

// Blog components
import BlogPost from "./components/BlogPost";
import SearchBar from "./components/SearchBar";
import TopicsSection from "./components/TopicsSection";
import FeaturedSection from "./components/FeaturedSection";
import Sidebar from "./components/Sidebar";

// Services
import { fetchAllPosts, getUniqueTags, filterPostsBySearch, filterPostsByTopic } from "./services/blogService";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [uniqueTags, setUniqueTags] = useState([]);

  // List of blog post directories to fetch
  const blogPostSlugs = [
    "serverless-architecture",
    "optimizing-aws-costs",
    "containerization-ecs-eks"
  ];

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await fetchAllPosts(blogPostSlugs);
        setBlogPosts(posts);
        setFilteredPosts(posts);
        setUniqueTags(getUniqueTags(posts));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Handle search functionality
  useEffect(() => {
    setFilteredPosts(filterPostsBySearch(blogPosts, searchQuery));
  }, [searchQuery, blogPosts]);

  // Handle topic filter
  const handleTopicFilter = (tag) => {
    if (tag === "all") {
      setFilteredPosts(blogPosts);
      setSearchQuery("");
      return;
    }
    
    setFilteredPosts(filterPostsByTopic(blogPosts, tag));
    setSearchQuery(tag);
  };

  return (
    <>
      <MKBox position="relative">
        <MKNavbar
          brand="CloudStart"
          routes={routes}
          transparent
          light
        />
        <MKBox
          minHeight="40vh"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.6),
                rgba(gradients.dark.state, 0.6)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Container>
            <Grid container item xs={12} lg={8} justifyContent="center" mx="auto">
              <MKTypography
                variant="h1"
                color="white"
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                AWS Blog & Insights
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                textAlign="center"
                px={{ xs: 6, lg: 12 }}
                mt={1}
              >
                Sharing my thoughts, experiences, and insights on AWS, cloud computing, and technology trends.
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Container>
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <TopicsSection onTopicFilter={handleTopicFilter} />

            {/* Featured Posts Section */}
            {!loading && !error && filteredPosts.length > 0 && searchQuery === "" && (
              <FeaturedSection posts={filteredPosts} />
            )}

            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                {/* Search Results or All Posts */}
                <MKBox mb={3}>
                  {searchQuery && (
                    <MKTypography variant="h5" mb={2}>
                      {filteredPosts.length === 0 
                        ? "No posts found matching your search" 
                        : `Found ${filteredPosts.length} post${filteredPosts.length !== 1 ? 's' : ''} matching "${searchQuery}"`}
                    </MKTypography>
                  )}
                  {!searchQuery && (
                    <MKTypography variant="h5" mb={2}>
                      All Posts
                    </MKTypography>
                  )}
                </MKBox>

                {loading ? (
                  <MKTypography variant="body1">Loading blog posts...</MKTypography>
                ) : error ? (
                  <MKTypography variant="body1" color="error">
                    Error loading blog posts: {error}
                  </MKTypography>
                ) : filteredPosts.length === 0 ? (
                  <MKTypography variant="body1">No blog posts found.</MKTypography>
                ) : (
                  filteredPosts.map((post, index) => (
                    <BlogPost key={index} {...post} />
                  ))
                )}
              </Grid>
              <Grid item xs={12} md={4}>
                <Sidebar 
                  tags={uniqueTags}
                  posts={blogPosts}
                  onTagClick={handleTopicFilter}
                />
              </Grid>
            </Grid>
          </Container>
        </Card>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Blog;