import React, { useState } from "react";
import CommentIcon from "../Icons/CommentIcon";
import HeartIcon from "../Icons/HeartIcon";
import ShareIcon from "../Icons/ShareIcon";
import { Link } from "react-router-dom";
import { Post } from "../../types/post";
import { formatDate } from "../../helpers/dateFormat";
import ClickedHeartIcon from "../Icons/ClickedHeartIcon";

interface PostProps {
  post: Post;
}

const PostItem = ({ post }: PostProps) => {
  const url = `/post/${post.id}`;
  const [isLiked, setIsLiked] = useState(false);

  const onLikeClick = async () => {
    setIsLiked(!isLiked);
  };

  const onRepostClick = () => {
    const fullUrl = "https://fememe-forum-react.vercel.app" + url;
    navigator.clipboard.writeText(fullUrl);
    alert("Copied to clipboad!");
  };

  return (
    <div className="post">
      <div className="user-info">
        <img src={post.avatar} alt="Avatar" className="avatar" />
        <p className="username">{post.username}</p>
        <p className="posting-date">
          posted {formatDate(post.date || Date.now(), "DD-MM-YYYY")}
        </p>
      </div>
      <div className="post-content">
        <p className="post-title">{post.title}</p>
        <p className="post-text">{post.text}</p>
        <p className="post-tags font-semibold text-[#78B5F6]">#{post.tags}</p>
      </div>

      <div className="buttons">
        <button onClick={onLikeClick}>
          {isLiked ? <ClickedHeartIcon /> : <HeartIcon />}
        </button>
        <button>
          <Link to={url}>
            <CommentIcon />
          </Link>
        </button>
        <button onClick={onRepostClick}>
          <ShareIcon />
        </button>
      </div>
    </div>
  );
};

export default PostItem;
