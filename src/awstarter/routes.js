/**
 * AWStarter Routes
 * 
 * This file contains all the routes for the AWStarter application.
 */

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// AWStarter pages
import Home from "awstarter/pages/Home";
import Author from "awstarter/pages/Author";
import Blog from "awstarter/pages/Blog";
import BlogPostPage from "awstarter/pages/Blog/BlogPostPage";
import Architecture from "awstarter/pages/Architecture";

const routes = [
  {
    name: "home",
    icon: <Icon>home</Icon>,
    route: "/awstarter/home",
    component: <Home />,
  },
  {
    name: "author",
    icon: <Icon>person</Icon>,
    route: "/awstarter/author",
    component: <Author />,
  },
  {
    name: "blog",
    icon: <Icon>article</Icon>,
    route: "/awstarter/blog",
    component: <Blog />,
  },
  {
    name: "Blog Post",
    route: "/awstarter/blog/:slug",
    component: <BlogPostPage />,
  },
  {
    name: "architecture",
    icon: <Icon>architecture</Icon>,
    route: "/awstarter/architecture",
    component: <Architecture />,
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://github.com/JaviGG02/AWStarter",
  },
  {
    name: "linkedin",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/javier-garcia-garcia-1ba311229/",
  },
  {
    name: "contact",
    icon: <EmailIcon />,
    href: "mailto:awstarter@gmail.com",
  },
];

export default routes;