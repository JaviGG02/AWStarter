import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// CloudStart pages
import Home from "CloudStart/pages/Home";
import Author from "CloudStart/pages/Author";
import Blog from "CloudStart/pages/Blog";
import Architecture from "CloudStart/pages/Architecture";

function CloudStart() {
  return (
    <Routes>
      <Route path="/CloudStart/home" element={<Home />} />
      <Route path="/CloudStart/author" element={<Author />} />
      <Route path="/CloudStart/blog" element={<Blog />} />
      <Route path="/CloudStart/architecture" element={<Architecture />} />
      <Route path="/*" element={<Navigate to="/CloudStart/home" />} />
    </Routes>
  );
}

export default CloudStart;