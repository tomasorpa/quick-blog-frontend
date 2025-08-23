import React from "react";
import { Blog } from "../pages";
import { useNavigate } from "react-router-dom";

export const BlogCard = ({ data }) => {
    const { title, description, category, image, _id } = data;

      const navigate = useNavigate();
  return (
    <div
      className="w-full rounded-lg overflow-hidden shadow hover:shadow-primary/25 hover:scale-101 duration-300 cursor-pointer"
      onClick={() => navigate(`blog/${_id}`)}
    >
      <img src={image} alt="Card Image" className="aspect-video" />
      <span className=" ml-4 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-[10px] sm:text-xs">
        {category}
      </span>
      <div className="p-4">
        <h5 className="mb-2 font-medium text-gray-900 line-clamp-2">{title}</h5>
        <p
          className="mb-2 text-xs text-gray-600 line-clamp-2 text-pretty"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
};
