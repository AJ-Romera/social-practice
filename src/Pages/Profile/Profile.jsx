import React from "react";
import "./profile.css";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileLeftbar from "../../Components/ProfileLeftSideContainer/ProfileLeftbar";
import ProfileRightbar from "../../Components/ProfileRightSideContainer/ProfileRightbar";
import ProfileMainPost from "../../Components/ProfileMainPostContainer/ProfileMainPost";

const Profile = () => {
  return (
    <div className="profile__container">
      <Navbar />
      <div className="sub-profile__container">
        <ProfileLeftbar />
        <ProfileMainPost />
        <ProfileRightbar />
      </div>
    </div>
  );
};

export default Profile;
