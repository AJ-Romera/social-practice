import React from "react";
import "./profileLeftbar.css";
import profileImage from "../Images/profile.webp";
import Image1 from "../Images/image1.jpg";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image3.jpg";
import Image4 from "../Images/image4.jpg";
import Image5 from "../Images/image5.jpg";
import Image6 from "../Images/image6.jpg";

const ProfileLeftbar = () => {
  return (
    <div className="profile-leftbar">
      <div className="profile__container1">
        <img src={profileImage} alt="" className="profile-page-cover" />
        <div className="profile__user">
          <img src={profileImage} alt="" className="profile-page-image" />
          <div>
            <p className="profile-username">Arkmy</p>
            <p className="profile-user-bio">Software Developer</p>
          </div>
        </div>
        <div className="profile-views">
          <p className="profile-views__text">Profile Views</p>
          <p className="profile-views__views-number">53453</p>
        </div>
        <hr className="hr" />
        <div className="profile-friends">
          <p className="profile-friends__text">Friends</p>
          <p className="profile-friends__friends-number">260</p>
        </div>
        <hr className="hr" />
        <div className="profile-bio">
          <h5 className="profile-bio__title">User Bio</h5>
          <p className="profile-bio__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            magni atque. Quibusdam earum laboriosam voluptates ad. Atque neque
            quis, assumenda minima laboriosam blanditiis aspernatur unde
            distinctio? Amet modi laudantium eius. Bio
          </p>
        </div>
        <button className="edit-bio__button">Edit Bio</button>
      </div>

      <div className="profile__container2">
        <h3>Your friends</h3>
        <div className="profile-friends__header">
          <p className="profile-friends__friends-title">Friends</p>
          <p className="profile-friends__see-all">See all</p>
        </div>
        <div className="profile-friends__friends">
          <div className="profile-friends__friend">
            <img
              src={Image6}
              alt=""
              className="profile-friends__friend-image"
            />
            <p className="profile-friends__friend-username">Vik Kyteler</p>
          </div>
          <div className="profile-friends__friend">
            <img
              src={Image1}
              alt=""
              className="profile-friends__friend-image"
            />
            <p className="profile-friends__friend-username">Vik Kyteler</p>
          </div>
          <div className="profile-friends__friend">
            <img
              src={Image4}
              alt=""
              className="profile-friends__friend-image"
            />
            <p className="profile-friends__friend-username">Vik Kyteler</p>
          </div>
          <div className="profile-friends__friend">
            <img
              src={Image5}
              alt=""
              className="profile-friends__friend-image"
            />
            <p className="profile-friends__friend-username">Vik Kyteler</p>
          </div>
          <div className="profile-friends__friend">
            <img
              src={Image3}
              alt=""
              className="profile-friends__friend-image"
            />
            <p className="profile-friends__friend-username">Vik Kyteler</p>
          </div>
          <div className="profile-friends__friend">
            <img
              src={Image6}
              alt=""
              className="profile-friends__friend-image"
            />
            <p className="profile-friends__friend-username">Vik Kyteler</p>
          </div>
          <div className="profile-friends__friend">
            <img
              src={Image2}
              alt=""
              className="profile-friends__friend-image"
            />
            <p className="profile-friends__friend-username">Vik Kyteler</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeftbar;
