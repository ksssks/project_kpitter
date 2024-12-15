import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, getPosts } from "../api.jsx";

const UserCard = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [totalLikes, setTotalLikes] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            setError(null);

            try {
                const userResponse = await getUser(username);
                setUser(userResponse.data);

                const postsResponse = await getPosts(username);
                const likesSum = postsResponse.data.reduce((sum, post) => sum + post.likes, 0);
                setTotalLikes(likesSum);
            } catch (err) {
                setError("Failed to fetch user details.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [username]);

    const handleViewPosts = () => {
        navigate(`/users/${username}/posts`);
    };

    if (loading) {
        return <p className="text-center text-gray-600">Loading user details...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (!user) {
        return <p className="text-center text-gray-600">User not found.</p>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
            <div className="relative flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden">
                {/* Left side - User Details */}
                <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-500 p-8 flex flex-col items-center justify-center text-white">
                    <div className="relative mb-6">
                        <img
                            src={`https://picsum.photos/seed/${user.username}/200`}
                            alt={`${user.username} profile`}
                            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-md transition-transform duration-300 transform hover:scale-105"
                        />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
                        {user.full_name}
                    </h1>
                    <p className="text-sm sm:text-lg font-light italic mt-1">@{user.username}</p>
                    <button
                        onClick={handleViewPosts}
                        className="mt-6 px-8 py-3 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-300"
                    >
                        View Posts
                    </button>
                </div>

                {/* Right side - Statistics */}
                <div className="md:w-1/2 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                    <div className="flex flex-col items-center mb-6">
                        <div className="relative w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-4xl sm:text-5xl font-extrabold">
                                {user.posts}
                            </span>
                        </div>
                        <p className="mt-3 text-lg font-medium">Total Posts</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="relative w-32 h-32 bg-pink-500 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-4xl sm:text-5xl font-extrabold">
                                {totalLikes}
                            </span>
                        </div>
                        <p className="mt-3 text-lg font-medium">Total Likes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
