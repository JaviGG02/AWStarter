import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// AWStarter pages
import Home from "awstarter/pages/Home";
import Author from "awstarter/pages/Author";
import Blog from "awstarter/pages/Blog";
import Architecture from "awstarter/pages/Architecture";

function AWStarter() {
  return (
    <Routes>
      <Route path="/awstarter/home" element={<Home />} />
      <Route path="/awstarter/author" element={<Author />} />
      <Route path="/awstarter/blog" element={<Blog />} />
      <Route path="/awstarter/architecture" element={<Architecture />} />
      <Route path="/*" element={<Navigate to="/awstarter/home" />} />
    </Routes>
  );
}

export default AWStarter;