import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Leftbar from "../../Components/LeftSideContainer/Leftbar";
import MainPost from "../../Components/MainPostContainer/MainPost";
import Rightbar from "../../Components/RightSideContainer/Rightbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="components-container">
        <Leftbar />
        <MainPost />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
