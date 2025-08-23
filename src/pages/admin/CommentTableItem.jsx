import React from "react";
import { assets } from "../../assets/assets";

export const CommentTableItem = ({ comment, fetchComments, index }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);
  return (
    <tr className="border border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b>: {blog.title}
        <br />
        <br />
        <b>Name</b>: {comment.name}
        <br />
        <b>Comment</b>: {comment.content}
      </td>
      <td className="px-6 py-4 max-sm:hiddren">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        <div className="gap-4 inline-flex items-center">
          {!comment.isApproved ? (
            <img
              src={assets.tick_icon}
              className="cursor-pointer w-5 hover:scale-105 transition-all"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <img
            src={assets.bin_icon}
            className="w-5 hover:scale-110 transition-all cursor-pointer"
            alt="Bin Icon"
          />
        </div>
      </td>
    </tr>
  );
};
