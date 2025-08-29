import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/useAppContext";
import toast from "react-hot-toast";

export const BlogTableItem = ({ blog, fetchDashboard, index }) => {
  const { title, createdAt, isPublished } = blog;
  const BlogDate = new Date(createdAt);
  const { axios } = useAppContext();
  console.log(blog);
  const deleteBlog = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!isConfirmed) return;

    try {
      const { data } = 
        await axios.delete("/api/blog/delete", {
          data: { id: blog._id },
        }
      );
      if (data.success) {
        toast.success(data.message);
        await fetchDashboard();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const togglePublish = async () => {
    try {
      const { data } = await axios.put("/api/blog/toggle", {
        id: blog._id,
      });
      if (data.success) {
        toast.success(data.message);
        await fetchDashboard();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-y border-gray-300">
      <th className="px-1 py-4">{index}</th>
      <td className="px-1 py-4 text-[11px] sm:text-xs max-w-[90px] sm:max-w-[250px] md:max-w-[300px] ">
        {title}
      </td>
      <td className="px-1 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
      <td className="px-1 py-4 max-sm:hidden">
        <p className={`${isPublished ? "text-green-600" : "text-orange-700"}`}>
          {isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      <td className="px-2 py-4 gap-1 sm:gap-3 sm:justify-between justify-start flex sm:text-xs text-[11px] items-center">
        <button
          onClick={togglePublish}
          className="border hover:animate-pulse hover:bg-gray-400 hover:text-white transition-all px-1 py-0.5 mt-1 rounded cursor-pointer"
        >
          {isPublished ? "Unpublish" : "Publish"}
        </button>
        <img
          onClick={deleteBlog}
          src={assets.cross_icon}
          className="w-6 lg:w-8 hover:animate-pulse hover:scale-105 transition-all cursor-pointer"
          alt="Cross Icon"
        />
      </td>
    </tr>
  );
};
