import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/useAppContext";
import toast from "react-hot-toast";

export const CommentTableItem = ({ comment, fetchComments, index }) => {
  const { blog, createdAt, _id } = comment;
  const { axios } = useAppContext();
  

const approveComment = async () => {
  try {
    const { data } = await axios.put("/api/admin/approve-comment", {
      id: comment._id,
    });
    if (data.success) {
      toast.success(data.message);
      await fetchComments();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

const deleteComment = async () => {
  try {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!isConfirm) return;

    const { data } = await axios.delete("/api/admin/delete-comment", {
      data: { id: comment._id },
    });
    if (data.success) {
      toast.success(data.message);
      await fetchComments();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};


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
      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        <div className="gap-4 inline-flex items-center">
          {!comment.isApproved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon}
              className="cursor-pointer w-5 hover:scale-105 transition-all"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <img
            onClick={deleteComment}
            src={assets.bin_icon}
            className="w-5 hover:scale-110 transition-all cursor-pointer"
            alt="Bin Icon"
          />
        </div>
      </td>
    </tr>
  );
};
