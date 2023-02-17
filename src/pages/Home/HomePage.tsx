import React from "react";
import { useQuery } from "react-query";
import { getAllPosts } from "../../api/post";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import PostItem from "../../components/Post/Post";
import { Post } from "../../types/post";
import "./HomePage.css";

const HomePage = () => {
  const { data } = useQuery("posts", getAllPosts);

  const renderedPosts = data?.data.map((post: Post) => (
    <PostItem post={post} key={post.id} />
  ));

  return (
    <Layout>
      <div className="flex flex-col gap-6">{renderedPosts}</div>
    </Layout>
  );
};

export default HomePage;
