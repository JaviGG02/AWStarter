import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

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

// Architecture project component
function ArchitectureProject({ title, description, image, technologies, link }) {
  return (
    <Card sx={{ mb: 4, overflow: "hidden" }}>
      <Grid container>
        <Grid item xs={12}>
          <MKBox
            component="img"
            src={image}
            alt={title}
            width="100%"
            height="300px"
            sx={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12}>
          <MKBox p={3}>
            <MKTypography variant="h4" mb={1}>
              {title}
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={2}>
              {description}
            </MKTypography>
            <MKBox mb={2}>
              <MKTypography variant="body2" fontWeight="bold">
                Technologies:
              </MKTypography>
              <MKBox display="flex" flexWrap="wrap" gap={1} mt={1}>
                {technologies.map((tech, index) => (
                  <MKBox
                    key={index}
                    py={0.5}
                    px={1.5}
                    bgcolor="light"
                    borderRadius="lg"
                    fontSize="0.75rem"
                  >
                    {tech}
                  </MKBox>
                ))}
              </MKBox>
            </MKBox>
            <MKButton variant="gradient" color="info" component="a" href={link}>
              View Details
            </MKButton>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

function Architecture() {
  // Sample architecture projects data
  const architectureProjects = [
    {
      title: "Serverless E-commerce Platform",
      description: "A highly scalable e-commerce platform built using serverless architecture on AWS. This solution leverages AWS Lambda, API Gateway, DynamoDB, and S3 to create a cost-effective and scalable backend for an online store.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "Cognito", "EventBridge"],
      link: "/awstarter/architecture/serverless-ecommerce",
    },
    {
      title: "Microservices Architecture with Containers",
      description: "A robust microservices architecture implemented using containers on AWS. This solution uses Amazon ECS, ECR, and Application Load Balancer to deploy and manage containerized microservices with high availability and scalability.",
      image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["ECS", "ECR", "Application Load Balancer", "RDS", "ElastiCache", "CloudWatch", "X-Ray"],
      link: "/awstarter/architecture/microservices-containers",
    },
    {
      title: "Real-time Data Processing Pipeline",
      description: "A scalable real-time data processing pipeline built on AWS. This architecture uses Kinesis, Lambda, and various AWS analytics services to ingest, process, and analyze streaming data in real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Kinesis Data Streams", "Kinesis Data Firehose", "Lambda", "S3", "Athena", "QuickSight", "Glue"],
      link: "/awstarter/architecture/data-pipeline",
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
              AWS Architecture Showcase
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Explore the cloud architectures I've designed and implemented using AWS services.
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
            <Grid item xs={12}>
              <MKTypography variant="h3" mb={4}>
                Featured Architecture Projects
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {architectureProjects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <ArchitectureProject {...project} />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={3} mt={4}>
            <Grid item xs={12}>
              <MKTypography variant="h4" mb={3}>
                AWS Architecture Best Practices
              </MKTypography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKBox p={3} bgcolor="light" borderRadius="xl" height="100%">
                    <MKTypography variant="h5" mb={2}>
                      <Icon color="info" sx={{ mr: 1, verticalAlign: "middle" }}>
                        security
                      </Icon>
                      Security by Design
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      Implementing security at every layer of the architecture, following the principle of least privilege, and using AWS security services to protect data and applications.
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox p={3} bgcolor="light" borderRadius="xl" height="100%">
                    <MKTypography variant="h5" mb={2}>
                      <Icon color="info" sx={{ mr: 1, verticalAlign: "middle" }}>
                        auto_fix_high
                      </Icon>
                      Reliability & Resilience
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      Designing for failure, implementing multi-AZ deployments, and using AWS services like Auto Scaling and Route 53 to ensure high availability and fault tolerance.
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox p={3} bgcolor="light" borderRadius="xl" height="100%">
                    <MKTypography variant="h5" mb={2}>
                      <Icon color="info" sx={{ mr: 1, verticalAlign: "middle" }}>
                        speed
                      </Icon>
                      Performance Efficiency
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      Selecting the right resources for workloads, implementing caching strategies, and continuously monitoring and optimizing performance using AWS CloudWatch and other tools.
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox p={3} bgcolor="light" borderRadius="xl" height="100%">
                    <MKTypography variant="h5" mb={2}>
                      <Icon color="info" sx={{ mr: 1, verticalAlign: "middle" }}>
                        savings
                      </Icon>
                      Cost Optimization
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      Implementing right-sizing, using reserved instances and savings plans, leveraging serverless and managed services, and continuously monitoring costs with AWS Cost Explorer.
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>
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

export default Architecture;