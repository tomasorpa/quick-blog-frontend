import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Blog, Dashboard, AddBlog, ListBlog, Comments, AdminLayout } from "./pages";
import "quill/dist/quill.snow.css"
const App = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />

      {/* Rutas de admin con layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="addBlog" element={<AddBlog />} />
        <Route path="listBlog" element={<ListBlog />} />
        <Route path="comments" element={<Comments />} />
      </Route>
    </Routes>
  );
};

export default App;
