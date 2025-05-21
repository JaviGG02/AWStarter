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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKBadge from "components/MKBadge";

function Experience() {
  const experiences = [
    {
      title: "Associate Solutions Architect",
      company: "Amazon Web Services (AWS)",
      period: "September 2024 – present",
      description: "As an SA at AWS, I continue to accelerate my expertise in cloud technologies, specializing in Containers and Serverless solutions. I focus on modernizing applications and optimizing infrastructure, driving efficiency and scalability for clients.",
      technologies: ["Containers", "Serverless", "Compute", "Migration Foundations", "App Development"]
    },
    {
      title: "Solutions Architect internship",
      company: "Amazon Web Services (AWS)",
      period: "June 2023 – August 2023",
      description: "Successfully accomplished AWS internship, achieving objectives such as AWS Cloud Practitioner certification, designing and implementing a chatbot for cost optimization, and delivering a presentation to the team.",
      technologies: ["AI/ML", "AWS Fundamentals", "Microsoft Workloads"]
    },
    {
      title: "Private Tutor",
      company: "Freelancer",
      period: "January / 2021 – June / 2023",
      description: "I taught +10 different students about mathematics, physics and English. Helped 75% of my students to pass at least 2 subjects they were failing. A 25% of them passed at least 4 failed subjects. Focusing my work not only on teaching essential contents, but also motivating and teaching how to focus and study correctly.",
      technologies: ["Motivation", "Focusing", "Teaching"]
    }
  ];

  return (
    <MKBox component="section">
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" mb={1}>
              Work Experience
            </MKTypography>
            <MKTypography variant="body1" fontWeight="light" color="text" mb={0}>
              My professional journey and accomplishments
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ mb: 3, boxShadow: 3 }}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                      <MKTypography variant="h5" mb={1}>
                        {experience.title}
                      </MKTypography>
                      <MKTypography variant="body2" color="primary" fontWeight="medium" mb={1}>
                        {experience.company}
                      </MKTypography>
                      <MKTypography variant="body2" color="text" mb={2}>
                        {experience.description}
                      </MKTypography>
                      <MKBox display="flex" flexWrap="wrap" gap={1}>
                        {experience.technologies.map((tech) => (
                          <MKBadge
                            key={tech}
                            badgeContent={tech}
                            variant="contained"
                            color="info"
                            size="sm"
                            container
                          />
                        ))}
                      </MKBox>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="flex-end" alignItems="flex-start">
                      <MKTypography variant="body2" color="secondary" fontWeight="bold">
                        {experience.period}
                      </MKTypography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Experience;