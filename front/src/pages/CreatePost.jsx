import React, {useState} from "react";
import {createPost} from "../api.jsx";
import Ideas from "../components/Ideas.jsx";

const CreatePost = ({username}) => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost(username, {content});
            setContent("");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-center text-3xl text-primary mb-4">Write whatever you want, we’re not peeking )))</p>
                <div className="mt-6 flex justify-center">
                    <img
                        src="https://media1.tenor.com/m/jiZsxfHbkGEAAAAd/simp-simpsons-wave.gif"
                        alt="Animated GIF"
                        className="w-48 h-auto"
                    />
                </div>
                <textarea
                    className="rounded-lg border-2 border-black dark:border-white w-full h-24 p-4 text-lg placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button
                    className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full mx-auto md:mx-0 hover:scale-105 transition-all duration-300 focus:outline-none"
                    type="submit"
                >
                    Post
                </button>
            </form>
            <Ideas/>
        </div>
    );
};

export default CreatePost;
