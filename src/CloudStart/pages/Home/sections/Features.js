import React from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Icons
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';

// Framer Motion
import { motion } from "framer-motion";

function Features() {
  return (
    <MKBox component="section" py={3}>
      <MKTypography variant="h4" mb={2}>
        What do CloudStart offer?
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
                Cloud Expertise
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
                Career Development
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Insider tips and honest perspectives about the my work environment and experiences. Learn about the culture, career progression, and what it's really like working at one of tech's giants.
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
    </MKBox>
  );
}

export default Features;