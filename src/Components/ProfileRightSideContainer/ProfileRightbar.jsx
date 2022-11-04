import React from "react";
import "./profileRightbar.css";
import ads from "../Images/ads.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import addFriend from "../Images/add-user.png";

const ProfileRightbar = () => {
  return (
    <div className="profile-rightbar">
      <div className="profile-rightbar__container">
        <h3>Friend Request</h3>
        <div>
          <div>
            <div className="req-friend">
              <img src={image1} alt="" className="req-friend__img" />
              <p className="req-friend__text">Lorain wants to be your friend</p>
            </div>
            <div className="accept-or-deny__buttons">
              <button className="accept-btn">Accept</button>
              <button className="deny-btn">Deny</button>
            </div>
          </div>
          <div>
            <div className="req-friend">
              <img src={image3} alt="" className="req-friend__img" />
              <p className="req-friend__text">
                Bababoss wants to be your friend
              </p>
            </div>
            <div className="accept-or-deny__buttons">
              <button className="accept-btn">Accept</button>
              <button className="deny-btn">Deny</button>
            </div>
          </div>
          <div>
            <div className="req-friend">
              <img src={image4} alt="" className="req-friend__img" />
              <p className="req-friend__text">
                MR.Patatita wants to be your friend
              </p>
            </div>
            <div className="accept-or-deny__buttons">
              <button className="accept-btn">Accept</button>
              <button className="deny-btn">Deny</button>
            </div>
          </div>
          <div>
            <div className="req-friend">
              <img src={image2} alt="" className="req-friend__img" />
              <p className="req-friend__text">
                MarcosDK wants to be your friend
              </p>
            </div>
            <div className="accept-or-deny__buttons">
              <button className="accept-btn">Accept</button>
              <button className="deny-btn">Deny</button>
            </div>
          </div>
          <div>
            <div className="req-friend">
              <img src={image6} alt="" className="req-friend__img" />
              <p className="req-friend__text">Luck wants to be your friend</p>
            </div>
            <div className="accept-or-deny__buttons">
              <button className="accept-btn">Accept</button>
              <button className="deny-btn">Deny</button>
            </div>
          </div>
        </div>
      </div>

      <div className="rightbar__container2">
        <h3>Suggested for you</h3>
        <div className="suggestion-container">
          <div className="suggested-friend">
            <div className="suggested-friend__user">
              <img src={image6} alt="" className="profile__image" />
              <div>
                <p className="username">Antonio</p>
                <p className="suggestion">Suggested for you</p>
              </div>
            </div>
            <div className="add-friend__container">
              <img src={addFriend} alt="" className="add-friend__icon" />
            </div>
          </div>
        </div>
        <div className="suggestion-container">
          <div className="suggested-friend">
            <div className="suggested-friend__user">
              <img src={image4} alt="" className="profile__image" />
              <div>
                <p className="username">Mr.Patatita</p>
                <p className="suggestion">Followed by Fernando</p>
              </div>
            </div>
            <div className="add-friend__container">
              <img src={addFriend} alt="" className="add-friend__icon" />
            </div>
          </div>
        </div>
        <div className="suggestion-container">
          <div className="suggested-friend">
            <div className="suggested-friend__user">
              <img src={image5} alt="" className="profile__image" />
              <div>
                <p className="username">Antonio</p>
                <p className="suggestion">Suggested for you</p>
              </div>
            </div>
            <div className="add-friend__container">
              <img src={addFriend} alt="" className="add-friend__icon" />
            </div>
          </div>
        </div>
        <div className="suggestion-container">
          <div className="suggested-friend">
            <div className="suggested-friend__user">
              <img src={image3} alt="" className="profile__image" />
              <div>
                <p className="username">Mr.Patatita</p>
                <p className="suggestion">Followed by Fernando</p>
              </div>
            </div>
            <div className="add-friend__container">
              <img src={addFriend} alt="" className="add-friend__icon" />
            </div>
          </div>
        </div>
        <div className="suggestion-container">
          <div className="suggested-friend">
            <div className="suggested-friend__user">
              <img src={image2} alt="" className="profile__image" />
              <div>
                <p className="username">Antonio</p>
                <p className="suggestion">Suggested for you</p>
              </div>
            </div>
            <div className="add-friend__container">
              <img src={addFriend} alt="" className="add-friend__icon" />
            </div>
          </div>
        </div>
        <div className="suggestion-container">
          <div className="suggested-friend">
            <div className="suggested-friend__user">
              <img src={image1} alt="" className="profile__image" />
              <div>
                <p className="username">Mr.Patatita</p>
                <p className="suggestion">Followed by Fernando</p>
              </div>
            </div>
            <div className="add-friend__container">
              <img src={addFriend} alt="" className="add-friend__icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightbar;
