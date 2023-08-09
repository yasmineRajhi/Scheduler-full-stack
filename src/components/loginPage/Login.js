import React from 'react'
import { TEInput } from "tw-elements-react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { setLogin } from "state";

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <form>
        <label className="block mb-2 text-gray-600 dark:text-gray-300">Email</label>
        <TEInput
          type="email"
          size="lg"
          className="mb-4 bg-gray-100 dark:bg-gray-700"
          placeholder="Email"
        />
        <label className="block mb-2 text-gray-600 dark:text-gray-300">Password</label>
        <TEInput
          type="password"
          size="lg"
          className="mb-4 bg-gray-100 dark:bg-gray-700"
          placeholder="Password"
        />
        <div className="flex mt-1">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  </div>
  );
}

export default Login;