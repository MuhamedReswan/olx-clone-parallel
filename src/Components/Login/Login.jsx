import React, { useState } from "react";
import Logo from "../../olx-logo.png";
import { UserAuth } from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email.endsWith("@gmail.com")) {
        toast.error("Please enter a valid email ending with @gmail.com.");
        return;
      } else if (password.length < 6) {
        toast.error("Please enter a valid password");
        return;
      } else {
        const isComplete = await signIn(email, password);
        if (isComplete) {
          toast.success("Sign-In successful!");
          const from = location.state?.from || "/";
          navigate(from);
        }
      }
    } catch (error) {
      toast.error("Incorrect password!");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-lg w-full max-w-sm">
        <img
          className="mx-auto mb-2"
          src={Logo}
          alt="Logo"
          width="150"
          height="150"
        />
        <form onSubmit={handleSubmit}>
          <label
            className="block text-xs font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-2 py-1 mb-3 border-b border-gray-300 outline-none focus:ring-2 focus:ring-green-800 rounded text-sm"
            type="email"
            id="email"
            name="email"
          />

          <label
            className="block text-xs font-medium text-gray-700 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-2 py-1 mb-4 border-b border-gray-300 outline-none focus:ring-2 focus:ring-green-800 rounded text-sm"
            type="password"
            id="password"
            name="password"
          />

          <button
            className="w-full py-1.5 bg-green-950 text-white font-semibold rounded hover:bg-white hover:text-green-950 hover:border-2 hover:border-green-950 transition text-sm"
            type="submit"
          >
            Login
          </button>
        </form>
        <Link
          to="/signup"
          className="mt-3 block text-center text-green-950 font-medium text-sm"
        >
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
  );
}
