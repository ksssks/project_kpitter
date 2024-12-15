import React from 'react'
import Header from "../components/Header.jsx";
import About from "./About.jsx";
import BestPosts from "../components/BestPosts.jsx";
import VideoSection from "../components/VideoSection.jsx";

const Home = () => {
    return (
        <div>
            <Header/>
            <BestPosts/>
            <VideoSection/>
        </div>
    )
}
export default Home
