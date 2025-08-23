import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../assets/assets";
import Quill from "quill";
import { option } from "motion/react-client";
export const AddBlog = () => {
  const [image, setImage] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const generateContent = async () => {};
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 h-[140vh] bg-blue-50/50 text-gray-600 "
    >
      <div className="bg-white w-9/12 max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
            required
          />
        </label>
        <p className="mt-4">Blog Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <p className="mt-4">Blog Subtitle</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setSubtitle(e.target.value)}
          value={subtitle}
        />
        <p className="mt-4">Blog Description</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
          <div ref={editorRef}> </div>

          <button
            type="button"
            onClick={generateContent}
            className="absolute bottom-0 right-2 ml-2 text-xs 
             text-white px-4 py-1.5 rounded-full 
             bg-gradient-to-r from-primary  to-purple-700 hover:animate-pulse 
             hover:opacity-90 shadow-md transition-all duration-300"
          >
            Generate with AI
          </button>
          <p className="mt-4">Blog Description</p>
          <select
            className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded"
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            id=""
          >
            <option value="">Select Category</option>
            {blogCategories.map((item, index) => (
              <option value={item}>{item}</option>
            ))}
          </select>

          <div className="flex gap-2 my-4">
            <p>Publish Now</p>
            <input
              type="checkbox"
              className="scale-125"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm"
          >
            Add Blog
          </button>
        </div>
      </div>
    </form>
  );
};
