import React, { useState } from "react";
import Logo from "../../olx-logo.png";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name.trim() === "" || name.length < 3) {
        toast.error(
          "Not a valid username. It should be at least 3 characters long."
        );
        return;
      } else if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        toast.error("Phone number should be exactly 10 digits.");
        return;
      } else if (!email.endsWith("@gmail.com")) {
        toast.error("Please enter a valid email ending with @gmail.com.");
        return;
      } else if (password.length < 6) {
        toast.error("Please enter a strong password");
        return;
      } else {
        await signUp(email, password, name, phone);
        toast.success("Sign-up successful!");
        setEmail("");
        setName("");
        setPassword("");
        setPhone("");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Password should be at least 6 characters");
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
            htmlFor="fname"
          >
            Username
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-2 py-1 mb-3 border-b border-gray-300 outline-none focus:ring-2 focus:ring-green-800 rounded text-sm "
            type="text"
            id="fname"
            name="name"
          />

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
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="block w-full px-2 py-1 mb-3 border-b border-gray-300 outline-none focus:ring-2 focus:ring-green-800 rounded text-sm"
            type="text"
            id="phone"
            name="phone"
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
            Signup
          </button>
        </form>
        <Link
          to="/login"
          className="mt-3 block text-center text-green-950 font-medium text-sm"
        >
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
}
