import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Blog,
  Dashboard,
  AddBlog,
  ListBlog,
  Comments,
  AdminLayout,
  Login,
} from "./pages";
import "quill/dist/quill.snow.css";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/useAppContext";

const App = () => {
  const { token } = useAppContext();
  console.log("Token:", token);

  return (
    <>
      <Toaster />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* Rutas de admin */}
        <Route path="/admin" element={token ? <AdminLayout /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="listBlog" element={<ListBlog />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
