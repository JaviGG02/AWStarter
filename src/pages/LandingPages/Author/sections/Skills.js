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
import Chip from "@mui/material/Chip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Redux", "Material UI", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "Java", "Spring Boot", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack", "Agile/Scrum", "Jira"]
    }
  ];

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" mb={1}>
              Technical Skills
            </MKTypography>
            <MKTypography variant="body2" color="text">
              A comprehensive list of my technical skills and competencies
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {skillCategories.map((category) => (
            <Grid item xs={12} md={6} lg={3} key={category.title}>
              <MKBox mb={3}>
                <MKTypography variant="h5" fontWeight="bold" mb={2}>
                  {category.title}
                </MKTypography>
                <MKBox>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      color="info"
                      variant="outlined"
                      sx={{ m: 0.5 }}
                    />
                  ))}
                </MKBox>
              </MKBox>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Skills;