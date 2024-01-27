import React from "react";
import button from "../../../assets/images/png/button.png";
import button2 from "../../../assets/images/svg/button.svg";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center self-stretch">
        <span className="text-[#012320] text-[28px] font-medium">Payment In</span>
        <img src={button2} alt="add payment" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
