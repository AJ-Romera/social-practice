import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import searchIcon from "../Images/search.png";
import notifications from "../Images/bell.png";
import message from "../Images/message.png";
import profile from "../Images/profile.webp";

const Navbar = () => {
  return (
    <div className="mainNavbar">
      <Link to={"/"}>
        <div className="logo-container">
          <p>Social</p>
        </div>
      </Link>
      <div className="search-input-container">
        <img
          src={searchIcon}
          alt="Pink search icon (magnifying glass)"
          className="search-icon"
        />
        <input
          type="text"
          className="search-input"
          placeholder="Search your friends"
        />
      </div>
      <div className="icons-container">
        <img
          src={notifications}
          alt="Notifications bell icon"
          className="notifications-icon"
        />
        <img src={message} alt="Messages icon" className="messages-icon" />
        <Link to={"/profile/8726345876234g"}>
          <div className="profile-info">
            <img
              src={profile}
              alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
              className="profile-image"
            />
            <p className="username">Arkmy</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
