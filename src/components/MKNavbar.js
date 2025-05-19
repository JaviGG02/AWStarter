import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import useScrollTrigger from "@mui/material/useScrollTrigger";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function MKNavbar({ brand, routes, transparent = false, light = false }) {
  const [mobileMenu, setMobileMenu] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOverDarkBg, setIsOverDarkBg] = useState(true);

  const openMobileMenu = (event) => setMobileMenu(event.currentTarget);
  const closeMobileMenu = () => setMobileMenu(null);

  // Hide navbar on scroll down, show on scroll up with increased threshold
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Increased threshold to 100px to keep navbar visible longer
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
      
      // Detect if we're over a dark background (first 300px of page)
      setIsOverDarkBg(currentScrollPos < 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Navbar scroll trigger for animation
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, // Increased threshold to match scroll visibility
  });

  // Render the routes for the navigation
  const renderRoutes = routes.map(({ name, icon, route, href }) => {
    if (route == "/awstarter/blog/:slug") return;
    const routeComponent = {
      component: Link,
      to: route,
    };

    const linkComponent = {
      component: "a",
      href,
      target: "_blank",
      rel: "noreferrer",
    };

    return (
      <MKButton
        key={name}
        {...(route ? routeComponent : linkComponent)}
        variant="text"
        color={(light || isOverDarkBg) && !trigger ? "white" : "dark"}
        sx={{
          fontWeight: "regular",
          fontSize: "0.875rem",
          px: 1.5,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            opacity: 0.75,
          },
        }}
      >
        {icon && (
          <MKBox component="span" color="inherit" mr={0.5} lineHeight={0} verticalAlign="middle">
            {icon}
          </MKBox>
        )}
        {name}
      </MKButton>
    );
  });

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        boxShadow: trigger ? "0 4px 18px 0px rgba(0,0,0,0.12)" : "none",
        backdropFilter: trigger ? "saturate(200%) blur(30px)" : "none",
        backgroundColor: trigger ? "rgba(255,255,255,0.9)" : transparent ? "transparent" : "rgba(255,255,255,0.9)",
        color: (light || isOverDarkBg) && !trigger ? "white" : "inherit",
        top: visible ? 0 : "-80px",
        transition: "top 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1.5,
          }}
        >
          <MKBox
            component={Link}
            to="/"
            display="flex"
            alignItems="center"
            lineHeight={1}
          >
            <MKTypography
              variant="button"
              fontWeight="bold"
              color={(light || isOverDarkBg) && !trigger ? "white" : "dark"}
              sx={{ fontSize: "1.125rem" }}
            >
              {brand}
            </MKTypography>
          </MKBox>

          <MKBox
            display={{ xs: "none", md: "flex" }}
            alignItems="center"
          >
            {renderRoutes}
          </MKBox>

          <MKBox display={{ xs: "inline-block", md: "none" }}>
            <IconButton
              onClick={openMobileMenu}
              sx={{ color: (light || isOverDarkBg) && !trigger ? "white" : "inherit" }}
            >
              <Icon>menu</Icon>
            </IconButton>
            <Menu
              anchorEl={mobileMenu}
              open={Boolean(mobileMenu)}
              onClose={closeMobileMenu}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  p: 2,
                  borderRadius: "0.5rem",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                },
              }}
            >
              {routes.map(({ name, icon, route, href }) => (
                <MKTypography
                  key={name}
                  component={route ? Link : "a"}
                  to={route || ""}
                  href={href || ""}
                  target={href ? "_blank" : ""}
                  rel={href ? "noreferrer" : ""}
                  variant="button"
                  color="text"
                  fontWeight="regular"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    py: 1,
                    px: 2,
                    borderRadius: "0.375rem",
                    transition: "background-color 300ms ease",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
                  }}
                  onClick={closeMobileMenu}
                >
                  {icon && (
                    <MKBox component="span" color="inherit" mr={1} lineHeight={0} verticalAlign="middle">
                      {icon}
                    </MKBox>
                  )}
                  {name}
                </MKTypography>
              ))}
            </Menu>
          </MKBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

MKNavbar.propTypes = {
  brand: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
};

export default MKNavbar;