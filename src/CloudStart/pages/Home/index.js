import React, { useRef, useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Custom navbar component
import MKNavbar from "components/MKNavbar";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "CloudStart/routes";
import footerRoutes from "CloudStart/footer.routes";

// Custom components
import CloudServicesAnimation from "components/animations/CloudServicesAnimation";

// Home page sections
import Introduction from "./sections/Introduction";
import Mission from "./sections/Mission";
import Features from "./sections/Features";
import CallToAction from "./sections/CallToAction";

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
  
  return (
    <>
      <MKNavbar
        brand="CloudStart"
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
            <Introduction />
            <Mission />
            <Features />
            <MKBox mt={6}>
              <CallToAction />
            </MKBox>
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