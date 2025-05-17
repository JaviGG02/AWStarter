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

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "pages/LandingPages/Author/sections/Profile";
import Posts from "pages/LandingPages/Author/sections/Posts";
import Contact from "pages/LandingPages/Author/sections/Contact";
import Footer from "pages/LandingPages/Author/sections/Footer";
import Skills from "pages/LandingPages/Author/sections/Skills";
import Experience from "pages/LandingPages/Author/sections/Experience";
import Education from "pages/LandingPages/Author/sections/Education";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function Author() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/landing-pages/contact-us",
          label: "Contact Me",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="30rem"
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
              Professional Resume
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mb={3}
            >
              Software Engineer & Full Stack Developer
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
          <Posts />
        </Card>
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

export default Author;