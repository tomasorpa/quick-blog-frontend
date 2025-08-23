import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "../../components";

export const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="fixed left-0 top-[76px] h-full bg-white border-r border-gray-200">
        <Sidebar />
      </div>

      <div className="flex-1 ml-12 md:ml-64 flex flex-col bg-blue-50/50">
        <div className="fixed top-0 w-full right-0 z-50 bg-white shadow">
          <Navbar btnText={"Logout"} />
        </div>

        <div className="mt-[76px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
