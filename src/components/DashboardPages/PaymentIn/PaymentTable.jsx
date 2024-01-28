import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import chips1 from "../../../assets/images/svg/chips.svg";
import chips from "../../../assets/images/svg/chips1.svg";
import { MoreVert } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CustomDataGrid from "../../../assets/utils/CustomDataGrid";

const columns = [
  //   { field: "id", headerName: "ID", width: 165 },
  { field: "referenceNo", headerName: "Reference No", flex: 1 },
  {
    field: "customerName",
    headerName: "Customer name",
    flex: 1,
    renderCell: (params) => (
      <Link to="/dashboard/payment-in/customer-transaction">
        {params.value}
      </Link>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <div
        style={{
          backgroundColor: params.value === "Paid" ? "#E7F7E8" : "#F7F4E7",
          color:
            params.value === "Paid"
              ? "#074909"
              : params.value === "Partially paid"
              ? "#605109"
              : "transparent",
          padding: "2px 10px",
          borderRadius: "100px",
          fontSize: "12px",
          fontWeight: "500",
        }}
      >
        {params.value}
      </div>
    ),
  },
  { field: "paymentType", headerName: "Payment type", flex: 1 },
  { field: "amount", headerName: "Amount", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  {
    field: "action",
    headerName: "Action",
    description: "Action",
    sortable: false,
    renderCell: (params) => (
      <div className="cursor-pointer">
        <MoreVert sx={{ color: "#748684" }} />
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    referenceNo: "X-398-5783",
    customerName: "Robert McBrown",
    status: "Paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 2,
    referenceNo: "X-398-5783",
    customerName: "Ronald Richards",
    status: "Partially paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 3,
    referenceNo: "X-398-5783",
    customerName: "Jenny Wilson",
    status: "Partially paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 4,
    referenceNo: "X-398-5783",
    customerName: "Robert Fox",
    status: "Partially paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 5,
    referenceNo: "X-398-5783",
    customerName: "Floyd Miles",
    status: "Paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 6,
    referenceNo: "X-398-5783",
    customerName: "Savannah Nguyen",
    status: "Paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
  {
    id: 7,
    referenceNo: "X-398-5783",
    customerName: "Darrell Steward",
    status: "Partially paid",
    paymentType: "Transfer",
    amount: "₦15245.66",
    date: "05/05/23",
  },
];

export default function PaymentTable() {
  return (
    <div className="flex flex-col gap-4 w-full" style={{ width: "100%" }}>
      <div className="flex justify-between items-center">
        <span className="text-[#012320] text-[16px] font-medium">
          Payment History
        </span>
        <div className="flex items-center justify-end gap-4">
          <img src={chips} alt="button" className="cursor-pointer" />
          <img src={chips1} alt="button" className="cursor-pointer" />
        </div>
      </div>
      <CustomDataGrid columns={columns} rows={rows} />
    </div>
  );
}
