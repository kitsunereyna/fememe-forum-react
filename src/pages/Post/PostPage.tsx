import React from "react";
import CommentItem from "../../components/CommentItem/CommentItem";
import HeartIcon from "../../components/Icons/HeartIcon";
import ShareIcon from "../../components/Icons/ShareIcon";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import "./PostPage.css";
import { useQuery } from "react-query";
import { getPostById } from "../../api/post";
import { Post } from "../../types/post";
import { formatDate } from "../../helpers/dateFormat";
import { CreateCommentDto } from "../../dto/comment";
import { useUserStore } from "../../store/userStore";
import { createComment, getCommentsByPostId } from "../../api/comment";
import { Comment } from "../../types/comment";

const PostPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { data } = useQuery(`post-${id}`, () => getPostById(id!), {
    enabled: id !== undefined,
  });
  const { data: commentsRes } = useQuery(
    `post-comments-${id}`,
    () => getCommentsByPostId(id!),
    {
      enabled: id !== undefined,
    }
  );
  const user = useUserStore(state => state.user);
  const [text, setText] = React.useState("");
  const post = data?.data as Post | undefined;
  const url = `/post/${id}`;

  const renderedComments = commentsRes?.data?.map((c: Comment) => (
    <CommentItem comment={c} key={c.id} />
  ));

  const onRepostClick = () => {
    const fullUrl = "https://fememe-forum-react.vercel.app" + url;
    navigator.clipboard.writeText(fullUrl);
    alert("Copied to clipboad!");
  };

  const onCommentSendClick = async () => {
    if (text === null || text === "" || user === null || post === undefined) {
      return;
    }

    const dto: CreateCommentDto = {
      username: user.username,
      avatar: user.avatar,
      text: text,
    };

    const res = await createComment(dto, post.id);

    if (res.status !== 200) {
      window.alert(res.data?.message);
      return;
    }

    nav(0);
  };
  return (
    <Layout title={post?.title || "Post"}>
      <div className="post">
        <div className="user-info">
          <img src={post?.avatar} alt="Avatar" className="avatar" />
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
          <div className="flex items-center gap-x-3">
            <input
              value={text}
              onChange={e => setText(e.target.value)}
              type="text"
              placeholder="Leave a comment"
              name="comment"
              required
            />

            <button
              onClick={onCommentSendClick}
              className="px-7 py-3 border-2 rounded-[37px] border-black border-solid hover:bg-[#FF5964] hover:text-white"
            >
              Send
            </button>
          </div>

          <div className="flex flex-col gap-2">{renderedComments}</div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
