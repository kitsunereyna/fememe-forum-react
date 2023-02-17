import React from "react";
import CommentItem from "../../components/CommentItem/CommentItem";
import HeartIcon from "../../components/Icons/HeartIcon";
import ShareIcon from "../../components/Icons/ShareIcon";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import "./PostPage.css";
import { useQuery } from "react-query";
import { getPostById } from "../../api/post";
import { Post } from "../../types/post";
import { formatDate } from "../../helpers/dateFormat";

const PostPage = () => {
  const { id } = useParams();
  const { data } = useQuery(`post-${id}`, () => getPostById(id!), {
    enabled: id !== undefined,
  });
  const post = data?.data as Post | undefined;

  const url = `/post/${id}`;

  const onRepostClick = () => {
    const fullUrl = "http://localhost:3000" + url;
    navigator.clipboard.writeText(fullUrl);
    alert("Copied to clipboad!");
  };
  return (
    <Layout>
      <div className="post">
        <div className="user-info">
          <img src="avatar.jpg" alt="Avatar" className="avatar" />
          <p className="username">{post?.username}</p>
          <p className="posting-date">
            posted {formatDate(post?.date || new Date(), "DD-MM-YYYY")}
          </p>
        </div>

        <div className="post-content">
          <p className="post-title">{post?.title}</p>
          <p className="post-text">{post?.text}</p>
        </div>

        <div className="buttons">
          <button>
            <HeartIcon />
          </button>
          <button onClick={onRepostClick}>
            <ShareIcon />
          </button>
        </div>

        <div className="comment-section">
          <input
            type="text"
            placeholder="Leave a comment"
            name="comment"
            required
          />

          <div className="flex flex-col gap-2">
            <CommentItem />
            <CommentItem />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
