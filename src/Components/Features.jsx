import React from "react";
import Pic1 from "../images/illustration-features-tab-1.svg";
import pic2 from "../images/illustration-features-tab-2.svg";
import pic3 from "../images/illustration-features-tab-3.svg";

const Features = () => {
  return (
    <>
      <div className="flex flex-col mr-[150px] ml-[150px] mt-20 gap-10  mobile:ml-0  mobile:mr-0">
        {/* First Section */}
        <div className="justify-center items-center flex flex-col  ">
          <h1 className="text-2xl font-bold mb-5">Features</h1>
          <p className="text-center mr-80 ml-80 mobile:mr-0 mobile:ml-0 mobile:pr-10 mobile:pl-10  ">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go
          </p>
        </div>
        {/* Second Section */}
        <div className="flex justify-center  mt-5 mobile:flex-col mobile:items-center ">
          <p className="pb-8 pl-8 pr-8 border-b-2 mobile:pb-4 mobile:mb-2  hover:text-[#FF6666] hover:border-b-[#FF6666] cursor-pointer ">
            Simple Bookmarking
          </p>
          <p className=" pb-8 pl-8 pr-8 border-b-2 hover:text-[#FF6666] mobile:pb-4 mobile:mb-2  hover:border-b-[#FF6666] cursor-pointer ">
            Speedy Searching
          </p>
          <p className=" pb-8 pl-8 pr-8 border-b-2 hover:text-[#FF6666] mobile:pb-4 mobile:mb-2 hover:border-b-[#FF6666] cursor-pointer">
            Easy Sharing
          </p>
        </div>
        {/* Third Section */}
        <div className="flex  mobile:flex-col ">
          <div className="flex flex-1 relative mt-5">
            <img className="z-10 pl-10" src={pic3} alt="" />
            <div
              className="bg-[#5267df] absolute top-[30%] -left-40
        h-[300px] w-[80%] rounded-r-full -z-10 mobile:h-[200px] mobile:top-[50%]
        mobile:w-[100%]  "
            ></div>
          </div>

          <div className="flex flex-1 flex-col mt-20 mobile:mt-25 mobile:p-7 mobile:text-center ">
            <div className="mobile:items-center mobile:justify-center mobile:flex ">
              <h1 className="font-bold text-4xl">Bookmark in one click</h1>
            </div>
            <div className="mt-7">
              <p className=" text-[#cccccc] ">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites
              </p>
            </div>
            <div className="mt-5 flex mobile:justify-center ">
              <button
                className="border-2 bg-[#5267df] hover:bg-white
             hover:border-[#5267df]
             hover:text-[#5267df] rounded-lg w-40 text-white
            shadow-lg h-12
          "
              >
                More info
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
