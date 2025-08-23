import React from "react";
import { assets } from "../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../components";
import { Sidebar } from "./admin/";

export const Layout = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/");
  };
  return (
    <>
      <div className=" flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 ">
        <img
          src={assets.logo}
          alt="logo"
          className="w-32 sm:w-44 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button
          className="py-2 px-6 text-white bg-primary hover:bg-primary/80 flex gap-2 justify-center items-center rounded-full text-sm cursor-pointer"
          onClick={onLogout}
        >
          Logout
          <img src={assets.arrow} alt="arrow" className="w-3" />
        </button>
      </div>
      <div className="flex  ">
        <Sidebar/>
        <Outlet />
      </div>
    </>
  );
};
