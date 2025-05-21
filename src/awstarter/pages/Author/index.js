/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Custom navbar component
import MKNavbar from "components/MKNavbar";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";

// Author page sections
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";

// @mui material components
import Button from "@mui/material/Button";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Routes
import routes from "awstarter/routes";
import footerRoutes from "awstarter/footer.routes";

// Images
import bgImage from "assets/images/banner-author.png";

function Author() {
  return (
    <>
      <MKNavbar
        brand="AWStarter"
        routes={routes}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="40rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.6),
                rgba(gradients.dark.state, 0.6)
              )}, url(${bgImage})`,
            // backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          <MKBox
            textAlign="center"
            color="white"
            p={3}
          >
            <MKTypography
              variant="h1"
              fontWeight="bold"
              color="white"
              mb={1}
              textTransform="uppercase"
            >
              Javier Garcia
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mb={3}
            >
              AWS Solutions Architect
            </MKTypography>
          </MKBox>
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
          <Profile />
          <Skills />
          <Experience />
          <Education />
          <MKBox display="flex" justifyContent="center" mt={3} mb={3}>
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/javier-garcia-garcia-1ba311229/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#29B6F6",
                color: "#FFFFFF",
                '&:hover': {
                  backgroundColor: "#0288D1"
                }
              }}
            >
              Connect on LinkedIn
            </Button>
          </MKBox>
        </Card>
        
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Author;