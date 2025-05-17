import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Modern cloud animation styles
const styles = {
  container: {
    margin: 0,
    overflow: "hidden",
    background: "linear-gradient(135deg, #232f3e 0%, #0d1218 100%)", // AWS dark blue gradient
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
    textShadow: "0 0 15px rgba(255, 153, 0, 0.5)", // AWS orange glow
    letterSpacing: "2px",
    position: "relative",
  },
  titleHighlight: {
    color: "#FF9900", // AWS orange
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
    backgroundColor: "rgba(255, 153, 0, 0.8)", // AWS orange with transparency
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
  "@media (max-width: 768px)": {
    title: {
      fontSize: "3rem",
    },
    subtitle: {
      fontSize: "1rem",
    },
  },
};

// Keyframes for animations
const keyframes = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
`;

function CloudAnimation({ onDiscoverClick }) {
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Add keyframes to document
    const styleElement = document.createElement('style');
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    // Initialize canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Cloud particle class
    class CloudParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 30 + 10;
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.8 ? '#FF9900' : '#ffffff'; // Some particles in AWS orange
      }
      
      update() {
        this.x += this.speed;
        if (this.x > canvas.width + this.size) {
          this.x = -this.size;
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

    // Connection line class
    class ConnectionLine {
      constructor(particleA, particleB) {
        this.particleA = particleA;
        this.particleB = particleB;
        this.distance = Math.hypot(
          particleA.x - particleB.x,
          particleA.y - particleB.y
        );
        this.opacity = 1 - this.distance / 200;
        if (this.opacity < 0) this.opacity = 0;
      }
      
      update() {
        this.distance = Math.hypot(
          this.particleA.x - this.particleB.x,
          this.particleA.y - this.particleB.y
        );
        this.opacity = 1 - this.distance / 200;
        if (this.opacity < 0) this.opacity = 0;
      }
      
      draw() {
        if (this.opacity > 0) {
          ctx.beginPath();
          ctx.moveTo(this.particleA.x, this.particleA.y);
          ctx.lineTo(this.particleB.x, this.particleB.y);
          ctx.strokeStyle = '#FF9900'; // AWS orange
          ctx.globalAlpha = this.opacity * 0.5;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Create particles
    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100); // Responsive particle count
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new CloudParticle());
    }

    // Create connection lines
    const connections = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        connections.push(new ConnectionLine(particles[i], particles[j]));
      }
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw and update connections
      connections.forEach(connection => {
        connection.update();
        connection.draw();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Reveal title with typing effect after a short delay
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
        typeText(titleRef.current, 'AW', 0, () => {
          // Add the highlighted part
          const span = document.createElement('span');
          span.className = 'highlight';
          span.style.color = '#FF9900'; // AWS orange
          typeTextInElement(span, 'Starter', 0, () => {
            // Show subtitle after title is complete
            if (subtitleRef.current) {
              subtitleRef.current.style.opacity = '1';
              subtitleRef.current.style.transform = 'translateY(0)';
            }
          });
          titleRef.current.appendChild(span);
        });
      }
    }, 1000);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationRef.current);
      document.head.removeChild(styleElement);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  // Function for typing effect
  const typeText = (element, text, index, callback) => {
    if (index < text.length) {
      element.textContent = text.substring(0, index + 1);
      setTimeout(() => {
        typeText(element, text, index + 1, callback);
      }, 150);
    } else if (callback) {
      callback();
    }
  };

  // Function for typing effect in a specific element
  const typeTextInElement = (element, text, index, callback) => {
    if (index < text.length) {
      element.textContent = text.substring(0, index + 1);
      setTimeout(() => {
        typeTextInElement(element, text, index + 1, callback);
      }, 150);
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
        >
          {/* Content will be added dynamically */}
        </Typography>
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
}

CloudAnimation.propTypes = {
  onDiscoverClick: PropTypes.func.isRequired,
};

export default CloudAnimation;