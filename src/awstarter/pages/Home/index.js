import React, { useRef } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Custom navbar component
import MKNavbar from "components/MKNavbar";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "awstarter/routes";
import footerRoutes from "awstarter/footer.routes";

// Custom components
import CloudServicesAnimation from "components/animations/CloudServicesAnimation"; // Keep original import

function Home() {
  const contentRef = useRef(null);
  
  const handleDiscoverClick = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <MKNavbar
        brand="AWStarter"
        routes={routes}
        transparent
        light
      />
      <CloudServicesAnimation onDiscoverClick={handleDiscoverClick} />
      <div ref={contentRef}>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: 0,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} lg={6}>
                <MKTypography variant="h3" mb={1}>
                  Welcome to AWStarter
                </MKTypography>
                <MKTypography variant="body1" color="text" mb={2}>
                  This is my personal showcase of AWS projects, experiences, and insights. 
                  Explore my journey in cloud computing and see how I've leveraged AWS 
                  services to build innovative solutions.
                </MKTypography>
                <MKButton
                  variant="gradient"
                  color="info"
                  size="large"
                  component="a"
                  href="/awstarter/blog"
                  sx={{ mt: 2 }}
                >
                  Read My Blog
                </MKButton>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MKBox
                      component="img"
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80"
                      alt="AWS Cloud"
                      width="100%"
                      borderRadius="lg"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid container spacing={3} sx={{ mt: 4 }}>
              <Grid item xs={12} md={4}>
                <MKBox p={3} bgcolor="light" borderRadius="xl" shadow="md">
                  <MKTypography variant="h5" mb={2}>
                    AWS Experience
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Discover my professional journey at AWS, the projects I've worked on, and the skills I've developed.
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKBox p={3} bgcolor="light" borderRadius="xl" shadow="md">
                  <MKTypography variant="h5" mb={2}>
                    Blog & Insights
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Read my thoughts on cloud technology, best practices, and emerging trends in the AWS ecosystem.
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKBox p={3} bgcolor="light" borderRadius="xl" shadow="md">
                  <MKTypography variant="h5" mb={2}>
                    Architecture Showcase
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Explore the cloud architectures I've designed and implemented using AWS services.
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Container>
        </Card>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </div>
    </>
  );
}

export default Home;