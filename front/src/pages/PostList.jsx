import React, { useEffect, useState } from "react";
import { getPosts, likePost, unlikePost, getUser } from "../api.jsx";
import { assets } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

const PostList = ({ username }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [fullName, setFullName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const { data } = await getUser(username);
                setFullName(data.full_name || username);
            } catch (error) {
                console.error("Fail to download user information", error);
                setFullName(username);
            }
        };

        fetchUserDetails();
    }, [username]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await getPosts(username, page);
                setPosts(data);
            } catch (error) {
                console.error("Fail to download the posts", error);
            }
        };

        fetchPosts();
    }, [username, page]);

    const handlePostClick = (postId) => {
        navigate(`/users/${username}/posts/${postId}`);
    };

    const handleLike = async (post, e) => {
        e.stopPropagation();
        try {
            if (post.is_liked) {
                await unlikePost(username, post.id);
            } else {
                await likePost(username, post.id);
            }

            setPosts((prevPosts) =>
                prevPosts.map((p) =>
                    p.id === post.id
                        ? {
                            ...p,
                            is_liked: !p.is_liked,
                            likes: p.is_liked ? p.likes - 1 : p.likes + 1,
                        }
                        : p
                )
            );
        } catch (error) {
            console.error("Fail to like:", error);
        }
    };

    return (
        <div className="dark:text-white">
            <h1 className="text-2xl text-center mb-6 dark:text-white">
                Posts by {fullName}
            </h1>
            <p className="text-lg text-center mb-6 dark:text-white">Nickname: {username}</p>
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="border-2 border-primary rounded-lg p-4 mb-4 flex justify-between items-center"
                    onClick={() => handlePostClick(post.id)}
                >
                    <div className="flex-1">
                        <p className="text-lg cursor-pointer">{post.content}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="text-sm">Likes: {post.likes}</p>
                        <img
                            onClick={(e) => handleLike(post, e)}
                            src={post.is_liked ? assets.like : assets.unlike}
                            className="w-7 cursor-pointer hover:scale-125 transition-all duration-300 focus:outline-none"
                            alt={post.is_liked ? "Unlike" : "Like"}
                        />
                    </div>
                </div>
            ))}
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="bg-primary text-white px-4 py-2 rounded disabled:opacity-50 hover:scale-105 transition-all duration-300 focus:outline-none"
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage(page + 1)}
                    className="bg-primary text-white px-4 py-2 rounded hover:scale-105 transition-all duration-300 focus:outline-none"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PostList;
