import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
export const Input = ({ type, name, placeholder, value, onChange, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const inputType =
    type == "password" ? (showPassword ? "type" : "password") : type;
  return (
    <div className="w-full">
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="input-box ">
        <input
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full outline-none"
        />
        {type === "password" &&
          (showPassword ? (
            <FaRegEye
              className="cursor-pointer text-primary text-lg"
              onClick={togglePassword}
            />
          ) : (
            <FaRegEyeSlash
              className="cursor-pointer text-slate-400 text-lg"
              onClick={togglePassword}
            />
          ))}
      </div>
    </div>
  );
};
