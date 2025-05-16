import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "awstarter/routes";
import footerRoutes from "awstarter/footer.routes";

// Images
import profileImage from "assets/images/team-2.jpg";
import bgImage from "assets/images/city-profile.jpg";

function Author() {
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
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
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
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4} lg={3} mx="auto">
              <MKAvatar src={profileImage} alt="Profile Picture" size="xxl" shadow="xl" />
            </Grid>
            <Grid item xs={12} md={8} lg={9} sx={{ ml: { xs: 0, md: "auto" } }}>
              <MKBox py={{ xs: 3, md: 0 }}>
                <MKTypography variant="h3" mb={1}>
                  AWS Cloud Architect
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  Cloud Solutions | DevOps | Serverless Architecture
                </MKTypography>
                <MKBox display="flex" alignItems="center" mb={2}>
                  <MKTypography variant="body2" color="text" mr={0.5}>
                    <Icon>place</Icon>
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Seattle, Washington
                  </MKTypography>
                </MKBox>
                <MKBox display="flex">
                  <MKButton variant="outlined" color="info" size="small" sx={{ mr: 1 }}>
                    <Icon>facebook</Icon>
                  </MKButton>
                  <MKButton variant="outlined" color="info" size="small" sx={{ mr: 1 }}>
                    <Icon>twitter</Icon>
                  </MKButton>
                  <MKButton variant="outlined" color="info" size="small" sx={{ mr: 1 }}>
                    <Icon>linkedin</Icon>
                  </MKButton>
                  <MKButton variant="outlined" color="info" size="small">
                    <Icon>github</Icon>
                  </MKButton>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
          <Grid container spacing={3} mt={3}>
            <Grid item xs={12}>
              <MKTypography variant="h4" mb={2}>
                About Me
              </MKTypography>
              <MKTypography variant="body1" color="text">
                I'm a passionate AWS Cloud Architect with over 5 years of experience designing, implementing, 
                and managing cloud solutions. My journey at AWS has been focused on helping organizations 
                leverage cloud technologies to drive innovation and business growth.
                <br /><br />
                Throughout my career, I've specialized in serverless architectures, containerization, 
                infrastructure as code, and DevOps practices. I'm particularly interested in building 
                scalable, resilient, and cost-effective solutions that solve real-world problems.
                <br /><br />
                This website serves as a platform to share my experiences, insights, and projects 
                related to AWS and cloud computing. Feel free to explore my blog posts and architecture 
                showcases to learn more about my work.
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container spacing={3} mt={3}>
            <Grid item xs={12}>
              <MKTypography variant="h4" mb={2}>
                Skills & Expertise
              </MKTypography>
              <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                  <MKBox p={2} bgcolor="light" borderRadius="lg" textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      AWS Services
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox p={2} bgcolor="light" borderRadius="lg" textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Serverless
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox p={2} bgcolor="light" borderRadius="lg" textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Containers
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox p={2} bgcolor="light" borderRadius="lg" textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Infrastructure as Code
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox p={2} bgcolor="light" borderRadius="lg" textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      DevOps
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox p={2} bgcolor="light" borderRadius="lg" textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      CI/CD
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox p={2} bgcolor="light" borderRadius="lg" textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Cloud Security
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={6} md={3}>
                  <MKBox p={2} bgcolor="light" borderRadius="lg" textAlign="center">
                    <MKTypography variant="body2" fontWeight="bold">
                      Cost Optimization
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Author;