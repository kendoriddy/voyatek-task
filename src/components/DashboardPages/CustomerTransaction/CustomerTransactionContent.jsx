import React from "react";
import arrow from "../../../assets/images/svg/arrow_back.svg";
import CustomerCard from "./CustomerCard";
import { Link } from "react-router-dom";

const CustomerTransactionContent = () => {
  return (
    <div className="flex gap-8 flex-col">
      <Link to="/dashboard/payment-in">
        <div>
          <img src={arrow} alt="back" className="w-6 h-6" />
        </div>
      </Link>
      <CustomerCard />
    </div>
  );
};

export default CustomerTransactionContent;
