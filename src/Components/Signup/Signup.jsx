import React, { useState } from "react";

import Logo from "../../olx-logo.png";
import "./Signup.css";
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
    console.log("handle submit invoked");
    e.preventDefault();

    try {

      if (name.trim() === "" || name.length < 3) {
        toast.error("Not a valid username. It should be at least 3 characters long.");
        return;
      } else if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        toast.error("Phone number should be exactly 10 digits.");
        return;
      } else if (!email.endsWith("@gmail.com")) {
        toast.error("Please enter a valid email ending with @gmail.com.");
        return;
      }else if(password.length<6){
        toast.error("Please enter a strong password");
        return;
      }else{
        await signUp(email, password, name, phone);
        toast.success("Sign-up successful!");
        setEmail("");
        setName("");
        setPassword("");
          setPhone("");
        
        navigate("/login");
      }
    } catch (error) {
      toast.error(" Password should be at least 6 characters ");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input"
            type="number"
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login'> <p>Sign In</p></Link>
              </div>
    </div>
  );
}
