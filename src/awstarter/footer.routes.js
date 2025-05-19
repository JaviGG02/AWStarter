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
    name: "AWStarter",
    image: awsLogo,
    route: "/awstarter/home",
  },
  socials: [
    {
      icon: <GitHubIcon />,
      link: "https://github.com/JaviGG02/AWStarter",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/javier-garcia-garcia-1ba311229/",
    },
    {
      icon: <EmailIcon />,
      link: "mailto:awstarter@gmail.com",
    },
  ],
  menus: [
    {
      name: "pages",
      items: [
        { name: "home", href: "/awstarter/home" },
        { name: "author", href: "/awstarter/author" },
        { name: "blog", href: "/awstarter/blog" },
        { name: "architecture", href: "/awstarter/architecture" },
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
        { name: "email", href: "mailto:awstarter@gmail.com" },
        { name: "linkedin", href: "https://www.linkedin.com/in/javier-garcia-garcia-1ba311229/" },
        { name: "github", href: "https://github.com/JaviGG02/AWStarter" },
      ],
    },
  ],
  copyright: (
    <>
      All rights reserved. Copyright © {date} AWStarter by{" "}
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