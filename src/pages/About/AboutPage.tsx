import React from "react";
import Layout from "../../components/Layout/Layout";
import Dana from "./Images/Dana.jpg";
import Anel from "./Images/Anel.jpg";
import Aruzhan from "./Images/Aruzhan.jpg";

const AboutPage = () => {
  return (
    <Layout title="About Fememe">
      <div className="h-full flex justify-center items-center flex-col">
        <div className="bg-[#FF5964] -mt-4 w-full p-6 text-center text-5xl font-bold text-white">
          FEMEME
        </div>
        <div className="bg-white w-full p-5 pb-2 text-center text-2xl font-bold  text-[#FF5964]">
          is a place for sharing ideas and thoughts, building new relationships
          and having a great time
        </div>
        <div className="bg-white w-full p-3 pb-5 underline text-center text-xl font-bold italic text-[#4197f3]">
          Let us be your companions in a lifelong journey of yours!
        </div>

        <div className="flex w-full justify-center bg-gradient-to-b from-white to-[#78B5F6]  gap-20">
          <div className="p-8">
            <img className="w-60 h-90" src={Dana} alt="dev" />
            <div className="flex flex-col justify-center items-center ">
              <p className="pt-3 font-bold text-xl"> Dana </p>
              <p> Front-end dev</p>
            </div>
          </div>

          <div className="p-8">
            <img className="w-60 h-90" src={Anel} alt="dev" />
            <div className="flex flex-col justify-center items-center ">
              <p className="font-bold pt-3 text-xl"> Anel </p>
              <p> Back-end dev</p>
            </div>
          </div>

          <div className="p-8">
            <img className="w-60 h-90" src={Aruzhan} alt="dev" />
            <div className="flex flex-col justify-center items-center ">
              <p className="font-bold pt-3 text-xl"> Aruzhan </p>
              <p> Back-end dev</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
