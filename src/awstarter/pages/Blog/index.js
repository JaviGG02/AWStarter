import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "awstarter/routes";
import footerRoutes from "awstarter/footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

// Blog post component
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

function Blog() {
  // Sample blog posts data
  const blogPosts = [
    {
      title: "Serverless Architecture: The Future of Cloud Computing",
      date: "June 15, 2023",
      excerpt: "Explore how serverless architecture is transforming the way we build and deploy applications in the cloud. Learn about the benefits, challenges, and best practices for implementing serverless solutions on AWS.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
      link: "/awstarter/blog/serverless-architecture",
    },
    {
      title: "Optimizing AWS Costs: Strategies for Efficient Cloud Spending",
      date: "May 22, 2023",
      excerpt: "Discover practical strategies to optimize your AWS costs without compromising performance or reliability. This post covers tools, techniques, and best practices for efficient cloud spending.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      link: "/awstarter/blog/optimizing-aws-costs",
    },
    {
      title: "Containerization with AWS ECS and EKS: A Comparative Analysis",
      date: "April 10, 2023",
      excerpt: "Compare AWS Elastic Container Service (ECS) and Elastic Kubernetes Service (EKS) to determine which container orchestration solution is right for your workloads. Learn about the pros, cons, and use cases for each service.",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      link: "/awstarter/blog/containerization-ecs-eks",
    },
  ];

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/awstarter/home",
          label: "Home",
          color: "info",
        }}
        sticky
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
              {blogPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
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