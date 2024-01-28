import React from "react";
import moneySvg from "../../../assets/images/svg/monetization_on.svg";
import calendar from "../../../assets/images/svg/calendar.svg";
import customer from "../../../assets/images/svg/arr.svg";

const CustomerCard = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <img src={customer} alt="Customer" />
      <h2 className="text-xl font-medium">Robert McBrown</h2>
      <div className="flex items-center gap-2">
        <img src={moneySvg} alt="Monetization" />
        <p className="text-[#012320] text-sm font-normal flex items-center gap-1">
          Total transaction: <span className="text-[#012320] text-lg font-medium"> ₦15245.66</span>
        </p>
        <div className="flex items-center gap-2 ml-7">
          <img src={calendar} alt="Calendar" />
          <p className="text-sm font-normal">Joined: March 17, 2023</p>
        </div>
      </div>
      <div className="bg-[#E7F7E8] text-[#074909] text-base font-normal rounded-[100px] px-3 py-1.5">
        Business account
      </div>
    </div>
  );
};

export default CustomerCard;
