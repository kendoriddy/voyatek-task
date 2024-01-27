import React from "react";
import Header from "../components/DashboardPages/PaymentIn/Header";
import PaymentInCards from "../components/DashboardPages/PaymentIn/PaymentInCards";
import PaymentTable from "../components/DashboardPages/PaymentIn/PaymentTable";

const PaymentIn = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <PaymentInCards />
      <PaymentTable />
    </div>
  );
};

export default PaymentIn;
