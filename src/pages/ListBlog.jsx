import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../assets/assets";
import { BlogTable } from "./admin";

export const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    setBlogs(blog_data);
    console.warn(blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log(blogs);
  return (
    <div className="flex-1 flex flex-col py-4 h-[calc(100vh-76px)] px-5 gap-4 bg-blue-50/50">
      <h1 className="text-4xl font-bold text-gray-900">All Blogs</h1>

      <BlogTable
        extraStyles={"max-h-[350px]"}
        dashboardData={blogs}
        fetchDashboard={fetchBlogs}
      />
    </div>
  );
};
