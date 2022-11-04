import React from "react";
import "./profileMainpost.css";
import ContentPost from "../ContentPostContainer/ContentPost";
import Post from "../PostContainer/Post";
import coverImage from "../Images/profile.webp";

const ProfileMainPost = () => {
  return (
    <div className="profile-main-post__container">
      <div className="profile-main-post__cover">
        <img
          src={coverImage}
          alt=""
          className="profile-main-post__cover-image"
        />
        <h2 className="profile-main-post__title">Your Profile</h2>
      </div>
      <ContentPost />
      <Post />
      <Post />
    </div>
  );
};

export default ProfileMainPost;
