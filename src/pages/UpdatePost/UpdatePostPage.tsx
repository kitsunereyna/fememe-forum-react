import React, { useState } from "react";
import { updatePost } from "../../api/post";
import Layout from "../../components/Layout/Layout";
import { UpdatePostDto } from "../../dto/post";
import { useNavigate, useParams } from "react-router-dom";
import "../CreatePost/CreatePost.css";

const UpdatePostPage = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  const onUpdateClick = async () => {
    const values = [text];
    const isValid = values.every(
      value => value !== undefined && value !== null && value !== ""
    );

    if (!isValid) {
      return;
    }
    const updatedPost: UpdatePostDto = {
      text: text,
    };

    if (id === undefined) {
      return;
    }

    const res = await updatePost(updatedPost, id);

    if (res.status !== 200) {
      alert(res.data?.message || "Error!");
      return;
    }

    navigate("/profile");
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-full">
        <div className="panel w-full">
          <p className="post-update">Update a post</p>

          <div className="flex justify-center w-full flex-col p-10">
            <p className="subtitle">
              <span className="text-[#FF5964]">Change</span> text here
            </p>
            <div className="flex w-full">
              <textarea
                className="w-full textarea"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Text"
                name="postText"
                required
              />
            </div>
          </div>

          <button onClick={onUpdateClick} className="submit">
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default UpdatePostPage;
