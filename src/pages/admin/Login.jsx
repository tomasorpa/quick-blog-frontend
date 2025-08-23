import React, { useState } from "react";
import { Input } from "../../components";
import { Link } from "react-router-dom";
import { AdminLayout } from "./AdminLayout";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = () => {};
  return (
    <AdminLayout>
      <div className="h-4/4 md:h-full flex flex-col  justify-center ">
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

          {error && <p className="text-red-600 text-xs pb-2">{error}</p>}
          <button className="btn-primary">Login</button>
          <p className="text-[13px] text-slate-800 mt-3 text-center">
            Don't have an account?
            <Link
              className="font-semibold text-primary underline cursor-pointer pl-1"
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </AdminLayout>
  );
};
