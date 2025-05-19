import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import MKNavbar from "components/MKNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "awstarter/routes";
import footerRoutes from "awstarter/footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState({
    title: "",
    date: "",
    author: "",
    content: "",
    excerpt: "",
    image: "",
    tags: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the markdown file from the public directory
    const fetchMarkdownFile = async () => {
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
        
        setPost({
          title: frontMatter.title || "Untitled Post",
          date: frontMatter.date || "",
          author: frontMatter.author || "",
          content: content,
          excerpt: excerpt,
          image: frontMatter.featured_image || "",
          tags: frontMatter.tags ? frontMatter.tags.replace(/[\[\]]/g, '').split(',').map(tag => tag.trim()) : []
        });
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(err.message);
        setLoading(false);
        
        // Set 404 post data
        setPost({
          title: "Post Not Found",
          date: "",
          author: "",
          content: "The requested blog post could not be found.",
          excerpt: "",
          image: "",
          tags: []
        });
      }
    };

    fetchMarkdownFile();
  }, [slug]);

  // Custom renderer components for ReactMarkdown
  const MarkdownComponents = {
    h1: (props) => <MKTypography variant="h1" mb={2} {...props} />,
    h2: (props) => <MKTypography variant="h2" mb={2} mt={4} {...props} />,
    h3: (props) => <MKTypography variant="h3" mb={2} mt={3} {...props} />,
    h4: (props) => <MKTypography variant="h4" mb={2} mt={2} {...props} />,
    h5: (props) => <MKTypography variant="h5" mb={2} {...props} />,
    h6: (props) => <MKTypography variant="h6" mb={2} {...props} />,
    p: (props) => <MKTypography variant="body1" mb={2} {...props} />,
    a: (props) => <MKTypography component="a" color="info" {...props} />,
    ul: (props) => <MKBox component="ul" mb={2} pl={2} {...props} />,
    ol: (props) => <MKBox component="ol" mb={2} pl={2} {...props} />,
    li: (props) => <MKTypography component="li" variant="body1" mb={1} {...props} />,
    blockquote: (props) => (
      <MKBox
        component="blockquote"
        borderLeft="4px solid"
        borderColor="info.main"
        pl={2}
        py={1}
        my={2}
        sx={{ backgroundColor: "rgba(0,0,0,0.04)" }}
        {...props}
      />
    ),
    code: (props) => (
      <MKBox
        component="code"
        p={1}
        borderRadius={1}
        sx={{ backgroundColor: "rgba(0,0,0,0.06)", fontFamily: "monospace" }}
        {...props}
      />
    ),
    pre: (props) => (
      <MKBox
        component="pre"
        p={2}
        mb={2}
        borderRadius={1}
        sx={{ 
          backgroundColor: "rgba(0,0,0,0.06)", 
          fontFamily: "monospace",
          overflowX: "auto"
        }}
        {...props}
      />
    ),
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
            )}, url(${post.image || bgImage})`,
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
              {post.title}
            </MKTypography>
            {post.excerpt && (
              <MKTypography
                variant="subtitle1"
                color="white"
                textAlign="center"
                px={{ xs: 6, lg: 12 }}
                mb={1}
                sx={{
                  fontStyle: "italic",
                  textShadow: "0px 1px 2px rgba(0,0,0,0.6)",
                }}
              >
                {post.excerpt}
              </MKTypography>
            )}
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              {post.date}
              {post.author && ` • ${post.author}`}
            </MKTypography>
            {post.tags && post.tags.length > 0 && (
              <MKBox display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
                {post.tags.map((tag, index) => (
                  <MKBox
                    key={index}
                    component="span"
                    py={0.5}
                    px={1.5}
                    mx={0.5}
                    mb={1}
                    borderRadius="sm"
                    bgColor="white"
                    color="dark"
                    typography="caption"
                    fontWeight="medium"
                  >
                    {tag}
                  </MKBox>
                ))}
              </MKBox>
            )}
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
            <Grid item xs={12} md={8} mx="auto">
              {loading ? (
                <MKTypography variant="body1">Loading...</MKTypography>
              ) : error ? (
                <MKTypography variant="body1" color="error">
                  Error loading blog post: {error}
                </MKTypography>
              ) : (
                <MKBox className="markdown-content">
                  <ReactMarkdown components={MarkdownComponents}>
                    {post.content}
                  </ReactMarkdown>
                </MKBox>
              )}
              <MKBox mt={6} mb={3} textAlign="center">
                <MKButton
                  variant="gradient"
                  color="info"
                  component="a"
                  href="/awstarter/blog"
                >
                  Back to Blog
                </MKButton>
              </MKBox>
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

export default BlogPostPage;