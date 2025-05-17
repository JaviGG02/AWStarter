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
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2021 - Present",
      description: "Lead developer for enterprise web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers. Reduced application load time by 40% through code optimization.",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "Mar 2019 - Dec 2020",
      description: "Developed and maintained multiple client-facing web applications. Collaborated with UX/UI designers to implement responsive designs. Integrated third-party APIs and payment gateways.",
      technologies: ["React", "Express", "PostgreSQL", "Redux", "Jest"]
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Agency",
      period: "Jun 2017 - Feb 2019",
      description: "Created responsive web interfaces for various clients. Worked with design team to implement pixel-perfect UI components. Optimized website performance and accessibility.",
      technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "Bootstrap"]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Nexus",
      period: "Jan 2016 - May 2017",
      description: "Assisted in developing web applications for early-stage startups. Implemented frontend features and fixed bugs. Participated in code reviews and agile development processes.",
      technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"]
    }
  ];

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" mb={1}>
              Work Experience
            </MKTypography>
            <MKTypography variant="body2" color="text">
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