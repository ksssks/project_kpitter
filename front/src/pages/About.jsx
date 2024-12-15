import React from 'react';
import { assets } from "../assets/assets.js";

const About = () => {
    return (
        <div>
            {/* About Section Header */}
            <div className="text-4xl text-center font-extrabold pt-10 pb-4 text-gray-800 dark:text-white">
                About <span className="text-primary">KPItter</span>
            </div>
            {/* Main About Section */}
            <div className="my-12 flex flex-col gap-16 px-6 lg:px-20">
                <img
                    className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    src={assets.university}
                    alt="About image"
                />
                <div className="flex flex-col justify-center gap-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    <p>
                        Welcome to <span className="text-primary font-bold">KPItter</span> — a niche microblogging platform designed exclusively
                        for students of KPI (Kyiv Polytechnic Institute). It serves as a dynamic space where students can share their thoughts,
                        experiences, and updates in a quick, engaging format.
                    </p>
                    <p>
                        Inspired by the brevity and immediacy of modern social media, <span className="text-primary font-bold">KPItter</span> fosters
                        a sense of community within the student body, allowing users to stay connected and informed about campus life.
                    </p>
                    <div className="text-xl font-semibold text-primary">Our Goal</div>
                    <p>
                        To create a vibrant online space for KPI students to engage, learn, and grow. KPItter enables students to stay updated
                        on campus life while offering a platform for self-expression and sharing valuable knowledge.
                    </p>
                </div>
            </div>
            {/* Why KPItter Section */}
            <div className="py-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
                <h2 className="text-4xl text-center font-extrabold pb-8">WHY <span className="text-yellow-300">KPItter?</span></h2>
                <div className="flex flex-col md:flex-row gap-12 items-center px-6 lg:px-20">
                    <img
                        className="w-full md:max-w-[450px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        src={assets.student_with_laptop}
                        alt="Why KPItter image"
                    />
                    <div className="flex flex-col gap-6 text-lg leading-relaxed">
                        <p>
                            <span className="text-yellow-300 font-bold">KPItter</span> is the platform for those who appreciate the quick,
                            concise nature of social media while wanting to focus on their academic and personal growth. We offer not only
                            the latest news but also an engaging community for KPI students to express themselves.
                        </p>
                        <p>
                            From collaborating with fellow students to sharing insights about university life, <span className="text-yellow-300 font-bold">KPItter </span>
                             is your go-to place for staying in touch with the latest campus happenings and fostering a strong sense of belonging at KPI.
                        </p>
                    </div>
                </div>
            </div>
            {/* Features Section */}
            <div className="my-16 flex flex-col md:flex-row gap-10 px-6 lg:px-20 text-gray-800 dark:text-gray-300">
                {[
                    {
                        title: "Community",
                        image: assets.number_1,
                        description:
                            "At KPItter, we create a close-knit community for KPI students to connect, share experiences, and learn from each other.",
                    },
                    {
                        title: "Engagement",
                        image: assets.number_2,
                        description:
                            "We encourage active participation on the platform, allowing students to engage with content, ask questions, and provide valuable feedback to their peers.",
                    },
                    {
                        title: "Innovation",
                        image: assets.number_3,
                        description:
                            "With features tailored to student life at KPI, KPItter is always evolving to offer new ways for students to interact, learn, and grow together.",
                    },
                ].map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:rotate-2 transition-transform duration-500 ease-out"
                    >
                        <img
                            src={feature.image}
                            alt={`${feature.title} icon`}
                            className="w-24 h-24"
                        />
                        <b className="text-2xl text-primary">{feature.title}</b>
                        <p className="text-lg leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
