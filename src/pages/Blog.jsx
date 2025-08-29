import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import { Footer, Loader, Navbar } from "../components";
import moment from "moment";
import { div } from "motion/react-client";
import { useAppContext } from "../context/useAppContext";
import toast from "react-hot-toast";

export const Blog = () => {
  const { id } = useParams();
  const { axios, navigate } = useAppContext();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);

      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const fetchComments = async () => {
    try {
      const { data } = await axios.post(`/api/blog/comments`, { blogId: id });
      console.warn(data);
      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/blog/add-comment`, {
        blog: id,
        name,
        content,
      });

      if (data.success) {
        toast.success(data.message);
        setName("");
        setContent("");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.message || "Server error");
    }
  };
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <main className="relative ">
      <img
        className="absolute opacity-50 -z-1 -top-15 sm:top-3 "
        src={assets.gradientBackground}
        alt=""
      />
      <Navbar btnText={"Login"} onClick={() => navigate("/admin")} />
      <div className="text-center mt-20 text-gray-600 px-2">
        <p className="text-primary py-4 font-medium">
          Published on {moment(data.createdAt).format("MMMM Do YYYY")}{" "}
        </p>
        <h1 className="text-2xl sm:text-4xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2
          className="my-5 truncate max-w-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: data.subTitle }}
        ></h2>
        <p className="border-primary/40 border text-sm sm:text-2xl inline-block px-2 py-1 text-primary rounded-full bg-primary/7 ">
          Tomas Ortega
        </p>
      </div>

      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} className="rounded-3xl mb-5" alt="" />

        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
      </div>

      <div className="px-5 mt-14 mb-10 max-w-3xl mx-auto">
        <p className="font-semibold">Comments ({comments.length})</p>
        <div className="flex flex-col gap-4">
          {comments.map((item, i) => (
            <div
              key={i}
              className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
            >
              <div className="flex items-center gap-2 mb-2">
                <img src={assets.user_icon} alt="" className="w-6" />
                <p className="font-medium"> {item.name}</p>
              </div>
              <p className="text-sm max-w-md ml-8">{item.content}</p>
              <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                {moment(item.createdAt).fromNow()}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5">
        <p className="font-semibold mb-4">Add Your Comment</p>

        <form
          onSubmit={onSubmit}
          className="flex flex-col items-start gap-4 max-w-lg"
        >
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
            placeholder="Name"
            required
            className="w-full p-2 border border-gray-300 rounded outline-none "
          />
          <textarea
            type="text"
            onChange={(e) => setContent(e.target.value)}
            name="content"
            value={content}
            placeholder="Comment"
            required
            className="w-full p-2 border border-gray-300 rounded outline-none h-48"
          />
          <button
            type="submit"
            className="bg-primary text-white p-2 px-8 hover:scale-102 hover:bg-primary/80 transition-all cursor-pointer"
            onClick={addComment}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="my-24 max-w-3xl mx-auto px-5">
        <p className="font-semibold my-4">Share This Article on Social Media</p>
        <div className="flex">
          <img src={assets.facebook_icon} width={50} alt="facebook icon" />
          <img src={assets.twitter_icon} width={50} alt="twitter icon" />
          <img src={assets.googleplus_icon} width={50} alt="google icon" />
        </div>
      </div>

      <Footer />
    </main>
  ) : (
    <Loader />
  );
};
