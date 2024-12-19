import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../utils/auth";

const LoginForm = ({ status, setIsOpen }) => {
  const auth = useAuth();
  const setStatus = status;
  const navigate = useNavigate(); // Initialize useNavigate hook
  const location = useLocation();

  const redirect = location.state?.path || "/";

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Add your authentication logic here
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username && password) {
      // Example: Simulating successful login
      console.log("Login successful with:", { username, password });

      // Redirect to the user's dashboard
      auth.login(username);

      navigate(`/user/${username}/profile`);
      setIsOpen(false);
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-start gap-3 p-6 pt-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <strong className="text-2xl font-bold">Welcome Back !</strong>
      <span className="w-full h-[1px] bg-black" />
      <p className="font-medium">Please log in to your Account</p>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-5 w-full px-12 items-center">
          <span>
            <label htmlFor="username">Username :</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Your Username"
              className="w-full rounded-md border border-stroke border-black/50 py-[10px] pr-3 pl-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              aria-label="Username Address"
              required
            />
          </span>
          <span>
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full rounded-md border border-stroke border-black/50 py-[10px] pr-3 pl-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              aria-label="Password"
              required
            />
          </span>
          <button type="submit" className="btn1 w-full">
            Log In
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center my-4 w-full">
        <span className="w-full h-[1px] bg-black" />
        <span className="px-4">OR</span>
        <span className="w-full h-[1px] bg-black" />
      </div>
      <p className="font-medium">
        You don't have an Account?{" "}
        <button
          className="font-bold underline"
          onClick={() => setStatus(false)}
        >
          Sign Up
        </button>
      </p>
    </motion.div>
  );
};

export default LoginForm;
