import { useState } from "react";
import { motion } from "framer-motion";
import { assets, blog_data } from "../assets/assets";
import { BlogCard } from "./BlogCard";
import { div } from "motion/react-client";

export const BlogList = ({ category }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

    return (
      <div className="px-6">
            
    <div className="flex justify-center gap-2 flex-wrap sm:gap-8 my-10 relative">
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

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {blog_data
          .filter(
            (item) =>
              category[selectedIndex] === "All" ||
              item.category === category[selectedIndex]
          )
          .map((item) => (
            <BlogCard key={item._id} data={item} />
          ))}
      </div>
    </div>
  );
};
