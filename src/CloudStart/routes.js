/**
 * CloudStart Routes
 * 
 * This file contains all the routes for the CloudStart application.
 */

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// CloudStart pages
import Home from "CloudStart/pages/Home";
import Author from "CloudStart/pages/Author";
import Blog from "CloudStart/pages/Blog";
import BlogPostPage from "CloudStart/pages/Blog/BlogPostPage";
import Architecture from "CloudStart/pages/Architecture";
import Roadmap from "CloudStart/pages/Roadmap";

const routes = [
  {
    name: "home",
    icon: <Icon>home</Icon>,
    route: "/CloudStart/home",
    component: <Home />,
  },
  {
    name: "author",
    icon: <Icon>person</Icon>,
    route: "/CloudStart/author",
    component: <Author />,
  },
  {
    name: "blog",
    icon: <Icon>article</Icon>,
    route: "/CloudStart/blog",
    component: <Blog />,
  },
  {
    name: "Blog Post",
    route: "/CloudStart/blog/:slug",
    component: <BlogPostPage />,
  },
  {
    name: "architecture",
    icon: <Icon>architecture</Icon>,
    route: "/CloudStart/architecture",
    component: <Architecture />,
  },
  {
    name: "roadmap",
    icon: <Icon>map</Icon>,
    route: "/pages/roadmap",
    component: <Roadmap />,
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://github.com/JaviGG02/CloudStart",
  },
  {
    name: "linkedin",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/javier-garcia-garcia-1ba311229/",
  }
];

export default routes;