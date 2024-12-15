import React, { useState, useEffect } from 'react';

const Ideas = () => {
    const ideas = [
        "How to balance your academic life and social life?",
        "The best study habits for university success?",
        "How to make the most of university events and clubs?",
        "Tips for dealing with university stress and pressure?",
        "Why joining a study group can boost your grades?",
        "Top 5 things to do during your first week at university?",
        "How to network effectively with professors and peers?",
        "The importance of internships and work experience in university?",
        "How to stay organized with university assignments?",
        "How to overcome procrastination during exams?",
        "The benefits of living on campus versus off-campus housing?",
        "How to make new friends in university?",
        "How to stay healthy and fit while attending university?",
        "What to do when you're homesick at university?",
        "How to manage your finances as a student?",
        "How to get involved in university research projects?",
        "How to make the most of your university library?",
        "Why volunteering is important for personal growth in university?",
        "How to find your passion and career path in university?",
        "How to deal with homesickness and culture shock when studying abroad?",
        "How to stay motivated during your university years?",
        "How to manage time effectively between classes and personal life?",
        "Why time management skills are crucial for university success?",
        "How to handle difficult professors and make the most of their classes?",
        "How to develop critical thinking skills in university?",
        "What to do when you're overwhelmed by university workload?",
        "How to navigate university bureaucracy and administrative processes?",
        "How to build a strong academic portfolio for future careers?",
        "Why attending office hours can improve your university experience?",
        "How to balance part-time work and university studies?",
        "How to develop leadership skills during your university years?",
        "What to do if you feel lost or unsure about your major?",
        "How to deal with group projects in university?",
        "How to create an effective study schedule for exams?",
        "How to stay focused and productive while studying at home?",
        "How to find scholarships and financial aid during university?",
        "How to prepare for your first internship in university?",
        "How to make the most of your university's career services?",
        "What to do when you're struggling with homesickness?",
        "How to create lasting friendships in university?",
        "How to stay engaged in class when the material feels boring?",
        "How to develop good communication skills at university?",
        "How to effectively use your university’s online resources?",
        "How to make the most of study breaks during exam season?",
        "How to find a mentor in university to guide your academic journey?",
        "How to stay productive when you feel burnt out?",
        "How to balance group work and individual responsibilities?",
        "How to make an impact in your university community?",
        "Why it’s important to get involved in university organizations?",
        "How to manage long-distance relationships while at university?",
        "How to find the best study spots on campus?",
        "How to overcome the fear of public speaking at university?",
        "How to stay safe and aware on and off campus?",
        "How to handle academic failure and bounce back stronger?",
        "How to take advantage of exchange programs and study abroad?",
        "How to develop a growth mindset during your university years?",
        "How to create a career plan while still in university?",
        "How to balance your physical, mental, and emotional health in university?",
        "How to deal with peer pressure in university?",
        "How to stay focused on long-term goals while enjoying university life?",
        "How to make the most of your summer breaks during university?",
        "How to deal with burnout from studying and social life?",
        "How to find affordable housing near your university?",
        "How to stay on top of assignments and deadlines?",
        "How to create a budget while living as a student?",
        "How to build a professional online presence during university?",
        "Why being involved in university research can boost your career?",
        "How to deal with difficult roommates or living situations?",
        "How to improve your writing and research skills in university?",
        "How to navigate university exams and finals successfully?",
        "How to stay productive during long winter breaks?",
        "How to maintain a healthy diet while living on a student budget?",
        "How to make the most of university networking events?",
        "How to stay mentally healthy during stressful times in university?",
        "How to balance academics and social life in your second year?",
        "How to set and achieve personal goals during university?",
        "How to find a part-time job related to your field of study?",
        "How to get the most out of online university courses?",
        "How to stay connected with home while studying abroad?",
        "How to create a balanced study schedule that works for you?",
        "How to develop leadership skills during university?",
        "How to make the most of your university's career services?",
        "How to prepare for graduate school while in university?",
        "How to balance work and study life as a student?",
        "How to stay motivated during a tough semester?",
        "How to find your university’s hidden gems and resources?",
        "How to stay organized when juggling multiple projects?",
        "How to get the best out of university group projects?",
        "How to make the most of your university’s alumni network?",
        "How to deal with imposter syndrome as a university student?",
        "How to make lasting friendships during university?",
        "How to survive and thrive in your final year at university?",
        "How to stay focused on your goals while facing distractions?",
        "How to navigate university politics and social dynamics?",
        "How to set yourself up for success during your first year?",
        "How to handle peer competition in academic environments?",
        "How to deal with university-induced anxiety?",
        "How to develop a strong work ethic during university?",
        "How to make time for hobbies and personal growth in university?",
        "How to deal with the pressure of post-graduation plans?"

    ];

    const [currentIdeas, setCurrentIdeas] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const generateRandomIdeas = () => {
        let randomIdeas = [];
        while (randomIdeas.length < 4) {
            const randomIndex = Math.floor(Math.random() * ideas.length);
            if (!randomIdeas.includes(ideas[randomIndex])) {
                randomIdeas.push(ideas[randomIndex]);
            }
        }
        setCurrentIdeas(randomIdeas.join("\n"));
        setIsTyping(true);
    };

    useEffect(() => {
        // Automatically trigger generateRandomIdeas when the component mounts
        generateRandomIdeas();
    }, []); // Empty dependency array to run only once on mount

    useEffect(() => {
        if (isTyping) {
            let charIndex = 0;
            const typingText = currentIdeas;
            const typingInterval = setInterval(() => {
                if (charIndex < typingText.length) {
                    setCurrentIdeas((prev) => typingText.slice(0, charIndex + 1));
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                }
            }, 50);
        }
    }, [currentIdeas, isTyping]);

    return (
        <div className="min-h-72 flex flex-col justify-between">
            <div className="text-center mt-6">
                <h2 className="text-3xl text-primary mb-4">What about this questions?</h2>
                <div className="dark:text-white">
                    {currentIdeas.split("\n").map((idea, index) => (
                        <div key={index} className="text-lg mb-2">
                            {idea}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ideas;
