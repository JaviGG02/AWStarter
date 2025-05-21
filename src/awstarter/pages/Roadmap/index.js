import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKNavbar from "components/MKNavbar";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "awstarter/routes";
import footerRoutes from "footer.routes";
import { WrapText } from "@mui/icons-material";


const roadmapItems = [
  {
    title: "Architectures",
    description:
      "A place where to upload sample architectures and CDK code to deploy them.",
    color: "#1A73E8"
  },
  {
    title: "User SignUp/In and Management",
    description:
      "Implement secure user authentication, profile management, and access control.",
    color: "#1A73E8"
  },
  {
    title: "User Feedback and Comments",
    description:
      "Enable users to leave feedback, comments, and suggestions to improve the platform.",
    color: "#1A73E8"
  },
  // You can add more roadmap items here
];

const Roadmap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Scroll to the active section smoothly
  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const section = containerRef.current.children[index];
      if (section) {
        isScrollingRef.current = true;
        section.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000); // Lock scroll for animation duration
      }
    }
  };

  // Handle wheel scroll to change active section
  const handleWheel = (e) => {
    if (isScrollingRef.current) return;
    if (e.deltaY > 50) {
      // Scroll down
      setActiveIndex((prev) => Math.min(prev + 1, roadmapItems.length - 1));
    } else if (e.deltaY < -50) {
      // Scroll up
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // Scroll to new active index on change
  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  return (
    <>
      <MKNavbar
        brand="AWStarter"
        routes={routes}
        transparent={true}
        light={true}
      />
      
      <MKBox
        ref={containerRef}
        onWheel={handleWheel}
        sx={{
          minHeight: "100vh",
          overflow: "hidden",
          scrollSnapType: "y mandatory",
          pt: 8, // Add padding top to account for navbar
        }}
      >
        {roadmapItems.map(({ title, description }, i) => (
          <motion.section
            key={title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: i === activeIndex ? 1 : 0.5, 
              y: i === activeIndex ? 0 : 20,
              transition: { duration: 0.6, ease: "easeOut" }
            }}
            style={{
              scrollSnapAlign: "start",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "2rem",
              backgroundColor: i % 2 === 0 ? "#ffcc99" : "#e3f2fd",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: i === activeIndex ? 1 : 0.5, 
                scale: i === activeIndex ? 1 : 0.95,
                transition: { delay: 0.2, duration: 0.5 }
              }}
            >
              <MKTypography
                variant="h1"
                mb={2}
                color="dark"
              >
                {title}
              </MKTypography>
              
              <MKTypography
                variant="body1"
                color="dark"
                mb={4}
                sx={{
                  // maxWidth: "600px",
                  fontSize: "1.25rem",
                  textAlign: "center",
                }}
              >
                {description}
              </MKTypography>
            </motion.div>
            
            {/* Progress indicator */}
            <MKBox 
              sx={{ 
                display: "flex", 
                mt: 4, 
                gap: 1 
              }}
            >
              {roadmapItems.map((_, index) => (
                <MKBox
                  key={index}
                  component={motion.div}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: index === activeIndex ? "info.main" : "grey.300",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                />
              ))}
            </MKBox>
            
            {/* Show Next button only if not the last item */}
              {i < roadmapItems.length - 1 && (
                <button
                  onClick={() => setActiveIndex(i + 1)}
                  aria-label="Next roadmap section"
                  style={{
                    marginTop: "3rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    outline: "none",
                    animation: "bounce 2s infinite",
                  }}
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1A73E8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </button>
              )}

          </motion.section>
        ))}
      </MKBox>
      
      <DefaultFooter content={footerRoutes} />
    </>
  );
};

export default Roadmap;
