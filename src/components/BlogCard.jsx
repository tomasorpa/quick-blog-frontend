import React from "react";
import { Blog } from "../pages";
import { useNavigate } from "react-router-dom";

export const BlogCard = ({ data }) => {
  const { title, description, category, image, _id } = data;
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`blog/${_id}`)}>
      <img src={image} alt="Card Image" className="aspect-video" />
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        <p
          className="mb-3 text-xs text-gray-600"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        ></p>
      </div>
    </div>
  );
};
