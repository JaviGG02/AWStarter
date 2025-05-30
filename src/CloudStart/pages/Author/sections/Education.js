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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import School from "@mui/icons-material/School";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKAvatar from "components/MKAvatar";

function Education() {
  const educations = [
    {
      degree: "BACHELOR’S IN COMPUTER SCIENCE (BILINGUAL COURSE)",
      institution: "University Carlos III of Madrid",
      period: "2020 - 2024",
      description: "Entrance mark for the university of 13.58 / 14. Average final mark 8.1 / 10. Subjects with mark +9/10: Programming, Computer Technology, Computer Structure, Artificial Intelligence and Applied Differential Calculus, Distributed Systems, Interactive and ubiquitous systems, Machine Learning. Thesis mark: 9.6/10 ",
    },
    {
      degree: "BACHILLERATO (SPANISH HIGH SCHOOL)",
      institution: "Reinado del Corazón de Jesús",
      period: "2018 - 2020",
      description: "Average mark of 9.88 / 10. Honorable mentions in various subjects such as English or Spanish and Literature. Highest mark of the promotion.",
    },
    {
      degree: "COURSE: ANALYSIS OF INVESTMENT PROJECTS AND COMPANY VALUATION",
      institution: "University Carlos III of Madrid",
      period: "2022",
      description: "Course where I learnt the fundamentals around company valuation",
    }
  ];

  return (
    <MKBox component="section">
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" mb={1}>
              Education
            </MKTypography>
            <MKTypography variant="body1" fontWeight="light" color="text" mb={0}>
              Academic background and other courses
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {educations.map((education, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <MKBox display="flex" alignItems="center" mb={2}>
                    <MKAvatar
                      bgColor="info"
                      variant="rounded"
                      size="sm"
                      shadow="md"
                      sx={{ mr: 2 }}
                    >
                      <School fontSize="small" />
                    </MKAvatar>
                    <MKTypography variant="h5">
                      {education.degree}
                    </MKTypography>
                  </MKBox>
                  <MKTypography variant="body2" color="primary" fontWeight="medium" mb={1}>
                    {education.institution}
                  </MKTypography>
                  <MKTypography variant="body2" color="secondary" fontWeight="bold" mb={2}>
                    {education.period}
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    {education.description}
                  </MKTypography>
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

export default Education;