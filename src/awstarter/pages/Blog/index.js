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
import routes from "awstarter/routes";
import footerRoutes from "awstarter/footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

// Blog components
import BlogPost from "./BlogPost";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        
        // Extract excerpt from content (first paragraph after front matter)
        const excerptMatch = content.trim().match(/^(.*?)(?:\n\n|\n#)/s);
        const excerpt = excerptMatch ? excerptMatch[1].trim() : content.substring(0, 150) + "...";
        
        return {
          title: frontMatter.title || "Untitled Post",
          date: frontMatter.date || "",
          excerpt: excerpt,
          image: frontMatter.featured_image || "",
          link: `/awstarter/blog/${slug}`,
          folder: slug,
          markdownFile: "post.md",
          author: frontMatter.author || "",
          tags: frontMatter.tags ? frontMatter.tags.replace(/[\[\]]/g, '').split(',').map(tag => tag.trim()) : []
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
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

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
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {loading ? (
                <MKTypography variant="body1">Loading blog posts...</MKTypography>
              ) : error ? (
                <MKTypography variant="body1" color="error">
                  Error loading blog posts: {error}
                </MKTypography>
              ) : blogPosts.length === 0 ? (
                <MKTypography variant="body1">No blog posts found.</MKTypography>
              ) : (
                blogPosts.map((post, index) => (
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
                  <MKBox component="li" mb={1}>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      color="info"
                      fontWeight="regular"
                    >
                      AWS Services
                    </MKTypography>
                  </MKBox>
                  <MKBox component="li" mb={1}>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      color="info"
                      fontWeight="regular"
                    >
                      Serverless
                    </MKTypography>
                  </MKBox>
                  <MKBox component="li" mb={1}>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      color="info"
                      fontWeight="regular"
                    >
                      DevOps
                    </MKTypography>
                  </MKBox>
                  <MKBox component="li" mb={1}>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      color="info"
                      fontWeight="regular"
                    >
                      Cloud Architecture
                    </MKTypography>
                  </MKBox>
                  <MKBox component="li">
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      color="info"
                      fontWeight="regular"
                    >
                      Best Practices
                    </MKTypography>
                  </MKBox>
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