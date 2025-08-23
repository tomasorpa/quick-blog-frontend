import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const Navbar = ({btnText }) => {
  const navigate=useNavigate();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <button
        className="py-2 px-6 text-white bg-primary hover:bg-primary/80 flex gap-2 justify-center items-center rounded-full text-sm cursor-pointer"
        onClick={() => navigate("/admin")}
      >
        {btnText}
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </div>
  );
};
