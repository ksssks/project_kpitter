import React, { useState } from "react";
import { register, login } from "../api.jsx";
import { assets } from "../assets/assets.js";

const AuthForm = ({ setAuth }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [isRegister, setIsRegister] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isRegister) {
                await register({ username, password, full_name: fullName });
            }
            await login({ username, password });
            setAuth({ username, password });
        } catch (error) {
            console.error("Authentication failed:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 dark:text-white"
        >
            <img src={assets.hello} className="w-28" alt="Hello man" />
            <h2 className="text-3xl">{isRegister ? "Register" : "Login"}</h2>

            {isRegister && (
                <input
                    className="w-full px-3 py-2 border border-gray-800 dark:border-white rounded dark:text-black"
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
            )}

            <input
                className="w-full px-3 py-2 border border-gray-800 dark:border-white rounded dark:text-black"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                className="w-full px-3 py-2 border border-gray-800 dark:border-white rounded dark:text-black"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button
                className="bg-black text-white font-light px-12 py-2 mt-4 rounded dark:bg-white dark:text-black hover:scale-105 transition duration-300"
                type="submit"
            >
                {isRegister ? "Register" : "Login"}
            </button>
            <p className="cursor-pointer" onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "Have an account? Login" : "No account? Register"}
            </p>
        </form>
    );
};

export default AuthForm;
