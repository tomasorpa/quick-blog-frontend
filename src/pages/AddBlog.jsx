import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../assets/assets";
import Quill from "quill";
import { parse } from "marked";

import { useAppContext } from "../context/useAppContext";
import toast from "react-hot-toast";
export const AddBlog = () => {
  const [image, setImage] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { axios } = useAppContext();

  const generateContent = async () => {
    if (!title) return toast.error("Please enter a title");
    try {
      setIsLoading(true);
      const { data } = await axios.post("api/blog/generate", { prompt: title });
      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content);
        setIsLoading(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsAdding(true);

      const blog = {
        title,
        subtitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      };
      console.warn(blog);
      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const { data } = await axios.post("/api/blog/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.warn(data);
      if (data.success) {
        toast.success(data.message);
        setImage(false);
        setSubtitle("");
        setTitle("");
        quillRef.current.root.innerHTML = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }
  };
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex justify-center text-sm items-start sm:items-center bg-blue-50/50 text-gray-600 "
    >
      <div className="bg-white w-11/12 p-4 md:p-10 m-4 sm:m-10 shadow rounded">
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
          className="w-full mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <p className="mt-4">Blog Subtitle</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setSubtitle(e.target.value)}
          value={subtitle}
        />
        <p className="mt-4">Blog Description</p>
        <div className=" sm:pb-10 pt-2 min-h-60 relative">
          <div ref={editorRef}> </div>

          <button
            type="button"
            disabled={isLoading}
            onClick={generateContent}
            className="absolute mt-4  right-0 ml-2 text-xs 
             text-white px-4 py-1.5 rounded-full 
             bg-gradient-to-r from-primary  to-purple-700 hover:animate-pulse 
             hover:opacity-90 shadow-md transition-all duration-300"
          >
            {isLoading ? (
              <div className="w-8 h-8 rounded-full border-2 border-t-primary animate-spin"></div>
            ) : (
              "Generate with AI"
            )}
          </button>
          <p className="mt-12">Blog Description</p>
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
            disabled={isAdding}
            className=" w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm"
          >
            {isAdding ? "Adding..." : "Add Blog"}
          </button>
        </div>
      </div>
    </form>
  );
};
