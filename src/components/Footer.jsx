import React from "react";
import { assets, footer_data } from "../assets/assets";

export const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3 ">
      <div className="flex flex-col sm:flex-row items start justify-between gap-10 py-10  text-gray-500">
        <div>
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
          <p className="mt-6 w-full sm:max-w-[350px] pb-6 text-pretty border-b sm:border-none border-gray-500/30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet
            consectetur a isicing elit,sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly w-full md:w-[45%] gap-5">
          {footer_data.map((data, i) => (
            <div key={i}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {data.title}
              </h3>
              <ul className="text-sm space-y-1">
                {data.links.map((link, i) => (
                  <li className="hover:underline transition" key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center md:text-base text-gray-500/80"></p>
    </div>
  );
};
