import React from "react";
import "./rightbar.css";
import ads from "../Images/ads.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import addFriend from "../Images/add-user.png";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar__container">
        <div className="ads__container">
          <img
            src={ads}
            alt="Advertising placeholder text (Your advertisement here) with green background"
            className="ads__img"
          />
          <div>
            <p className="ads__title">Advertising</p>
            <p className="ads__description">Your advertising here</p>
          </div>
        </div>
        <div className="ads__container">
          <img
            src={image2}
            alt="Advertising placeholder text (Your advertisement here) with green background"
            className="ads__img"
          />
          <div>
            <p className="ads__title">Advertising</p>
            <p className="ads__description">Your advertising here</p>
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

export default Rightbar;
