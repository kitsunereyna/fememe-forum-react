import React from "react";

const CommentItem = () => {
  return (
    <div className="user-comment">
      <div className="comment-author">
        <img src="avatar2.jpg" alt="Avatar" className="avatar" />
        <p className="username">honeymints</p>
        <p className="posting-date">00:00</p>
      </div>
      <p className="comment-text">Girl saaameee!!! T_T</p>
    </div>
  );
};

export default CommentItem;
