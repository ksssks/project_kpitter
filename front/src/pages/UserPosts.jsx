import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPosts, likePost, unlikePost, getUser } from "../api.jsx";
import { assets } from "../assets/assets.js";

const UserPosts = () => {
    const { username } = useParams();
    const [fullName, setFullName] = useState("");
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const { data } = await getUser(username);
                setFullName(data.full_name || username);
            } catch (err) {
                console.error("Error fetching user details:", err);
                setFullName(username);
            }
        };

        fetchUserDetails();
    }, [username]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await getPosts(username, page);
                setPosts(response.data);
                setHasMore(response.data.length > 0);
            } catch (err) {
                setError("Failed to load the posts. Try logging into your account.");
            } finally {
                setLoading(false);
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
            setPosts(
                posts.map((p) =>
                    p.id === post.id
                        ? { ...p, is_liked: !p.is_liked, likes: p.is_liked ? p.likes - 1 : p.likes + 1 }
                        : p
                )
            );
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl text-center mb-6 dark:text-white">
                Posts by {fullName}
            </h1>
            <p className="text-lg text-center mb-6 dark:text-white">Nickname: {username}</p>
            {loading && <p className="text-center text-gray-600">Downloading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            <div className="grid grid-cols-1 gap-6">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="border-2 border-primary rounded-lg p-4 mb-4 flex justify-between items-center cursor-pointer"
                        onClick={() => handlePostClick(post.id)}
                    >
                        <div className="flex-1">
                            <p className="text-lg dark:text-white">{post.content}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <p className="text-sm dark:text-white">Likes: {post.likes}</p>
                            <img
                                onClick={(e) => handleLike(post, e)}
                                src={post.is_liked ? assets.like : assets.unlike}
                                className="w-7 cursor-pointer hover:scale-125 transition-all duration-300 focus:outline-none"
                                alt={post.is_liked ? "Unlike" : "Like"}
                            />
                        </div>
                    </div>
                ))}
            </div>
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
                    disabled={!hasMore}
                    className="bg-primary text-white px-4 py-2 rounded disabled:opacity-50 hover:scale-105 transition-all duration-300 focus:outline-none"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UserPosts;
