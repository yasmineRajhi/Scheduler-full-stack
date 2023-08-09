import React from 'react';
import { TEInput } from 'tw-elements-react';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { setLogin } from "state";

const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    picture: yup.string().required("required"),
  });

const initialValuesRegister = {
firstName: "",
lastName: "",
email: "",
password: "",
picture: "",
ROLE: "ROLE_USER",
};

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800 dark:text-white">
          Create an Account
        </h2>
        <form className="space-y-4">
          <label className="block mb-2 text-gray-600 dark:text-gray-300">First Name</label>
          <TEInput
            type="text"
            size="lg"
            placeholder="John"
            className="bg-gray-100 dark:bg-gray-700"
          />
          <label className="block mb-2 text-gray-600 dark:text-gray-300">Last Name</label>
          <TEInput
            type="text"
            size="lg"
            placeholder="Doe"
            className="bg-gray-100 dark:bg-gray-700"
          />
          <label className="block mb-2 text-gray-600 dark:text-gray-300">Email</label>
          <TEInput
            type="email"
            size="lg"
            placeholder="johndoe@example.com"
            className="bg-gray-100 dark:bg-gray-700"
          />
          <label className="block mb-2 text-gray-600 dark:text-gray-300">Password</label>
          <TEInput
            type="password"
            size="lg"
            placeholder="********"
            className="bg-gray-100 dark:bg-gray-700"
          />
          <label className="block mb-2 text-gray-600 dark:text-gray-300">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              className="file:border-none file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-4 file:py-2 file:rounded-full file:text-white bg-gray-100 dark:bg-gray-700 py-2 px-3 rounded-md w-full focus:outline-none focus:ring-0"
              /*className="bg-gray-100 dark:bg-gray-700 py-2 px-3 rounded-md w-full focus:outline-none"*/
            />
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-md w-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
