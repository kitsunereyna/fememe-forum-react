import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../../api/post";
import { formatDate } from "../../helpers/dateFormat";
import { Post } from "../../types/post";
import DeleteIcon from "../Icons/DeleteIcon";
import UpdateIcon from "../Icons/UpdateIcon";

interface PostProps {
  post: Post;
}
const UserPostItem = ({ post }: PostProps) => {
  const navigate = useNavigate();
  const onDeleteClick = async () => {
    const res = await deletePost(post.id);

    if (res.status !== 200) {
      alert(res.data?.message);
      return;
    }

    navigate("/");
  };

  return (
    <div className="flex flex-col gap-4 p-6 border-2 border-solid border-[#78B5F6] rounded-lg">
      <div className="flex justify-between items-center">
        <p>posted {formatDate(post.date || Date.now(), "DD-MM-YYYY")}</p>

        <div className="flex gap-4 items-center">
          <button onClick={onDeleteClick}>
            <DeleteIcon />
          </button>

          <Link to={`/post/update/${post.id}`}>
            <UpdateIcon />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl">{post.title}</p>
        <p>{post.text}</p>
      </div>
    </div>
  );
};

export default UserPostItem;
