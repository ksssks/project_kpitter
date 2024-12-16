import React, { useState } from 'react';
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <Link to='/'><img src={assets.logo} className='w-48' alt="Logo" /></Link>
            <ul className='hidden sm:flex gap-5 text-sm dark:bg-black'>
                <NavLink to='/' className='flex flex-col items-center gap-1 dark:text-white'>
                    <p>HOME</p>
                    <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 dark:bg-white hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1 dark:text-white'>
                    <p>ABOUT</p>
                    <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 dark:bg-white hidden' />
                </NavLink>
                <NavLink to='/allusers' className='flex flex-col items-center gap-1 dark:text-white'>
                    <p>ALL USERS</p>
                    <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 dark:bg-white hidden' />
                </NavLink>
                <NavLink to='/auth' className='flex flex-col items-center gap-1 dark:text-white '>
                    <p>YOUR POSTS</p>
                    <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 dark:bg-white hidden' />
                </NavLink>
                <NavLink to='/create' className='flex flex-col items-center gap-1 dark:text-white '>
                    <p>MAKE A POST</p>
                    <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 dark:bg-white hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-7'>
                <ThemeToggle />
                <img onClick={() => setVisible(true)} src={assets.menu} className='w-7 cursor-pointer dark:invert dark:bg-white sm:hidden'
                     alt='Menu' />
            </div>
            <div
                className={`fixed inset-0 z-50 bg-white dark:bg-black transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col h-full'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown} className='h-7 cursor-rotate-180 dark:invert dark:bg-white' alt="Dropdown" />
                        <p>BACK</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b dark:invert dark:bg-white' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b dark:invert dark:bg-white' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b dark:invert dark:bg-white' to='/allusers'>ALL USERS</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b dark:invert dark:bg-white' to='/auth'>YOUR POSTS</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b dark:invert dark:bg-white' to='/create'>MAKE A POST</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
