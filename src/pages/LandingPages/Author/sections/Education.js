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
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2014 - 2016",
      description: "Specialized in Software Engineering and Artificial Intelligence. Thesis on 'Optimizing React Applications for Performance'.",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Massachusetts Institute of Technology",
      period: "2010 - 2014",
      description: "Graduated with honors. Participated in multiple hackathons and coding competitions. Member of the Web Development Club.",
    },
    {
      degree: "Professional Certifications",
      institution: "Various Institutions",
      period: "2016 - Present",
      description: "AWS Certified Solutions Architect, Google Cloud Professional Developer, MongoDB Certified Developer, React Certification, and more.",
    }
  ];

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" mb={1}>
              Education
            </MKTypography>
            <MKTypography variant="body2" color="text">
              Academic background and certifications
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