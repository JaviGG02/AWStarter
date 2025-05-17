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
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Certification Images
import cert1 from "assets/images/certs/image.png";
import cert2 from "assets/images/certs/image (1).png";
import cert3 from "assets/images/certs/image (2).png";
import cert4 from "assets/images/certs/image (3).png";
import cert5 from "assets/images/certs/image (4).png";
import cert6 from "assets/images/certs/image (5).png";
import cert7 from "assets/images/certs/image (6).png";
import cert8 from "assets/images/certs/image (7).png";
import cert9 from "assets/images/certs/image (8).png";
import cert10 from "assets/images/certs/image (9).png";
import cert11 from "assets/images/certs/image (10).png";
import cert12 from "assets/images/certs/image (11).png";
import cert13 from "assets/images/certs/image (12).png";
import cert14 from "assets/images/certs/image (13).png";

function Skills() {
  const skillCategories = [
    {
      title: "AWS Services",
      skills: ["EC2", "S3", "Lambda", "ECS", "EKS", "DynamoDB", "CloudFormation", "API Gateway", "CloudWatch", "CDK", "Cognito", "EventBridge"]
    },
    {
      title: "App Development",
      skills: ["Docker", "Kubernetes", "DevOps", "Git", "CI/CD", "IaC", "Agile", "Data Structures", "API management", "Machine Learning"]
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "React","TypeScript", "C"]
    },
    {
      title: "Soft Skills",
      skills: ["Public Speaking", "Team Management", "Team Work","Creativity"]
    },
  ];
  // Array of all certification images
  const certifications = [
    cert1, cert2, cert3, cert4, cert5, cert6, cert7, 
    cert8, cert9, cert10, cert11, cert12, cert13, cert14
  ];

  // Function to display certifications
  const displayCertifications = () => {
    return certifications.map((cert, index) => (
      <Grid item xs={2} sm={2} md={1} lg={0.8} key={index} sx={{ mb: 2 }}>
        <Card 
          sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
        >
          <MKBox 
            component="img" 
            src={cert} 
            alt={`Certification ${index + 1}`} 
            width="100%" 
            borderRadius="lg"
            sx={{ objectFit: 'contain' }}
          />
        </Card>
      </Grid>
    ));
  };

  return (
    <MKBox component="section" py={0}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" mb={1}>
              Technical Skills
            </MKTypography>
            <MKTypography variant="body2" color="text">
              A comprehensive list of my cloud and technical competencies
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
        {/* <Divider sx={{ my: 6 }} /> */}
        <MKBox mt={6}>
          <MKTypography variant="h4" mb={3}>My Certifications</MKTypography>
          <Grid container spacing={2}>
            {displayCertifications()}
          </Grid>
          <MKBox textAlign="center" mt={4}>
            <Link 
              href="https://www.credly.com/users/javier-garcia-garcia.3689cadc" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'info.main',
                fontWeight: 'bold',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              <Icon sx={{ mr: 1 }}>verified</Icon>
              Verify in Credly
            </Link>
          </MKBox>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default Skills;