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

function CloudServicesAnimation({ onDiscoverClick }) {
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

    // Service icon types
    const serviceIconTypes = ["database", "security", "networking", "computing", "analytics", "ai-ml", "storage"];
    
    // Draw service icon inside a particle
    const drawServiceIcon = (ctx, x, y, size, type, color) => {
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = Math.max(1, size / 20);
      
      switch(type) {
        case "database":
          // Database cylinder - improved
          const ellipseHeight = size * 0.2;
          ctx.beginPath();
          ctx.ellipse(x, y - size * 0.3, size * 0.4, ellipseHeight, 0, 0, Math.PI * 2);
          ctx.stroke();
          // Fill top ellipse with slight transparency
          ctx.globalAlpha = 0.3;
          ctx.fill();
          ctx.globalAlpha = 1;
          
          // Vertical lines
          ctx.beginPath();
          ctx.moveTo(x - size * 0.4, y - size * 0.3);
          ctx.lineTo(x - size * 0.4, y + size * 0.2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(x + size * 0.4, y - size * 0.3);
          ctx.lineTo(x + size * 0.4, y + size * 0.2);
          ctx.stroke();
          
          // Bottom ellipse
          ctx.beginPath();
          ctx.ellipse(x, y + size * 0.2, size * 0.4, ellipseHeight, 0, 0, Math.PI * 2);
          ctx.stroke();
          break;
          
        case "security":
          // Shield - improved
          ctx.beginPath();
          ctx.moveTo(x, y - size * 0.4);
          ctx.lineTo(x + size * 0.35, y - size * 0.15);
          ctx.lineTo(x + size * 0.35, y + size * 0.2);
          ctx.lineTo(x, y + size * 0.4);
          ctx.lineTo(x - size * 0.35, y + size * 0.2);
          ctx.lineTo(x - size * 0.35, y - size * 0.15);
          ctx.closePath();
          ctx.stroke();
          
          // Fill shield with slight transparency
          ctx.globalAlpha = 0.2;
          ctx.fill();
          ctx.globalAlpha = 1;
          
          // Checkmark instead of lock
          ctx.beginPath();
          ctx.moveTo(x - size * 0.15, y);
          ctx.lineTo(x, y + size * 0.15);
          ctx.lineTo(x + size * 0.25, y - size * 0.15);
          ctx.lineWidth = Math.max(1, size / 15);
          ctx.stroke();
          break;
          
        case "networking":
          // Network nodes - improved
          // Center node
          ctx.beginPath();
          ctx.arc(x, y, size * 0.15, 0, Math.PI * 2);
          ctx.stroke();
          ctx.globalAlpha = 0.3;
          ctx.fill();
          ctx.globalAlpha = 1;
          
          // Outer nodes with connections
          const nodeCount = 4;
          const nodeDistance = size * 0.35;
          
          for (let i = 0; i < nodeCount; i++) {
            const angle = (i / nodeCount) * Math.PI * 2;
            const nx = x + Math.cos(angle) * nodeDistance;
            const ny = y + Math.sin(angle) * nodeDistance;
            
            // Connection line
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nx, ny);
            ctx.stroke();
            
            // Node
            ctx.beginPath();
            ctx.arc(nx, ny, size * 0.1, 0, Math.PI * 2);
            ctx.stroke();
            ctx.globalAlpha = 0.3;
            ctx.fill();
            ctx.globalAlpha = 1;
          }
          break;
          
        case "computing":
          // Server/computer - improved
          ctx.beginPath();
          ctx.roundRect(x - size * 0.35, y - size * 0.3, size * 0.7, size * 0.6, size * 0.05);
          ctx.stroke();
          ctx.globalAlpha = 0.2;
          ctx.fill();
          ctx.globalAlpha = 1;
          
          // Server rack lines
          for (let i = 1; i < 3; i++) {
            const lineY = y - size * 0.3 + (size * 0.6 / 3) * i;
            ctx.beginPath();
            ctx.moveTo(x - size * 0.3, lineY);
            ctx.lineTo(x + size * 0.3, lineY);
            ctx.stroke();
          }
          
          // Lights
          for (let i = 0; i < 2; i++) {
            ctx.beginPath();
            ctx.arc(x - size * 0.25 + i * size * 0.5, y - size * 0.2, size * 0.05, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
          
        case "analytics":
          // Chart - improved
          // Chart background
          ctx.beginPath();
          ctx.roundRect(x - size * 0.35, y - size * 0.25, size * 0.7, size * 0.5, size * 0.05);
          ctx.stroke();
          ctx.globalAlpha = 0.1;
          ctx.fill();
          ctx.globalAlpha = 1;
          
          // Line chart
          ctx.beginPath();
          ctx.moveTo(x - size * 0.3, y + size * 0.1);
          ctx.lineTo(x - size * 0.15, y);
          ctx.lineTo(x, y + size * 0.15);
          ctx.lineTo(x + size * 0.15, y - size * 0.1);
          ctx.lineTo(x + size * 0.3, y - size * 0.2);
          ctx.lineWidth = Math.max(1, size / 15);
          ctx.stroke();
          
          // Data points
          const dataPoints = [
            {x: x - size * 0.3, y: y + size * 0.1},
            {x: x - size * 0.15, y: y},
            {x: x, y: y + size * 0.15},
            {x: x + size * 0.15, y: y - size * 0.1},
            {x: x + size * 0.3, y: y - size * 0.2}
          ];
          
          dataPoints.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, size * 0.04, 0, Math.PI * 2);
            ctx.fill();
          });
          break;
          
        case "ai-ml":
          // Neural network - improved
          // Network background
          ctx.beginPath();
          ctx.roundRect(x - size * 0.4, y - size * 0.3, size * 0.8, size * 0.6, size * 0.05);
          ctx.stroke();
          ctx.globalAlpha = 0.1;
          ctx.fill();
          ctx.globalAlpha = 1;
          
          // Center node
          ctx.beginPath();
          ctx.arc(x, y, size * 0.1, 0, Math.PI * 2);
          ctx.fill();
          
          // Input layer (left)
          const inputNodes = 3;
          for (let i = 0; i < inputNodes; i++) {
            const ny = y - size * 0.2 + i * size * 0.2;
            const nx = x - size * 0.3;
            
            // Node
            ctx.beginPath();
            ctx.arc(nx, ny, size * 0.06, 0, Math.PI * 2);
            ctx.stroke();
            ctx.globalAlpha = 0.5;
            ctx.fill();
            ctx.globalAlpha = 1;
            
            // Connection to center
            ctx.beginPath();
            ctx.moveTo(nx + size * 0.06, ny);
            ctx.lineTo(x - size * 0.1, y);
            ctx.lineWidth = Math.max(1, size / 30);
            ctx.stroke();
          }
          
          // Output layer (right)
          const outputNodes = 2;
          for (let i = 0; i < outputNodes; i++) {
            const ny = y - size * 0.15 + i * size * 0.3;
            const nx = x + size * 0.3;
            
            // Node
            ctx.beginPath();
            ctx.arc(nx, ny, size * 0.06, 0, Math.PI * 2);
            ctx.stroke();
            ctx.globalAlpha = 0.5;
            ctx.fill();
            ctx.globalAlpha = 1;
            
            // Connection from center
            ctx.beginPath();
            ctx.moveTo(x + size * 0.1, y);
            ctx.lineTo(nx - size * 0.06, ny);
            ctx.lineWidth = Math.max(1, size / 30);
            ctx.stroke();
          }
          break;
          
        case "storage":
          // Storage/hard drive - improved
          // Drive case
          ctx.beginPath();
          ctx.roundRect(x - size * 0.35, y - size * 0.25, size * 0.7, size * 0.5, size * 0.05);
          ctx.stroke();
          ctx.globalAlpha = 0.2;
          ctx.fill();
          ctx.globalAlpha = 1;
          
          // Disk platter
          ctx.beginPath();
          ctx.arc(x, y, size * 0.2, 0, Math.PI * 2);
          ctx.stroke();
          ctx.globalAlpha = 0.2;
          ctx.fill();
          ctx.globalAlpha = 1;
          
          // Center hole
          ctx.beginPath();
          ctx.arc(x, y, size * 0.05, 0, Math.PI * 2);
          ctx.stroke();
          
          // Read arm
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + size * 0.18, y - size * 0.12);
          ctx.lineWidth = Math.max(1, size / 25);
          ctx.stroke();
          break;
          
        default:
          // Default cloud if no icon type
          ctx.beginPath();
          ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
          ctx.stroke();
      }
    };

    // Cloud particle class with collision avoidance
    class CloudParticle {
      constructor(existingParticles = []) {
        this.setupPosition(existingParticles);
        this.size = Math.random() * 30 + 20; // Slightly larger particles
        this.speedX = (Math.random() - 0.5) * 0.8; // Horizontal speed
        this.speedY = (Math.random() - 0.5) * 0.5; // Vertical speed
        this.opacity = Math.random() * 0.5 + 0.2; // Slightly more opaque
        this.color = Math.random() > 0.8 ? '#FF9900' : '#ffffff'; // Some particles in AWS orange
        
        // Assign a service icon to some particles
        this.hasIcon = Math.random() > 0.4; // 60% of particles have icons
        if (this.hasIcon) {
          this.iconType = serviceIconTypes[Math.floor(Math.random() * serviceIconTypes.length)];
        }
      }
      
      // Position particles to avoid overlap
      setupPosition(existingParticles) {
        let attempts = 0;
        let validPosition = false;
        
        while (!validPosition && attempts < 50) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          
          // Check if this position overlaps with existing particles
          validPosition = true;
          for (const particle of existingParticles) {
            const distance = Math.hypot(this.x - particle.x, this.y - particle.y);
            const minDistance = (this.size || 20) + particle.size + 10; // Add extra margin
            
            if (distance < minDistance) {
              validPosition = false;
              break;
            }
          }
          
          attempts++;
        }
      }
      
      update(particles) {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x < this.size || this.x > canvas.width - this.size) {
          this.speedX *= -1;
          this.x = Math.max(this.size, Math.min(canvas.width - this.size, this.x));
        }
        
        if (this.y < this.size || this.y > canvas.height - this.size) {
          this.speedY *= -1;
          this.y = Math.max(this.size, Math.min(canvas.height - this.size, this.y));
        }
        
        // Simple collision avoidance with other particles
        for (const other of particles) {
          if (other === this) continue;
          
          const dx = other.x - this.x;
          const dy = other.y - this.y;
          const distance = Math.hypot(dx, dy);
          const minDistance = this.size + other.size;
          
          // If particles are too close, adjust velocities
          if (distance < minDistance) {
            // Calculate collision response
            const angle = Math.atan2(dy, dx);
            const targetX = this.x + Math.cos(angle) * minDistance;
            const targetY = this.y + Math.sin(angle) * minDistance;
            const ax = (targetX - other.x) * 0.05;
            const ay = (targetY - other.y) * 0.05;
            
            // Apply gentle forces to avoid overlap
            this.speedX -= ax;
            this.speedY -= ay;
            other.speedX += ax;
            other.speedY += ay;
            
            // Limit maximum speed
            const maxSpeed = 2;
            const speedMag = Math.hypot(this.speedX, this.speedY);
            if (speedMag > maxSpeed) {
              this.speedX = (this.speedX / speedMag) * maxSpeed;
              this.speedY = (this.speedY / speedMag) * maxSpeed;
            }
          }
        }
      }
      
      draw() {
        // Draw the bubble
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        
        // Draw the service icon inside if this particle has one
        if (this.hasIcon && this.size > 20) {
          drawServiceIcon(ctx, this.x, this.y, this.size * 1.5, this.iconType, this.color);
        }
      }
    }

    // Connection line class with service type checking
    class ConnectionLine {
      constructor(particleA, particleB) {
        this.particleA = particleA;
        this.particleB = particleB;
        this.distance = Math.hypot(
          particleA.x - particleB.x,
          particleA.y - particleB.y
        );
        
        // Don't connect particles with the same icon type
        this.sameType = particleA.hasIcon && particleB.hasIcon && 
                        particleA.iconType === particleB.iconType;
        
        this.opacity = this.sameType ? 0 : 1 - this.distance / 200;
        if (this.opacity < 0) this.opacity = 0;
      }
      
      update() {
        this.distance = Math.hypot(
          this.particleA.x - this.particleB.x,
          this.particleA.y - this.particleB.y
        );
        
        // Skip connections between same icon types
        if (this.sameType) {
          this.opacity = 0;
          return;
        }
        
        this.opacity = 1 - this.distance / 200;
        if (this.opacity < 0) this.opacity = 0;
      }
      
      draw() {
        if (this.opacity > 0 && !this.sameType) {
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

    // Create particles with collision avoidance
    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 15), 70); // Fewer particles for less overlap
    
    // Ensure we have at least one of each service type
    for (let i = 0; i < serviceIconTypes.length; i++) {
      const particle = new CloudParticle(particles);
      particle.hasIcon = true;
      particle.iconType = serviceIconTypes[i];
      particle.size = Math.random() * 10 + 30; // Make service icons larger
      particle.opacity = Math.random() * 0.3 + 0.4; // Make them more visible
      particles.push(particle);
    }
    
    // Add remaining particles
    for (let i = 0; i < particleCount - serviceIconTypes.length; i++) {
      particles.push(new CloudParticle(particles));
    }

    // Create connection lines
    const connections = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        // Only connect particles that are reasonably close
        const distance = Math.hypot(
          particles[i].x - particles[j].x,
          particles[i].y - particles[j].y
        );
        
        if (distance < 200) {
          connections.push(new ConnectionLine(particles[i], particles[j]));
        }
      }
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw connections
      connections.forEach(connection => {
        connection.update();
        connection.draw();
      });
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update(particles);
        particle.draw();
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

CloudServicesAnimation.propTypes = {
  onDiscoverClick: PropTypes.func.isRequired,
};

export default CloudServicesAnimation;