import { Typography, Box, Dropzone, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { TEInput } from 'tw-elements-react';
import { setLogin } from "../../state";




//login

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const initialValuesLogin = {
    email: "",
    password: "",
};

// register

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

function Form() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [pageType, setPageType] = useState("login");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const login = async (values, onSubmitProps) => {
        const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });
        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();
        if (loggedIn) {
            dispatch(
                setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token,
                })
            );
            navigate("/Home")
        }
    };

    const register = async (values, onSubmitProps) => {
        // this allows us to send form info with image
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);

        const savedUserResponse = await fetch(
            "http://localhost:3001/auth/register",
            {
                method: "POST",
                body: formData,
            }
        );
        const savedUser = await savedUserResponse.json();
        onSubmitProps.resetForm();

        if (savedUser) {
            setPageType("login");
        }
    }

    const handleFormSubmit = async (values, onSubmitProps) => {
        if (isLogin) await login(values, onSubmitProps);
        if (isRegister) await register(values, onSubmitProps);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
                <form
                    onSubmit={handleFormSubmit}
                    initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
                    validationSchema={isLogin ? loginSchema : registerSchema}
                >
                    <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800 dark:text-white">
                        {isLogin ? "Log In" : "Create an Account"}
                    </h2>
                    <form className="space-y-4">
                        {!isLogin && ( // Hide if not login
                            <>
                                <label className="block mb-2 text-gray-600 dark:text-gray-300">First Name</label>
                                <TEInput
                                    type="text"
                                    size="lg"
                                    name="firstName"
                                    placeholder="John"
                                    className="bg-gray-100 dark:bg-gray-700"
                                />
                                <label className="block mb-2 text-gray-600 dark:text-gray-300">Last Name</label>
                                <TEInput
                                    type="text"
                                    size="lg"
                                    name="lastName"
                                    placeholder="Doe"
                                    className="bg-gray-100 dark:bg-gray-700"
                                />
                                <label className="block mb-2 text-gray-600 dark:text-gray-300">
                                    Profile Picture
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="picture"
                                    className="file:border-none file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-4 file:py-2 file:rounded-full file:text-white bg-gray-100 dark:bg-gray-700 py-2 px-3 rounded-md w-full focus:outline-none focus:ring-0"
                                />
                            </>
                        )}
                        <label className="block mb-2 text-gray-600 dark:text-gray-300">Email</label>
                        <TEInput
                            type="email"
                            size="lg"
                            name="email"
                            placeholder="johndoe@example.com"
                            className="bg-gray-100 dark:bg-gray-700"
                        />
                        <label className="block mb-2 text-gray-600 dark:text-gray-300">Password</label>
                        <TEInput
                            type="password"
                            size="lg"
                            name="password"
                            placeholder="********"
                            className="bg-gray-100 dark:bg-gray-700"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-md w-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
                        >
                            {isLogin ? "Log In" : "Register"}
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {isLogin
                                ? "Don't have an account?"
                                : "Already have an account?"}{' '}
                            <button
                                type="button"
                                className="text-blue-500 hover:underline"
                                onClick={() =>
                                    setPageType(isLogin ? "register" : "login")
                                }
                            >
                                {isLogin ? "Sign up!" : "Log in"}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form