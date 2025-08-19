import React from "react";
import { BlogList, Header, Navbar } from "../components";
import { blogCategories } from "../assets/assets";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BlogList category={blogCategories} />
    </>
  );
};
