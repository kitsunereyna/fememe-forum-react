import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPostByTitle } from "../../api/post";
import Layout from "../../components/Layout/Layout";
import PostItem from "../../components/Post/Post";
import { Post } from "../../types/post";

const SearchPostPage = () => {
  const { q } = useParams();
  const { data } = useQuery(`post-${q}`, () => getPostByTitle(q!), {
    enabled: q !== undefined,
  });
  const formattedQuery = q?.split("+").join(" ");
  const foundText = `Found: ${formattedQuery}`;

  const renderedPosts = data?.data?.map((post: Post) => (
    <PostItem post={post} key={post.id} />
  ));

  return (
    <Layout title="Home">
      <div className="text-lg underline text-gray-500 font-bold mb-5 ml-72 ">{foundText}</div>
      <div className="flex flex-col gap-6">{renderedPosts}</div>
    </Layout>
  );
};

export default SearchPostPage;
