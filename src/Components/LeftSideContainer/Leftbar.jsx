import React from "react";
import "./leftbar.css";
import profileImage from "../Images/profile.webp";
import Image1 from "../Images/image1.jpg";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image3.jpg";
import Image4 from "../Images/image4.jpg";
import Image5 from "../Images/image5.jpg";
import Image6 from "../Images/image6.jpg";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="notifications__container">
        <div className="notifications__header">
          <p>Notifications</p>
          <p className="see-all">See all</p>
        </div>
        <div className="notifications__content">
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__profile-image"
          />
          <p>Francis liked your post</p>
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__like-image"
          />
        </div>
        <div className="notifications__content">
          <img
            src={Image1}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__profile-image"
          />
          <p>Francis started following you</p>
          <img
            src={Image6}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__follow-image"
          />
        </div>
        <div className="notifications__content">
          <img
            src={Image2}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__profile-image"
          />
          <p>Francis liked your post</p>
          <img
            src={Image5}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__like-image"
          />
        </div>
        <div className="notifications__content">
          <img
            src={Image3}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__profile-image"
          />
          <p>Francis liked your post</p>
          <img
            src={Image4}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__like-image"
          />
        </div>
        <div className="notifications__content">
          <img
            src={Image4}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__profile-image"
          />
          <p>Francis liked your post</p>
          <img
            src={Image3}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__like-image"
          />
        </div>
        <div className="notifications__content">
          <img
            src={Image5}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__profile-image"
          />
          <p>Francis liked your post</p>
          <img
            src={Image2}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__like-image"
          />
        </div>
        <div className="notifications__content">
          <img
            src={Image6}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__profile-image"
          />
          <p>Francis liked your post</p>
          <img
            src={Image1}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__like-image"
          />
        </div>
        <div className="notifications__content">
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__profile-image"
          />
          <p>Francis liked your post</p>
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__like-image"
          />
        </div>
        <div className="notifications__content">
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__profile-image"
          />
          <p>Francis liked your post</p>
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__like-image"
          />
        </div>
        <div className="notifications__content">
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__profile-image"
          />
          <p>Francis liked your post</p>
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__like-image"
          />
        </div>
        <div className="notifications__content">
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__profile-image"
          />
          <p>Francis liked your post</p>
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__like-image"
          />
        </div>
      </div>

      {/* Explore */}

      <div className="notifications__container">
        <div className="notifications__header">
          <p>Explore</p>
          <p className="see-all">See all</p>
        </div>
        <div>
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
          <img
            src={Image1}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
          <img
            src={Image2}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
          <img
            src={Image3}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
          <img
            src={Image4}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
          <img
            src={Image5}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
          <img
            src={Image6}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
          <img
            src={profileImage}
            alt="Profile astronaut logo in space with three purple planets, one of them in his or her hands"
            className="notifications__explore-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
