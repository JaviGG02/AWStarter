import React, { useRef, useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Custom navbar component
import MKNavbar from "components/MKNavbar";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "awstarter/routes";
import footerRoutes from "awstarter/footer.routes";

// Icons
import { Icon } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import GroupIcon from '@mui/icons-material/Group';

// Custom components
import CloudServicesAnimation from "components/animations/CloudServicesAnimation";

function Home() {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDiscoverClick = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <>
      <MKNavbar
        brand="AWStarter"
        routes={routes}
        transparent
        light
      />
      <CloudServicesAnimation onDiscoverClick={handleDiscoverClick} />
      <div ref={contentRef}>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: 0,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Container>
                <Grid item xs={22} lg={6}>
                  {/* Introduction Section */}
                  <MKTypography variant="h3" mb={3}>
                    Welcome to AWStarter Tech Hub
                  </MKTypography>
                  <MKTypography variant="body1" color="text" mb={4}>
                    This is my personal project — a space where I share my journey, experiences, and insights as a cloud enthusiast and Amazon team member. Here, I post blogs about cloud computing, AWS services, tips for landing a job at Amazon, and what life is really like inside one of the world's leading tech companies. Whether you're starting out or already deep in your tech career, I invite you to explore, learn, and grow with me.
                  </MKTypography>
                  
                  {/* Mission Section */}
                  <MKTypography variant="h4" mb={2}>
                    My Mission
                  </MKTypography>
                  <MKTypography variant="body1" color="text" mb={4}>
                    To build a vibrant, open, and inclusive community of tech enthusiasts who are passionate about cloud technology and AWS. Through detailed tutorials, real-world experiences, and honest reflections on working at Amazon, I aim to empower others to advance their skills and careers. This platform is not just my voice but yours too — together, we share, collaborate, and inspire.
                  </MKTypography>
                  
                  {/* Objectives Section */}
                  <MKTypography variant="h4" mb={2}>
                    What can you learn here?
                  </MKTypography>
                  
                  <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={4}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MKBox 
                          p={3} 
                          bgcolor="light" 
                          borderRadius="xl" 
                          shadow="md"
                          sx={{
                            height: '100%',
                            cursor: 'pointer',
                          }}
                        >
                          <CloudIcon sx={{ fontSize: 40, color: '#1A73E8', mb: 2 }} />
                          <MKTypography variant="h5" mb={2}>
                            AWS Expertise
                          </MKTypography>
                          <MKTypography variant="body2" color="text">
                            Actionable knowledge and best practices about cloud computing, AWS services, and infrastructure design. From architecture patterns to implementation guides.
                          </MKTypography>
                        </MKBox>
                      </motion.div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MKBox 
                          p={3} 
                          bgcolor="light" 
                          borderRadius="xl" 
                          shadow="md"
                          sx={{
                            height: '100%',
                            cursor: 'pointer',
                          }}
                        >
                          <CodeIcon sx={{ fontSize: 40, color: '#1A73E8', mb: 2 }} />
                          <MKTypography variant="h5" mb={2}>
                            Life at Amazon
                          </MKTypography>
                          <MKTypography variant="body2" color="text">
                            Insider tips and honest perspectives about the Amazon work environment. Learn about the culture, career progression, and what it's really like working at one of tech's giants.
                          </MKTypography>
                        </MKBox>
                      </motion.div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MKBox 
                          p={3} 
                          bgcolor="light" 
                          borderRadius="xl" 
                          shadow="md"
                          sx={{
                            height: '100%',
                            cursor: 'pointer',
                          }}
                        >
                          <GroupIcon sx={{ fontSize: 40, color: '#1A73E8', mb: 2 }} />
                          <MKTypography variant="h5" mb={2}>
                            Community Hub
                          </MKTypography>
                          <MKTypography variant="body2" color="text">
                            A collaborative space where contributors can share insights and publish technical or career development related topics. Join me to network, mentor, and connect with fellow tech enthusiasts.
                          </MKTypography>
                        </MKBox>
                      </motion.div>
                    </Grid>
                  </Grid>
                  
                  <MKBox mt={6}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <MKButton
                          variant="gradient"
                          color="info"
                          size="large"
                          component={Link}
                          to="/awstarter/blog"
                        >
                          Explore Articles
                        </MKButton>
                      </Grid>
                      <Grid item>
                        <MKButton
                          variant="outlined"
                          color="info"
                          size="large"
                          component={Link}
                          to="/awstarter/author"
                        >
                          About Me
                        </MKButton>
                      </Grid>
                    </Grid>
                  </MKBox>
                </Grid>
                {/* <Grid item xs={12} lg={6}>
                    <MKBox
                      component="img"
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80"
                      alt="AWS Cloud"
                      width="100%"
                      borderRadius="lg"
                    />
                </Grid> */}
            
            
          </Container>
        </Card>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </div>
    </>
  );
}

export default Home;