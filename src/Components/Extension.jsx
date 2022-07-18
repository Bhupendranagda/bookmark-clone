import React from "react";
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";
import dotImage from "../images/bg-dots.svg";

const Extension = () => {
  return (
    <div className="flex flex-col mr-[150px] ml-[150px] mt-20 gap-10 mobile:ml-0  mobile:mr-0 mobile:p-7 ">
      <div className="items-center flex flex-col ">
        <h1 className="font-bold text-2xl">Download the extension</h1>
        <p className="text-center mr-80 ml-80 mt-5 mobile:mr-0 mobile:ml-0 ">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritiz
        </p>
      </div>
      <div className="flex justify-center items-center mobile:flex-col  ">
        {/* Card 1 */}
        <div
          className="h-[360px] w-[260px] flex justify-start 
          items-center flex-col shadow-xl rounded-lg  "
        >
          <img className="mt-10" src={chrome} alt="" />
          <h3 className="font-bold mt-7">Add to Chrome</h3>
          <p className="text-[grey] ">Minimum version 62</p>
          <img src={dotImage} className="mt-16" alt="" />
          <button
            className="border-2 bg-[#5267df] hover:bg-white
             hover:border-[#5267df]
             hover:text-[#5267df] rounded-lg  text-white
            shadow-lg h-12 w-[90%] mt-5
          "
          >
            Add & Install Extension
          </button>
        </div>
        {/* Card 2 */}
        <div
          className="h-[360px] w-[260px] flex justify-start 
          items-center flex-col shadow-xl rounded-lg mt-10 "
        >
          <img className="mt-10" src={firefox} alt="" />
          <h3 className="font-bold mt-7">Add to Chrome</h3>
          <p className="text-[grey] ">Minimum version 62</p>
          <img src={dotImage} className="mt-16" alt="" />
          <button
            className="border-2 bg-[#5267df] hover:bg-white
             hover:border-[#5267df]
             hover:text-[#5267df] rounded-lg  text-white
            shadow-lg h-12 w-[90%] mt-5
          "
          >
            Add & Install Extension
          </button>
        </div>
        {/* Card 3 */}
        <div
          className="h-[360px] w-[260px] flex justify-start 
          items-center flex-col shadow-xl rounded-lg mt-20"
        >
          <img src={opera} className="mt-10" alt="" />
          <h3 className="font-bold mt-7">Add to Chrome</h3>
          <p className="text-[grey] ">Minimum version 62</p>
          <img src={dotImage} className="mt-16" alt="" />
          <button
            className="border-2 bg-[#5267df] hover:bg-white
             hover:border-[#5267df]
             hover:text-[#5267df] rounded-lg  text-white
            shadow-lg h-12 w-[90%] mt-5
          "
          >
            Add & Install Extension
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extension;
