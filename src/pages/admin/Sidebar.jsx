import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

export const Sidebar = () => {
  return (
      <div className="flex flex-col border-r border-gray-200 pt-6
    ">
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }  `
        }
      >
        <img src={assets.home_icon} alt="home icon" className="min-w-4 w-5" />
        <p className="md:inline-block hidden">Dashboard</p>
      </NavLink>
      <NavLink
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }  `
        }
      >
        <img src={assets.add_icon} alt="add icon" className="min-w-4 w-5" />
        <p className="md:inline-block hidden">Add Blog</p>
      </NavLink>
      <NavLink
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }  `
        }
      >
        <img src={assets.list_icon} alt="list icon" className="min-w-4 w-5" />
        <p className="md:inline-block hidden">List Blog</p>
      </NavLink>
      <NavLink
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }  `
        }
      >
        <img src={assets.comment_icon} alt="comment icon" className="min-w-4 w-5" />
        <p className="md:inline-block hidden">Comments</p>
      </NavLink>
    </div>
  );
};
