import React from "react";
import { BlogList, Footer, Header, Navbar, Newsletter } from "../components";
import { blogCategories } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate=useNavigate()
  return (
    <main >
      <Navbar btnText={"Login"} onClick={()=>navigate("/admin")} />
      <Header />
      <BlogList category={blogCategories} />
      <Newsletter />
      <Footer/>
    </main>
  );
};
