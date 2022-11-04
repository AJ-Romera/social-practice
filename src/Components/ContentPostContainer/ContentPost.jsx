import React from "react";
import "./contentpost.css";
import profileImage from "../Images/profile.webp";
import imageIcon from "../Images/gallery.png";
import emojiIcon from "../Images/cat-face.png";
import videoIcon from "../Images/video.png";

const ContentPost = () => {
  return (
    <div>
      <div className="content-upload__container">
        <div className="write-post">
          <img src={profileImage} alt="" className="profile-img" />
          <input
            type="text"
            className="content-writing-part"
            placeholder="What do you want to tell the world?. . ."
          />
        </div>
        <div className="icons">
          <div>
            <img src={imageIcon} alt="" className="upload-post-icon" />
            <img src={emojiIcon} alt="" className="upload-post-icon" />
            <img src={videoIcon} alt="" className="upload-post-icon" />
          </div>
          <button className="post-btn">Post</button>
        </div>
      </div>
    </div>
  );
};

export default ContentPost;
