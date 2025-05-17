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
              title="Serverless Microservices Architecture"
              description="Designed and implemented a serverless architecture using AWS Lambda, API Gateway, and DynamoDB that reduced operational costs by 70% and improved scalability for a financial services client."
              action={{
                type: "external",
                route: "https://github.com/javiergarcia/serverless-architecture",
                color: "info",
                label: "view project",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Multi-Region Disaster Recovery"
              description="Developed a comprehensive disaster recovery solution using AWS Route 53, S3 Cross-Region Replication, and Aurora Global Database to achieve an RPO of less than 1 minute and RTO of 5 minutes."
              action={{
                type: "external",
                route: "https://github.com/javiergarcia/aws-disaster-recovery",
                color: "info",
                label: "view project",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Kubernetes Cluster Automation"
              description="Created an automated EKS deployment pipeline using Terraform and GitHub Actions, enabling teams to provision production-ready Kubernetes clusters with built-in monitoring and security controls."
              action={{
                type: "external",
                route: "https://github.com/javiergarcia/eks-automation",
                color: "info",
                label: "view project",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Cloud Cost Optimization"
              description="Implemented AWS cost optimization strategies including Reserved Instances, Savings Plans, and automated resource scheduling that resulted in 45% reduction in monthly cloud spend for an enterprise client."
              action={{
                type: "external",
                route: "https://github.com/javiergarcia/aws-cost-optimization",
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