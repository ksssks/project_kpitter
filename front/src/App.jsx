import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./pages/AuthForm.jsx";
import PostList from "./pages/PostList.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import setAuthHeader from "./api.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AllUsers from "./pages/AllUsers.jsx";
import About from "./pages/About.jsx";
import UserPosts from "./pages/UserPosts.jsx";
import Home from "./pages/Home.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import UserCard from "./pages/UserCard.jsx";

const App = () => {
    const [auth, setAuth] = useState(null);

    if (auth?.username && auth?.password) {
        setAuthHeader(auth.username, auth.password);
    }

    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] dark:bg-black'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/allusers" element={<AllUsers />} />
                    <Route
                        path="/auth"
                        element={auth ? <PostList username={auth.username} /> : <AuthForm setAuth={setAuth} />}
                    />
                    <Route
                        path="/create"
                        element={auth ? <CreatePost username={auth.username} /> : <AuthForm setAuth={setAuth} />}
                    />
                    <Route path="/user/:username" element={<PostList />} />
                    <Route path="/users/:username/posts" element={<UserPosts />} />
                    <Route path="/users/:username/posts/:postId" element={<PostDetails />} />
                    <Route path="/users/:username" element={<UserCard />} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;
