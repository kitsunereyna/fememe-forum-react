import React, { useState } from "react";
import { createPost } from "../../api/post";
import Layout from "../../components/Layout/Layout";
import { CreatePostDto } from "../../dto/post";
import { TAGS } from "../../mock/tags";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
import { useUserStore } from "../../store/userStore";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selectedTagID, setSelectedTagID] = useState("");
  const user = useUserStore(state => state.user);

  const navigate = useNavigate();

  const renderedTags = TAGS.map(tag => {
    const isSelected = selectedTagID === tag.id;
    const className = isSelected ? "tag active-tag" : "tag";

    return (
      <button
        onClick={() => setSelectedTagID(tag.id)}
        key={tag.id}
        className={className}
      >
        {tag.name}
      </button>
    );
  });

  const onPublishClick = async () => {
    const values = [title, text, selectedTagID];
    const isValid = values.every(
      value => value !== undefined && value !== null && value !== ""
    );

    if (!isValid) {
      return;
    }
    const tag = TAGS.find(tag => tag.id === selectedTagID);

    if (user === null) {
      return;
    }
    const newPost: CreatePostDto = {
      avatar: user.avatar,
      username: user.username,
      title: title,
      text: text,
      tags: [tag!.name],
    };

    const res = await createPost(newPost);

    if (res.status !== 200) {
      alert(res.data?.message || "Error!");
      return;
    }

    navigate("/");
  };

  return (
    <Layout title="Create Post">
      <div className="flex justify-center items-center h-full">
        <div className="panel">
          <p className="post-create">Create a post</p>

          <div className="post-input">
            <div>
              <p className="subtitle">
                What are your <span className="text-[#FF5964]">thoughts</span>{" "}
                right now?
              </p>
              <input
                value={title}
                onChange={event => setTitle(event.target.value)}
                type="text"
                placeholder="Title"
                name="postTitle"
                required
              />
            </div>
            <div>
              <p className="subtitle">
                Spill the tea, we need{" "}
                <span className="text-[#FF5964]">details</span>!
              </p>
              <textarea
                className="textarea"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Write here"
                name="postText"
                required
              />
            </div>
            <div>
              <p className="subtitle">
                Choose a <span className="text-[#FF5964]">tag</span> for your
                topic:
              </p>
              <div className="tags">{renderedTags}</div>
            </div>
          </div>

          <button onClick={onPublishClick} className="publish">
            Publish
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
