import React from "react";
import "./mainpost.css";
import ContentPost from "../ContentPostContainer/ContentPost";
import Post from "../PostContainer/Post";

const MainPost = () => {
  return (
    <div className="main-post__container">
      <ContentPost />
      <Post />
      <Post />
    </div>
  );
};

export default MainPost;
