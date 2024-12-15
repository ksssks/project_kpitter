import React from 'react';
import { assets } from "../assets/assets.js";

const Header = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl px-8 md:px-14 lg:px-24 py-8 shadow-lg">
                {/* Left side */}
                <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[10vw]">
                    <p className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight md:leading-tight lg:leading-tight">
                        YOUR CAMPUS STORIES ARE HERE!
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-white text-base font-light">
                        <img
                            className="w-48 rounded-lg"
                            src={assets.group_profile}
                            alt="Group image"
                        />
                        <p className="leading-relaxed">
                            KPItter bridges the gap between formal academic communication and personal networking.
                            <br className="hidden sm:block" />
                            It’s a space where students can express themselves freely, find peers with similar interests,
                            and make the most of their university experience.
                        </p>
                    </div>
                    <a
                        href="#posts"
                        className="flex items-center gap-3 bg-white px-8 py-3 rounded-full text-sm font-semibold text-gray-800 shadow-lg hover:bg-yellow-300 hover:scale-105 transition duration-300"
                    >
                        CHECK BEST POSTS
                        <img src={assets.arrow_icon} alt="" className="w-5" />
                    </a>
                </div>
                {/* Right side */}
                <div className="md:w-1/2 relative flex justify-end">
                    <img
                        className="w-auto h-full md:absolute bottom-0"
                        src={assets.chill_guy}
                        alt="Header image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
