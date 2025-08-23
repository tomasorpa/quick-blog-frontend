import React from "react";
import { BlogList, Footer, Header, Navbar, Newsletter } from "../components";
import { blogCategories } from "../assets/assets";

export const Home = () => {
  return (
    <main >
      <Navbar btnText={"login"} />
      <Header />
      <BlogList category={blogCategories} />
      <Newsletter />
      <Footer/>
    </main>
  );
};
