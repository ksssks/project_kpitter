import React from 'react';
import {assets} from "../assets/assets.js";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-40 h-16' alt='Logo'/>
                    <p className='w-full md:w-2/3  dark:text-white'>KPItter is a niche microblogging
                        platform designed exclusively for students of KPI (Kyiv Polytechnic Institute). It serves as a
                        dynamic space where students can share their thoughts, experiences, and updates in a quick,
                        engaging format. Inspired by the brevity and immediacy of modern social media, KPItter fosters a
                        sense of community within the student body, allowing users to stay connected and informed about
                        campus life.</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 dark:text-white'>COMPANY</p>
                    <ul className='flex flex-col gap-1  dark:text-white'>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 dark:text-white'>CONTACT WITH US</p>
                    <ul className='flex flex-col gap-1  dark:text-white'>
                        <li>050 777 77 77</li>
                        <li>kpitter.support@gmail.com</li>
                    </ul>
                    <div className='flex gap-3 mt-5'>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                           aria-label="Instagram">
                            <img src={assets.instagram} alt="Instagram" className="w-6 h-6 hover:scale-105 transition-all duration-300 focus:outline-none"/>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                           aria-label="Facebook">
                            <img src={assets.facebook} alt="Facebook" className="w-6 h-6 hover:scale-105 transition-all duration-300 focus:outline-none"/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                           aria-label="X (Twitter)">
                            <img src={assets.twitter} alt="X (Twitter)" className="w-6 h-6 hover:scale-105 transition-all duration-300 focus:outline-none"/>
                        </a>
                    </div>
                </div>


            </div>
            <div>
                <hr/>
                <p className='py-5 text-m text-center dark:text-white'>© 2024 KPItter</p>
            </div>
        </div>
    );
};

export default Footer;