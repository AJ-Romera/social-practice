import React, { useRef, useState } from "react";
import "./post.css";
import profileImage from "../Images/profile.webp";
import likeIcon from "../Images/like.png";
import likedIcon from "../Images/setLike.png";
import commentIcon from "../Images/speech-bubble.png";
import shareIcon from "../Images/share.png";
import moreIcon from "../Images/more.png";

const Post = () => {
  const [Like, setLike] = useState(likeIcon);
  const [Count, setCount] = useState(0);
  const [Comments, setComments] = useState([]);
  const [CommentWriting, setCommentWriting] = useState("");
  const [ShowComment, setShowComment] = useState(false);

  const inputEl = useRef(null);

  const handleLike = () => {
    if (Like === likeIcon) {
      setLike(likedIcon);
      setCount(Count + 1);
    } else {
      setLike(likeIcon);
      setCount(Count - 1);
    }
  };

  const addComment = () => {
    const comment = {
      id: "yufgaw873469gf3bnhjbs78",
      username: "Arkmy",
      title: `${CommentWriting}`,
    };
    setComments([...Comments, comment]);
  };

  const handleComment = (e) => {
    e.preventDefault();

    addComment();
    inputEl.current.value = "";
    /* inputEl.current.focus(); */
  };

  const handleShowComment = () => {
    setShowComment(!ShowComment);
  };

  return (
    <div className="post__container">
      <div className="subpost__container">
        <div>
          <div className="user">
            <div className="user-img-and-nick">
              <img src={profileImage} alt="" className="post-image" />
              <div>
                <p className="nickname">Arkmy</p>
                <p className="subnickname">Following by Anira.art</p>
              </div>
            </div>
            <img src={moreIcon} alt="" className="moreIcon" />
          </div>
          <p className="post__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
            inventore nemo architecto autem debitis...
          </p>
          <img src={profileImage} alt="" className="post__image" />
          <div className="post__interaction">
            <div className="likes-and-comments__container">
              <div className="post-likes" onClick={handleLike}>
                <img src={Like} alt="" className="post-icon" />
                <p>{Count} Likes</p>
              </div>
              <div className="post-comments" onClick={handleShowComment}>
                <img src={commentIcon} alt="" className="post-icon" />
                <p>6K Comments</p>
              </div>
            </div>
            <div className="post-share">
              <img src={shareIcon} alt="" className="post-icon" />
              <p>Share</p>
            </div>
          </div>
          {ShowComment && (
            <div>
              <div className="comment">
                <img src={profileImage} alt="" className="post-image" />
                {/* <p className="comment__username">Arkmy</p> */}
                <form onSubmit={handleComment}>
                  <input
                    type="text"
                    className="comment-input"
                    placeholder="Add a comment"
                    onChange={(e) => setCommentWriting(e.target.value)}
                    ref={inputEl}
                  />
                  <button
                    type="submit"
                    className="add-comment-btn"
                    onClick={handleComment}
                  >
                    Comment
                  </button>
                </form>
              </div>
              {Comments.map((comment) => (
                <div key={comment.title} className="comment__perse">
                  <img src={profileImage} alt="" className="comment-image" />
                  <p className="comment__username">{comment.username}</p>
                  <div>
                    <p className="comment__content">{comment.title}</p>
                    <p className="comment__reply">Reply</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
