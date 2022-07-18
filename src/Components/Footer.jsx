import React from "react";
import logo from "../images/logo-bookmark.svg";
import fb from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <div
      className="flex flex-col mt-20 gap-10 bg-[#5267df]
     justify-center items-center mobile:ml-0 mobile:mr-0 
      "
    >
      <div className="mt-10 text-white">35,000 Already Joined</div>
      <div className="items-center flex justify-center text-center text-2xl font-bold text-white">
        Stay up-to-date with what <br /> we're doing
      </div>
      <div>
        <input type="text" className="w-[200px] h-[32px] rounded-sm" />
        <button
          className=" items-center justify-center ml-2  bg-[#FF6666] text-white  border-2 shadow-lg rounded-md
        pt-1 pb-1  pr-3 pl-3 hover:text-[#FF6666]  hover:bg-white hover:border-[#FF6666] "
        >
          Contact Us
        </button>
      </div>
      <div
        className="bg-[#161a2a] w-[100%] h-[100px] flex 
      items-center justify-start mobile:flex-col  "
      >
        <img className="cursor-pointer ml-[150px] " src={logo} alt="" />
        <div className="flex ml-20">
          <p className="ml-5 text-gray-400">FEATURES</p>
          <p className="ml-5 text-gray-400">PRICING</p>
          <p className="ml-5 text-gray-400">CONTACT</p>
        </div>
        {/* <div className="flex justify-end ml-20">
          <img src={fb} alt="" className="ml-[550px]" />
          <img src={twitter} className="ml-5" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
