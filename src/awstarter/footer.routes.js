// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/yourusername",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/yourusername",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/yourusername",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/yourusername",
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
        { name: "email", href: "mailto:your.email@example.com" },
        { name: "linkedin", href: "https://www.linkedin.com/in/yourusername" },
        { name: "twitter", href: "https://twitter.com/yourusername" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} AWStarter by{" "}
      <MKTypography
        component="a"
        href="/awstarter/author"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Your Name
      </MKTypography>
      .
    </MKTypography>
  ),
};