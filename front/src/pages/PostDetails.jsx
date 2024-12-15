import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API, likePost, unlikePost } from "../api.jsx";
import { assets } from "../assets/assets.js";

const PostDetails = () => {
    const { postId, username } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await API.get(`/users/${username}/posts/${postId}`);
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };
        fetchPost();
    }, [postId, username]);

    const handleLike = async (e) => {
        e.stopPropagation();
        try {
            if (post.is_liked) {
                await unlikePost(username, post.id);
            } else {
                await likePost(username, post.id);
            }

            setPost((prevPost) => ({
                ...prevPost,
                is_liked: !prevPost.is_liked,
                likes: prevPost.is_liked ? prevPost.likes - 1 : prevPost.likes + 1,
            }));
        } catch (error) {
            console.error("Fail to like:", error);
        }
    };

    if (!post) {
        return <p>Loading post...</p>;
    }

    return (
        <div className="dark:text-white">
            <h1 className="text-2xl text-center mb-6 dark:text-white">
                Post Details by {username}
            </h1>
            <div
                className="border-2 border-primary rounded-lg p-4 mb-4 flex justify-between items-center"
                onClick={() => navigate(-1)} // Для клика на всю карточку, чтобы вернуться.
            >
                <div className="flex-1">
                    <p className="text-lg">{post.content}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="text-sm">Likes: {post.likes}</p>
                    <img
                        onClick={handleLike}
                        src={post.is_liked ? assets.like : assets.unlike}
                        className="w-7 cursor-pointer hover:scale-125 transition-all duration-300 focus:outline-none"
                        alt={post.is_liked ? "Unlike" : "Like"}
                    />
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-primary text-white px-4 py-2 rounded hover:scale-105 transition-all duration-300 focus:outline-none"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default PostDetails;
