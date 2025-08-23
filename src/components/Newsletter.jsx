import React from "react";

export const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-32 p-8">
      <h2 className="font-bold md:text-4xl text-2xl h-lh">
        Never Miss a Blog!
      </h2>
      <p className="text-sm text-center md:text-lg text-gray-500">
        Subscribe to get the latest blog,new tech, and exclusive news.
      </p>
      <form action="" className="mt-1 flex w-9/12 ">
        <input
          className="border items-center justify-center border-gray-300 rounded-md border-r-0 outline-none w-full rounded-r-none px-3 text-gray-900 h-9 md:h-12"
          type="text"
          placeholder="Enter Your Email"
          required
        />
        <button
          className="md:px-12 px-4 text-white bg-primary hover:bg-primary/80 transition-all cursor-pointer rounded-md rounded-l-none"
          type="submit"
        >
          Subscribe{" "}
        </button>
      </form>
    </div>
  );
};
