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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";

function Projects() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Featured Projects
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="E-Commerce Platform"
              description="A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration."
              action={{
                type: "external",
                route: "https://github.com/javiergarcia/ecommerce-platform",
                color: "info",
                label: "view project",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Task Management App"
              description="A responsive task management application with drag-and-drop functionality, user collaboration features, and real-time updates using WebSockets."
              action={{
                type: "external",
                route: "https://github.com/javiergarcia/task-manager",
                color: "info",
                label: "view project",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Weather Dashboard"
              description="An interactive weather dashboard that displays current weather conditions and forecasts for multiple locations. Built with React and integrates with OpenWeatherMap API."
              action={{
                type: "external",
                route: "https://github.com/javiergarcia/weather-dashboard",
                color: "info",
                label: "view project",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Portfolio Website"
              description="A personal portfolio website built with React and Material UI, showcasing projects and professional experience."
              action={{
                type: "external",
                route: "https://github.com/javiergarcia/portfolio",
                label: "view project",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Projects;