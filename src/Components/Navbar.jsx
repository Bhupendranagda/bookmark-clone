import React from "react";
import logo from "../images/logo-bookmark.svg";
import ham from "../images/icon-hamburger.svg";
const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center 
    mt-14 mr-[150px] ml-[150px] mobile:mt-10 mobile:ml-0  mobile:mr-0"
    >
      <div className="mobile:ml-7">
        <img className="cursor-pointer" src={logo} alt="" />
      </div>
      <div className=" sm:hidden mobile:visible mobile:mr-7">
        <img src={ham} alt="" />
      </div>
      <div className="flex items-center mobile:hidden">
        <div className="ml-5 cursor-pointer hover:text-[#FF6666] ">
          FEATURES
        </div>
        <div className="ml-5 cursor-pointer hover:text-[#FF6666]">PRICING</div>
        <div className="ml-5 cursor-pointer hover:text-[#FF6666]">CONTACT</div>
        <button
          className=" items-center justify-center  bg-[#FF6666] text-white ml-7 border-2 shadow-lg rounded-md
        pt-1 pb-1  pr-3 pl-3 hover:text-[#FF6666]  hover:bg-white hover:border-[#FF6666] "
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
