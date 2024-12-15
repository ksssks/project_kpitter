import { useState, useEffect } from 'react';
import {assets} from "../assets/assets.js";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <img src={assets.sun} alt="Light mode" className="h-6 w-6 dark:fill-white" />
            ) : (
                <img src={assets.moon} alt="Dark mode" className="h-6 w-6" />
            )}
        </button>
    );
};

export default ThemeToggle;