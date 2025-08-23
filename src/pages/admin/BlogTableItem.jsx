import React from "react";
import { assets } from "../../assets/assets";

export const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);
  return (
    <tr className="border-y border-gray-300">
      <th className="px-1 py-4">{index}</th>
      <td className="px-1 py-4 text-[11px] sm:text-sm max-w-[90px] sm:max-w-[250px] md:max-w-[300px] ">
        {title}
      </td>
      <td className="px-1 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
      <td className="px-1 py-4 max-sm:hidden">
        <p
          className={`${
            blog.isPublished ? "text-green-600" : "text-orange-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      <td className="px-2 py-4 gap-1 sm:gap-3  sm:justify-start flex sm:text-xs text-[11px] items-center">
        <button className="border hover:animate-pulse hover:bg-gray-400 hover:text-white transition-all px-1 py-0.5 mt-1 rounded cursor-pointer  ">
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>
        <img
          src={assets.cross_icon}
          className="w-8 hover:animate-pulse hover:scale-105 transition-all cursor-pointer"
          alt="Cross Icon"
        />
      </td>
    </tr>
  );
};
