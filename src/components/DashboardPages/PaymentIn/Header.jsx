import React from "react";
import button2 from "../../../assets/images/svg/button.svg";

const Header = () => {
  return (
    <div className="md:flex md:justify-between md:items-center mt-4">
      <span className="text-[#012320] text-[28px] font-medium">Payment In</span>
      <img src={button2} alt="add payment" className="cursor-pointer md:mt-0" />
    </div>
  );
};

export default Header;
