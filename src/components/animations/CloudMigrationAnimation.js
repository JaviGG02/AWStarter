import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const styles = {
  container: {
    margin: 0,
    overflow: "hidden",
    background: "linear-gradient(135deg, #232f3e 0%, #0d1218 100%)",
    fontFamily: "'Montserrat', sans-serif",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  canvas: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  titleContainer: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 800,
    fontSize: "5rem",
    color: "#ffffff",
    opacity: 0,
    transform: "translateY(30px)",
    transition: "all 1s ease",
    textShadow: "0 0 15px rgba(255, 153, 0, 0.5)",
    letterSpacing: "2px",
    position: "relative",
  },
  subtitle: {
    fontWeight: 500,
    color: "#d1d5db",
    fontSize: "1.5rem",
    letterSpacing: "3px",
    marginTop: "1rem",
    opacity: 0,
    transform: "translateY(20px)",
    transition: "all 1s ease",
    transitionDelay: "0.5s",
  },
  discoverButton: {
    position: "absolute",
    bottom: "5%",
    zIndex: 30,
    backgroundColor: "rgba(255, 153, 0, 0.8)",
    color: "#ffffff",
    borderRadius: "30px",
    padding: "10px 30px",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    letterSpacing: "1px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 153, 0, 1)",
      transform: "translateY(-3px)",
      boxShadow: "0 5px 15px rgba(255, 153, 0, 0.4)",
    },
  },
};

const CloudAnimation = ({ onDiscoverClick }) => {
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = Math.random() > 0.95 ? "#FF9900" : "#ffffff";
        this.opacity = Math.random() * 0.3 + 0.3;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
      }
    }

    const particles = new Array(150).fill().map(() => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
        typeText(titleRef.current, 'AW', 0, () => {
          const span = document.createElement('span');
          span.style.color = '#FF9900';
          typeTextInElement(span, 'Starter', 0, () => {
            if (subtitleRef.current) {
              subtitleRef.current.style.opacity = '1';
              subtitleRef.current.style.transform = 'translateY(0)';
            }
          });
          titleRef.current.appendChild(span);
        });
      }
    }, 800);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const typeText = (element, text, index, callback) => {
    if (index < text.length) {
      element.textContent = text.substring(0, index + 1);
      setTimeout(() => typeText(element, text, index + 1, callback), 100);
    } else if (callback) {
      callback();
    }
  };

  const typeTextInElement = (element, text, index, callback) => {
    if (index < text.length) {
      element.textContent = text.substring(0, index + 1);
      setTimeout(() => typeTextInElement(element, text, index + 1, callback), 100);
    } else if (callback) {
      callback();
    }
  };

  return (
    <Box sx={styles.container}>
      <canvas ref={canvasRef} style={styles.canvas} />
      <Box sx={styles.titleContainer}>
        <Typography
          variant="h1"
          component="h1"
          sx={styles.title}
          ref={titleRef}
        ></Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={styles.subtitle}
          ref={subtitleRef}
        >
          LAUNCH YOUR CLOUD KNOWLEDGE
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={styles.discoverButton}
        onClick={onDiscoverClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Explore
      </Button>
    </Box>
  );
};

CloudAnimation.propTypes = {
  onDiscoverClick: PropTypes.func.isRequired,
};

export default CloudAnimation;
