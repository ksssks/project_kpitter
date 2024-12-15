import React from 'react';
import { assets } from "../assets/assets.js";

const BestPosts = () => {
    const posts = [
        {
            title: "5 Tips to Ace Your Exams",
            author: "John Doe",
            image: assets.best_post,
            description: "Discover actionable strategies to excel in your exams and boost your performance.",
        },
        {
            title: "KPI Tech Fest Highlights",
            author: "Jane Smith",
            image: assets.best_post_2,
            description: "Catch up on all the exciting innovations and projects from this year's KPI Tech Fest.",
        },
        {
            title: "How to Balance Study and Life",
            author: "Alex Johnson",
            image: assets.best_post_3,
            description: "Learn effective ways to juggle academic responsibilities and personal well-being.",
        },
    ];

    return (
        <div id='posts'>
            {/* Best Posts Section Header */}
            <div className="text-4xl text-center font-extrabold pt-10 pb-4 text-gray-800 dark:text-white">
                Best Posts <span className="text-primary">This Week</span>
            </div>
            {/* Best Posts Cards */}
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:rotate-2 transition-transform duration-500 ease-out"
                    >
                        <img
                            src={post.image}
                            alt={`${post.title} image`}
                            className="w-full h-[250px] object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-primary mb-4">{post.title}</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{post.description}</p>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                By <span className="text-primary">{post.author}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestPosts;
