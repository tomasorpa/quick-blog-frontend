import React, { useState } from "react";
import { Input, Navbar } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { AdminLayout } from "./AdminLayout";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/useAppContext";
import toast from "react-hot-toast";

export const Login = () => {
  useAppContext();

  const { axios, setToken,navigate } = useAppContext();
  const [password, setPassword] = useState("TOMASORTEGA");
  const [email, setEmail] = useState("admin@example.com");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = data.token;
         navigate("/admin");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div
        className=" flex flex-col bg-primary/5 p-4
      shadow  rounded-sm  justify-center "
      >
        <h3 className="text-xl font-semibold text-black">Welcome Back!</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            name={"email"}
            placeholder={"tomasopal@gmail.com"}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label={"Email Address"}
          />
          <Input
            type={"password"}
            name={"password"}
            placeholder={""}
            value={password}
            label={"Password"}
            onChange={({ target }) => setPassword(target.value)}
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-primary hover:bg-primary/80 text-white text-sm sm:text-md sm:px-8 px-4 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
            >
              Login
            </button>
            <img src={assets.logo} className="w-1/3" calt="" />
          </div>
        </form>
      </div>
    </div>
  );
};
