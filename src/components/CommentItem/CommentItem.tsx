import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteByCommentId } from "../../api/comment";
import { formatDate } from "../../helpers/dateFormat";
import { useUserStore } from "../../store/userStore";
import { Comment } from "../../types/comment";
import DeleteIcon from "../Icons/DeleteIcon";

interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const user = useUserStore(state => state.user);
  const nv = useNavigate();

  const onDeleteClick = async () => {
    const res = await deleteByCommentId(comment.id);
    if (res.status !== 200) {
      window.alert("Could not delete comment");
      return;
    }

    nv(0);
  };

  const renderedDeleteButton =
    user?.username === comment.username ? (
      <button onClick={onDeleteClick}>
        <DeleteIcon />
      </button>
    ) : (
      <></>
    );

  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="comment-author">
          <img src={comment.avatar} alt="Avatar" className="avatar" />
          <p className="username">{comment.username}</p>
          <p className="posting-date">
            {formatDate(comment.date, "DD-MM-YY hh:mm")}
          </p>
        </div>
        <p className="comment-text">{comment.text}</p>
      </div>

      <div>{renderedDeleteButton}</div>
    </div>
  );
};

export default CommentItem;
