import React from "react";
import Hero from "../images/illustration-hero.svg";

const HeroSection = () => {
  return (
    // flex justify-between items-center
    <div className=" flex  mr-[150px] ml-[150px] mt-20 gap-10 mobile:ml-0  mobile:mr-0 mobile:flex-col ">
      <div className="section1 flex flex-1 flex-col mt-16 mobile:justify-center mobile:items-center mobile:text-center ">
        <div>
          <h1 className="font-bold text-4xl">
            A Simple Bookmark <br /> Manager
          </h1>
        </div>
        <div className="mt-5">
          <p className="text-[#cccccc]  ">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>
        <div className="mt-5 flex">
          <button
            className="border-2 bg-[#5267df] hover:bg-white
             hover:border-[#5267df]
             hover:text-[#5267df] rounded-lg w-40 text-white
            shadow-lg h-12
          "
          >
            Get it on Chrome
          </button>
          <button
            className="ml-5 h-12 border-2 bg-white text-[#5267df] rounded-lg w-40 
          shadow-lg hover:border-[#5267df] "
          >
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="section2 flex-1 relative mobile:mt-5 ">
        <img className="z-10" src={Hero} alt="" />
        <div
          className="bg-[#5267df] absolute top-[40%] left-[50%] 
        h-[300px] w-[60%] rounded-l-full -z-10 mobile:h-[200px] mobile:left-[40%]   "
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
