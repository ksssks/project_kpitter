import React from 'react';
import { assets } from "../assets/assets.js";

const CreativeVideoSection = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl px-6 sm:px-8 md:px-14 lg:px-24 py-8 shadow-xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-yellow-400 opacity-20 rounded-full translate-x-1/2 translate-y-1/2"></div>

                {/* Left side */}
                <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-6 sm:py-10 md:py-14 z-10">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-300 font-extrabold leading-tight">
                        EXPERIENCE KPITTER IN ACTION!
                    </p>
                    <div className="flex flex-col items-start gap-4 text-white text-sm sm:text-base font-light">
                        <p className="leading-relaxed">
                            Dive into the magic of KPItter! Watch how our platform redefines the campus experience with innovation and creativity.
                        </p>
                        <p className="italic text-white/80 text-xs sm:text-sm">
                            "A world of connections, just a click away."
                        </p>
                    </div>
                    <a
                        href="#video"
                        className="flex items-center gap-2 sm:gap-3 bg-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-gray-800 shadow-lg hover:bg-yellow-300 hover:scale-105 transition duration-300"
                    >
                        WATCH NOW
                    </a>
                </div>

                {/* Right side */}
                <div className="md:w-1/2 relative flex justify-center items-center z-10">
                    <div className="relative w-full h-48 sm:h-64 md:h-auto aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.youtube.com/embed/Vcljvd4Ef_o"
                            title="KPItter Video"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-400 opacity-30 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-10 -right-10 w-36 h-36 sm:w-48 sm:h-48 bg-green-500 opacity-20 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default CreativeVideoSection;
