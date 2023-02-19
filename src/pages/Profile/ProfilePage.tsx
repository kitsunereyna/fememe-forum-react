import React from "react";
import { useQuery } from "react-query";
import { getPostByUsername } from "../../api/post";
import Layout from "../../components/Layout/Layout";
import PostItem from "../../components/Post/Post";
import UserPostItem from "../../components/UserPostItem/UserPostItem";
import { useUserStore } from "../../store/userStore";
import { Post } from "../../types/post";
import "./ProfilePage.css";

const ProfilePage = () => {
  const user = useUserStore(state => state.user);

  const { data } = useQuery(
    "user-posts",
    () => getPostByUsername(user!.username),
    { enabled: user != null }
  );

  const renderedPosts = data?.data?.map((post: Post) => (
    <UserPostItem post={post} key={post.id} />
  ));

  return (
    <Layout title={user?.username || "User"}>
      <div className="h-full flex justify-center items-center">
        <div className="p-10 rounded-2xl bg-white w-4/5">
          <div className="flex justify-between items-center">
            <div className="flex gap-7 items-center">
              <div>
                <img
                  className="w-16 h-16 rounded-full bg-black"
                  src={user?.avatar}
                  alt="avatar"
                />
              </div>
              <div>
                <p className="text-2xl font-bold">{user?.username}</p>
                <p className="text-md">{user?.email}</p>
              </div>
            </div>

            <div>
              <button className="px-5 py-2 text-white bg-[#FF5964] rounded-2xl">
                Delete account
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-12 overflow-hidden">
            {renderedPosts}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
