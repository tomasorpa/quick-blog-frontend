import React from "react";

export const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 my-32 p-8">
      <h1 className="md:text-4xl text-2xl">Never Miss a Blog!</h1>
      <p>Subscribe to get the latest blog,new tech, and exclusive news.</p>
      <form action="" className="flex max-w-2xl">
              <input className="border items-center justify-center border-gray-300 rounded-md border-r-0 outline-none w-full rounded-r-none px-3 text-gray-900" type="text" placeholder="Enter Your Email" required />
              <button className="md:px-12 px-8 text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none" type="submit">Subscribe </button>
      </form>
    </div>
  );
};
