import React from "react";
import { assets } from "../assets/assets";

export const Header = () => {
  return (
    <section className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center gap-4  justify-center px-6 py-1.5 mb-4 border border-primary/40 rounded-full text-sm text-primary bg-primary/10">
          <p>New: AI Feature Integrated</p>
          <img src={assets.star_icon} alt="" />
        </div>
        <h1 className="text-3xl font-semibold sm:leading-16 text-gray-700 sm:text-4xl md:text-5xl lg:text-6xl">
          Your Favorite <span className="text-primary">Blogging</span> <br />{" "}
          Platform.
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs  text-gray-500">
          This Is Your Space To Think Out Loud,To Share hat Matters, and To
          Write without Filters. Whether Its's One Word Or A Thousand, Your
          Story Start Right Here.
        </p>

        <form className="flex justify-between max-sm:scale-75 sm:w-full mx-auto border border-gray-300 bg-white rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search For Blogs"
            required
            className="w-full pl-4 text-sm sm:text-md "
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary/80 text-white text-sm sm:text-md sm:px-8 px-4 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
      <img
        src={assets.gradientBackground}
        className="absolute opacity-50 -top-15 sm:-top-52 -z-1"
        alt=""
      />
    </section>
  );
};
