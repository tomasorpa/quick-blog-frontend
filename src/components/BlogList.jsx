import { useState } from "react";
import { motion } from "framer-motion";
import { assets, blog_data } from "../assets/assets";
import { BlogCard } from "./BlogCard";
import { div } from "motion/react-client";

export const BlogList = ({ category }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

    return (
      <div>
            
    <div className="flex justify-center gap-2 sm:gap-8 my-10 relative">
      {category.map((item, idx) => (
          <button
          key={item}
          className={`relative px-2 py-1 sm:px-4 sm:py-2 font-medium ${
              selectedIndex === idx ? "text-white" : "text-gray-600"
            }`}
            onClick={() => setSelectedIndex(idx)}
            >
          {item}
          {/* Animate background highlight under the active button */}
          {selectedIndex === idx && (
              <motion.div
              layoutId="activeBackground"
              className="absolute inset-0 btn-filter -z-10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
        </button>
      ))}
      </div>

      <div className="flex flex-wrap">
        {blog_data
          .filter(
            (item) =>
              category[selectedIndex] === "All" ||
              item.category === category[selectedIndex]
          )
          .map((item, idx) => (
            <BlogCard data={item} />
          ))}
      </div>
    </div>
  );
};
