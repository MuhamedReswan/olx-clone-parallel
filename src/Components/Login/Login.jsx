import React, { useState } from "react";

import Logo from "../../olx-logo.png";
import "./Login.css";
import { UserAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const { signIn } = UserAuth();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email.endsWith("@gmail.com")) {
        toast.error("Please enter a valid email ending with @gmail.com.");
        return;
      } else if (password.length < 6) {
        toast.error("Please enter a valid password");
      } else {
        const isComplete = await signIn(email, password);
        console.log("isComplete", isComplete);
        if (isComplete) {
          toast.success("Sign-In successful!");
          const from = location.state?.from || '/dashboard'; 
          navigate(from); 
          navigate("/");
        }
      }
    } catch (error) {
      toast.error("Incorrect password !");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="input"
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="input"
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">
          {" "}
          <p>Sign Up</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
