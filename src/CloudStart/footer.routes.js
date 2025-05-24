// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import awsLogo from "assets/images/logo-ct-dark.png"; // Replace with your own AWS logo

const date = new Date().getFullYear();

export default {
  brand: {
    name: "CloudStart",
    image: awsLogo,
    route: "/CloudStart/home",
  },
  socials: [
    {
      icon: <GitHubIcon />,
      link: "https://github.com/JaviGG02/CloudStart",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/javier-garcia-garcia-1ba311229/",
    }
  ],
  menus: [
    {
      name: "pages",
      items: [
        { name: "home", href: "/CloudStart/home" },
        { name: "author", href: "/CloudStart/author" },
        { name: "blog", href: "/CloudStart/blog" },
        { name: "architecture", href: "/CloudStart/architecture" },
        { name: "roadmap", href: "/CloudStart/roadmap" },
      ],
    },
    {
      name: "aws resources",
      items: [
        { name: "aws documentation", href: "https://docs.aws.amazon.com/" },
        { name: "aws blog", href: "https://aws.amazon.com/blogs/" },
        { name: "aws architecture center", href: "https://aws.amazon.com/architecture/" },
        { name: "aws training", href: "https://aws.amazon.com/training/" },
      ],
    },
    {
      name: "contact",
      items: [
        { name: "email", href: "mailto:CloudStart@gmail.com" },
        { name: "linkedin", href: "https://www.linkedin.com/in/javier-garcia-garcia-1ba311229/" },
        { name: "github", href: "https://github.com/JaviGG02/CloudStart" },
      ],
    },
  ],
  copyright: (
    <>
      All rights reserved. Copyright © {date} CloudStart by{" "}
      <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
        Javier Garcia
      </a>
      . Created using{" "}
      <a href="https://www.creative-tim.com/product/material-kit-react" target="_blank" rel="noreferrer">
        MK Template
      </a>
      .
    </>
  ),
};