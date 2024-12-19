import React from "react";
import { motion } from "framer-motion";

const SignUpForm = ({ status }) => {
  const setStatus = status;
  return (
    <motion.div
      className="flex flex-col justify-center items-start gap-3 p-6 pt-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <strong className="text-2xl font-bold">Create an Account</strong>
      <span className="w-full h-[1px] bg-black" />
      <p className="font-medium">Join us by creating your account</p>
      <form action="">
        <div className="grid gap-5 w-full px-12 items-center">
          {["name", "email", "password", "confirm-password"].map((field) => (
            <span key={field}>
              <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)} :
              </label>
              <input
                type={
                  field === "email"
                    ? "email"
                    : field === "password" || field === "confirm-password"
                      ? "password"
                      : "text"
                }
                id={field}
                placeholder={`Enter Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                className="w-full rounded-md border border-stroke border-black/50 py-[10px] pr-3 pl-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                aria-label={field.charAt(0).toUpperCase() + field.slice(1)}
                required
              />
            </span>
          ))}
          <button type="submit" className="btn1 w-full">
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center my-4 w-full">
        <span className="w-full h-[1px] bg-black" />
        <span className="px-4">OR</span>
        <span className="w-full h-[1px] bg-black" />
      </div>
      <p className="font-medium">
        Already have an account?{" "}
        <button className="font-bold underline" onClick={() => setStatus(true)}>
          Log In
        </button>
      </p>
    </motion.div>
  );
};

export default SignUpForm;
