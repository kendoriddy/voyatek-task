import React from "react";
import close from "../../assets/images/svg/close.svg";

const Welcome = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      <div className="flex justify-center items-center w-full text-center">
        <div></div>
        <span className="flex-grow font-inter text-[23px] font-medium text-[#012320] ml-[25px]">
          PROJECT-X
        </span>
        <img src={close} alt="close icon" />
      </div>
      <div className="text-center flex flex-col">
        <span className="text-[#012320] text-[23px] font-medium">Welcome back</span>
        <p className="text-[#748684] text-[14px] font-normal">
          Please, enter your login details to continue on Project-X
        </p>
      </div>
    </div>
  );
};

export default Welcome;
