import React, { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import MKNavbar from "components/MKNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import CenteredFooter from "examples/Footers/CenteredFooter";

// Routes
import routes from "awstarter/routes";
import footerRoutes from "awstarter/footer.routes";

// Images
import bgImage from "assets/images/containarization.png";

// Blog components
import BlogPost from "./BlogPost";
import FeaturedPost from "./FeaturedPost";
import TopicBox from "./TopicBox";

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
    // Function to fetch and parse a markdown file
    const fetchMarkdownFile = async (slug) => {
      try {
        const response = await fetch(`/blog-content/${slug}/post.md`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blog post: ${response.status}`);
        }
        
        const markdownContent = await response.text();
        
        // Parse front matter from markdown
        const frontMatterRegex = /^---\n([\s\S]*?)\n---\n/;
        const frontMatterMatch = markdownContent.match(frontMatterRegex);
        
        let frontMatter = {};
        let content = markdownContent;
        
        if (frontMatterMatch) {
          // Extract and parse front matter
          const frontMatterText = frontMatterMatch[1];
          frontMatterText.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length) {
              const value = valueParts.join(':').trim();
              frontMatter[key.trim()] = value;
            }
          });
          
          // Remove front matter from content
          content = markdownContent.replace(frontMatterRegex, '');
        }
        
        // Use the excerpt from front matter if available, otherwise generate one
        let excerpt = frontMatter.excerpt;
        if (!excerpt) {
          const excerptMatch = content.trim().match(/^(.*?)(?:\n\n|\n#)/s);
          excerpt = excerptMatch ? excerptMatch[1].trim() : content.substring(0, 150) + "...";
        }
        
        return {
          title: frontMatter.title || "Untitled Post",
          date: frontMatter.date || "",
          excerpt: excerpt,
          image: frontMatter.featured_image || "",
          link: `/awstarter/blog/${slug}`,
          folder: slug,
          markdownFile: "post.md",
          author: frontMatter.author || "",
          tags: frontMatter.tags ? frontMatter.tags.replace(/[\[\]]/g, '').split(',').map(tag => tag.trim()) : [],
          content: content // Include content for search functionality
        };
      } catch (err) {
        console.error(`Error fetching blog post ${slug}:`, err);
        return null;
      }
    };

    // Fetch all blog posts
    const fetchAllPosts = async () => {
      try {
        const postsPromises = blogPostSlugs.map(slug => fetchMarkdownFile(slug));
        const posts = await Promise.all(postsPromises);
        
        // Filter out any null results (failed fetches)
        const validPosts = posts.filter(post => post !== null);
        
        // Sort posts by date (newest first)
        validPosts.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        
        setBlogPosts(validPosts);
        setFilteredPosts(validPosts);
        
        // Extract unique tags from all posts
        const allTags = validPosts.flatMap(post => post.tags);
        const uniqueTagsSet = new Set(allTags);
        setUniqueTags(Array.from(uniqueTagsSet));
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPosts(blogPosts);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = blogPosts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const tagMatch = post.tags.some(tag => tag.toLowerCase().includes(query));
      const excerptMatch = post.excerpt.toLowerCase().includes(query);
      
      return titleMatch || tagMatch || excerptMatch;
    });
    
    setFilteredPosts(filtered);
  }, [searchQuery, blogPosts]);

  // Handle topic filter
  const handleTopicFilter = (tag) => {
    if (tag === "all") {
      setFilteredPosts(blogPosts);
      setSearchQuery("");
      return;
    }
    
    const filtered = blogPosts.filter(post => 
      post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
    );
    
    setFilteredPosts(filtered);
    setSearchQuery(`${tag}`);
  };

  return (
    <>
      <MKNavbar
        brand="AWStarter"
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
          {/* Search Bar */}
          <MKBox mt={4} mb={4} sx={{ maxWidth: "1000px", mx: "auto" }}>
            <TextField
              fullWidth
              placeholder="Search blog posts by title, content, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>search</Icon>
                  </InputAdornment>
                ),
                sx: {
                  fontSize: "1.2rem",
                  padding: "12px 14px",
                  "& input": {
                    padding: "8px 0",
                  }
                }
              }}
            ></TextField>
          </MKBox>

          {/* Topic Boxes */}
          <MKBox mb={4}>
            <MKTypography variant="h4" mb={2}>
              Topics
            </MKTypography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={6} sm={4} md={2}>
                <TopicBox 
                  title="All Posts" 
                  icon="article" 
                  onClick={() => handleTopicFilter("all")} 
                />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <TopicBox 
                  title="AWS" 
                  icon="storage" 
                  onClick={() => handleTopicFilter("aws")} 
                />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <TopicBox 
                  title="Career" 
                  icon="work" 
                  onClick={() => handleTopicFilter("career")} 
                />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <TopicBox 
                  title="Containers" 
                  icon="view_in_ar" 
                  onClick={() => handleTopicFilter("containers")} 
                />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <TopicBox 
                  title="Serverless" 
                  icon="cloud" 
                  onClick={() => handleTopicFilter("serverless")} 
                />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <TopicBox 
                  title="Development" 
                  icon="code" 
                  onClick={() => handleTopicFilter("development")} 
                />
              </Grid>
            </Grid>
          </MKBox>

          {/* Featured Posts Section */}
          {!loading && !error && filteredPosts.length > 0 && searchQuery === "" && (
            <MKBox mb={4}>
              <MKTypography variant="h4" mb={2}>
                Featured Posts
              </MKTypography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <FeaturedPost {...filteredPosts[0]} featured={true} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    {filteredPosts.slice(1, 3).map((post, index) => (
                      <Grid item xs={12} key={index}>
                        <FeaturedPost {...post} compact={true} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </MKBox>
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
              <Card sx={{ p: 3, mb: 3 }}>
                <MKTypography variant="h5" mb={2}>
                  Categories
                </MKTypography>
                <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                  {uniqueTags.map((tag, index) => (
                    <MKBox component="li" mb={index < uniqueTags.length - 1 ? 1 : 0} key={index}>
                      <MKTypography
                        component="a"
                        href="#"
                        variant="button"
                        color="info"
                        fontWeight="regular"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTopicFilter(tag);
                        }}
                      >
                        {tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, ' ')}
                      </MKTypography>
                    </MKBox>
                  ))}
                </MKBox>
              </Card>
              <Card sx={{ p: 3 }}>
                <MKTypography variant="h5" mb={2}>
                  Recent Posts
                </MKTypography>
                <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                  {blogPosts.map((post, index) => (
                    <MKBox key={index} component="li" mb={index < blogPosts.length - 1 ? 2 : 0}>
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
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Blog;